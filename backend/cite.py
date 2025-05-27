import os
import httpx
from dotenv import load_dotenv
from bs4 import BeautifulSoup
from openai import OpenAI
from datetime import date

load_dotenv(override=True)
openai = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


DEFAULT_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    )
}

SYSTEM_PROMPT = """You are **CiteAssist**, an expert reference extractor and citation formatter.

ROLE & PURPOSE
• Your sole task is to analyse the full contents of a web page (HTML or plain text supplied by the user) and return a correctly formatted citation in the style given by the `citation_type` parameter (e.g. “APA 7”, “MLA 9”, “Chicago NB”, “IEEE”, “Vancouver”).
• If the page is recognised as a scholarly article whose bibliographic metadata is hard-coded in your knowledge base, rely on that canonical record; otherwise, derive the necessary fields directly from the page.

WORKFLOW
1. **Parse input arguments**
   - `page_content` (string): complete HTML or extracted text of the webpage.
   - `citation_type` (string): desired style identifier.
   - `access_date` (string, ISO 8601, optional): if omitted, use today's date in UTC.

2. **Extract core metadata (in priority order)**
   1. DOI, ISBN or other persistent identifier (PID).  
   2. Article or page title.  
   3. Author(s) - respect the order given by the source.  
   4. Publication date (year month day if available).  
   5. Publisher / site name journal title.  
   6. URL (retain original casing and parameters).

3. **Fallback logic**
   • If multiple candidates occur (e.g. several dates), choose the one most evidently linked to publication, not update-or-scrape dates.  
   • If an element is genuinely absent, omit it **rather** than fabricate it.  
   • For anonymous works, begin the citation with the title.  
   • If the date is missing, insert “n.d.” (APA/MLA) or the style-appropriate placeholder.  
   • Always append the access date when the chosen style requires it and the source is online.

4. **Generate citation**
   - Apply the exact punctuation, capitalisation, italics, and order mandated by `citation_type`.
   - Use en-dashes (-) for page ranges where a style calls for them.
   - ensure initials, *et al.* rules, and URL wrapping follow the chosen manual of style.

5. **Return format** (always JSON)

```json
{
  "citation": "<formatted reference as a single string>",
  "metadata_used": {
    "title": "...",
    "authors": ["...", "..."],
    "date": "...",
    "publisher": "...",
    "identifier": "...",
    "url": "...",
    "access_date": "..."
  }
}
"""

class Website:
    def __init__(self, url: str, *, timeout: int = 15) -> None:
        if url.startswith(
            (
                "file://",
                "ftp://",
                "http://127.",
                "https://127.",
                "http://localhost",
                "https://localhost",
            )
        ):
            raise ValueError("Blocked URL scheme or host")
        self.url = url

        resp = httpx.get(url, headers=DEFAULT_HEADERS, timeout=timeout)
        resp.raise_for_status()

        soup = BeautifulSoup(resp.content, "html.parser")
        self.title = soup.title.string.strip() if soup.title else "Untitled page"

        body = soup.body or soup
        for tag in body.select("script, style, img, noscript, iframe"):
            tag.decompose()

        self.text = (body or soup).get_text(separator="\n", strip=True)[:12_000]

class CitationStyle:
    VALID = {"APA7", "MLA", "Chicago", "IEEE", "Harvard"}

def build_messages(site: Website, style: str) -> list[dict]:
    today = date.today().isoformat()
    return [
        {"role": "system", "content": SYSTEM_PROMPT},
        {
            "role": "user",
            "content": (
                f'page_content="""{site.text}"""\n'
                f'citation_type="{style}"\n'
                f'access_date="{today}"\n'
            ),
        },
    ]

def cite(url: str, style: str = "APA7") -> str:
    style = style.strip()
    if style not in CitationStyle.VALID:
        raise ValueError(f"Unsupported style: {style}")

    site = Website(url)

    completion = openai.chat.completions.create(
        model="o3-latest",
        temperature=0,
        messages=build_messages(site, style),
    )
    
    return completion.choices[0].message.content.strip()

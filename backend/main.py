from __future__ import annotations

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, HttpUrl
from anyio import to_thread
import openai

from cite import generate_citation

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CiteRequest(BaseModel):
    url:    HttpUrl         
    style:  str = "APA7"

class CiteResponse(BaseModel):
    citation: str
    title: str

@app.post("/cite", response_model=CiteResponse)
async def cite_endpoint(payload: CiteRequest) -> CiteResponse:
    """
    Generate a formatted citation (and page title) for the given URL.
    """
    try:
        print(
            f"Processing citation request for URL: {payload.url} "
            f"with style: {payload.style}"
        )

        result = await to_thread.run_sync(
            generate_citation,
            str(payload.url),
            payload.style,
        )

    except ValueError as ve:
        print(f"ValueError occurred: {ve}")
        raise HTTPException(status_code=400, detail=str(ve))

    except openai.OpenAIError as oe:
        print(f"OpenAI error occurred: {oe}")
        raise HTTPException(
            status_code=502,
            detail=f"Upstream OpenAI error: {oe}",
        )

    except Exception as e:
        print(f"Unexpected error occurred: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Internal server error: {e}",
        )

    return CiteResponse(**result)

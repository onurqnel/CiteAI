from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from cite import cite
from typing import Annotated

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # Allow requests from both React dev server (3000), Vite dev server (5173) and any other localhost port.
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
    url: str
    style: str = "APA7"

# Response model ensures OpenAPI schema shows the real structure ({"citation": "..."})
class CiteResponse(BaseModel):
    citation: str

@app.post("/cite")
def generate_citation(data: CiteRequest) -> CiteResponse:
    result = cite(data.url, data.style)
    return CiteResponse(citation=result)

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


@app.post("/api/cite", response_model=CiteResponse)         
async def cite_endpoint(payload: CiteRequest) -> CiteResponse:
    try:
        citation = await to_thread.run_sync(
            generate_citation,
            str(payload.url),
            payload.style,
        )
    except ValueError as ve:                    
        raise HTTPException(status_code=400, detail=str(ve))
    except openai.OpenAIError as oe:      
        raise HTTPException(
            status_code=502,
            detail=f"Upstream OpenAI error: {oe}",
        )
    return CiteResponse(citation=citation)

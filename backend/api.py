from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from cite import cite
from typing import Annotated

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
    url: str
    style: str = "APA7"

class CiteResponse(BaseModel):
    citation: str

@app.post("/cite")
def generate_citation(data: CiteRequest) -> CiteResponse:
    result = cite(data.url, data.style)
    return CiteResponse(citation=result)

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from cite import cite

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CiteRequest(BaseModel):
    url: str
    style: str = "APA7"

@app.post("/cite")
def generate_citation(data: CiteRequest):
    result = cite(data.url, data.style)
    return {"citation": result}

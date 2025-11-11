# backend/routes/data.py
from fastapi import APIRouter, UploadFile, File, Form

router = APIRouter()

@router.post("/upload")
async def upload_doc(file: UploadFile = File(...)):
    """
    Receives a document file from the frontend.
    For now, just returns the filename.
    Later, this will store and embed the file.
    """
    return {"filename": file.filename, "status": "received"}

@router.post("/query/{agent_id}")
async def query_agent(agent_id: str, query: str = Form(...)):
    """
    Accepts a query string for a given agent.
    For now, it returns a mock response.
    Later, it will perform real vector search and LLM answer.
    """
    return {"agent_id": agent_id, "response": f"Mock answer for query: {query}"}

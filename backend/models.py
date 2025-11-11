# backend/models.py
from pydantic import BaseModel
from datetime import datetime

class Document(BaseModel):
    id: str
    filename: str
    agent_id: str
    uploaded_at: datetime

class QueryLog(BaseModel):
    id: str
    agent_id: str
    query_text: str
    created_at: datetime

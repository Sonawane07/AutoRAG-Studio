from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, Field

class AgentCreateRequest(BaseModel):
    name: str = Field(..., examples=["HR Knowledge Bot"])
    description: Optional[str] = Field(None, examples=["Answers HR policy questions"])

class Agent(BaseModel):
    id: str
    user_id: str
    name: str
    description: Optional[str]
    vector_index_id: Optional[str]
    api_key: str
    created_at: datetime

class AgentCreateResponse(BaseModel):
    agent: Agent

class AgentListResponse(BaseModel):
    agents: List[Agent]
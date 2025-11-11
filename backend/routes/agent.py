"""backend/routes/agent.py

Defines simple agent-related routes for development and testing.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/status")
def agent_status():
	return {"status": "agent routes active"}

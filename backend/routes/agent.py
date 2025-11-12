from fastapi import APIRouter, HTTPException
from models import AgentCreateRequest, AgentCreateResponse, AgentListResponse, Agent
from utils.id_gen import new_id, new_api_key, utc_now
from store import AGENTS, DEMO_USER_ID

router = APIRouter(tags=["agents"])

@router.post("/create_agent", response_model=AgentCreateResponse)
def create_agent(payload: AgentCreateRequest):
    name = payload.name.strip()
    if not name:
        raise HTTPException(status_code=400, detail="Agent name cannot be empty")

    agent_id = new_id("agt")
    api_key = new_api_key()
    vector_index_id = new_id("vec")  # placeholder

    agent = Agent(
        id=agent_id,
        user_id=DEMO_USER_ID,
        name=name,
        description=payload.description,
        vector_index_id=vector_index_id,
        api_key=api_key,
        created_at=utc_now(),
    )

    AGENTS[agent_id] = agent
    return AgentCreateResponse(agent=agent)

@router.get("/agents", response_model=AgentListResponse)
def list_agents():
    user_agents = [a for a in AGENTS.values() if a.user_id == DEMO_USER_ID]
    return AgentListResponse(agents=user_agents)

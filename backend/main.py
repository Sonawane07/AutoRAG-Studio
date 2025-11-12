from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.routes import router as agent_router

app = FastAPI(title="AutoRAG Studio Backend")

# Allow local React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "AutoRAG Studio Backend Online"}

# Mount agent routes
app.include_router(agent_router, prefix="/api")

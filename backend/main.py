# backend/main.py
from fastapi import FastAPI
from .routes import agent, data

app = FastAPI()

# Register route groups
app.include_router(agent.router, prefix="/api")
app.include_router(data.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Backend is running!"}

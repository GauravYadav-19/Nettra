from fastapi import FastAPI
from .database import engine, Base
from .routes.incidents import router as incidents_router
from app.routes.auth import router as auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Nettra Incident Intelligence")

app.include_router(incidents_router)
app.include_router(auth_router)

@app.get("/")
def health_check():
    return {"status": "Nettra backend running"}
from fastapi import FastAPI
from .database import engine, Base
from . import models
from .routes import incidents

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Nettra Incident Intelligence")

app.include_router(incidents.router)

@app.get("/")
def health_check():
    return {"status": "Nettra backend running"}

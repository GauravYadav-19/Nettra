from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from .database import engine, Base
from .routes.incidents import router as incidents_router
from app.routes.auth import router as auth_router
from app.routes.google_auth import router as google_auth_router
from app.routes.github_auth import router as github_auth_router
from app.routes.dashboard import router as dashboard_router
from fastapi.middleware.cors import CORSMiddleware
from app.routes import users

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Nettra Incident Intelligence")
app.include_router(google_auth_router)
app.include_router(incidents_router)
app.include_router(auth_router)
app.include_router(google_auth_router)
app.include_router(github_auth_router)
app.include_router(users.router)
app.include_router(dashboard_router)
@app.get("/")
def health_check():
    return {"status": "Nettra backend running"}



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
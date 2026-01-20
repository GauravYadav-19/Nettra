from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.google_oauth import verify_google_token
from app.jwt import create_access_token
from app import models
from app.database import SessionLocal

router = APIRouter(prefix="/auth/google", tags=["Google Auth"])

class GoogleLoginRequest(BaseModel):
    id_token: str

@router.post("/login")
def google_login(payload: GoogleLoginRequest):
    print("✅ Google login hit")
    print("📦 Token received length:", len(payload.id_token))

    user_info = verify_google_token(payload.id_token)

    if not user_info:
        print("❌ Token verification returned None")
        raise HTTPException(status_code=401, detail="Invalid Google token")

    print("🧠 Google user info:", user_info)

    email = user_info.get("email")
    name = user_info.get("name")

    if not email:
        raise HTTPException(status_code=400, detail="Email not found in Google token")

    db = SessionLocal()

    user = db.query(models.User).filter(models.User.email == email).first()

    if not user:
        user = models.User(
            email=email,
            hashed_password="GOOGLE_AUTH"
        )
        db.add(user)
        db.commit()
        db.refresh(user)

    token = create_access_token({"sub": str(user.id)})

    return {
        "access_token": token,
        "token_type": "bearer"
    }
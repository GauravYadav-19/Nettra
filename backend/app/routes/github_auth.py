from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import models
from app.jwt import create_access_token
from app.services.github_oauth import exchange_code_for_token, get_github_user

router = APIRouter(prefix="/auth/github", tags=["Auth"])


@router.post("/login")
def github_login(payload: dict, db: Session = Depends(get_db)):
    code = payload.get("code")
    if not code:
        raise HTTPException(status_code=400, detail="Code missing")

    access_token = exchange_code_for_token(code)
    if not access_token:
        raise HTTPException(status_code=401, detail="Invalid GitHub code")

    user_info = get_github_user(access_token)
    email = user_info["email"]

    if not email:
        raise HTTPException(status_code=400, detail="GitHub email not found")

    user = db.query(models.User).filter(models.User.email == email).first()

    if not user:
        user = models.User(
            email=email,
            is_active=True,
            oauth_provider="github",
            oauth_id=str(user_info["github_id"]),
            full_name=user_info["name"],
        )
        db.add(user)
        db.commit()
        db.refresh(user)

    token = create_access_token({"sub": str(user.id)})

    return {
        "access_token": token,
        "token_type": "bearer",
    }
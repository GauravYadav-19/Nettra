from fastapi import APIRouter, Depends
from app.dependencies.auth import get_current_user
from app import models
from app.jwt import get_current_user

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/me")
def read_me(current_user: models.User = Depends(get_current_user)):
    return current_user

router = APIRouter(prefix="/users", tags=["Users"])


@router.get("/me")
def get_me(current_user: models.User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "full_name": current_user.full_name,
        "oauth_provider": current_user.oauth_provider,
    }
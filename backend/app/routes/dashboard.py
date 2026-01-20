from fastapi import APIRouter, Depends
from app.jwt import get_current_user
from app.models import User

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])

@router.get("/summary")
def dashboard_summary(current_user: User = Depends(get_current_user)):
    return {
        "user": {
            "email": current_user.email
        },
        "stats": {
            "incidents": 0,
            "open": 0,
            "resolved": 0
        }
    }
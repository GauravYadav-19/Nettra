from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import models, schemas
from app.database import get_db
from app.jwt import get_current_user

router = APIRouter(
    prefix="/incidents",
    tags=["Incidents"]
)

# -------------------------
# GET all incidents (protected)
# -------------------------
@router.get("/", response_model=list[schemas.IncidentResponse])
def list_incidents(
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    incidents = db.query(models.Incident).all()
    return incidents


# -------------------------
# CREATE incident (protected)
# -------------------------
@router.post("/", response_model=schemas.IncidentResponse)
def create_incident(
    incident: schemas.IncidentCreate,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    new_incident = models.Incident(
        title=incident.title,
        severity=incident.severity,
        status=incident.status
    )

    db.add(new_incident)
    db.commit()
    db.refresh(new_incident)

    return new_incident
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import SessionLocal
from .. import models, schemas

router = APIRouter(
    prefix="/incidents",
    tags=["Incidents"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.IncidentResponse)
def create_incident(
    incident: schemas.IncidentCreate,
    db: Session = Depends(get_db)
):
    new_incident = models.Incident(
        title=incident.title,
        severity=incident.severity
    )
    db.add(new_incident)
    db.commit()
    db.refresh(new_incident)
    return new_incident

@router.get("/", response_model=list[schemas.IncidentResponse])
def list_incidents(db: Session = Depends(get_db)):
    return db.query(models.Incident).all()

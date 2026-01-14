from pydantic import BaseModel
from datetime import datetime

class IncidentCreate(BaseModel):
    title: str
    severity: str

class IncidentResponse(BaseModel):
    id: int
    title: str
    severity: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True

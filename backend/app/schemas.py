from pydantic import BaseModel
from datetime import datetime

# -----------------------
# Base Incident schema
# -----------------------
class IncidentBase(BaseModel):
    title: str
    severity: str
    status: str

# -----------------------
# Create Incident (POST)
# -----------------------
class IncidentCreate(IncidentBase):
    pass

# -----------------------
# Response schema
# -----------------------
class IncidentResponse(IncidentBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class UserCreate(BaseModel):
    email: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str


class UserResponse(BaseModel):
    id: int
    email: str

    class Config:
        from_attributes = True

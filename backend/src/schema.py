from typing import Optional
from pydantic import (
    BaseModel,
    Field
)

class ResponseCastle(BaseModel):
    id: int
    name: str
    summary: Optional[str] = Field(default="No summary provided")
    prefecture: str
    url: Optional[str] = Field(default="No URL provided")
    lat: float
    lng: float
    holiday: Optional[str] = Field(default="No holiday information")
    admission_time: Optional[str] = Field(default="No admission time information")
    admission_fee: Optional[str] = Field(default="No admission fee information")
    stamp: Optional[str] = Field(default="No stamp information")

    class Config:
        from_attributes = True

class RequestCastle(BaseModel):
    castle_id: int
    
    class Congig:
        from_attributes = True
class ResponseTravel(BaseModel):
    origin: str
    destination: str
    admission_distance: float
    way_distance: float
    time: str

    class Congig:
        from_attributes = True

class RequestTravel(BaseModel):
    origin: int
    destination: int

    class Congig:
        from_attributes = True

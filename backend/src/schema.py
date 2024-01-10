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
        orm_mode = True

class RequestCastle(BaseModel):
    castle_id: int
    
    class Congig:
        orm_mode = True
class ResponseTravel(BaseModel):
    castle1: str
    castle2: str
    admission_distance: float
    way_distance: float
    time: str

    class Congig:
        orm_mode = True

class RequestTravel(BaseModel):
    castle1: int
    castle2: int

    class Congig:
        orm_mode = True

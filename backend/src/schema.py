from typing import List, Optional
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
    dep: str
    arr: str
    admission_distance: float
    way_distance: List[float]
    way_time: List[str]
    total_distance: float
    total_time: str

    class Congig:
        orm_mode = True

class RequestTravel(BaseModel):
    dep: str
    arr: str
    castle: List[int]
    

    class Congig:
        orm_mode = True

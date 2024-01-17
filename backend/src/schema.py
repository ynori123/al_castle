from typing import List, Optional
from pydantic import (
    BaseModel,
    Field
)

class ResponseCastle(BaseModel):
    id: int
    name: str
    prefecture: str
    lat: float
    lng: float
    holiday: Optional[str] = Field(default="なし")
    admission_time: Optional[str] = Field(default="No admission time information")
    admission_fee: Optional[str] = Field(default="No admission fee information")
    stamp: Optional[str] = Field(default="No stamp information")

    class Config:
        from_attributes = True

class RequestCastle(BaseModel):
    castle_id: int
    
    class Config:
        from_attributes = True
class ResponseTravel(BaseModel):
    dep: str
    arr: str
    castles: List[int]
    way_distance: List[float]
    way_time: List[str]
    total_distance: float
    total_time: str

    class Config:
        from_attributes = True

class RequestTravel(BaseModel):
    dep: str
    arr: str
    castle: List[int]

    class Config:
        from_attributes = True

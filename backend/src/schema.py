from pydantic import (
    BaseModel,
    Field
)

class ResponseCastle(BaseModel):
    id: int
    name: str
    summary: str
    url: str
    lat: float
    lng: float

    class Congig:
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

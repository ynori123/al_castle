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



from typing import List, Optional
from pydantic import (
    BaseModel,
    Field
)


class Restaurant(BaseModel):
    name: str
    prefecture: str
    time: Optional[str] = Field(default="営業時間情報なし")
    holiday: Optional[str] = Field(default="定休日情報なし")
    genre = Optional[str] = Field(default="ジャンル情報なし")
    url = Optional[str] = Field(default="URL情報なし")
    
    class config:
        from_attributes = True

class ResponseCastle(BaseModel):
    id: int
    name: str
    prefecture: str
    lat: float
    lng: float
    holiday: Optional[str] = Field(default="なし")
    admission_time: Optional[str] = Field(default="入場時間情報なし")
    admission_fee: Optional[str] = Field(default="入場料金情報なし")
    stamp: Optional[str] = Field(default="スタンプ情報なし")
    restaurant: Optional[Restaurant] = Field(default="周辺のおすすめ飲食店情報なし")

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

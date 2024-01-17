from typing import List
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
from src.model import Castle, CastleDistance, Restaurant
from src.schema import (
    ResponseCastle,
    Restaurant as ResponseRestaurant
)
from src.google_api import fetch_googlemap_api
import re
from fastapi import HTTPException

def fetch_castles(db: Session) -> List[Castle]:
    castles = db.query(Castle).all()
    return castles

def fetch_specific_castles(db: Session, id: int) -> ResponseCastle:
    castle = db.query(Castle).filter_by(id=id).first()
    restaurants = fetch_restaurants(castle_id=id, db=db)
    return ResponseCastle(
        id=castle.id,
        name=castle.name,
        prefecture=castle.prefecture,
        lat=castle.lat,
        lng=castle.lng,
        holiday=castle.holiday,
        admission_time=castle.admission_time,
        admission_fee=castle.admission_fee,
        stamp=castle.stamp,
        restaurant=restaurants
    )

def fetch_restaurants(db: Session, castle_id: int) -> List[ResponseRestaurant]:
    res = []
    restaurants = db.query(Restaurant).filter_by(castle_id=castle_id).all()
    for restaurant in restaurants:
        res.append(ResponseRestaurant(
            name=restaurant.name,
            time=restaurant.time,
            holiday=restaurant.holiday,
            genre=restaurant.genre,
            url=restaurant.url
        ))
    return res

def fetch_travel(db: Session, arr: str, dep: str, castles: List[int]) -> Result:
    route = []
    distace = []
    way_time = []
    castle_name = []
    way_time_str = []
    for castle in castles:
        specific_castle_name = db.query(Castle).filter_by(id=castle).first().name
        if specific_castle_name is None:
            raise HTTPException(status_code=400, detail="Castle not found.")
        castle_name.append(specific_castle_name)
    length = len(castles)
    if length >= 2:
        for i in range(1, length):
            route.append(db.query(CastleDistance).filter_by(castle_id_1=castles[i-1], castle_id_2=castles[i]).first())
            if route[i-1] == None:
                route[i-1] = fetch_googlemap_api(origin=castle_name[i-1], dest=castle_name[i])
                db.add(route[i-1])
                db.commit()
            distace.append(route[i-1].distance)
            way_time.append(route[i-1].time)
            way_time_str.append(sec_to_str(route[i-1].time))
    first_route = fetch_googlemap_api(origin=dep, dest=castle_name[0])
    last_route = fetch_googlemap_api(origin=castle_name[length-1], dest=arr)
    
    distace.insert(0, first_route.distance)
    distace.append(last_route.distance)
    way_time_str.insert(0, sec_to_str(first_route.time))
    way_time_str.append(sec_to_str(last_route.time))
    way_time.insert(0, first_route.time)
    way_time.append(last_route.time)
    
    return {
        "dep": dep,
        "arr": arr,
        "castles": castles,
        "way_distance": distace,
        "way_time": way_time_str,
        "total_distance": sum(distace),
        "total_time": sec_to_str(sum(way_time))
    }

def sec_to_str(sec: int) -> str:
    day = sec // 86400
    hour = (sec % 86400) // 3600
    minute = (sec % 3600) // 60
    if day > 0: return f"{day}日{hour}時間{minute}分"
    else: return f"{hour}時間{minute}分"

from typing import List
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
from src.model import Castle, CastleDistance
from src.google_api import fetch_googlemap_api
import re

def fetch_castles(db: Session) -> List[Castle]:
    castles = db.query(Castle).all()
    return castles

def fetch_specific_castles(db: Session, id: int) -> Castle:
    castle = db.query(Castle).filter_by(id=id).first()
    return castle

def fetch_travel(db: Session, arr: str, dep: str, castles: List[int]) -> Result:
    route = []
    distace = []
    way_time = []
    castle_name = []
    for castle in castles:
        castle_name.append(db.query(Castle).filter_by(id=castle).first().name)
    length = len(castles)
    if length >= 2:
        for i in range(1, length):
            route[i] = db.query(CastleDistance).filter_by(dep=castles[i-1], arr=castles[i]).first()
            if route[i] == None:
                route[i] = fetch_googlemap_api(origin=castle_name[i-1], dest=castles[i])
                db.add(route[i])
                db.commit()
            distace[i] = route[i].distance
            way_time[i] = route[i].time
            
    first_route = fetch_googlemap_api(origin=dep, dest=castles[0])
    last_route = fetch_googlemap_api(origin=castles[length-1], dest=arr)
    
    distace.insert(0, first_route.distance)
    distace.append(last_route.distance)
    way_time.insert(0, first_route.time)
    way_time.append(last_route.time)
    
    return {
        "dep": dep,
        "arr": arr,
        "way_distance": distace,
        "way_time": way_time,
        "total_distance": sum_time(distace),
        "total_time": sum_time(way_time)
    }

def sum_time(s: [str]) -> tuple(int, int):
    h = 0
    m = 0
    for item in s:
        hours, minutes = str_to_time(item)
        h += hours
        m += minutes
    h += m // 60
    m = m % 60
    return f"{h}時間{m}分"

def str_to_time(s: str) -> tuple(int, int):
    pattern = r"(\d+)時間(\d+)分"
    match = re.search(pattern, s)
    if match:
        hours = int(match.group(1))
        minutes = int(match.group(2))
    return (hours, minutes)

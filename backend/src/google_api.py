import requests
from src.config import setting
from src.model import CastleDistance
# from logging import getLogger

# logger = getLogger("uvicorn.app")
def fetch_googlemap_api(origin: str, dest: str):
    
    url = "https://maps.googleapis.com/maps/api/distancematrix/json"
    params = {
        "origins": origin,
        "destinations": dest,
        "key": setting.GOOGLE_MAP_API_KEY,
        "language": "ja",
    }
    # logger.info(params)
    req = requests.get(url, params=params)
    req_json = req.json()
    # logger.info(req_json)
    res = CastleDistance(
        castle_id_1=origin,
        castle_id_2=dest,
        distance=req_json.get("rows")[0].get("elements")[0].get("distance").get("value") / 1000,
        time=req_json.get("rows")[0].get("elements")[0].get("duration").get("value")
    )
    return res

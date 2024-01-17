import requests
from src.config import setting


def fetch_googlemap_api(origin: str, dest: str):
    
    url = "https://maps.googleapis.com/maps/api/distancematrix/json"
    params = {
        "origins": origin,
        "destinations": dest,
        "key": setting.GOOGLE_MAP_API_KEY,
        "language": "ja",
    }
    response = requests.get(url, params=params)

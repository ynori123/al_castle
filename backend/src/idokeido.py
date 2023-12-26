import math

'''
lat:緯度
lon:経度
distance:距離
'''

def calc_distance(lat1, lon1, lat2, lon2):
    # 緯度・経度をラジアンに変換
    lat1 = math.radians(lat1)
    lon1 = math.radians(lon1)
    lat2 = math.radians(lat2)
    lon2 = math.radians(lon2)

    # 二地点間の距離を計算する
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    distance = 6371 * c  # 地球の半径を6371kmとして距離を計算

    return distance

def test_calc_distance() -> None:
    # テスト用の緯度・経度
    lat1 = 35.6895
    lon1 = 139.6917
    lat2 = 34.7025
    lon2 = 135.4958

    # 二地点間の距離を計算
    distance = calc_distance(lat1, lon1, lat2, lon2)
    print("地点A ",lat1,",",lon1,"\n地点B ",lat2,",",lon2,"\n距離:",distance,"\n")
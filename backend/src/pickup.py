from castle import Castle
from idokeido import calc_distance

'''
○ある城から近い城を5箇所list型で返す
引数
・castles：百名城全部入ったリスト
・current_lat：開始地点の緯度
・current_lon：開始地点の経度
'''

# 距離が短い五つの城をリストにまとめて返す関数
def pickup_near5(castles, current_lat, current_lon):
    distances = []
    for castle in castles:
        distance = calc_distance(current_lat, current_lon, castle.lat, castle.lon)
        distances.append((castle, distance))
    
    distances.sort(key=lambda x: x[1]) # 距離で昇順にソート

    nearest_castles = []
    for i in range(min(5, len(distances))):
        nearest_castles.append(distances[i][0])
    
    return nearest_castles

# テストメソッド
def test():
    # 城のリストを作成
    castles = [
        Castle("Castle A", 35.6895, 139.6917),
        Castle("Castle B", 34.6863, 135.5197),
        Castle("Castle C", 35.6892, 139.6921),
        Castle("Castle D", 35.6890, 139.6923),
        Castle("Castle E", 35.6888, 139.6925),
        Castle("Castle F", 35.6886, 139.6927),
        Castle("Castle G", 35.6884, 139.6929),
        Castle("Castle H", 35.6882, 139.6931),
        Castle("Castle I", 35.6880, 139.6933),
        Castle("Castle J", 35.6878, 139.6935)
    ]

    # 現在地の緯度・経度を指定
    current_lat = 35.6891
    current_lon = 139.6917

    # 距離が短い五つの城を取得
    nearest_castles = pickup_near5(castles, current_lat, current_lon)

    # 結果を表示
    for castle in nearest_castles:
        print(castle.name)

test()
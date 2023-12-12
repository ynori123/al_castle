import castle
import idokeido

'''
○ある城から近い城を5箇所list型で返す
引数
・castles：百名城全部入ったリスト
・start：開始地点の城
'''

def pickup_near5(castles: list[castle.Castle], start: castle.Castle) -> list[castle.Castle]:
    castles.remove(start) #開始地点除外

    distances = []
    for castle in castles:
        distance = idokeido.calc_distance(start.lat, start.lon, castle.lat, castle.lon)
        distances.append((castle, distance))
    
    distances.sort(key=lambda x: x[1])  # 距離で昇順ソート
    nearest_castles = [castle for castle, _ in distances[:5]]  # 距離が短い五つの城を取得

    return nearest_castles

    
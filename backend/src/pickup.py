from castle import Castle
from idokeido import calc_distance

'''
○ pickup_near5 : 開始地点から近い城を5箇所list型で返す
引数
・castles：百名城全部入ったリスト
・current_lat：開始地点の緯度
・current_lon：開始地点の経度
'''

# 開始地点から距離が近い五つの城をリストにまとめて返す関数
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



'''
○ pickup_inRadius : 開始地点から近い城を5箇所list型で返す
引数
・castles：百名城全部入ったリスト
・current_lat：開始地点の緯度
・current_lon：開始地点の経度
・radius：探索半径(km)
'''

#開始地点から探索範囲内(半径：radius)に入る城をリスト型で返す関数
def pickup_inRadius(castles, current_lat, current_lon, radius):
    # 探索範囲内の城を格納するリスト
    search_result = []

    for castle in castles:
        # 現在地と城の距離を計算
        distance = calc_distance(current_lat, current_lon, castle.lat, castle.lon)
        
        # 距離が探索範囲内の場合、リストに追加
        if distance <= radius:
            search_result.append(castle)

    return search_result


# テストメソッド
def test_pickup_near5():
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


def test_search_castles():
    # テスト用の城データ
    castles = [
        Castle("城1", 35.123, 139.456),
        Castle("城2", 35.678, 139.789),
        Castle("城3", 36.123, 140.456)
    ]

    # 現在地の緯度・経度と探索範囲の半径
    current_lat = 35.0
    current_lon = 139.0
    radius = 100.0

    # 検索結果の期待値
    expected_result = [
        Castle("城1", 35.123, 139.456),
        Castle("城2", 35.678, 139.789)
    ]

    # 探索結果を取得
    result = search_castles(castles, current_lat, current_lon, radius)

    # 検証
    assert len(result) == len(expected_result)
    for i in range(len(result)):
        assert result[i].name == expected_result[i].name
        assert result[i].lat == expected_result[i].lat
        assert result[i].lon == expected_result[i].lon

    print("テストがパスしました")
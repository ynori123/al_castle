import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SmallCard from "../components/SmallCard";

//出発地点
//
export default function Routes() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Header
          title="百名城観光モデルルート"
          discription="私達が考案した百名城巡回モデルルートです。"
        />
        <div className="mx-64">
          <div className="mb-5">
            <h3 className="block text-lg font-bold mb-3 w-40">巡回条件</h3>
            <ol className="list-disc ml-4">
              <li>出発と到着地点は，奈良高専とする．</li>
              <li>
                月から金の平日で最長５日間とする．ただし，移動だけなら土，日は使用可能とする．
              </li>
              <li>
                朝，昼，晩の食事は，その地元のグルメや特産物場所を訪問して食すること．
              </li>
              <li>
                スタンプ場所には，定休日や時間制限があるのでそれを考慮すること．
              </li>
              <li>
                原則，燃費リッター10キロでガソリン価格はリッター170円として車で移動（所要時間は距離はGooglemapを参照）し，有料の高速道路は使用できない（無料の高速道路は使用可能）．
              </li>
              <li>
                やむを得ず高速や他の交通機関を使用しないと，城攻めできない場合のみ他の移動方法を許可する．
              </li>
              <li>
                １日８時間（12時間パックがある場合はそちらでもよい）をネットカフェで宿泊とする（快活CLUBを基本とする）．
              </li>
              <li>各城は，スタンプと見学で１時間とする．</li>
              <li>
                名城は，スタンプ場所に到着でスタンプされたとする（城への登城の必要はない）．
              </li>
            </ol>
          </div>
          <div className="mb-5">
            <h3 className="block text-lg font-bold mb-3 w-40">結果</h3>
            <ol className="list-disc ml-4">
              <li>必要経費：n円</li>
              <li>総最短週数：n週間</li>
            </ol>
          </div>
          <div className="mb-5">
            <h3 className="block text-lg font-bold mb-3 w-40">巡回ルート</h3>
            <p>
              モデルルートの概要です。xlsxファイルで詳細をダウンロードできます。
            </p>

            <div className="mb-6 mt-5">
              <div className="mb-5">
                <h4 className="block text-xl font-bold mb-3 w-40">★近畿地方</h4>
                <div>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専出発</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        月曜日 8:30ごろ
                      </p>
                    </div>
                  </div>
                  <SmallCard
                    id={1}
                    title="大阪城"
                    discription="金曜日 16:30ごろ"
                    img="osaka.jpg"
                  ></SmallCard>
                  <SmallCard
                    id={2}
                    title="ラーメン城"
                    discription="金曜日 16:30ごろ"
                    img="ramen.jpg"
                  ></SmallCard>
                  <SmallCard
                    id={1}
                    title="大阪城"
                    discription="金曜日 16:30ごろ"
                    img="osaka.jpg"
                  ></SmallCard>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専到着</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        月曜日 8:30ごろ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <a className="rounded-md bg-indigo-600 my-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    詳細データをダウンロード(.xlsx)
                  </a>
                </div>
              </div>
              <div className="mb-5">
                <h4 className="block text-xl font-bold mb-3 w-40">★近畿地方</h4>
                <div>ここいってここいく</div>
                <div className="flex items-center justify-center">
                  <a className="rounded-md bg-indigo-600 my-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    詳細データをダウンロード(.xlsx)
                  </a>
                </div>
              </div>
              <div className="mb-5">
                <h4 className="block text-xl font-bold mb-3 w-40">★近畿地方</h4>
                <div>ここいってここいく</div>
                <div className="flex items-center justify-center">
                  <a className="rounded-md bg-indigo-600 my-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    詳細データをダウンロード(.xlsx)
                  </a>
                </div>
              </div>
              <div className="mb-5">
                <h4 className="block text-xl font-bold mb-3 w-40">★近畿地方</h4>
                <div>ここいってここいく</div>
                <div className="flex items-center justify-center">
                  <a className="rounded-md bg-indigo-600 my-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    詳細データをダウンロード(.xlsx)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

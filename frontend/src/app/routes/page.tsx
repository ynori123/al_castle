"use client";
import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmallCard from "../components/SmallCard";
import { useEffect, useState } from "react";
import { server } from "typescript";

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
              <li>総最短週数：7週間</li>
            </ol>
          </div>
          <div className="mb-5">
            <h3 className="block text-lg font-bold mb-3 w-40">巡回ルート</h3>
            <p>
              モデルルートの概要です。xlsxファイルで詳細をダウンロードできます。
            </p>

            <div className="flex items-center justify-center">
              <a
                href="経路データ.xlsx"
                download={true}
                className="rounded-md bg-indigo-600 my-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                詳細データをダウンロード(.xlsx)
              </a>
            </div>

            <div className="mb-6 mt-5">
              <div className="mb-24">
                <h4 className="block text-xl font-bold mb-3 w-40">
                  ★北海道方面
                </h4>
                <div className="items-center">
                  <img src="/root1.png" alt="" className="w-3/5" />
                </div>
                <div>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専出発</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        土曜日 20:00ごろ
                      </p>
                    </div>
                  </div>
                  <SmallCard
                    id={1}
                    title="根室半島チャシ跡群"
                    discription="月曜日 13:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/1.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={3}
                    title="松前城跡"
                    discription="火曜日 16:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/2.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={2}
                    title="五稜郭"
                    discription="水曜日 10:15ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/3.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={63}
                    title="鳥取城"
                    discription="金曜日 9:45ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/63.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={65}
                    title="月山富田城"
                    discription="金曜日 13:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/65.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={64}
                    title="松江城"
                    discription="金曜日 15:10ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/64.jpg`}
                  ></SmallCard>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専到着</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        土曜日 0:20ごろ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-24">
                <h4 className="block text-xl font-bold mb-3 w-40">★東北地方</h4>
                <div className="items-center">
                  <img src="/root2.png" alt="" className="w-3/5" />
                </div>
                <div>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専出発</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        日曜日 11:30ごろ
                      </p>
                    </div>
                  </div>
                  <SmallCard
                    id={5}
                    title="根城"
                    discription="月曜日 9:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/5.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={4}
                    title="弘前城"
                    discription="月曜日 14:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/4.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={9}
                    title="久保田城"
                    discription="火曜日 9:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/9.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={6}
                    title="盛岡城"
                    discription="火曜日 12:25ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/6.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={7}
                    title="多賀城"
                    discription="水曜日 9:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/7.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={8}
                    title="仙台城"
                    discription="水曜日 10:45ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/8.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={10}
                    title="山形城"
                    discription="水曜日 14:45ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/10.jpg`}
                  ></SmallCard>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専到着</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        木曜日 7:25ごろ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-24">
                <h4 className="block text-xl font-bold mb-3 w-40">
                  ★中部・関東地方
                </h4>
                <div className="items-center">
                  <img src="/root3-1.png" alt="" className="w-3/5" />
                  <img src="/root3-2.png" alt="" className="w-3/5" />
                </div>
                <div>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専出発</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        月曜日 3:10ごろ
                      </p>
                    </div>
                  </div>
                  <SmallCard
                    id={39}
                    title="岐阜城"
                    discription="月曜日 7:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/39.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={16}
                    title="箕輪城"
                    discription="月曜日 16:15ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/4.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={17}
                    title="金山城"
                    discription="月曜日 20:10ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/17.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={15}
                    title="足利氏館"
                    discription="火曜日 8:20ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/15.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={18}
                    title="鉢形城"
                    discription="火曜日 10:25ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/18.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={19}
                    title="川越城"
                    discription="火曜日 12:20ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/19.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={22}
                    title="八王子城"
                    discription="火曜日 15:20ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/22.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={21}
                    title="江戸城"
                    discription="火曜日 17:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/21.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={20}
                    title="佐倉城"
                    discription="水曜日 19:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/20.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={14}
                    title="水戸城"
                    discription="水曜日 7:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/14.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={13}
                    title="白河小峰城"
                    discription="水曜日 11:10ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/13.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={11}
                    title="二本松城"
                    discription="水曜日 14:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/11.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={12}
                    title="若松城"
                    discription="水曜日 17:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/12.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={31}
                    title="新発田城"
                    discription="木曜日 7:10ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/31.jpg`}
                  ></SmallCard>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専到着</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        木曜日 21:00ごろ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-24">
                <h4 className="block text-xl font-bold mb-3 w-40">★中部地方</h4>
                <div className="items-center">
                  <img src="/root4-1.png" alt="" className="w-3/5" />
                  <img src="/root4-2.png" alt="" className="w-3/5" />
                  <img src="/root4-3.png" alt="" className="w-3/5" />
                </div>
                <div>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専出発</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        日曜日 3:30ごろ
                      </p>
                    </div>
                  </div>

                  <SmallCard
                    id={37}
                    title="一乗谷城"
                    discription="月曜日 8:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/37.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={36}
                    title="丸岡城"
                    discription="月曜日 10:50ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/36.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={35}
                    title="金沢城"
                    discription="月曜日 13:20ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/35.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={34}
                    title="七尾城"
                    discription="月曜日 15:50ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/34.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={33}
                    title="高岡城"
                    discription="月曜日 17:50ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/33.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={32}
                    title="春日山城"
                    discription="火曜日 8:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/32.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={26}
                    title="松代城"
                    discription="火曜日 9:55ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/26.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={27}
                    title="上田城"
                    discription="火曜日 13:45ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/27.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={28}
                    title="小諸城"
                    discription="火曜日 15:15ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/28.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={29}
                    title="松本城"
                    discription="水曜日 7:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/29.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={30}
                    title="高遠城"
                    discription="水曜日 9:50ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/30.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={24}
                    title="武田氏館"
                    discription="水曜日 12:50ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/24.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={25}
                    title="甲府城"
                    discription="水曜日 13:57ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/25.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={40}
                    title="山中城"
                    discription="木曜日 9:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/40.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={23}
                    title="小田原城"
                    discription="木曜日 10:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/23.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={41}
                    title="駿府城"
                    discription="木曜日 13:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/41.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={42}
                    title="掛川城"
                    discription="木曜日 15:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/42.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={46}
                    title="長篠城"
                    discription="金曜日 8:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/46.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={45}
                    title="岡崎城"
                    discription="金曜日 10:10ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/45.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={44}
                    title="名古屋城"
                    discription="金曜日 12:15ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/44.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={43}
                    title="犬山城"
                    discription="金曜日 13:55ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/43.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={38}
                    title="岩村城"
                    discription="金曜日 16:15ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/38.jpg`}
                  ></SmallCard>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専到着</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        金曜日 22:30ごろ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-24">
                <h4 className="block text-xl font-bold mb-3 w-40">
                  ★近畿・沖縄地方
                </h4>
                <div className="items-center">
                  <img src="/root5-1.png" alt="" className="w-3/5" />
                  <img src="/root5-2.png" alt="" className="w-3/5" />
                  <img src="/root5-3.png" alt="" className="w-3/5" />
                </div>
                <div>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専出発</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        月曜日 8:00ごろ
                      </p>
                    </div>
                  </div>

                  <SmallCard
                    id={61}
                    title="高取城"
                    discription="月曜日 9:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/61.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={47}
                    title="伊賀上野城"
                    discription="月曜日 12:50ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/47.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={49}
                    title="小谷城"
                    discription="月曜日 17:10ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/49.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={50}
                    title="彦根城"
                    discription="火曜日 9:55ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/50.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={52}
                    title="観音寺城"
                    discription="火曜日 11:45ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/52.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={51}
                    title="安土城"
                    discription="火曜日 13:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/51.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={53}
                    title="二条城"
                    discription="火曜日 16:25ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/53.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={57}
                    title="篠山城"
                    discription="水曜日 8:55ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/57.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={56}
                    title="竹田城"
                    discription="水曜日 12:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/56.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={100}
                    title="首里城"
                    discription="木曜日 8:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/100.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={99}
                    title="中城城"
                    discription="木曜日 9:35ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/99.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={98}
                    title="今帰仁城"
                    discription="木曜日 12:20ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/98.jpg`}
                  ></SmallCard>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専到着</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        木曜日 22:00ごろ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-24">
                <h4 className="block text-xl font-bold mb-3 w-40">
                  ★近畿・四国地方
                </h4>
                <div className="items-center">
                  <img src="/root6-1.png" alt="" className="w-3/5" />
                  <img src="/root6-2.png" alt="" className="w-3/5" />
                </div>
                <div>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専出発</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        月曜日 8:00ごろ
                      </p>
                    </div>
                  </div>

                  <SmallCard
                    id={54}
                    title="大阪城"
                    discription="月曜日 7:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/54.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={58}
                    title="明石城"
                    discription="月曜日 11:15ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/58.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={59}
                    title="姫路城"
                    discription="月曜日 17:10ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/59.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={60}
                    title="赤穂城"
                    discription="月曜日 16:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/60.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={67}
                    title="津山城"
                    discription="月曜日 18:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/67.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={70}
                    title="岡山城"
                    discription="火曜日 8:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/70.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={77}
                    title="高松城"
                    discription="火曜日 11:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/77.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={78}
                    title="丸亀城"
                    discription="水曜日 13:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/78.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={79}
                    title="今治城"
                    discription="火曜日 17:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/79.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={94}
                    title="大分府内城"
                    discription="水曜日 7:25ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/94.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={95}
                    title="岡城"
                    discription="水曜日 9:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/95.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={80}
                    title="湯築城"
                    discription="水曜日 15:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/80.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={81}
                    title="松山城"
                    discription="水曜日 16:50ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/81.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={82}
                    title="大洲城"
                    discription="木曜日 8:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/82.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={83}
                    title="宇和島城"
                    discription="木曜日 9:50ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/83.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={84}
                    title="高知城"
                    discription="木曜日 14:40ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/84.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={76}
                    title="徳島城"
                    discription="金曜日 8:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/76.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={55}
                    title="千早城"
                    discription="金曜日 13:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/55.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={62}
                    title="和歌山城"
                    discription="金曜日 15:40ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/62.jpg`}
                  ></SmallCard>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専到着</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        金曜日 20:00ごろ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-24">
                <h4 className="block text-xl font-bold mb-3 w-40">
                  ★九州・中国地方
                </h4>
                <div className="items-center">
                  <img src="/root7-1.png" alt="" className="w-3/5" />
                  <img src="/root7-2.png" alt="" className="w-3/5" />
                  <img src="/root7-3.png" alt="" className="w-3/5" />
                </div>
                <div>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専出発</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        月曜日 13:30ごろ
                      </p>
                    </div>
                  </div>

                  <SmallCard
                    id={96}
                    title="飫肥城"
                    discription="月曜日 9:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/96.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={97}
                    title="鹿児島城"
                    discription="月曜日 14:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/97.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={93}
                    title="人吉城"
                    discription="月曜日 17:10ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/93.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={92}
                    title="熊本城"
                    discription="火曜日 9:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/92.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={88}
                    title="吉野ヶ里遺跡"
                    discription="火曜日 12:50ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/88.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={89}
                    title="佐賀城"
                    discription="火曜日 14:20ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/89.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={91}
                    title="島原城"
                    discription="火曜日 17:25ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/91.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={90}
                    title="平戸城"
                    discription="水曜日 8:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/90.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={87}
                    title="名護屋城"
                    discription="火曜日 11:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/87.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={85}
                    title="福岡城"
                    discription="水曜日 14:35ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/85.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={86}
                    title="大野城"
                    discription="水曜日 16:05ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/86.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={75}
                    title="萩城"
                    discription="木曜日 9:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/75.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={66}
                    title="津和野城"
                    discription="木曜日 11:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/66.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={74}
                    title="岩国城"
                    discription="木曜日 14:50ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/74.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={73}
                    title="広島城"
                    discription="木曜日 16:50ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/73.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={72}
                    title="郡山城"
                    discription="木曜日 9:00ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/72.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={71}
                    title="福山城"
                    discription="金曜日 12:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/71.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={69}
                    title="鬼ノ城"
                    discription="金曜日 14:30ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/69.jpg`}
                  ></SmallCard>
                  <SmallCard
                    id={68}
                    title="備中松山城"
                    discription="金曜日 16:20ごろ"
                    img={`${process.env.NEXT_PUBLIC_API_URL}/image/68.jpg`}
                  ></SmallCard>
                  <div className="rounded overflow-hidden shadow-lg m-4 flex w-full h-24">
                    <div className="px-6 py-4 w-2/3">
                      <div className="font-bold text-xl mb-2">奈良高専到着</div>
                      <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
                        金曜日 23:50ごろ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <a
                  href="経路データ.xlsx"
                  download={true}
                  className="rounded-md bg-indigo-600 my-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  詳細データをダウンロード(.xlsx)
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  params: {}
  searchParams: QueryProps
}
type QueryProps = {
  dep: string,
  arr: string,
  castle: string
}
type CastleResponse = {
  id: number,
  name: string,
  prefecture: string
}
type DataResponse = {
  dep: string,
  arr: string,
  castles: CastleResponse[],
  way_distance: number[],
  way_time: string[],
  total_distance: number,
  total_time: string
}
//出発地点
//
export default function Result({params, searchParams}: Props) {
  const [result, setResult] = useState<DataResponse>({dep: searchParams.dep, arr: searchParams.arr, castles: [], way_distance: [0], way_time: ["計算中..."], total_distance: 0, total_time: "計算中..."});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const search = async() => {
      const q = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          dep: searchParams.dep,
          arr: searchParams.arr,
          castle: searchParams.castle.split(",")
        })
      }
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/travel`, q);
      const data: DataResponse = await res.json();
      // console.log(data);
      setResult(data);
      
    }
    search();
    setIsLoading(false);
  }, []); 
  if (isLoading) return <p>Loading...</p>
  else if(!isLoading) return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Header
          title="検索結果"
          discription="百名城の最短経路算出ツールの検索結果です．"
        />
        
        <div className="flex-col w-full md:w-3/4 flex-wrap justify-center mx-auto">
          <div className="mb-3 w-full">
            <p>総所要時間: {result.total_time}</p>
            <p>総移動距離: {result.total_distance}km</p>
          </div>
          <div className="h-10 w-full bg-gray-200 items-center flex rounded-md">
            <h2 className="">出発地: <span className="font-semibold">{result.arr}</span></h2>
          </div>
          <div className="flex-col">
            
            {
              result.castles.map((item, index) => {

                return(
                  <div className="relative">
                    <div className="flex">
                      <div className="ml-4 w-1 h-10 bg-indigo-300 flex justify-between"></div>
                      <div className="items-center flex ml-3 w-full">
                        <p className="px-2">所要時間: {result.way_time[index]}</p>
                        <p className="px-2">距離: {result.way_distance[index]}km</p>
                        <Link target="_blank" href={`https://www.google.com/maps/dir/?api=1&origin=${index === 0 ? result.arr : result.castles[index-1].name}&destination=${result.castles[index].name}&travelmode=driving`} className="text-right text-blue-600">詳しく見る</Link>
                      </div>
                    </div>

                    <Link target="_blank" href={`/castles/${item.id}`}>
                      <div className="h-10 w-full bg-gray-200 items-center flex left-0 rounded-md hover:bg-gray-300">
                        <img src="/castle.svg" alt="" width={25} className="ml-3"/>
                        <div className="flex justify-between ml-3 w-full">
                          <h3 className="font-semibold">{item.name}</h3>
                          <div>
                            <p className="mr-5 text-gray-700">{item.prefecture}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })
            }
            <div className="flex">
              <div className="ml-4 w-1 h-10 bg-indigo-300"></div>
              <div className="items-center flex ml-3 w-full">
                <p className="px-2">所要時間: {result.way_time[result.way_time.length-1]}</p>
                <p className="px-2">距離: {result.way_distance[result.way_distance.length-1]}km</p>
                <Link target="_blank" href={`https://www.google.com/maps/dir/?api=1&origin=${result.castles[result.castles.length-1]?.name}&destination=${result.arr}&travelmode=driving`} className="text-right text-blue-600">詳しく見る</Link>
              </div>
            </div>
          </div>
          <div className="h-10 w-full bg-gray-200 items-center flex rounded-md">
            <h2>到着地: <span className="font-semibold">{result.arr}</span></h2>
          </div>
          <div className="mx-auto text-xs mt-3">
            <p>Search by <span className="hover:text-indigo-700"><Link target="_blank" href="https://www.google.com/maps/dir/@34.3166657,133.9583353,11z/data=!4m2!4m1!3e3?hl=ja">Google Map</Link></span></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

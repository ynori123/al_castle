"use client";
import Card from "@/app/components/Card";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useEffect, useReducer, useRef, useState } from "react";

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
      console.log(data);
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

        <div className="flex-col flex-wrap justify-center">
          <div className="h-10 w-3/4 bg-gray-200 items-center flex rounded-md">
            <h2 className="">出発地: {result.dep}</h2>
          </div>
          <div className="flex-col">
            
            {
              result.castles.map((item, index) => {

                return(
                  <div className="relative">
                    <div className="ml-4 w-1 h-10 bg-indigo-300"></div>
                    <div className="h-10 w-3/4 bg-gray-200 items-center flex left-0 rounded-md">
                      <img src="/castle.svg" alt="" width={25} className="ml-3"/>
                      {item.name}
                    </div>
                  </div>
                )
              })
            }
            <div className="ml-4 w-1 h-10 bg-indigo-300"></div>
          </div>
          <div className="h-10 w-3/4 bg-gray-200 items-center flex rounded-md">
            <h2>到着地: {result.arr}</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

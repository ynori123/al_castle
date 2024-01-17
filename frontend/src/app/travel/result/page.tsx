"use client";
import Card from "@/app/components/Card";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";

type Props = {
  params: {}
  searchParams: QueryProps
}
type QueryProps = {
  dep: string,
  arr: string,
  castle: string
}
type DataResponse = {
  dep: string,
  arr: string,
  castles: number[],
  way_distance: number[],
  way_time: string[],
  total_distance: number,
  total_time: string
}
//出発地点
//
export default function Result({params, searchParams}: Props) {
  const [result, setResult] = useState<DataResponse>({dep: searchParams.dep, arr: searchParams.arr, castles: searchParams.castle.split(',').map((item)=>Number(item)), way_distance: [0], way_time: ["計算中..."], total_distance: 0, total_time: "計算中..."});
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
  }, []); 

  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Header
          title="検索結果"
          discription="百名城の最短経路算出ツールの検索結果です．"
        />

        <div className="flex flex-wrap justify-center">
          <h2>出発地: {}</h2>
          {
            result.castles.map()
          }
        </div>
      </main>
      <Footer />
    </>
  );
}

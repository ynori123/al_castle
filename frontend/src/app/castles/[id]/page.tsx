"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MealCard from "@/app/components/MealCard";
import Navbar from "@/app/components/Navbar";
import TableItem from "@/app/components/table/TableItem";
import { useEffect, useRef, useState } from "react";


type castleSchema = {
  id: number,
  name: string,
  prefecture: string,
  lat: number,
  lng: number,
  holiday: string,
  admission_time: string,
  admission_fee: string,
  stamp: string,
  restaurant: [restaurantSchema],
}
type restaurantSchema = {
  name: string,
  time: string,
  holiday: string,
  genre: string,
  url: string,
}

export default function Page({ params }: { params: { id: string } }) {
  console.log(params.id);
  const img_url = useRef(`${process.env.NEXT_PUBLIC_API_URL}/image/${params.id}.jpg`)
  const [castleData, setCastleData] = useState<castleSchema>({ id: 0, name: "", prefecture: "", lat: 0, lng: 0, holiday: "", admission_time: "", admission_fee: "", stamp: "", restaurant: [{ name: "", time: "", holiday: "", genre: "", url: "" }]});
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/castles/${params.id}`);
      const data = await res.json();
      setCastleData(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <div className="flex">
          <div className="text-left pt-32 w-3/4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              城名
            </h1>
            {/* TODO:なんかいい感じにデータを入れていく
						{params.id}には城のIDが入ってきます
             */}

            <div className="pt-20">
              <table className="w-3/4 text-sm text-left  text-gray-500 dark:text-gray-400">
                <tbody>
                  <TableItem title="都道府県" discription="大阪府" />

                  <TableItem
                    title="位置"
                    discription={
                      <>
                        北緯{castleData.lat}
                        <br /> 東経{castleData.lng}
                      </>
                    }
                  />
                  <TableItem title="定休日" discription={castleData.holiday} />
                  <TableItem title="入場可能時間" discription={castleData.admission_time} />
                  <TableItem title="入場料" discription={castleData.admission_fee} />
                  <TableItem
                    title="スタンプ設置場所"
                    discription={castleData.stamp}
                    isTail={true}
                  />
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <img
              className="w-full aspect-auto overflow-hidden object-cover"
              src={img_url.current}
              alt="大阪城"
            />
          </div>
        </div>
        <Header title="周辺の観光情報" />
        <div className="flex flex-wrap justify-center">
          <MealCard
            id={1}
            title="ラーメン屋です"
            time="10:00-17:00"
            holiday="毎週土曜日"
            genre="ラーメン"
            img="/ramen.jpg"
          />
          <MealCard
            id={1}
            title="ラーメン屋です"
            time="10:00-17:00"
            holiday="毎週土曜日"
            genre="ラーメン"
            img="/ramen.jpg"
          />
          <MealCard
            id={1}
            title="ラーメン屋です"
            time="10:00-17:00"
            holiday="毎週土曜日"
            genre="ラーメン"
            img="/ramen.jpg"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

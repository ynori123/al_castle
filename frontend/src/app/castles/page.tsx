"use client";
import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { server } from "typescript";

export default function Castles() {
  const [castleData, setCastleData] = useState<{ id: number, name: string, prefecture: string}[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/castles`);
      const data = await res.json();
      setCastleData(data);
    };
    fetchData();
  },[]);
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Header
          title="百名城一覧"
          discription="百名城一覧および，その周辺の観光情報をご紹介します．"
        />

        <div className="flex flex-wrap justify-center">
          {
            // 100個のカードを生成
            // TODO:なんかいい感じにデータを入れていく
            castleData.map((item, i) => {
              return (
                <Card
                  id={i + 1}
                  title={item.name}
                  discription={item.prefecture}
                  img={`${process.env.NEXT_PUBLIC_API_URL}/image/${i + 1}.jpg`}
                  key={i}
                />
              );
            })
          }
        </div>
      </main>
      <Footer />
    </>
  );
}

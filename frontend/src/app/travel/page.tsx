"use client";
import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

//出発地点
//
export default function Travel() {
  const [castleData, setCastleData] = useState<{ id: number, name: string, prefecture: string }[]>([]);
  const [start, setStart] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [isStop, setIsStop] = useState<boolean[]>(Array(100).fill(false));
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/castles`);
      const data = await res.json();
      setCastleData(data);
    }
    fetchData();
  }, []);
  const handleSubmit = () => {
    // TODO
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Header
          title="経路検索"
          discription="百名城の最短経路算出ツールです。行きたい城にすべてチェックを入れ，検索ボタンを押してください．"
        />

        <form className="mx-64">
          {/* 全城分のチェックボックス */}
          <div className="flex mb-5">
            <label className="block text-lg font-bold mb-3 w-40">出発地</label>
            <input
              className="bg-gray-200 appearance-none border-2 flex-1 border-gray-200 w-4/5 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <div className="flex mb-5">
            <label className="block text-lg font-bold mb-3 w-40">到着地</label>
            <input
              className="bg-gray-200 appearance-none border-2 flex-1 border-gray-200 w-4/5 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
            <button
              className="rounded-md bg-indigo-600 ml-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              出発地と到着地を同じにする
            </button>
          </div>
          <div className="flex flex-wrap justify-center mb-5">
            <div className="flex flex-wrap">
              <label className="block text-lg font-bold mb-3">
                行きたい城を選択
              </label>

              <ul>
                {castleData.map((item, i) => {
                  return (
                    <li className="inline-block w-48">
                      <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="castles"
                        checked={isStop[i]}
                        onChange={() => setIsStop([...isStop.slice(0, i), !isStop[i], ...isStop.slice(i + 1)])}
                      />
                      <a className="text-sm hover:underline" href={"/castles/" + (i + 1)}>
                        {i + 1}. {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <label className="block text-lg font-bold mb-3">
              回る順番を指定
            </label>

            <p>作れてません</p>
          </div>
          <div className="my-10 flex items-center justify-center gap-x-6">
            <button
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              経路を検索する
            </button>
            <button
              className="text-sm font-semibold leading-6 text-gray-900"
              type="reset"
            >
              リセット
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

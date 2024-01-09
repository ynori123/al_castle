import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//出発地点
//
export default function Travel() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Header
          title="経路検索"
          discription="百名城の最短経路算出ツールです。行きたい城にすべてチェックを入れ，検索ボタンを押してください．"
        />

        <form action="/travel/result" method="post">
          {/* 全城分のチェックボックス */}

          <div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap mx-64">
              <label className="block text-lg font-bold mb-3">
                行きたい城を選択
              </label>

              <ul>
                {Array.from(Array(100).keys()).map((i) => {
                  return (
                    <>
                      <li className="inline-block w-48">
                        <input
                          className="mr-2 leading-tight"
                          type="checkbox"
                          name="castles"
                          value={i + 1}
                        />
                        <a className="text-sm" href={"/castles/" + (i + 1)}>
                          {i + 1}. 根室半島チャシ跡群
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="my-10 flex items-center justify-center gap-x-6">
            <button
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
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

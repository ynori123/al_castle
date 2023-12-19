import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              百名城の経路探索ツールのほか，各城の説明や周辺の観光案内を提供しています．
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/castles"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                経路探索ツール
              </a>
              <a
                href="/routes"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                百名城一覧<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Card from "@/app/components/Card";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MealCard from "@/app/components/MealCard";
import Navbar from "@/app/components/Navbar";
import TableItem from "@/app/components/table/TableItem";

export default function Page({ params }: { params: { id: string } }) {
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
                        北緯34度41分14.56秒
                        <br /> 東経135度31分33.04秒
                      </>
                    }
                  />
                  <TableItem title="定休日" discription="毎週土曜日" />
                  <TableItem title="入場可能時間" discription="10:00-17:00" />
                  <TableItem title="入場料" discription="無料" />
                  <TableItem
                    title="スタンプ設置場所"
                    discription="あ"
                    isTail={true}
                  />
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <img
              className="w-full aspect-auto overflow-hidden object-cover"
              src="/osaka.jpg"
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

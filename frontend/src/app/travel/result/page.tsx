import Card from "../../components/Card";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//出発地点
//
export default function Result() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Header
          title="検索結果"
          discription="百名城の最短経路算出ツールの検索結果です．"
        />

        <div className="flex flex-wrap justify-center">aa</div>
      </main>
      <Footer />
    </>
  );
}

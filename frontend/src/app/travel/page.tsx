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
          discription="百名城の最短経路算出ツールです。"
        />

        <div className="flex flex-wrap justify-center"></div>
        <form action="/travel" method="post">
          <p>TODO</p>
        </form>
      </main>
      <Footer />
    </>
  );
}

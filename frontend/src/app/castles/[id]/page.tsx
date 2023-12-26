import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Header
          title={params.id}
          discription={`${params.id}の城情報、周辺の観光情報をご紹介します。`}
        />
      </main>
      <Footer />
    </>
  );
}

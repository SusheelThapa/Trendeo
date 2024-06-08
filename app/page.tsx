import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewArrival from "./components/NewArrival";
import FlashSales from "./components/FlashSales";

export default function Home() {
  return (
    <>
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
        <Header />
        <FlashSales />
        <NewArrival />
      </div>
      <Footer />
    </>
  );
}

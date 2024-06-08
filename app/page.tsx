import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewArrival from "./components/NewArrival";
import FlashSales from "./components/FlashSales";
import Features from "./components/Features";
import Banner from "./components/Banner";
import BestSellingProducts from "./components/BestSellingProducts";

export default function Home() {
  return (
    <>
      <Header />
      <FlashSales />
      <BestSellingProducts />
      <Banner />
      <NewArrival />
      <Features />
      <Footer />
    </>
  );
}

import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewArrival from "./components/NewArrival";
import Features from "./components/Features";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <NewArrival/>
    <Features/>
    <Footer/>
    </>
  );
}

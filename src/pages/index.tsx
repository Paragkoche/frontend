import Footer from "@/components/Footer";
import Hander from "@/components/Hander";
import Hero from "@/components/Home/Hero";
import Serves from "@/components/Home/serves";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import HappyClients from "@/components/Home/HappyClients";
import Line from "@/components/Home/Line";
import Product from "@/components/Home/Product";
import TrendingBlogs from "@/components/Home/TrendingBlogs";
import Happiness from "@/components/Home/Happiness";
export default function Home() {
  return (
    <>
      <Hander />
      <main className="">
        <Hero />
        <Serves />
        <WhatWeOffer />
        <HappyClients />
        <Product />
        <Line />
        <TrendingBlogs />
        <Happiness />
      </main>
      <Footer />
    </>
  );
}

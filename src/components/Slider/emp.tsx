import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import yash from "@/assets/yesh.svg";
import sh from "@/assets/sh.svg";
import shiv from "@/assets/shive.svg";
import san from "@/assets/san.svg";
import vre from "@/assets/van.svg";
import prav from "@/assets/prav.svg";
import pk from "@/assets/pk.svg";
import kar from "@/assets/kar.svg";
import chine from "@/assets/chine.svg";
import avtD from "@/assets/avtD.svg";
import avt from "@/assets/avt.svg";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
const Homepage = () => {
  return (
    <Swiper
      breakpoints={
        {
          320: {
            slidesPerView: 1,

          },

          // when window width is <= 499px
          499: {
            slidesPerView: 1,

          },
          768: {
            slidesPerView: 3,

          },
          // when window width is <= 999px
          999: {
            slidesPerView: 2,

          },
          2560: {
            slidesPerView: 5,

          },
          1024: {
            slidesPerView: 5,

          },

          1440: {
            slidesPerView: 5,

          },
          2600: {
            slidesPerView: 5,

          }
        }
      }

      slidesPerView={5}
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {[
        { i: prav, name: "Praveen B", pog: "COO" },
        { i: avt, name: "Atharva J", pog: "CFO" },
        { i: avtD, name: "Atharva D", pog: "CMO" },
        { i: pk, name: "Parag K", pog: "Core Dev" },
        { i: yash, name: "Yash W", pog: "CHRM" },
        { i: shiv, name: "Shiv M", pog: "CCO" },
        { i: sh, name: "Sashwat K", pog: "Designer" },
        { i: vre, name: "Vansh R", pog: "Designer" },
        { i: kar, name: "Kartik G", pog: "CHRM" },
        { i: san, name: "Sanika P", pog: "CCO" },
        { i: chine, name: "Chinu M", pog: "Designer" },
      ].map((v, i) => (
        <SwiperSlide>
          <div className="flex flex-col gap-3  items-center">
            <Image src={v.i} alt="" />
            <h1 className="font-bold text-3xl">{v.name}</h1>
            <p className="text-white font-bold">{v.pog}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Homepage;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import dv from "@/assets/dc.svg";
import dh from "@/assets/dh.svg";
import emt from "@/assets/emt.svg";
import tev from "@/assets/tev.svg";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";
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
            slidesPerView: 1,

          },
          // when window width is <= 999px
          999: {
            slidesPerView: 2,

          },
          2560: {
            slidesPerView: 2,

          },
          1024: {
            slidesPerView: 2,

          },

          1440: {
            slidesPerView: 2,

          },
          2600: {
            slidesPerView: 2,

          }
        }
      }

      slidesPerView={2}
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
        {
          i: dv,
        },
        {
          i: dh,
        },
        {
          i: emt,
        },
        {
          i: tev,
        },
      ].map((v, i) => (
        <SwiperSlide>
          <div className="flex p-10 border-2 border-[#ACACAC] flex-col bg-[#E8E8E8]  rounded-lg items-center justify-center">
            <Image src={v.i} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Homepage;

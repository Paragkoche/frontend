import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import i7 from "@/assets/7i.png";
import xb from "@/assets/xpan.png";
import CYBERX from "@/assets/cyberx.png";
import bx from "@/assets/blockx.png";
import I from "@/assets/libex.png";
import { Pagination, Autoplay } from "swiper";
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
          2600: {
            slidesPerView: 2,

          }
        }
      }
      slidesPerView={2}
      spaceBetween={30}
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
          h: "Xpan buzz",
          p: `Digital marketing services include activities that help promote a
          business digitally via different online marketing channels. These
          channels include search engines, email, paid advertising, and
          social media.`,
          i: xb,
        },
        {
          h: "CYBERX",
          p: `     With a focus on cybersecurity, we provide comprehensive services
        tailored to our clients' needs, ensuring protection against
        digital threats and vulnerabilities.`,
          i: CYBERX,
        },
        {
          h: "7i Buzz",
          p: `we business solution that uses data analysis, business
          intelligence and data-driven machine learning to help customers
          with their big data. The focus is to help customers analyze their
          data forms and make better business decisions using insights.`,
          i: i7,
        },
        {
          h: "Block Xbuzz",
          p: `With a focus on blockchain development, we offer NFT, Smart
          Contract, Digital Locker, Cryptocurrency, and Supply Chain
          services based on the needs of our clients.`,
          i: bx,
        },
        {
          h: "Libex",
          p: `With the aim of instructing trainees and interns in data science,
          artificial intelligence, marketing, design, and content writing.
          The major objective is to guide the trainee towards developing a
          strong skill set in their areas of interest.
       `,
          i: I,
        },
      ].map((v, i) => (
        <SwiperSlide  >
          <div
            className=" 
         
          flex justify-center flex-col h-[17rem] sm:px-5 sm:h-[10em] sm:w-[14.5em]  md:h-[15em] md:w-[30.5em] bg-[#E8E8E8] px-10  py-5 rounded-[2.5rem]"
          >
            <header className="flex items-center justify-between">
              <h1 className="font-bold text-3xl max-sm:text-xl">{v.h}</h1>
              <Image
                src={v.i}
                alt=""
                width={700}
                className="max-w-[3rem] max-[768px]:w-[100px] w-[400px] "
              />
            </header>
            <p className="text-justify sm:hidden  max-[768px]:hidden ">
              {v.p}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Homepage;

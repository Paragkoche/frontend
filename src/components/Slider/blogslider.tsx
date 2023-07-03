import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";
const Homepage = () => {
  const [blogs, setBlogs] = useState<
    {
      id: string;
      created_at: string;
      title: string;
      para: string;
      image: string;
    }[]
  >([]);
  useEffect(() => {
    axios.get("/api/blog").then(({ data }) => {
      setBlogs(data);
    });
  }, []);
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      slidesPerView={3}
      spaceBetween={20}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
      }}
      pagination={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
      {blogs.map((v, i) => (
        <SwiperSlide>
          <div className="flex justify-center w-full my-10">
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={v.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{v.title}</div>
                <p className="text-gray-700 text-base">{v.para}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Homepage;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";
const Homepage = () => {
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
      {[
        {
          h: "Revamp Your Social Media Strategy with AI:",
          p: `As a business owner or marketer, you know that having 
          a strong online presence is crucial in today’s digital age. And social media marketing can be a powerful tool to help you achieve that.......`,
        },
        {
          h: "Revamp Your Social Media Strategy with AI:",
          p: `As a business owner or marketer, you know that having 
          a strong online presence is crucial in today’s digital age. And social media marketing can be a powerful tool to help you achieve that.......`,
        },
        {
          h: "Revamp Your Social Media Strategy with AI:",
          p: `As a business owner or marketer, you know that having 
            a strong online presence is crucial in today’s digital age. And social media marketing can be a powerful tool to help you achieve that.......`,
        },
        {
          h: "Revamp Your Social Media Strategy with AI:",
          p: `As a business owner or marketer, you know that having 
            a strong online presence is crucial in today’s digital age. And social media marketing can be a powerful tool to help you achieve that.......`,
        },
      ].map((v, i) => (
        <SwiperSlide>
          <div className="flex justify-center w-full my-10">
            <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="https://v1.tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{v.h}</div>
                <p className="text-gray-700 text-base">{v.p}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Homepage;

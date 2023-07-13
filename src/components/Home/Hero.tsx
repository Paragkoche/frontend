import Image from "next/image";
import d from "@/assets/down-arrow.svg";
const Hero = () => {
  return (
    <section
      className="
      w-full sm:w-full 
      relative
     px-36 sm:px-5 md:px-20 py-16  mb-20"
    >
      <div
        style={{
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
        }}
        className="
          border-[#FFD01F]
           border-[3px] 
           overflow-hidden 
           h-[45rem] 
           sm:h-[10rem]
           md:h-[21rem]
           md:rounded-[3rem]
           sm:rounded-[3rem]  
           rounded-[5rem]  
           flex 
           items-center 
           justify-center 
           gap-10
           relative z-20
           "
      >
        <video
          autoPlay
          muted
          loop
          controls
          // height={500}
          id="myVideo"
        >
          <source src="vidoe.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute top-[20px] z-0">
        <svg
          width="1520"
          height="992"
          viewBox="0 0 1520 992"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1079_5903)">
            <ellipse
              cx="760"
              cy="270.5"
              rx="260"
              ry="221.5"
              fill="#FFD01F"
              fill-opacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1079_5903"
              x="0"
              y="-451"
              width="1520"
              height="1443"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_1079_5903"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[0px] top-1 z-0">
        <svg
          width="814"
          height="1313"
          viewBox="0 0 814 1313"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1079_5902)">
            <ellipse
              cx="54"
              cy="591.5"
              rx="260"
              ry="221.5"
              fill="#A5F3FE"
              fill-opacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1079_5902"
              x="-706"
              y="-130"
              width="1520"
              height="1443"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_1079_5902"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div
        className="   
        z-30
      bg-black h-20 w-20 sm:h-10 sm:w-10 md:h-[3em] md:w-[3em] absolute sm:bottom-10 md:bottom-8 bottom-5 right-0 left-0 mx-auto rounded-full flex justify-center items-center p-3"
      >
        <Image src={d} alt="s" />
      </div>
    </section>
  );
};

export default Hero;

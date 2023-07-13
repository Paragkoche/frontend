import Image from "next/image";
import { CountUp } from "use-count-up";
import prod from "@/assets/download-p.png";
import P from "@/assets/p.svg";
import c from "@/assets/co.svg";
import s from "@/assets/soon.svg";
import classes from "@/components/Hander.module.css";
const Product = () => {
  return (
    <section
      className="
      sm:py-20
      sm:mt-20
      sm:mb-0
      sm:px-5
      md:py-20
      md:mt-60
      md:mb-0
      md:px-20
sm:flex 
sm:flex-col
sm:w-full
md:flex 
md:flex-col
md:w-full

 max-[1024px]:px-20  
py-[4rem] mt-20 relative mb-20 px-52 flex gap-10 justify-center items-end "
    >
      <Image
        src={prod}
        width={800}
        alt="-"
        className="
  
   sm:-top-[12%]
   sm:-left-[15%]
  sm:flex
  sm:justify-start
  sm:w-full
  md:-top-[27%]
   md:-left-[10%]
  md:flex
  md:justify-start
  md:w-[650px]
    max-[1024px]:-top-[20%]
    max-[1024px]:left-[25%]
    max-[1024px]:w-[500px]
    absolute z-10 bottom-[0.5rem] left-0 "
      />{" "}
      <div
        style={{
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
        }}
        className="
    max-[1024px]:w-full sm:w-full md:w-full sm:flex sm:justify-end sm:items-center sm:p-5
    bg-[#FFD01F] overflow-hidden  flex w-1/2 h-[40vh] md:h-[55vh] sm:h-[30vh] relative justify-between gap-32 p-16 rounded-3xl"
      >
        <div className={`${classes.animion_1}`}>
          <div
            style={{
              textShadow:
                "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="text-6xl sm:text-xl md:text-[em] relative z-10 ml-[20rem] sm:ml-[0rem] font-bold text-center flex flex-col items-center"
          >
            Upcoming <br />
            <p className="text-9xl sm:text-xl md:text-[1em] flex items-start">
              <CountUp isCounting end={10} duration={5} />
              <samp className="text-6xl sm:text-xl md:text-4xl">+</samp>
            </p>
            PRODUCT
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
        }}
        className="
    max-[1024px]:w-full sm:w-full md:w-full md:h-[95vh]
    relative overflow-hidden p-5 h-[60vh] sm:h-[55vh] flex flex-col items-center w-1/2 bg-[#D9D9D9] rounded-3xl"
      >
        <div className={`${classes.animion_2} `}>
          <div className="flex gap-5 sm:gap-4  items-center my-4 relative z-10">
            {[c, P, s, P].map((v, i) => (
              <div className="flex items-center justify-center rounded-full bg-[#F5F5F7] sm:w-[5em] sm:h-[5em] md:w-[11em] md:h-[11em] w-40 h-40">
                <Image width={60} src={v} alt="-" className="sm:w-[20px] md:w-[50px]" />
              </div>
            ))}
          </div>
          <div className="flex gap-5 sm:gap-1 md:gap-7 items-center my-4 pl-[6rem]  relative z-10">
            {[P, c, P, s].map((v, i) => (
              <div className=" flex items-center justify-center rounded-full bg-[#F5F5F7] sm:w-[5em] sm:h-[5em] md:w-[11em] md:h-[11em] w-40 h-40">
                <Image width={60} src={v} alt="-" className="sm:w-[20px] md:w-[50px]" />
              </div>
            ))}
          </div>
        </div>
        <button
          style={{
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
          }}
          className={`overflow-hidden  z-10 relative py-4 px-9 bg-white rounded-2xl mt-10`}
        >
          <a className={`${classes.animion_} font-bold flex gap-2`}>
            Know More
          </a>
        </button>
      </div>
    </section>
  );
};

export default Product;

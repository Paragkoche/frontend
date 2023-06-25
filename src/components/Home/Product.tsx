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
  max-[1024px]:flex-col max-[768px]:flex-col max-sm:flex-col max-md:flex-col
max-[1024px]:px-20 max-[768px]:px-12 max-sm:px-5 max-md:px-5
py-[4rem] mt-20 relative mb-20 px-52 flex gap-10 justify-center items-end"
    >
      <Image
        src={prod}
        width={800}
        alt="-"
        className="
   
    max-[1024px]:-top-[20%]
    max-[1024px]:left-[25%]
    max-[1024px]:w-[500px]

    max-[768px]:-top-[20%]
    max-[768px]:left-[25%]
    max-[768px]:w-[500px]

    max-sm:-top-[20%]
    max-sm:left-[25%]
    max-sm:w-[500px]

    max-md:-top-[20%]
    max-md:left-[25%]
    max-md:w-[500px]
    absolute z-10 bottom-[0.5rem] left-0 "
      />{" "}
      <div
        style={{
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
        }}
        className="
    max-[1024px]:w-full max-[768px]:w-full max-sm:w-full max-md:w-full
    bg-[#FFD01F] overflow-hidden  flex w-1/2 h-[40vh]  relative justify-between gap-32 p-16 rounded-3xl"
      >
        <div className={`${classes.animion_1}`}>
          <div
            style={{
              textShadow:
                "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="text-6xl relative z-10 ml-[20rem] font-bold text-center flex flex-col items-center"
          >
            Upcoming <br />
            <p className="text-9xl flex items-start">
              <CountUp isCounting end={10} duration={5} />
              <samp className="text-6xl">+</samp>
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
    max-[1024px]:w-full max-[768px]:w-full max-sm:w-full max-md:w-full
    relative overflow-hidden p-5 h-[60vh] flex flex-col items-center w-1/2 bg-[#D9D9D9] rounded-3xl"
      >
        <div className={`${classes.animion_2} `}>
          <div className="flex gap-5 items-center my-4 relative z-10">
            {[c, P, s, P].map((v, i) => (
              <div className="flex items-center justify-center rounded-full bg-[#F5F5F7] w-40 h-40">
                <Image width={60} src={v} alt="-" />
              </div>
            ))}
          </div>
          <div className="flex gap-5 items-center my-4 pl-[6rem]  relative z-10">
            {[P, c, P, s].map((v, i) => (
              <div className=" flex items-center justify-center rounded-full bg-[#F5F5F7]  w-40 h-40">
                <Image width={60} src={v} alt="-" />
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

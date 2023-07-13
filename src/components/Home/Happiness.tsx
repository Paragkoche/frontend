import { CountUp } from "use-count-up";
import Cal from "@/assets/conta.svg";
import Conta from "@/assets/cale.svg";
import PPC from "@/assets/ppcont.svg";
import Image from "next/image";
import B from "@/assets/b.svg";
const Happiness = () => {
  return (
    <section className="py-4 relative mb-20 px-52  md:px-20 sm:px-5">
      <div className="bg-[#FFD01F] w-36 h-36  rounded-full  absolute z-0 bottom-9 right-1/4 animtion"></div>
      <div className="border-[#FFD01F] w-36 h-36 border-8 rounded-full flex justify-center items-center absolute z-0 left-1/3 -top-6 animtion">
        <div className="border-[#FFD01F] w-[100px] h-[100px] border-8 rounded-full"></div>
      </div>
      <Image className="absolute left-[6rem] animtion" src={B} alt="-" />
      <div
        style={{
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
        }}
        className="p-20 sm:p-10  gap-3 bg-[rgba(255,208,31,0.2)] border-[3px] border-[rgba(255,208,31,0.58)] backdrop-blur-sm rounded-[43px]"
      >
        <h1 className="text-center sm:text-3xl text-6xl font-bold">Happines</h1>
        <div className="flex justify-center sm:mt-10 md:mt-10">
          <div className="flex flex-col items-center">
            <div
              style={{
                boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
              }}
              className=" relative w-72 h-72 sm:w-20 sm:h-20 sm:border-[15px]  md:w-[2.5em] md:h-[2.5em] md:border-[20px]  border-[#FFD01F] border-[35px] rounded-full flex justify-center items-center font-bold text-6xl"
            >
              <div
                style={{
                  boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                }}
                className="absolute bg-white p-4 sm:w-[50px] sm:-top-[2.5rem] sm:-right-[1.5rem] md:w-[50px] md:-top-[2.5rem] md:-right-[1.5rem] rounded-full -top-[5rem] -right-[3rem]"
              >
                <Image src={Cal} alt="-" />
              </div>
              <div className="sm:text-xl md:text-4xl">
                <CountUp isCounting end={91} duration={5} />+
              </div>
            </div>
            <h1 className="font-bold text-4xl mt-5 text-center md:text-3xl sm:text-xl">
              Clients
            </h1>
          </div>
          <div className="flex flex-col items-center mt-52 md:mt-[16em]">
            <div
              style={{
                boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
              }}
              className="relative w-72 h-72  sm:w-20 sm:h-20 sm:border-[15px]  md:w-[2.5em] md:h-[2.5em] md:border-[20px] border-[#FFD01F] border-[35px] rounded-full flex justify-center items-center font-bold text-6xl"
            >
              <div
                style={{
                  boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                }}
                className="absolute bg-white p-4  sm:w-[50px] sm:-top-[2.5rem] sm:-right-[1.5rem] md:w-[50px] md:-top-[2.5rem] md:-right-[1.5rem]  rounded-full -top-[5rem] -right-[3rem]"
              >
                <Image src={PPC} alt="-" />
              </div>
              <div className="sm:text-xl md:text-4xl">
                <CountUp isCounting end={96} duration={5} />%
              </div>
            </div>
            <h1 className="font-bold text-4xl md:text-3xl mt-5 sm:text-xl text-center ">
              Clients Retention{" "}
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div
              style={{
                boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
              }}
              className="relative w-72 h-72  sm:w-20 sm:h-20 sm:border-[15px]  md:w-[2.5em] md:h-[2.5em] md:border-[20px] border-[#FFD01F] border-[35px] rounded-full flex justify-center items-center font-bold text-6xl"
            >
              <div
                style={{
                  boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                }}
                className="absolute bg-white sm:w-[50px] sm:-top-[2.5rem] sm:-right-[1.5rem] md:w-[50px] md:-top-[2.5rem] md:-right-[1.5rem] p-4 rounded-full -top-[5rem] -right-[3rem]"
              >
                <Image src={Conta} alt="-" />
              </div>
              <div className="sm:text-xl md:text-4xl">
                <CountUp isCounting end={5} duration={5} />+{" "}
              </div>
            </div>
            <h1 className="font-bold text-4xl md:text-3xl mt-5 sm:text-xl text-center">
              Years Of
              <br /> Experience
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happiness;

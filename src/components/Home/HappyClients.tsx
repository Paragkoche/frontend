import fm from "@/assets/svg my.svg";
import BE from "@/assets/BLUE Roof.svg";
import Image from "next/image";
import Homepage from "../Slider/comp";
const HappyClients = () => {
  return (
    <section
      className="
         w-full
         md:px-20
        py-4 relative mb-44 md:mb-0 sm:mb-0 px-52  sm:px-5"
    >
      <div className="border-[20px] border-[#FFD01F] w-36 h-36 rounded-full absolute right-48 z-0 animtion"></div>
      <h1 className="text-center font-bold text-5xl mb-10 relative z-20">
        Happy{" "}
        <span
          style={{
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
          }}
          className="text-[#FFD01F] p-2 rounded-3xl"
        >
          Clients
        </span>{" "}
        Say
      </h1>
      <div
        className="
      sm:flex-col
      sm:p-5
md:flex-col
      justify-center
          p-20 flex gap-3 bg-[rgba(255,208,31,0.2)] border-[3px] border-[rgba(255,208,31,0.58)] backdrop-blur-sm rounded-[43px]"
      >
        <div
          className="
            sm:mt-[3em]
            max-[1024px]:w-full sm:w-full md:w-full
            bg-white p-7 sm:py-5 sm:px-2 w-1/2 rounded-3xl relative"
        >
          <div className="absolute flex max-md:flex-col  md:-top-14 gap-10 sm:gap-1 items-center w-full  -top-5 ">
            <Image
              src={BE}
              alt="-"
              width={150}
              height={150}
              className="sm:w-[5em] "
            />
            <h1 className="max-md:hidden p-5 sm:p-2 sm:px-2 md:px-10 px-20 bg-[#FFD01F] bg-opacity-50 font-bold rounded-full">
              The Bliss Events
            </h1>
          </div>
          <div className="px-3">
            <p className="mt-28 md:mt-[5em] sm:mt-20 italic text-center">
              "GBJ Buzz has been instrumental in the success of Bliss Events.
              Highly recommended for exceptional event marketing!"
            </p>
            <i className="text-right  mt-9 italic  ">
              - Vijay Sir (CEO & Founder)
            </i>
          </div>
        </div>
        <div
          className="
          md:mt-[4em]
            sm:mt-[4em]
            max-[1024px]:w-full sm:w-full md:w-full
            bg-white p-7 sm:py-5 sm:px-2 w-1/2 rounded-3xl relative"
        >
          <div className="absolute flex gap-10 md:-top-14 sm:gap-2 items-center w-full -top-5">
            <Image
              src={fm}
              alt="-"
              width={150}
              height={150}
              className="sm:w-[5em] ]  "
            />
            <h1 className="max-md:hidden p-5 md:px-14 sm:p-3 sm:px-5 px-24 bg-[#FFD01F] bg-opacity-50 font-bold rounded-full">
              MyFit Meals
            </h1>
          </div>
          <div className="sm:px-3">
            <p className="mt-28 md:mt-[6em] sm:mt-20 italic text-center">
              "We owe our business's success to GBJ Buzz. Their services have
              propelled our growth, expanding our online presence and boosting
              customer engagement. Highly recommended!"
            </p>
            <i className="text-right  mt-9 italic">
              - Amar Sir (CEO & Founder)
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;

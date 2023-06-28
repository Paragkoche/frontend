import fm from "@/assets/svg my.svg";
import BE from "@/assets/BLUE Roof.svg";
import Image from "next/image";
const HappyClients = () => {
  return (
    <section
      className="
          max-[1024px]:px-20 max-[768px]:px-12 max-sm:px-5 max-md:px-5
        
        py-4 relative mb-44 px-52"
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
        max-[1024px]:flex-col max-[768px]:flex-col max-sm:flex-col max-md:flex-col
        max-[1024px]:p-20 max-[768px]:p-15 max-sm:p-10 max-md:p-10

          p-20 flex gap-3 bg-[rgba(255,208,31,0.2)] border-[3px] border-[rgba(255,208,31,0.58)] backdrop-blur-sm rounded-[43px]"
      >
        <div
          className="
            
            max-[1024px]:w-full max-[768px]:w-full max-sm:w-full max-md:w-full
            bg-white p-7 w-1/2 rounded-3xl relative"
        >
          <div className="absolute flex max-md:flex-col gap-10 items-center w-full max-md:w-[80%] -top-5">
            <Image src={BE} alt="-" width={150} height={150} />
            <h1 className="max-md:hidden p-5 px-20 bg-[#FFD01F] bg-opacity-50 font-bold rounded-full">
              The Bliss Events
            </h1>
          </div>
          <p className="mt-28 italic text-center">
            "GBJ Buzz has been instrumental in the success of Bliss Events.
            Highly recommended for exceptional event marketing!"
          </p>
          <i className="text-right ml-52 mt-9 italic">
            - Vijay Sir (CEO & Founder)
          </i>
        </div>
        <div
          className="
            
            max-[1024px]:w-full max-[768px]:w-full max-sm:w-full max-md:w-full
            bg-white p-7 w-1/2 rounded-3xl relative"
        >
          <div className="absolute flex gap-10 items-center w-full max-md:w-[80%] -top-5">
            <Image src={fm} alt="-" width={150} height={150} />
            <h1 className="max-md:hidden p-5 px-24 bg-[#FFD01F] bg-opacity-50 font-bold rounded-full">
              MyFit Meals
            </h1>
          </div>
          <p className="mt-28 italic text-center">
            "We owe our business's success to GBJ Buzz. Their services have
            propelled our growth, expanding our online presence and boosting
            customer engagement. Highly recommended!"
          </p>
          <i className="text-right ml-52 mt-9 italic">
            - Amar Sir (CEO & Founder)
          </i>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;

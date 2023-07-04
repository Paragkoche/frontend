import fm from "@/assets/svg my.svg";
import BE from "@/assets/BLUE Roof.svg";
import Image from "next/image";
import Homepage from "../Slider/comp";
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
        className="w-full border-2 border-[#A1A1A1] rounded-2xl p-24 relative z-10 backdrop-blur-sm "
        style={{
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
        }}
      >
        <Homepage />
      </div>
    </section>
  );
};

export default HappyClients;

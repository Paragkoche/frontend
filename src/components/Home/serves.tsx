import Homepage from "../Slider/Homepage";

const Serves = () => {
  return (
    <section
      className=" 
      px-36 md:px-20 sm:px-5 py-4 relative mb-20 max-[1024px]:px-20 "
    >
      <div className="border-[#FFD01F] w-36 h-36 border-8 rounded-full flex justify-center items-center absolute z-0 left-1/3 -top-6 animtion">
        <div className="border-[#FFD01F] w-[100px] h-[100px] border-8 rounded-full "></div>
      </div>
      <div className="border-[#FFD01F] w-[15rem] h-[15rem] border-8 rounded-full flex justify-center items-center absolute z-0 bottom-9 right-1/4 animtion">
        <div className="border-[#FFD01F] w-[100px] h-[100px] border-8 rounded-full "></div>
      </div>
      <div className="border-[#FFD01F] w-[15rem] h-[15rem] border-8 rounded-full flex justify-center items-center absolute z-0 -bottom-[4.75rem] -left-[7.75rem] animtion">
        <div className="border-[#FFD01F] w-[100px] h-[100px] border-8 rounded-full "></div>
      </div>
      {/* <div className="bg-[#FFD01F] w-36 h-36  rounded-full  absolute z-0 bottom-9 right-1/4"></div> */}
      <div
        style={{
          backgroundImage:
            "radial-gradient(98.72% 792.15% at 0% 0.1%, rgba(193, 193, 193, 0.357) 0%, rgba(234, 234, 234, 0.153) 100%)",
          backdropFilter: "blur(7px)",
        }}
        className="
        
          p-14
          sm:p-5 
          gap-4
          py-40 
          md:py-20
          rounded-[5rem] 
          sm:rounded-[43px]
          border 
          border-[#A2A2A2] 
          relative 
          z-10 flex 
          sm:flex-col
          md:flex-col
          justify-between 
          items-center"
      >
        <div
          className=" "
        >
          <h1 className="text-[5rem] sm:text-[3em] sm:text-center font-bold mb-3">
            Services
          </h1>
          <p className="font-semibold mt-2">
            The services provide by GBJ BUZZ helps to grow your
            business at one place with the wide verity of services

            categories in 5 type i.e Xpan BUZZ, 7i BUZZ, Libex Buzz,
            Block X Buzz and Cyberx{" "}
          </p>
        </div>
        <div className="w-[65%] sm:w-[100%] md:w-[100%]  max-[1024px]:w-full  items-center">

          <Homepage />

        </div>
      </div>
    </section>
  );
};

export default Serves;

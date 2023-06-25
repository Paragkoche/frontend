import Homepage from "../Slider/Homepage";

const Serves = () => {
  return (
    <section
      className="
      
      px-36 py-4 relative mb-20 max-[1024px]:px-20 max-[768px]:px-12 max-sm:px-5 max-md:px-5"
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
          max-[1024px]:flex-col 
          max-[1024px]:py-20 
          max-[1024px]:p-10 
          max-[768px]:py-10 
          max-[768px]:p-10 
          max-sm:px-5 
          max-sm:p-5  
          p-20 
          gap-4
          py-40 
          rounded-[5rem] 
          border 
          border-[#A2A2A2] 
          relative 
          z-10 flex 
          justify-between 
          items-center"
      >
        <div
          className="
          max-[1024px]:w-full
          max-[1024px]:text-center
          max-[768px]:w-full
          max-[768px]:text-center
          w-1/3
          
          "
        >
          <h1 className="text-[5rem] max-[1024px]:text-[4rem] max-[768px]:text-[3rem] font-bold mb-3">
            Services
          </h1>
          <p className="font-semibold mt-2">
            The services provide by GBJ BUZZ helps to grow your
            <br /> business at one place with the wide verity of services
            <br />
            categories in 5 type i.e Xpan BUZZ, 7i BUZZ, Libex Buzz,
            <br /> Block X Buzz and Cyberx{" "}
          </p>
        </div>
        <div className="w-[65%] max-[1024px]:w-full  items-center">
          <Homepage />
        </div>
      </div>
    </section>
  );
};

export default Serves;

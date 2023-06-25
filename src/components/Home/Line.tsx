const Line = () => {
  return (
    <section
      className="
        max-[1024px]:px-20 max-[768px]:px-12 max-sm:px-5 max-md:px-5
      
      py-4 relative mb-20 px-52"
    >
      <div className="bg-[#FFD01F] w-36 h-36  rounded-full  absolute z-0 bottom-9 right-1/4 animtion"></div>
      <div className="border-[#FFD01F] w-36 h-36 border-8 rounded-full flex justify-center items-center absolute z-0 left-1/3 -top-6 animtion">
        <div className="border-[#FFD01F] w-[100px] h-[100px] border-8 rounded-full"></div>
      </div>
      <div className="p-20 flex gap-3 bg-[rgba(255,208,31,0.2)] border-[3px] border-[rgba(255,208,31,0.58)] backdrop-blur-sm rounded-[43px]">
        <p className="text-5xl text-center font-bold">
          “Actions speak louder than words. Our commitment to your success is
          evident in every step we take”
        </p>
      </div>
    </section>
  );
};

export default Line;

import Image from "next/image";
import d from "@/assets/down-arrow.svg";
const Hero = () => {
  return (
    <section
      className="
        max-[1024px]:px-20 max-[768px]:px-12 max-sm:px-5 max-md:px-5
      px-36 py-16 relative mb-20"
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
           rounded-[5rem]  
           flex 
           items-center 
           justify-center 
           gap-10
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
      <div
        className="
      
   
      bg-black h-20 w-20 absolute bottom-5 right-0 left-0 mx-auto rounded-full flex justify-center items-center p-3"
      >
        <Image src={d} alt="s" />
      </div>
    </section>
  );
};

export default Hero;

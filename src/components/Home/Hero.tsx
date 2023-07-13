import Image from "next/image";
import d from "@/assets/down-arrow.svg";
const Hero = () => {
  return (
    <section
      className="
      w-full sm:w-full 
     px-36 sm:px-5 md:px-20 py-16 relative mb-20"
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
           sm:h-[10rem]
           md:h-[21rem]
           md:rounded-[3rem]
           sm:rounded-[3rem]  
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
      
   
      bg-black h-20 w-20 sm:h-10 sm:w-10 md:h-[3em] md:w-[3em] absolute sm:bottom-10 md:bottom-8 bottom-5 right-0 left-0 mx-auto rounded-full flex justify-center items-center p-3"
      >
        <Image src={d} alt="s" />
      </div>
    </section>
  );
};

export default Hero;

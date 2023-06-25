import Image from "next/image";
import DS from "@/assets/aa.svg";
import DS2 from "@/assets/aav.svg";
import classes from "@/components/Hander.module.css";
const Started = () => {
  return (
    <section
      className="
        max-[1024px]:px-20 max-[768px]:px-12 max-sm:px-5 max-md:px-5
      px-36 py-10 overflow-hidden h-[50vh]  relative  bg-[#F1F1F1]"
    >
      <Image src={DS} alt="=" className="absolute left-0 top-0 animtion" />
      <Image src={DS2} alt="=" className="absolute right-0 top-0" />
      <div className="relative z-10">
        <h1 className="font-bold text-center text-5xl my-10">
          Ready to get started?
        </h1>
        <p className="text-center text-[45px] text-[#425466]">
          Supercharge Your Business with GBJ BUZZ's
          <br /> Digital Marketing, AI, and Cybersecurity Services!
        </p>
        <div className="flex justify-center my-5">
          <input
            className="px-10 w-1/3 outline-none rounded-l-lg placeholder:text-2xl"
            placeholder="Enter your email address"
          />
          <button className="px-40 py-5 text-3xl  overflow-hidden flex items-center text-white font-bold bg-[#FFD01F] rounded-xl relative">
            <a className={`${classes.animion_3} flex gap-2 text-black`}>
              Sign Up
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Started;

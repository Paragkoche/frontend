import Footer from "@/components/Footer";
import Hander from "@/components/Hander";
import classes from "@/components/Hander.module.css";
import Image from "next/image";
import DrDP from "@/assets/DrDP.svg";
import Drpriv from "@/assets/drPravin.svg";
import gj from "@/assets/gujan.svg";
import Emp from "@/components/Slider/emp";
import Homepage from "@/components/Slider/comp";
import DS from "@/assets/aa.svg";
import DS2 from "@/assets/aav.svg";
import { CountUp } from "use-count-up";
const About = () => {
  return (
    <>
      <Hander />
      <main className="">
        <section className="px-36 overflow-hidden py-4 my-[100px] relative mb-20 flex items-center ">
          <div className="flex flex-col">
            <h1 className="font-bold text-[100px] leading-[112px]">
              We Build Bridges <br />
              Between
              <span className="text-[rgba(0,0,0,0.5)]">
                {" "}
                Companies <br /> And Customers
              </span>
            </h1>
            <button
              className={
                "p-3 overflow-hidden flex items-center text-white font-bold bg-[#FFD01F] rounded-xl relative w-52 mt-10 "
              }
            >
              <a
                className={`${classes.animion} flex w-full gap-2 justify-between`}
              >
                Contact Us
                <svg
                  width="35"
                  height="30"
                  viewBox="0 0 35 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    width="33.632"
                    height="28.9005"
                    rx="14.4502"
                    transform="matrix(-0.998476 0.0551905 -0.0562848 -0.998415 35.32 28.0903)"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_51_19929"
                        transform="matrix(0.01 0 0 0.0116372 0 -0.0818595)"
                      />
                    </pattern>
                    <image
                      id="image0_51_19929"
                      width="100"
                      height="100"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+klEQVR4nO3dz0obURxH8bvoUqm40VJ8Cn0RoRvbVZVxoU/gwqfwLfQB7Ku0CF2460Lpzor2yGAUBI0JJLlf5p4PZBeYX+7JDPkzyZQiSZIkSZIkSVLTgBXgC7AHbNWep2nAV+AvL/0AVmvP1hygA/7zuvPa8zWF8TGebNaeswlMFqO3W3vWwWPyGL3t2vMOGtPFuAY+1p55sJguRn+/ndozDxaP7y/up4hxUHvmwcIYOYwRBPeMHBgjB8bIgTFyYIwcGCMHxsiBMXJgjBwYIwfGyIExcmCMHBgjB8bIgTFyYIwcGCMHxsiBMXJgjBwYY+ziLAMfgs8o7EoLgH3g9+iB3wBnwMact9kZ4/WFOX7jGXkJrBljgYDPwO2Yw8TJHLbZuWe8vTjf3jlu/zTGAgGH7wT5M8Ntde4ZIUHwpW1OEIyREwRj5ATBGDlBMEZOEIyRE8QYQUGMERTEGEFBjBEUxBhBQYwRFMQYQUGMERTEGEFBjBEUxBhBQYyRFeTOr12zgkzKf2ILCmKMoCDGCApijKAgxggL0v/t6tUMb7/601aB9dKyGb7KmpXLeZ91Hy0wSO+0tCo0yM0ifzQUZfSxSKKl0qL+mkvkuSgtG11zKcn30rL+AlghUf4BR7XXI+3wtTv6AeiibzvAp9prIEmSJEmSJElSefYAxjXAYCIzdLwAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
              </a>
            </button>
          </div>
          <div className="bg-[rgba(255,208,31,0.2)] w-[500px] h-[500px] blur-3xl border-[#FFD01F] absolute rounded-full -right-28"></div>
        </section>
        <section className="px-36 overflow-hidden py-4 my-[100px] relative mb-20">
          <h1 className="text-center uppercase font-bold text-5xl mb-10">
            About Us
          </h1>
          <p className="text-justify text-[40px]">
            GBJ Buzz is a service and product-based company that offers a
            variety of services to help businesses grow and flourish to make a
            strong presence in the market. Grow your business at Junction, began
            spreading its wings 4 years back, in September 2018, with the
            ideation of bringing the best services to the table. Starting with a
            goal of building a brand, to now serving more than 80 clients in
            various sectors and domains, GBJ Buzz has made its way to the
            present where we have conquered many milestones and are still going
            to greater heights. You name it, we have it, if not yet, then we
            will have it soon.
          </p>
        </section>
        <section className="px-36 overflow-hidden py-4 my-[100px] relative mb-10 h-[80vh]  w-full">
          <div className="bg-[rgba(255,208,31,0.8)] absolute p-10 px-28 rounded-r-3xl flex items-center flex-col left-0">
            <Image src={DrDP} alt="=" />

            <h1 className="font-bold text-3xl my-4">Dr. D.P Kothari</h1>
            <p className="text-[#4E4C4C] text-3xl font-semibold">Mentor</p>
          </div>
          <div className="bg-[rgba(0,0,0,0.8)] absolute p-10 px-28 rounded-l-3xl flex  items-center gap-6 right-0 top-40">
            <div className="flex flex-col items-center gap-2">
              <Image src={Drpriv} alt="-" />
              <h1 className="text-[#FFD01F] font-bold text-3xl">
                Dr. Pravin Kshirsagar
              </h1>
              <p className="text-white font-bold text-2xl">Founder</p>
            </div>
            <div className="flex flex-col items-center gap-2 ">
              <Image src={gj} alt="-" />
              <h1 className="text-[#FFD01F] font-bold text-3xl">
                Gunjan Jagnade
              </h1>
              <p className="text-white font-bold text-2xl">CEO & Founder</p>
            </div>
          </div>
        </section>
        <section className="px-36 overflow-hidden p-4 my-[100px] relative mb-20 h-[40vh]">
          <div className=" bg-[rgba(117,117,117,0.8)] p-5 w-[75vw] absolute  left-0 rounded-r-3xl">
            <Emp />
          </div>
        </section>
        <section className="px-36 overflow-hidden py-4  relative mb-20">
          <div className="border-[#FFD01F] w-36 h-36 border-8 rounded-full flex justify-center items-center absolute z-0 left-1/3 -top-6">
            <div className="border-[#FFD01F] w-[100px] h-[100px] border-8 rounded-full "></div>
          </div>
          <div className="bg-[#FFD01F] w-36 h-36  rounded-full  absolute z-0 bottom-9 right-1/4"></div>

          <div
            className="w-full border-2 border-[#A1A1A1] rounded-2xl p-24 relative z-10 backdrop-blur-sm "
            style={{
              boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
            }}
          >
            <Homepage />
          </div>
        </section>
        <section className="px-36 overflow-hidden flex gap-10 justify-center">
          <div>
            <div className="p-5 py-6 text-center rounded-3xl bg-black text-[#FFD01F]">
              <h1 className="text-9xl font-bold">
                <CountUp isCounting end={96} duration={5} />+
              </h1>
              <p className="text-white font-semibold">Completed Projects</p>
            </div>
            <div className="p-5 my-6 py-6 text-center rounded-3xl bg-[#FFD01F] text-black">
              <h1 className="text-9xl font-bold">
                <CountUp isCounting end={111} duration={5} />+
              </h1>
              <p className="text-black font-semibold">Happy Clients</p>
            </div>
          </div>
          <div className="pt-5">
            <div className="p-5 py-6 text-center rounded-3xl bg-black text-[#FFD01F]">
              <h1 className="text-9xl font-bold">
                <CountUp isCounting end={15} duration={5} />+
              </h1>
              <p className="text-white font-semibold">On Going Projects</p>
            </div>
            <div className="p-5 my-6 py-6 text-center rounded-3xl bg-[rgba(0,0,0,0.8)] text-[#FFD01F]">
              <h1 className="text-9xl font-bold">
                <CountUp isCounting end={2} duration={5} />+
              </h1>
              <p className="text-white font-semibold">Offices Through India</p>
            </div>
          </div>
        </section>
        <section className="px-36 py-10 overflow-hidden h-[50vh]  relative  bg-[#F1F1F1]">
          <Image src={DS} alt="=" className="absolute left-0 top-0" />
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
                className="p-2 w-1/3 outline-none rounded-l-lg"
                placeholder="Enter your email address"
              />
              <button className="px-40 py-5  overflow-hidden flex items-center text-white font-bold bg-[#FFD01F] rounded-r-xl relative">
                <a className={`${classes.animion} flex gap-2 text-black`}>
                  Sing Up
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;

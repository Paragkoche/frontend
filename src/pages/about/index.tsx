import Footer from "@/components/Footer";
import Hander from "@/components/Hander";
import classes from "@/components/Hander.module.css";
import Image from "next/image";
import DrDP from "@/assets/DrDP.svg";
import Drpriv from "@/assets/drPravin.svg";
import gj from "@/assets/gujan.svg";
import Emp from "@/components/Slider/emp";
const About = () => {
  return (
    <>
      <Hander />
      <main className="px-36">
        <section className="py-4 my-[100px] relative mb-20 flex items-center ">
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
        <section className="py-4 my-[100px] relative mb-20">
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
        <section className="py-4 my-[100px] relative mb-10 h-[80vh]  w-full">
          <div className="bg-[rgba(255,208,31,0.8)] absolute p-10 px-28 rounded-3xl flex items-center flex-col -left-40">
            <Image src={DrDP} alt="=" />

            <h1 className="font-bold text-3xl my-4">Dr. D.P Kothari</h1>
            <p className="text-[#4E4C4C] text-3xl font-semibold">Mentor</p>
          </div>
          <div className="bg-[rgba(0,0,0,0.8)] absolute p-10 px-28 rounded-l-3xl flex  items-center gap-6 -right-36 top-40">
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
        <section className="p-4 my-[100px] relative mb-20 h-[40vh]">
          <div className=" bg-[rgba(117,117,117,0.8)] p-5 w-[75vw] absolute  -left-[9rem] rounded-r-3xl">
            <Emp />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;

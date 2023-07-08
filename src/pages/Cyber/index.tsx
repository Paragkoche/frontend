import Hander from "@/components/Hander";
import Footer from "@/components/Footer";
import classes from "@/components/Hander.module.css";
import Image from "next/image";
import DS from "@/assets/aa.svg";
import DS2 from "@/assets/aav.svg";
import Safe from "@/assets/Safe-Box.png";
import Frame1 from "@/assets/Frame 59.png";
import Frame2 from "@/assets/Computer.png";
function Cyber() {
  return (
    <div>
      <Hander />
      <main className="lg:w-full">
        {/* first section  start*/}
        <section className="px-36 overflow-hidden py-4 my-[100px] relative mb-20 flex items-center ">
          <div className="flex flex-col">
            <h1 className="font-bold lg:text-[60px] md:text-[50px] leading-[112px]">
              We Can Collaborate <br /> With You
              <span className="text-[rgba(0,0,0,0.5)]">
                {" "}
                To Manage Your
                <br /> Cybersecurity Risk
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
                Get Quote
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
        <hr className=" bg-gray-300 h-1" />

        {/* first section  end*/}
        <section>
          <div className="py-[100px] px-[50px]">
            <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-11">
              <div className="shadow-xl h-[462px] my-4 rounded-[50px] bg-gradient-to-r from-[#FFE789] to-[#ffeeac] hover:scale-105 duration-[400ms]">
                <div className="flex items-center px-5 pt-5">
                  <Image className="mx-auto" src={Safe} alt="-" />
                </div>
                <div className="text-center ">
                  <h2 className="text-[30px] font-bold">Detecting Incident</h2>
                  <p className="text-[20px] text-left px-11">
                    Instantly respond to <br /> security incidents with <br />{" "}
                    our advanced detection <br /> service, ensuring <br />{" "}
                    proactive protection.
                  </p>
                </div>
              </div>
              <div className="shadow-xl h-[462px] my-4 rounded-[50px] bg-gradient-to-r from-[#FFE789] to-[#ffeeac]  hover:scale-105 duration-[400ms]">
                <div className="flex items-center p-5">
                  <Image className="mx-auto" src={Frame1} alt="-" />
                </div>
              </div>
              <div className="shadow-xl h-[462px] my-4 rounded-[50px] bg-gradient-to-r from-[#FFE789] to-[#ffeeac]  hover:scale-105 duration-[400ms]">
                <div className="flex items-center p-5">
                  <Image className="mx-auto" src={Frame2} alt="-" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* eight section start */}
        <section className="px-36 py-10 overflow-hidden lg:h-[90vh]  relative  bg-[#F1F1F1]">
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
        {/* eight section end */}
      </main>
      <Footer />
    </div>
  );
}

export default Cyber;

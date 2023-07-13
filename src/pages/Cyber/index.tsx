import Hander from "@/components/Hander";
import Footer from "@/components/Footer";
import classes from "@/components/Hander.module.css";
import Image from "next/image";
import DS from "@/assets/aa.svg";
import DS2 from "@/assets/aav.svg";
import Safe from "@/assets/Safe-Box.png";
import Frame1 from "@/assets/Frame 59.png";
import Frame2 from "@/assets/Computer.png";
import Frame3 from "@/assets/image 78.png";
import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.png";
import card3 from "@/assets/card3.png";
import card4 from "@/assets/card4.png";
import card5 from "@/assets/card5.png";
import card6 from "@/assets/card6.png";
import Hero2 from "@/assets/hero2.png";
import artical from "@/assets/artical.png";
function Cyber() {
  return (
    <div>
      <Hander />
      <main className="lg:w-full">
        {/* first section  start*/}
        <section className="lg:px-36 overflow-hidden py-4 lg:my-[100px] relative mb-20 flex items-center ">
          <div className="flex flex-col">
            <h1 className="font-bold lg:text-[60px] text-[50px] lg:leading-[112px]">
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
        {/* second section start  */}
        <section>
          <div className="lg:py-[100px] lg:px-[50px] px-2">
            <div className="flex items-center">
              <hr className=" mx-auto bg-[#FFE789] h-2 w-64 rounded my-[30px]" />
            </div>
            <div className="lg:max-w-[1240px] mx-auto md:grid grid-cols-3 gap-11">
              <div className="shadow-xl h-[462px] my-4 rounded-[50px] bg-gradient-to-r from-[#FFE789] to-[#ffeeac] hover:scale-105 duration-[400ms]">
                <div className="flex items-center px-5 pt-5">
                  <Image className="mx-auto h-36 w-36" src={Safe} alt="-" />
                </div>
                <div className="text-center ">
                  <h2 className="text-[30px] font-bold">Detecting Incident</h2>
                  <p className="text-[22px] text-[rgba(0,0,0,0.5)] text-left px-11">
                    Instantly respond to <br /> security incidents with <br />{" "}
                    our advanced detection <br /> service, ensuring <br />{" "}
                    proactive protection.
                  </p>
                </div>
              </div>
              <div className="shadow-xl h-[462px] my-4 rounded-[50px] bg-gradient-to-r from-[#FFE789] to-[#ffeeac]  hover:scale-105 duration-[400ms]">
                <div className="flex items-center px-5 pt-5">
                  <Image className="mx-auto h-36 w-36" src={Frame1} alt="-" />
                </div>
                <div className="text-center ">
                  <h2 className="text-[30px] font-bold">Preventing Incident</h2>
                  <p className="text-[22px] text-[rgba(0,0,0,0.5)] text-left px-11">
                    Proactive measures for <br /> incident prevention <br />{" "}
                    safeguarding your <br /> business from potential <br />{" "}
                    threats and <br />
                    vulnerabilities.
                  </p>
                </div>
              </div>
              <div className="shadow-xl h-[462px] my-4 rounded-[50px] bg-gradient-to-r from-[#FFE789] to-[#ffeeac]  hover:scale-105 duration-[400ms]">
                <div className="flex items-center px-5 pt-5">
                  <Image className="mx-auto h-36 w-36" src={Frame2} alt="-" />
                </div>
                <div className="text-center ">
                  <h2 className="text-[30px] font-bold">Responding Incident</h2>
                  <p className="text-[22px] text-[rgba(0,0,0,0.5)] text-left px-11">
                    Timely response and <br /> expert handling of <br />{" "}
                    security incidents to <br /> minimize damage and <br />{" "}
                    restore normalcy <br /> efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* second section end  */}
        {/* third section start */}
        <section
          className="
          my-30
          max-[1024px]:px-10 max-[768px]:px-12  max-md:px-5
          max-[1024px]:py-10 
          max-[1024px]:p-10 
          max-[768px]:py-10 
          max-[768px]:p-10 
          max-sm:px-5 
          max-sm:p-5  px-36 py-4 relative mb-20 overflow-hidden"
        >
          <div
            className=" border-[#c5c5c4]
            lg
            w-[100%]
            border-2
           overflow-hidden 
           rounded-[4rem]  
           flex 
           items-center 
           justify-center 
           gap-10"
          >
            <div className="lg:px-10 lg:flex w-full items-center justify-between">
              <div className="lg:w-1/2 lg:flex items-center justify-center relative">
                <Image
                  className="h-full w-full rounded-[4rem]  "
                  src={Frame3}
                  alt="-"
                />
              </div>
              <div className="lg:w-1/2">
                <h1 className=" text-5xl font-bold text-center lg:text-left">
                  Xpan Buzz
                </h1>
                <h4 className=" text-3xl font-bold text-center lg:text-left">
                  Digital Marketing Service
                </h4>
                <p className="text-[#5C5C5C] text-center lg:text-left">
                  Your brand growth partner. Expert <br /> social media,
                  content, SEO, and ads <br /> strategies. Boost sales, connect
                  with <br />
                  target audience.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* third section end */}
        {/* four section start  */}
        <section>
          <div className="mx-36 mt-36 mb-10">
            <h1 className="lg:text-[50px] text-[30px] font-bold">
              Our Expertise
            </h1>
            <p className="lg:text-[30px] text-[10px]">
              Leverage our extensive industry expertise to fortify your business{" "}
              <br />
              against cyber threats, providing robust and tailored cybersecurity{" "}
              <br />
              solutions for ultimate protection
            </p>
          </div>
        </section>
        {/* four section end  */}
        {/* five section start  */}
        <section className="relative">
          <div className=" lg:px-36">
            <div className="lg:max-w-[1240px] mx-auto md:grid grid-cols-3 gap-5 ">
              <div className="shadow-xl lg:h-[350px] my-4 rounded-[25px] border-x-1 hover:scale-105 duration-[400ms]">
                <div className="flex items-center px-5">
                  <Image className="mx-auto h-28 w-28" src={card1} alt="-" />
                </div>
                <div className="text-center ">
                  <p className="text-[18px] text-[rgba(0,0,0,0.5)] text-left px-11">
                    <span className="text-[18px] text-black font-bold">
                      Manage Endpoint Security <br />
                    </span>
                    Protect devices from <br /> emerging cyber threats with{" "}
                    <br /> our comprehensive endpoint
                    <br /> security management <br /> proactive protection.
                  </p>
                </div>
              </div>
              <div className="shadow-xl h-[350px] my-4 rounded-[25px] border-x-1 hover:scale-105 duration-[400ms]">
                <div className="flex items-center px-5">
                  <Image className="mx-auto h-28 w-28" src={card2} alt="-" />
                </div>
                <div className="text-center ">
                  <p className="text-[18px] text-[rgba(0,0,0,0.5)] text-left px-11">
                    <span className="text-[18px] text-black font-bold">
                      IT Audit & Compliance <br />
                    </span>
                    Achieve regulatory <br /> compliance and minimize <br /> our
                    risks through IT audits and <br /> expert guidance for{" "}
                    <br /> enhanced security.
                  </p>
                </div>
              </div>
              <div className="shadow-xl h-[350px] my-4 rounded-[25px] border-x-1 hover:scale-105 duration-[400ms]">
                <div className="flex items-center px-5">
                  <Image className="mx-auto h-28 w-28" src={card3} alt="-" />
                </div>
                <div className="text-center ">
                  <p className="text-[18px] text-[rgba(0,0,0,0.5)] text-left px-11">
                    <span className="text-[18px] text-black font-bold">
                      Manage Endpoint Security <br />
                    </span>
                    Take control of endpoint <br /> security with our
                    streamlined <br /> management solutions, <br /> ensuring
                    proactive protection <br /> against cyber threats.
                  </p>
                </div>
              </div>
              <div className="shadow-xl h-[350px] my-4 rounded-[25px] border-x-1 hover:scale-105 duration-[400ms]">
                <div className="flex items-center px-5">
                  <Image className="mx-auto h-28 w-28" src={card4} alt="-" />
                </div>
                <div className="text-center ">
                  <p className="text-[18px] text-[rgba(0,0,0,0.5)] text-left px-11">
                    <span className="text-[18px] text-black font-bold">
                      Infrastructure Security <br />
                    </span>
                    Fortify your infrastructure <br /> with robust security,{" "}
                    <br /> defending against threats <br /> and safeguarding
                    system <br /> integrity.
                  </p>
                </div>
              </div>
              <div className="shadow-xl h-[350px] my-4 rounded-[25px] border-x-1 hover:scale-105 duration-[400ms]">
                <div className="flex items-center px-5">
                  <Image className="mx-auto h-28 w-28" src={card5} alt="-" />
                </div>
                <div className="text-center ">
                  <p className="text-[18px] text-[rgba(0,0,0,0.5)] text-left px-11">
                    <span className="text-[18px] text-black font-bold">
                      Applications Security <br />
                    </span>
                    Secure applications with <br /> comprehensive solutions,{" "}
                    <br /> ensuring integrity and <br /> protection of software{" "}
                    <br /> assets.
                  </p>
                </div>
              </div>
              <div className="shadow-xl h-[350px] my-4 rounded-[25px] border-x-1 hover:scale-105 duration-[400ms]">
                <div className="flex items-center px-5">
                  <Image className="mx-auto h-28 w-28" src={card6} alt="-" />
                </div>
                <div className="text-center ">
                  <p className="text-[18px] text-[rgba(0,0,0,0.5)] text-left px-11">
                    <span className="text-[18px] text-black font-bold">
                      cloud security <br />
                    </span>
                    Safeguard cloud <br /> infrastructure with <br /> advanced
                    security <br /> measures for safety and <br /> resilience
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(255,208,31,0.2)] w-[500px] h-[500px] blur-3xl border-[#FFD01F] absolute rounded-full -right-[10px] -bottom-36"></div>
          </div>
        </section>
        {/* five section end  */}
        {/* six section start  */}
        <section className="lg:py-36">
          <hr className=" bg-gray-300 h-1" />
          <div className="lg:flex lg:px-8 lg:py-16">
            <div className="lg:w-1/2">
              <Image src={Hero2} alt="-" />
            </div>
            <div className="lg:w-1/2 mt-11">
              <h1 className="text-[50px] font-bold">
                We <span className="text-[#FFD01F]">Strive</span> to Provide{" "}
                <span className="text-[#FFD01F]">Excellent</span> Services
              </h1>
              <p className="text-[20px]">
                Our relentless pursuit of excellence fuels our dedication <br />{" "}
                to delivering outstanding services that surpass <br />{" "}
                expectations and ensure unparalleled satisfaction for <br /> our
                valued clients.
              </p>
              <hr className=" bg-[#FFE789] h-2 w-64 rounded my-[30px]" />
            </div>
          </div>
          <hr className=" bg-gray-300 h-1" />
        </section>
        {/* six section end  */}
        {/* seven section start  */}
        <section className="px-16">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <h1 className="text-[50px] font-bold">
                Read <span className="text-[#FFD01F]">Our</span> <br /> News &{" "}
                <span className="text-[#FFD01F]">Articles</span>
              </h1>
              <p className="text-[30px]">
                Stay up-to-date with the <br /> latest trends and insights{" "}
                <br /> in cybersecurity by <br /> exploring our informative{" "}
                <br /> news and articles section.
              </p>
            </div>
            <div className="lg:w-1/2 mx-auto md:grid grid-cols-2 gap-5 ">
              <div className="shadow-xl h-[550px] my-4 rounded-[25px] border-x-1 hover:scale-105 duration-[400ms]">
                <div className="flex items-center">
                  <Image src={artical} alt="-" />
                </div>
                <p className="text-[18px] text-[rgba(0,0,0,0.5)] text-left px-6">
                  <span className=" text-black font-bold">
                    Encryption Vulnerability <br /> Using MD5 and Plain Text{" "}
                    <br />
                    <span className="text-[#FFD01F]">
                      January 8, 2022 <br />
                    </span>
                    252 Comments <br />
                  </span>
                  Discover the dangers of <br /> using MD5 encryption <br /> and
                  plain text, and learn
                  <br /> why robust encryption <br /> methods are crucial for{" "}
                  <br />
                  security
                  <br />
                  <span className="text-[#FFD01F] font-bold">Read More</span>
                </p>
              </div>
              <div className="shadow-xl h-[550px] my-4 rounded-[25px] border-x-1 hover:scale-105 duration-[400ms]">
                <div className="flex items-center">
                  <Image src={artical} alt="-" />
                </div>
                <p className="text-[18px] text-[rgba(0,0,0,0.5)] text-left px-6">
                  <span className=" text-black font-bold">
                    Encryption Vulnerability <br /> Using MD5 and Plain Text{" "}
                    <br />
                    <span className="text-[#FFD01F]">
                      January 8, 2022 <br />
                    </span>
                    252 Comments <br />
                  </span>
                  Discover the dangers of <br /> using MD5 encryption <br /> and
                  plain text, and learn
                  <br /> why robust encryption <br /> methods are crucial for{" "}
                  <br />
                  security
                  <br />
                  <span className="text-[#FFD01F] font-bold">Read More</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className=" bg-gray-300 h-1 my-10" />
        {/* seven section end  */}
        {/* eight section start */}
        <section className="lg:px-36 py-10 overflow-hidden lg:h-[90vh]  relative  bg-[#F1F1F1]">
          <Image src={DS} alt="=" className="absolute left-0 top-0" />
          <Image src={DS2} alt="=" className="absolute right-0 top-0" />
          <div className="relative z-10">
            <h1 className="font-bold text-center text-2xl lg:text-5xl lg:my-10">
              Ready to get started?
            </h1>
            <p className="text-center lg:text-[45px] text-[#425466]">
              Supercharge Your Business with GBJ BUZZ's
              <br /> Digital Marketing, AI, and Cybersecurity Services!
            </p>
            <div className="flex justify-center my-5">
              <input
                className="p-2 lg:w-1/3 outline-none rounded-l-lg"
                placeholder="Enter your email address"
              />
              <button className="lg:px-40 px-11 py-5  overflow-hidden flex items-center text-white font-bold bg-[#FFD01F] rounded-r-xl relative">
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

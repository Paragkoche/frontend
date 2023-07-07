import Footer from "@/components/Footer";
import Hander from "@/components/Hander";
import classes from "@/components/Hander.module.css";
import Image from "next/image";
import SVG from "@/assets/Group1000001683.png";
import Service from "@/assets/service.svg";
import Service3 from "@/assets/servies3.png";
import Service4 from "@/assets/serviece4.png";
import bro from "@/assets/bro.png";
import amico from "@/assets/amico.png";
import Service5 from "@/assets/servies5.png";
import chip from "@/assets/Chip.png";
import tool from "@/assets/Tools.png";
const Services = () => {
  return (
    <>
      <Hander />
      <main className="lg:w-full">
        {/* first section  start*/}
        <section className="px-36 overflow-hidden py-4 my-[100px] relative mb-20 flex items-center ">
          <div className="flex flex-col">
            <h1 className="font-bold text-[100px] leading-[112px]">
              Grow Your Business With
              <span className="text-[rgba(0,0,0,0.5)]">
                {" "}
                Cutting-Edge
                <br /> Technology
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
        {/* first section  end*/}
        {/* second section  start*/}
        <section
          className="
        max-[1024px]:px-10 max-[768px]:px-12  max-md:px-5
          max-[1024px]:py-10 
          max-[1024px]:p-10 
          max-[768px]:py-10 
          max-[768px]:p-10 
          max-sm:px-5 
          max-sm:p-5  px-36 py-4 relative mb-20 overflow-hidden"
        >
          <h1 className=" text-5xl font-bold">
            Unleashing <br /> Your Business Potential <br /> Our Dynamic
            Services
          </h1>

          <div className=" my-10">
            <div className="flex w-full items-center justify-between">
              <ul className="w-1/2">
                <li className="li">
                  <div className="mt-10">
                    <p className="text-[#5C5C5C]">
                      Experience the power of comprehensive digital solutions
                      with GBJBUZZ. As the amalgamation of Xpan Buzz, 7i Buzz,
                      Libex Buzz, Block X Buzz, and Cyber X Buzz, we offer a
                      full range of exclusive premium services. <br />
                      <br /> From digital marketing strategies to data-driven
                      insights, cutting-edge blockchain technology to advanced
                      cyber security solutions, our dynamic services empower
                      your business growth. <br />
                      <br /> Unleash your business potential with our integrated
                      approach, delivering unparalleled results that drive
                      success in the digital landscape.
                    </p>
                  </div>
                </li>

                <li className="li">
                  <p className="text-[#5C5C5C]"></p>
                </li>
              </ul>
              <div className="w-1/2 flex items-center justify-center relative">
                <Image src={SVG} alt="-" />
              </div>
            </div>
          </div>
        </section>
        <hr className="my-10 bg-gray-300 h-1" />
        {/* second section end */}
        {/* third section start */}
        <section
          className="
          my-36
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
            border-b-4
            border-x-[1px]
           overflow-hidden 
           h-[35rem] 
           rounded-b-[5rem]  
           flex 
           items-center 
           justify-center 
           gap-10"
          >
            <div className="px-10 flex w-full items-center justify-between">
              <div className="w-1/2">
                <h1 className=" text-5xl font-bold">Xpan Buzz</h1>
                <h4 className=" text-3xl font-bold">
                  Digital Marketing Service
                </h4>
                <p className="text-[#5C5C5C]">
                  Your brand growth partner. Expert <br /> social media,
                  content, SEO, and ads <br /> strategies. Boost sales, connect
                  with <br />
                  target audience.
                </p>
              </div>
              <div className="w-1/2 flex items-center justify-center relative">
                <Image src={Service3} alt="-" />
              </div>
            </div>
          </div>
        </section>
        {/* third section end */}
        {/* fourth section start */}
        <section
          className="
          my-36
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
            border-b-4
            border-x-[1px]
           overflow-hidden 
           h-[35rem] 
           rounded-b-[5rem]  
           flex 
           items-center 
           justify-center 
           gap-10"
          >
            <div className="w-1/2 px-10 pb-9 flex items-center justify-between relative">
              <Image src={bro} alt="-" />
              <div className="absolute bottom-0 right-28 ">
                <Image src={amico} alt="-" />
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center relative">
              <div className="">
                <h1 className=" text-5xl font-bold">7I Buzz </h1>
                <h4 className=" text-3xl font-bold">
                  AI & Software Based service
                </h4>
                <p className="text-[#5C5C5C]">
                  AI-powered data solutions. Specializing <br /> in analysis,
                  business intelligence, <br /> machine learning. Make informed{" "}
                  <br /> decisions, manage big data.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* fourth section start */}
        {/* fifth section start */}
        <section
          className="
          my-36
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
            border-b-4
            border-x-[1px]
           overflow-hidden 
           h-[35rem] 
           rounded-b-[5rem]  
           flex 
           items-center 
           justify-center 
           gap-10"
          >
            <div className="px-10 flex w-full items-center justify-between">
              <div className="w-1/2">
                <h1 className=" text-5xl font-bold">LibeX Buzz</h1>
                <h4 className=" text-3xl font-bold">
                  EdTech & Traning Platform
                </h4>
                <p className="text-[#5C5C5C]">
                  Edtech platform empowers interns, <br /> enhances product
                  development. <br /> Unleash creativity for market success{" "}
                  <br /> and brand building.
                </p>
              </div>
              <div className="w-1/2 flex items-center justify-center relative">
                <Image src={Service4} alt="-" />
              </div>
            </div>
          </div>
        </section>
        {/* fifth section end */}
        {/* six section start  */}
        <section
          className="
          my-36
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
            border-b-4
            border-x-[1px]
           overflow-hidden 
           h-[35rem] 
           rounded-b-[5rem]  
           flex 
           items-center 
           justify-center 
           gap-10"
          >
            <div className="w-1/2 px-10 flex items-center ">
              <div className="flex flex-col">
                <Image className="mx-5 mb-10" src={chip} alt="-" />
                <Image src={tool} alt="-" />
              </div>
              <Image src={Service5} alt="-" />
            </div>
            <div className="w-1/2 flex items-center justify-center relative">
              <div className="">
                <h1 className=" text-5xl font-bold">Xpan Buzz</h1>
                <h4 className=" text-3xl font-bold">
                  Digital Marketing Service
                </h4>
                <p className="text-[#5C5C5C]">
                  Your brand growth partner. Expert <br /> social media,
                  content, SEO, and ads <br /> strategies. Boost sales, connect
                  with <br />
                  target audience.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* six section end  */}
        <hr className="my-10 bg-gray-300 h-1" />
      </main>
      <Footer />
    </>
  );
};

export default Services;

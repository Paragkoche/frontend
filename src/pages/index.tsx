import Footer from "@/components/Footer";
import Hander from "@/components/Hander";
import Image from "next/image";
import d from "@/assets/down-arrow.svg";
import Homepage from "@/components/Slider/Homepage";
import Blogslider from "@/components/Slider/blogslider";
import BE from "@/assets/BLUE Roof.svg";
import fm from "@/assets/svg my.svg";
import prod from "@/assets/download-p.png";
import { CountUp } from "use-count-up";
import P from "@/assets/p.svg";
import c from "@/assets/co.svg";
import s from "@/assets/soon.svg";
import B from "@/assets/b.svg";
import DS from "@/assets/aa.svg";
import DS2 from "@/assets/aav.svg";
import classes from "@/components/Hander.module.css";
import Cal from "@/assets/conta.svg";
import Conta from "@/assets/cale.svg";
import PPC from "@/assets/ppcont.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Home() {
  return (
    <>
      <Hander />
      <main className="overflow-x-hidden">
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
          <div className="bg-black h-20 w-20 absolute bottom-5 left-1/2 rounded-full flex justify-center items-center p-3">
            <Image src={d} alt="s" />
          </div>
        </section>
        <section className="px-36 py-4 relative mb-20 max-[1024px]:px-20 max-[768px]:px-12 max-sm:px-5 max-md:px-5">
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
        <section
          className="
            max-[1024px]:py-20 
            max-[1024px]:p-10 
            max-[768px]:py-10 
            max-[768px]:p-10 
            max-sm:px-5 
            max-sm:p-5  px-36 py-4 relative mb-20 overflow-hidden"
        >
          <div className="absolute -right-[1.75rem] flex flex-col w-[200px] h-[200px] gap-10 animtion-circ">
            <div className="flex justify-between ">
              <div className="border-8 w-20 h-20 rounded-full border-[#ffcf2381]"></div>
              <div className="border-8 w-20 h-20 rounded-full border-[#FFD123]"></div>
            </div>
            <div className="flex justify-between">
              <div className="border-8 w-20 h-20 rounded-full border-[#FFD123]"></div>
              <div className="border-8 w-20 h-20 rounded-full border-[#ffcf2381]"></div>
            </div>
          </div>
          <div className="absolute bottom-40 -left-[1.75rem] flex flex-col w-[200px] h-[200px] gap-10 animtion-circ">
            <div className="flex justify-between ">
              <div className="border-8 w-20 h-20 rounded-full border-[#ffcf2381]"></div>
              <div className="border-8 w-20 h-20 rounded-full border-[#FFD123]"></div>
            </div>
            <div className="flex justify-between ">
              <div className="border-8 w-20 h-20 rounded-full border-[#FFD123]"></div>
              <div className="border-8 w-20 h-20 rounded-full border-[#ffcf2381]"></div>
            </div>
          </div>
          <div className="absolute bg-[rgba(225,209,35,0.6)] filter w-[520px] h-[520px] blur-[250px] left-1/2 bottom-1/3 z-0 animtion"></div>
          <div className="absolute bg-[rgba(225,209,35,0.6)] filter w-[520px] h-[520px] blur-[250px] left-[12%] top-[23%] z-0 animtion"></div>
          <h1 className="text-center text-5xl font-bold">
            What We{" "}
            <span
              className="text-[#FFD01F] p-2 rounded-3xl"
              style={{
                boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
              }}
            >
              Offer
            </span>
          </h1>
          <div
            className="
           max-[1024px]:gap-5
           max-[768px]:gap-0
          flex relative z-10 flex-wrap mx-auto justify-center gap-20 mt-20"
          >
            <div
              className="w-1/3
            max-[1024px]:w-1/2
            max-[768px]:w-full
            
            "
            >
              {[
                {
                  h: `Website Design
                & Developement`,
                  color: "#FFE47C",
                  p: `We create a website from scratch. It involves designing the website layout, creating the website structure, and developing the website functionality. Website design and development is an important part of digital marketing as it helps businesses create an online presence and reach out to their target audience.`,
                },
                {
                  h: "Data Analysis",
                  color: "#D9D9D9",
                  p: `We your collect data and gain insights into user behavior, traffic sources, conversions, and other important metrics by advance tools. we Analyze metrics such as website traffic, page views, session duration, referral sources, conversion rates, and customer demographics. Identify trends, patterns, and areas of improvement.
                  `,
                },
                {
                  h: "Business Development",
                  color: "#FFD01F",
                  p: `Unlock holistic growth and success with Business Development by GBJ Buzz. Our strategic consulting, digital marketing, technology, HR consulting, and business networking services empower your business. Trust us to maximize your potential and achieve comprehensive growth. Let's unlock your full potential together.`,
                },
              ].map((v, i) => (
                <div
                  className={`p-16 text-center bg-[${v.color}] rounded-[5rem] mb-10`}
                  style={{
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  }}
                >
                  <h1 className="font-bold text-4xl my-3">{v.h}</h1>
                  <p className="text-justify mt-5">{v.p}</p>
                </div>
              ))}
            </div>
            <div
              className="w-1/3 pt-52
              max-[1024px]:pt-0
              max-[768px]:pt-0
              max-[1024px]:w-1/2
             max-[768px]:w-full
            "
            >
              {[
                {
                  h: `Cyber Security `,
                  color: "#FFD01F",

                  p: `GBJ Buzz Cyber Security is your trusted partner in safeguarding your digital assets, offering comprehensive solutions to protect your business from cyber threats. With cutting-edge technologies and expertise, we ensure the security of your sensitive data and fortify your systems against unauthorized access, providing peace of mind in the digital landscape.`,
                },
                {
                  h: "Product Management",
                  color: "",

                  p: `We Gain a deep understanding of the target market and customer needs by conducting market research, analyzing customer feedback, and staying updated with industry trends. Identify pain points, opportunities, and gaps that your digital marketing products or services can address.`,
                },
                {
                  h: "360 Marketing ",
                  color: "#D9D9D9",
                  p: `Experience the power of 360 Degree Marketing with GBJ Buzz. Our comprehensive approach combines online and traditional marketing channels to create a seamless customer journey. Maximize your brand presence and impact with our integrated strategies. Unlock your marketing potential with GBJ Buzz.`,
                },
              ].map((v, i) => (
                <div
                  className={`p-16 text-center bg-[${v.color}] rounded-[5rem] mb-10`}
                  style={{
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  }}
                >
                  <h1 className="font-bold text-4xl my-3">{v.h}</h1>
                  <p className="text-justify mt-5">{v.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className=" py-4 relative mb-44 px-52">
          <div className="border-[20px] border-[#FFD01F] w-36 h-36 rounded-full absolute right-48 animtion"></div>
          <h1 className="text-center font-bold text-5xl mb-10 relative">
            Happy{" "}
            <span
              style={{
                boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
              }}
              className="text-[#FFD01F] p-2 rounded-3xl"
            >
              Clients
            </span>{" "}
            Say
          </h1>
          <div className="p-20 flex gap-3 bg-[rgba(255,208,31,0.2)] border-[3px] border-[rgba(255,208,31,0.58)] backdrop-blur-sm rounded-[43px]">
            <div className="bg-white p-7 w-1/2 rounded-3xl relative">
              <div className="absolute flex gap-10 items-center w-full -top-5">
                <Image src={BE} alt="-" width={150} height={150} />
                <h1 className="p-5 px-20 bg-[#FFD01F] bg-opacity-50 font-bold rounded-full">
                  The Bliss Events
                </h1>
              </div>
              <p className="mt-28 italic text-center">
                "GBJ Buzz has been instrumental in the success of Bliss Events.
                Highly recommended for exceptional event marketing!"
              </p>
              <i className="text-right ml-52 mt-9 italic">
                - Vijay Sir (CEO & Founder)
              </i>
            </div>
            <div className="bg-white p-7 w-1/2 rounded-3xl relative">
              <div className="absolute flex gap-10 items-center w-full -top-5">
                <Image src={fm} alt="-" width={150} height={150} />
                <h1 className="p-5 px-24 bg-[#FFD01F] bg-opacity-50 font-bold rounded-full">
                  MyFit Meals
                </h1>
              </div>
              <p className="mt-28 italic text-center">
                "We owe our business's success to GBJ Buzz. Their services have
                propelled our growth, expanding our online presence and boosting
                customer engagement. Highly recommended!"
              </p>
              <i className="text-right ml-52 mt-9 italic">
                - Amar Sir (CEO & Founder)
              </i>
            </div>
          </div>
        </section>
        <section className=" py-[4rem] mt-20 relative mb-20 px-52 flex gap-10 justify-center items-end">
          <Image
            src={prod}
            width={800}
            alt="-"
            className="absolute z-10 bottom-[0.5rem] left-0 "
          />{" "}
          <div
            style={{
              boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
            }}
            className="bg-[#FFD01F] overflow-hidden  flex w-1/2 h-[40vh]  relative justify-between gap-32 p-16 rounded-3xl"
          >
            <div className={`${classes.animion_1}`}>
              <div
                style={{
                  textShadow:
                    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                className="text-6xl relative z-10 ml-[20rem] font-bold text-center flex flex-col items-center"
              >
                Upcoming <br />
                <p className="text-9xl flex items-start">
                  <CountUp isCounting end={10} duration={5} />
                  <samp className="text-6xl">+</samp>
                </p>
                PRODUCT
              </div>
            </div>
          </div>
          <div
            style={{
              boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
            }}
            className="relative overflow-hidden p-5 h-[60vh] flex flex-col items-center w-1/2 bg-[#D9D9D9] rounded-3xl"
          >
            <div className={`${classes.animion_2} `}>
              <div className="flex gap-5 items-center my-4 relative z-10">
                {[c, P, s, P].map((v, i) => (
                  <div className="flex items-center justify-center rounded-full bg-[#F5F5F7] w-40 h-40">
                    <Image width={60} src={v} alt="-" />
                  </div>
                ))}
              </div>
              <div className="flex gap-5 items-center my-4 pl-[6rem]  relative z-10">
                {[P, c, P, s].map((v, i) => (
                  <div className=" flex items-center justify-center rounded-full bg-[#F5F5F7]  w-40 h-40">
                    <Image width={60} src={v} alt="-" />
                  </div>
                ))}
              </div>
            </div>
            <button
              style={{
                boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
              }}
              className={`overflow-hidden  z-10 relative py-4 px-9 bg-white rounded-2xl mt-10`}
            >
              <a className={`${classes.animion_} font-bold flex gap-2`}>
                Know More
              </a>
            </button>
          </div>
        </section>
        <section className=" py-4 relative mb-20 px-52">
          <div className="bg-[#FFD01F] w-36 h-36  rounded-full  absolute z-0 bottom-9 right-1/4 animtion"></div>
          <div className="border-[#FFD01F] w-36 h-36 border-8 rounded-full flex justify-center items-center absolute z-0 left-1/3 -top-6 animtion">
            <div className="border-[#FFD01F] w-[100px] h-[100px] border-8 rounded-full"></div>
          </div>
          <div className="p-20 flex gap-3 bg-[rgba(255,208,31,0.2)] border-[3px] border-[rgba(255,208,31,0.58)] backdrop-blur-sm rounded-[43px]">
            <p className="text-5xl text-center font-bold">
              “Actions speak louder than words. Our commitment to your success
              is evident in every step we take”
            </p>
          </div>
        </section>
        <section className="py-4 relative mb-20 px-52">
          <h1 className="text-5xl font-bold">Trending Blogs </h1>
          <div className="my-20 h-full">
            <Blogslider />
          </div>
        </section>
        <section className="py-4 relative mb-20 px-52">
          <div className="bg-[#FFD01F] w-36 h-36  rounded-full  absolute z-0 bottom-9 right-1/4 animtion"></div>
          <div className="border-[#FFD01F] w-36 h-36 border-8 rounded-full flex justify-center items-center absolute z-0 left-1/3 -top-6 animtion">
            <div className="border-[#FFD01F] w-[100px] h-[100px] border-8 rounded-full"></div>
          </div>
          <Image className="absolute left-[6rem] animtion" src={B} alt="-" />
          <div
            style={{
              boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
            }}
            className="p-20  gap-3 bg-[rgba(255,208,31,0.2)] border-[3px] border-[rgba(255,208,31,0.58)] backdrop-blur-sm rounded-[43px]"
          >
            <h1 className="text-center text-6xl font-bold">Happines</h1>
            <div className="flex gap-12 justify-center">
              <div className="flex flex-col items-center">
                <div
                  style={{
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  }}
                  className=" relative w-72 h-72 border-[#FFD01F] border-[35px] rounded-full flex justify-center items-center font-bold text-6xl"
                >
                  <div
                    style={{
                      boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                    }}
                    className="absolute bg-white p-4 rounded-full -top-[5rem] -right-[3rem]"
                  >
                    <Image src={Cal} alt="-" />
                  </div>
                  <CountUp isCounting end={91} duration={5} />+
                </div>
                <h1 className="font-bold text-4xl mt-5 text-center">Clients</h1>
              </div>
              <div className="flex flex-col items-center mt-52">
                <div
                  style={{
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  }}
                  className="relative w-72 h-72 border-[#FFD01F] border-[35px] rounded-full flex justify-center items-center font-bold text-6xl"
                >
                  <div
                    style={{
                      boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                    }}
                    className="absolute bg-white p-4 rounded-full -top-[5rem] -right-[3rem]"
                  >
                    <Image src={PPC} alt="-" />
                  </div>
                  <CountUp isCounting end={96} duration={5} />%
                </div>
                <h1 className="font-bold text-4xl mt-5 text-center ">
                  Clients Retention{" "}
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <div
                  style={{
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  }}
                  className="relative w-72 h-72 border-[#FFD01F] border-[35px] rounded-full flex justify-center items-center font-bold text-6xl"
                >
                  <div
                    style={{
                      boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                    }}
                    className="absolute bg-white p-4 rounded-full -top-[5rem] -right-[3rem]"
                  >
                    <Image src={Conta} alt="-" />
                  </div>
                  <CountUp isCounting end={5} duration={5} />+{" "}
                </div>
                <h1 className="font-bold text-4xl mt-5 text-center">
                  Years Of
                  <br /> Experience 
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="px-36 py-10 overflow-hidden h-[50vh]  relative  bg-[#F1F1F1]">
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
}

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

export default function Home() {
  return (
    <>
      <Hander />
      <main className="px-36">
        <section className="py-4 relative mb-20">
          <div className="bg-[#FFD01F] p-10 rounded-3xl flex items-center justify-center gap-10">
            <svg
              width="400"
              height="378"
              viewBox="0 0 400 378"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M247.555 7.94565C224.284 1.62773 199.927 -0.446019 175.735 1.90039C143.899 4.99448 113.34 15.6446 86.7588 32.9161C60.1908 50.2007 38.4031 73.5593 23.3669 100.946C8.33292 128.336 0.481577 158.89 0.525575 189.921C0.569572 220.95 8.51111 251.49 23.6353 278.836C38.7595 306.181 60.6066 329.482 87.2471 346.681C109.519 361.055 142.653 371.023 171.439 375.654C176.837 376.523 182.082 377.202 187.076 377.688V361.211V349.637C187.076 340.379 180.197 332.605 171.181 330.479C144.697 324.231 119.108 312.539 113.773 310.03C113.098 309.713 112.445 309.346 111.82 308.937C91.9131 295.872 75.5658 278.297 64.199 257.751C52.6518 236.869 46.5801 213.552 46.5515 189.864C46.5075 166.173 52.5022 142.843 63.99 121.932C75.4778 101.019 92.1001 83.1736 112.39 69.9902C132.679 56.7913 156.011 48.6614 180.322 46.2996C196.975 44.6877 213.732 45.8114 229.894 49.5828C242.242 52.4592 255.69 47.221 260.527 35.8364C265.367 24.4519 259.802 11.2706 247.555 7.94565Z"
                fill="black"
              />
              <path
                d="M238.878 118.398C243.513 114.044 251.111 117.328 251.111 123.685V187.196C251.111 188.168 250.324 188.956 249.351 188.956H172.144C169.155 188.956 167.707 185.301 169.883 183.253L238.878 118.398Z"
                fill="black"
              />
              <path
                d="M257.385 321.63L251.998 323.915V319.345V306.043V289.803V268.83V254.141V252.672V250.47V249.408V248.348V247.286V246.145V245.083V244.023V242.96V241.901V240.757V239.697V238.637V237.575V236.434V235.371V234.312V233.249V232.108V231.046V229.986V228.926V227.782V225.66V224.6V223.457V222.397V221.335V220.275V219.213V218.071V215.949V214.889V213.746V211.624V210.564V208.36V206.238V205.095V204.035V201.913V200.853V200.606V200.444V200.362L251.912 200.118V199.872L251.745 199.546L251.661 199.137L251.492 198.812L251.408 198.649L251.325 198.487V198.403L251.155 198.24L251.072 198.077L250.902 197.833L250.735 197.752L250.566 197.587L250.399 197.424L250.229 197.343H250.062L249.893 197.262L249.809 197.18H249.64H249.472H248.21H244.758H238.361H212.433H194.335H178.678H162.095H160.243H159.064H158.897H158.811L158.727 197.262H158.644L157.548 197.424L156.708 197.668L155.865 197.996L153.846 199.137L151.32 201.587L141.049 212.605L126.992 227.62L126.655 228.027L126.488 228.273L126.319 228.598L126.066 229.089L125.898 229.414V229.661V230.149V230.639V231.211L125.982 231.699L126.066 231.945L126.151 232.271L126.319 232.596L126.488 232.843L126.655 233.087L126.825 233.249L127.075 233.577L127.328 233.903L127.581 234.149L127.834 234.312L128.255 234.556L128.677 234.8L129.181 234.965L129.937 235.127H131.453H134.568H139.786H161.336H178.341H191.136H198.123H201.068V235.29V238.228V252.265V273.237V301.311V322.283V343.421V364.393V376.47V377.614H201.405H214.369L228.932 375.98L238.191 374.676L248.546 372.879L261.594 369.288L278.597 363.087L291.814 356.804L306.46 349.05L322.96 337.789L337.606 325.956L346.362 317.632L354.442 308.655L364.124 296.332L372.204 284.745L378.854 272.993L385.251 259.691L389.207 249.245L392.744 237.819L395.857 224.273L397.542 213.746L398.552 203.544L399.478 197.099H398.552H377.759H345.099H300.4H284.154L276.157 197.996L271.273 199.384L266.981 202.729L263.613 207.054L262.351 210.645L261.174 215.378L262.351 220.6L263.613 224.926L266.981 229.17L270.18 232.189L272.116 233.249L272.452 233.414L272.622 233.496L272.789 233.577L272.958 233.658L273.126 233.74L273.295 233.821L273.546 233.903L273.799 233.984L273.968 234.065L274.221 234.149L274.472 234.23L274.725 234.312L274.978 234.393L275.231 234.474L275.484 234.556L275.82 234.637L276.157 234.718L276.494 234.8L276.83 234.883L277.25 234.965L277.84 235.046L278.43 235.127L279.103 235.209L279.609 235.29H297.285H344.763H346.362H348.298H349.224V235.371V236.025L348.718 237.819L347.539 240.841L346.613 242.716L345.099 246.063L343.5 249.245L341.648 252.918L338.953 257.488L335.501 262.954L331.125 269.158L327.168 274.216L322.96 279.032L319.591 282.704L314.963 287.193L309.828 291.925L304.355 296.332L298.717 300.657L295.096 303.105L288.952 307.268L280.029 312.165L271.022 316.57L264.539 319.345L257.385 321.63Z"
                fill="black"
              />
            </svg>

            <h1 className="text-[120px] font-bold">
              Grow <span className="font-normal"> your </span>
              <br /> Business <span className="font-normal">
                at{" "}
              </span> <br /> Junction
            </h1>
          </div>
          <div className="bg-black h-20 w-20 absolute -bottom-3 left-1/2 rounded-full flex justify-center items-center p-3">
            <Image src={d} alt="s" />
          </div>
        </section>
        <section className="py-4 relative mb-20">
          <div className="border-[#FFD01F] w-36 h-36 border-8 rounded-full flex justify-center items-center absolute z-0 left-1/3 -top-6">
            <div className="border-[#FFD01F] w-[100px] h-[100px] border-8 rounded-full "></div>
          </div>
          <div className="bg-[#FFD01F] w-36 h-36  rounded-full  absolute z-0 bottom-9 right-1/4"></div>
          <div
            style={{
              backgroundImage:
                "radial-gradient(98.72% 792.15% at 0% 0.1%, rgba(193, 193, 193, 0.357) 0%, rgba(234, 234, 234, 0.153) 100%)",
              backdropFilter: "blur(7px)",
            }}
            className=" p-20 py-40 rounded-xl border border-[#A2A2A2] relative z-10 flex justify-between items-center"
          >
            <div className="w-1/3">
              <h1 className="text-5xl font-bold mb-3">Services</h1>
              <p>
                The services provide by GBJ buzz helps to grow your business at
                one Place with the wide verity of services categories in 4 type
                i.e Xpan BUZZ , 7i BUZZ , Libex Buzz and Block X BUZZ{" "}
              </p>
            </div>
            <div className="w-[65%] items-center">
              <Homepage />
            </div>
          </div>
        </section>
        <section className="py-4 relative mb-20">
          <div className="absolute bg-[rgba(225,209,35,0.6)] filter w-[520px] h-[520px] blur-[250px] left-1/2 bottom-1/3 z-0"></div>
          <h1 className="text-center text-5xl font-bold">
            What We <span className="text-[#FFD01F]">Offer</span>
          </h1>
          <div className="flex relative z-10 flex-wrap mx-auto justify-center gap-20 mt-20">
            <div className="w-1/3 ">
              {[
                {
                  h: `Website Design
                & Developement`,
                  p: `we create a website from scratch. It involves designing the website layout, creating the website structure, and developing the website functionality. Website design and development is an important part of digital marketing as it helps businesses create an online presence and reach out to their target audience.`,
                },
                {
                  h: "Data Analysis",
                  p: `we your collect data and gain insights into user behavior, traffic sources, conversions, and other important metrics by advance tools. we Analyze metrics such as website traffic, page views, session duration, referral sources, conversion rates, and customer demographics. Identify trends, patterns, and areas of improvement.
                  `,
                },
                {
                  h: "Business Development",
                  p: `Unlock holistic growth and success with Business Development by GBJ Buzz. Our strategic consulting, digital marketing, technology, HR consulting, and business networking services empower your business. Trust us to maximize your potential and achieve comprehensive growth. Let's unlock your full potential together.`,
                },
              ].map((v, i) => (
                <div
                  className="p-14 text-center bg-[#FFD01F] rounded-lg mb-10"
                  style={{
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  }}
                >
                  <h1 className="font-bold text-4xl my-3">{v.h}</h1>
                  <p className="text-justify mt-5">{v.p}</p>
                </div>
              ))}
            </div>
            <div className="w-1/3 pt-10">
              {[
                {
                  h: `Cyber Security `,
                  p: `GBJ Buzz Cyber Security is your trusted partner in safeguarding your digital assets, offering comprehensive solutions to protect your business from cyber threats. With cutting-edge technologies and expertise, we ensure the security of your sensitive data and fortify your systems against unauthorized access, providing peace of mind in the digital landscape.`,
                },
                {
                  h: "Product Management",
                  p: `We Gain a deep understanding of the target market and customer needs by conducting market research, analyzing customer feedback, and staying updated with industry trends. Identify pain points, opportunities, and gaps that your digital marketing products or services can address.`,
                },
                {
                  h: "360 Marketing ",
                  p: `Experience the power of 360 Degree Marketing with GBJ Buzz. Our comprehensive approach combines online and traditional marketing channels to create a seamless customer journey. Maximize your brand presence and impact with our integrated strategies. Unlock your marketing potential with GBJ Buzz.`,
                },
              ].map((v, i) => (
                <div
                  className="p-14 text-center bg-[#FFD01F] rounded-lg mb-10"
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
        <section className="py-4 relative mb-20 px-52">
          <div className="border-[20px] border-[#FFD01F] w-36 h-36 rounded-full absolute right-48"></div>
          <h1 className="text-center font-bold text-5xl mb-10 relative">
            Happy <span className="text-[#FFD01F]">Clients</span> Say
          </h1>
          <div className="p-20 flex gap-3 bg-[rgba(255,208,31,0.2)] border-[3px] border-[rgba(255,208,31,0.58)] backdrop-blur-sm rounded-[43px]">
            <div className="bg-white p-7 w-1/2 rounded-md relative">
              <div className="absolute flex gap-10 items-center w-full -top-5">
                <Image src={BE} alt="-" width={150} />
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
            <div className="bg-white p-7 w-1/2 rounded-md relative">
              <div className="absolute flex gap-10 items-center w-full -top-5">
                <Image src={fm} alt="-" width={150} />
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
        <section className="py-[4rem] mt-20 relative mb-20 px-52 flex gap-10 justify-center">
          <div className="bg-[#FFD01F] flex  relative justify-between gap-32 p-16 rounded-lg">
            <Image
              src={prod}
              width={500}
              alt="-"
              className="absolute bottom-0 -left-16 "
            />
            <div className="text-5xl ml-[17rem] font-bold text-center">
              Upcoming <br />
              <p className="text-9xl">
                <CountUp isCounting end={10} duration={5} />+
              </p>
              PRODUCT
            </div>
          </div>
          <div className="p-5 flex flex-col items-center w-1/2 bg-[#D9D9D9] rounded-3xl">
            <div>
              <div className="flex gap-5 items-center my-4">
                {[c, P, s, P].map((v, i) => (
                  <div className="flex items-center justify-center rounded-full bg-[#F5F5F7] w-20 h-20">
                    <Image width={50} src={v} alt="-" />
                  </div>
                ))}
              </div>
              <div className="flex gap-5 items-center my-4">
                {[P, c, P, s].map((v, i) => (
                  <div className="flex items-center justify-center rounded-full bg-[#F5F5F7] w-20 h-20">
                    <Image width={50} src={v} alt="-" />
                  </div>
                ))}
              </div>
            </div>
            <button className="py-4 px-9 bg-white rounded-2xl mt-10">
              Know More
            </button>
          </div>
        </section>
        <section className="py-4 relative mb-20 px-52">
          <div className="bg-[#FFD01F] w-36 h-36  rounded-full  absolute z-0 bottom-9 right-1/4"></div>
          <div className="border-[#FFD01F] w-36 h-36 border-8 rounded-full flex justify-center items-center absolute z-0 left-1/3 -top-6">
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
          <div className="my-10 h-full">
            <Blogslider />
          </div>
        </section>
        <section className="py-4 relative mb-20 px-52">
          <div className="bg-[#FFD01F] w-36 h-36  rounded-full  absolute z-0 bottom-9 right-1/4"></div>
          <div className="border-[#FFD01F] w-36 h-36 border-8 rounded-full flex justify-center items-center absolute z-0 left-1/3 -top-6">
            <div className="border-[#FFD01F] w-[100px] h-[100px] border-8 rounded-full"></div>
          </div>
          <div className="p-20  gap-3 bg-[rgba(255,208,31,0.2)] border-[3px] border-[rgba(255,208,31,0.58)] backdrop-blur-sm rounded-[43px]">
            <h1 className="text-center text-5xl font-bold">Happines</h1>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className="w-52 h-52 border-[#FFD01F] border-[20px] rounded-full flex justify-center items-center font-bold text-6xl">
                  <CountUp isCounting end={91} duration={5} />+
                </div>
                <h1 className="font-bold text-2xl">Clients</h1>
              </div>
              <div className="flex flex-col items-center mt-52">
                <div className="w-52 h-52 border-[#FFD01F] border-[20px] rounded-full flex justify-center items-center font-bold text-6xl">
                  <CountUp isCounting end={96} duration={5} />%
                </div>
                <h1 className="font-bold text-2xl">Clients Retention </h1>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-52 h-52 border-[#FFD01F] border-[20px] rounded-full flex justify-center items-center font-bold text-6xl">
                  <CountUp isCounting end={5} duration={5} />+{" "}
                </div>
                <h1 className="font-bold text-2xl">Years Of Experience </h1>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

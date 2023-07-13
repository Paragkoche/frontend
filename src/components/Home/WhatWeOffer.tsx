import Image from "next/image";
import SVG from "@/assets/young men at work.svg";
import Computer from "@/assets/computer.svg";
const WhatWeOffer = () => {
  return (
    <section
      className="
       w-full px-96 md:px-5 sm:px-5 py-4 relative mb-20 overflow-hidden"
    >
      <h1 className="text-center  text-5xl font-bold ">
        What We{" "}
        <span
          className="text-[#FFD01F] p-2  rounded-3xl"
          style={{
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
          }}
        >
          Offer
        </span>
      </h1>
      <p className="text-center text-5xl my-3 font-bold text-[rgba(0,0,0,0.6)]">
        The Complete Solution
        <br /> for Your Business
        <br /> Growth
      </p>
      <div className=" my-20">
        <div className="w-1/2 sm:w-full flex flex-col gap-4">
          <h1 className="text-[#001F51] text-4xl font-bold sm:text-center ">
            Accelerate Your Business Growth at Junction
          </h1>
          <p className="text-[#5C5C5C]">
            Supercharge your business growth at Junction. Our proven strategies
            and expertise propel your success in the competitive market.
          </p>
        </div>
        <div className="flex w-full sm:flex-col items-center justify-between">
          <ul className="w-1/2 sm:w-full">
            <li className="li">
              <div>
                <h1 className="text-lg font-bold mb-2">Web Development </h1>
                <p className="text-[#5C5C5C]">
                  we specialize in providing top-notch web development services.
                  Our team of experts is dedicated to creating powerful and
                  visually stunning websites that enhance your online presence
                </p>
              </div>
            </li>
            <li className="li">
              <h1 className="text-lg font-bold mb-2">Cyber Security </h1>
              <p className="text-[#5C5C5C]">
                Committed to protecting your business with robust cyber
                security. Rest easy knowing your valuable data and assets are
                secure.
              </p>
            </li>
            <li className="li">
              <h1 className="text-lg font-bold mb-2">Data Analysis</h1>
              <p className="text-[#5C5C5C]">
                Actionable insights through advanced data analysis. Uncover
                trends, customer behavior, and growth opportunities to optimize
                strategies and maximize profitability. Empower your business
                with data.
              </p>
            </li>
          </ul>
          <div className="w-1/2 sm:w-full flex items-center justify-center relative">
            <Image src={SVG} alt="-" />
            <div className="p-5 bg-white rounded-full absolute top-10">
              <Image src={Computer} alt="=" />
            </div>
            <div className="p-5 bg-white rounded-full absolute left-10">
              <Image src={Computer} alt="=" />
            </div>
            <div className="p-5 bg-white rounded-full absolute bottom-10">
              <Image src={Computer} alt="=" />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse w-full items-center justify-between sm:pt-9">
          <div className="w-1/2 sm:w-full flex items-center justify-center relative">
            <Image src={SVG} alt="-" />
            <div className="p-5  bg-white rounded-full absolute circle ">
              <Image src={Computer} alt="=" />
            </div>
            <div className="p-5  bg-white rounded-full absolute circle2 ">
              <Image src={Computer} alt="=" />
            </div>
            <div className="p-5 bg-white rounded-full absolute circle3">
              <Image src={Computer} alt="=" />
            </div>
          </div>
          <ul className="w-1/2 sm:w-full sm:pb-20">
            <li className="li">
              <div>
                <h1 className="text-lg font-bold mb-2">Business Development</h1>
                <p className="text-[#5C5C5C]">
                  Ignite your business growth with our comprehensive development
                  services. We leverage proven strategies and expertise to drive
                  your success in today's dynamic market.
                </p>
              </div>
            </li>
            <li className="li">
              <h1 className="text-lg font-bold mb-2">Product Management</h1>
              <p className="text-[#5C5C5C]">
                Optimize your product success with our expert product management
                services. From ideation to launch, we ensure efficient planning,
                development, and market positioning for maximum impact.
              </p>
            </li>
            <li className="li">
              <h1 className="text-lg font-bold mb-2">360 Marketing </h1>
              <p className="text-[#5C5C5C]">
                Amplify your brand reach and engagement with our comprehensive
                360 marketing services. From strategic planning to execution, we
                cover all aspects to deliver impactful and integrated marketing
                campaigns.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* <div
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
        </div> *
      </div> */}
    </section>
  );
};

export default WhatWeOffer;

const WhatWeOffer = () => {
  return (
    <section
      className="
        max-[1024px]:px-20 max-[768px]:px-12  max-md:px-5
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
  );
};

export default WhatWeOffer;

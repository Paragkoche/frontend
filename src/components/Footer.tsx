import classes from "./Hander.module.css";
import imag from "@/assets/download.svg";
import yt from "@/assets/youtube.svg";
import tw from "@/assets/twitter.svg";
import IN from "@/assets/instagram.svg";
import ld from "@/assets/linkedin.svg";
import MD from "@/assets/medium.svg";
import pin from "@/assets/pinterest.svg";
import fb from "@/assets/facebook.svg";
import Image from "next/image";

import Logo from "./Logo";
export default () => {
  return (
    <footer
      className="
    max-[1024px]:px-20 
    px-36 sm:px-5 md:px-20 py-20 bg-black w-full flex md:justify-center"
    >
      <div className="flex flex-col flex-wrap gap-20 w-full">
        <div
          className="flex 
        max-[1024px]:flex-col 
        max-[1024px]:gap-20 
        sm:flex-col
        sm:gap-10
       md:flex-col
      

md:gap-10       text-[#FFD01F] justify-between 
        w-full
        "
        >
          <div className="md:flex flex gap-20 md:gap-[5em] sm:flex-col">
            <div className="flex flex-col gap-3">
              <h1 className="underline text-3xl ">Services</h1>
              <ul className="flex flex-col gap-1 border-l-2 border-[#FFD01F] ">
                <li>
                  <i className="text-xl mr-3">-</i>
                  Performance Marketing
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>
                  360 Marketing
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>
                  Digital marketing{" "}
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>
                  Mobile App Development
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>
                  Web Development
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>
                  Seo (search engine optimization)
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>
                  Ai automation{" "}
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>
                  ADV Camping{" "}
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="underline text-3xl ">DIGITAL TRANSFORMATION </h1>
              <ul className="flex flex-col gap-1 border-l-2 border-[#FFD01F]">
                <li>
                  {" "}
                  <i className="text-xl mr-3">-</i>Saas Platforms
                </li>
                <li>
                  {" "}
                  <i className="text-xl mr-3">-</i>Paas Platforms
                </li>
                <li>
                  {" "}
                  <i className="text-xl mr-3">-</i>Al Development
                </li>
                <li>
                  {" "}
                  <i className="text-xl mr-3">-</i>ML Development
                </li>
                <li>
                  {" "}
                  <i className="text-xl mr-3">-</i>Digital Product Development
                </li>
                <li>
                  {" "}
                  <i className="text-xl mr-3">-</i>Cyber Security Services{" "}
                </li>
                <li>
                  {" "}
                  <i className="text-xl mr-3">-</i>Healthcare Portal Development
                </li>
                <li>
                  {" "}
                  <i className="text-xl mr-3">-</i>Progressive Web App
                </li>
              </ul>
            </div>
          </div>
          <div className="flex sm:flex-col gap-14 md:gap-[5em]">

            <div className="flex flex-col gap-3">
              <h1 className="underline text-3xl ">USEFUL LINKS </h1>
              <ul className="flex flex-col gap-1 border-l-2 border-[#FFD01F]">
                <li>
                  <i className="text-xl mr-3">-</i>Contact US{" "}
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>About Us{" "}
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>Blogs{" "}
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>Testimonials{" "}
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>Assets{" "}
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>Services{" "}
                </li>
                <li>
                  <i className="text-xl mr-3">-</i>Medium{" "}
                </li>
              </ul>
            </div>
            <div
              className="
             max-[1024px]:w-full max-[768px]:w-full max-sm:w-full max-md:w-full 
             max-[1024px]:gap-3 max-[768px]:gap-3 max-sm:gap-3 max-md:gap-3 
             
          flex flex-col items-center gap-3"
            >
              <Image src={imag} alt="-" />
              <button
                className={
                  "py-5  overflow-hidden flex items-center justify-center text-white font-bold bg-[#FFD01F] rounded-xl relative px-24  max-[1024px]:w-full max-[768px]:w-full max-sm:w-full max-md:w-full "
                }
              >
                <a className={`${classes.animion}   `}>Contact US</a>
              </button>
            </div>
          </div>
        </div>
        <div
          className="
          gap-4
           w-full
        flex justify-between md:justify-center flex-wrap"
        >
          <div className="flex flex-wrap  items-center gap-5">
            <Logo />
            <div>
              <div className="bg-[#ffffff33] flex justify-center text-lg font-bold text-white relative overflow-hidden rounded-tl-md rounded-br-md py-2 px-2  mb-3">
                <p className={`${classes.animion} text-lg`}>
                  {" "}
                  Subscribe For Trending
                  <span className={"text-[#FFD01F] p-5 "}>Newsletter</span>
                </p>
              </div>
              <div className="flex gap-3 items-center flex-wrap">
                <input
                  className="outline-none h-12 w-full rounded-full p-2"
                  type="email"
                  name=""
                  placeholder="Email"
                  id=""
                  style={{
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  }}
                />
                <button
                  style={{
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
                  }}
                  className="relative  bg-[#FFD01F] overflow-hidden py-2 rounded-full px-3 "
                >
                  <p className={classes.animion}>Subscribe</p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#ffD01F] p-1 rounded-full h-14 flex items-center justify-center">
              <Image src={fb} alt="-" />
            </div>
            <div className="bg-[#ffD01F] p-1 rounded-full h-14 flex items-center justify-center">
              <Image src={IN} alt="-" />
            </div>
            <div className="bg-[#ffD01F] p-1 rounded-full h-14 flex items-center justify-center">
              <Image src={ld} alt="-" />
            </div>
            <div className="bg-[#ffD01F] p-1 rounded-full h-14 flex items-center justify-center">
              <Image src={yt} alt="-" />
            </div>
            <div className="bg-[#ffD01F] p-1 rounded-full h-14 flex items-center justify-center">
              <Image src={tw} alt="-" />
            </div>
            <div className="bg-[#ffD01F] p-1 rounded-full h-14 flex items-center justify-center">
              <Image src={pin} alt="-" />
            </div>
            <div className="bg-[#ffD01F] p-1 rounded-full h-14 flex items-center justify-center">
              <Image src={MD} alt="-" />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#ffD01F] p-2 rounded-full  flex items-center justify-center">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66668 19.3337C2.02501 19.3337 1.47551 19.105 1.01818 18.6477C0.560845 18.1903 0.332568 17.6412 0.333345 17.0003V3.00033C0.333345 2.35866 0.562012 1.80916 1.01935 1.35183C1.47668 0.894494 2.02579 0.666216 2.66668 0.666994H21.3333C21.975 0.666994 22.5245 0.895661 22.9818 1.35299C23.4392 1.81033 23.6675 2.35944 23.6667 3.00033V17.0003C23.6667 17.642 23.438 18.1915 22.9807 18.6488C22.5233 19.1062 21.9742 19.3344 21.3333 19.3337H2.66668ZM12 11.167L21.3333 5.33366V3.00033L12 8.83366L2.66668 3.00033V5.33366L12 11.167Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p className="text-[#ffD01F] font-bold text-2xl">
                  team@gbjbuzz.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#ffD01F] p-1 rounded-full  flex items-center justify-center ">
                  <svg
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7713 25.9508C21.2155 25.9508 18.7242 25.3861 16.2975 24.2568C13.8708 23.1274 11.7211 21.6216 9.84835 19.7394C7.97562 17.8572 6.46984 15.7023 5.33099 13.2748C4.19214 10.8473 3.62231 8.35604 3.62152 5.80095V5.17684C3.62152 4.9589 3.64133 4.75086 3.68096 4.55273H10.6353L11.7349 10.5264L8.34692 13.9441C9.17906 15.3706 10.2244 16.708 11.4829 17.9562C12.7414 19.2044 14.1232 20.2842 15.6282 21.1956L19.0757 17.7482L25.0196 18.937V25.8913C24.8214 25.9111 24.6134 25.9262 24.3954 25.9365C24.1775 25.9468 23.9695 25.9516 23.7713 25.9508Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p className="text-[#ffD01F] font-bold text-2xl">
                  +91 - 7020107390
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

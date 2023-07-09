import Logo from "./Logo";
import classes from "./Hander.module.css";
import Link from "next/link";
import NaveBar from "@/assets/menu-bar.svg";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export default () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="max-w:[1240px] sm:px-4 px-36 md:px-4 py-6 mx-auto shadow-md sm:gap-5 flex items-center justify-between   ">
        <div className="font-sans tracking-widest ">
          <Link className="flex items-center gap-2" href="/">
            <Logo className="max-sm:w-[50px] " />
            <h1 className="font-bold text-3xl md:text-2xl sm:text-xl">
              GBJ BUZZ
            </h1>
          </Link>
        </div>

        <ul className="lg:flex md:flex 2xl:flex md:gap-5 gap-12  sm:hidden md:text-[1.2em]  text-2xl ">
          <li>Service</li>
          <li>Portfolio</li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>Contact</li>
          <li>Blogs</li>
        </ul>
        <div className="flex gap-2">
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-4xl  lg:hidden md:hidden block"
            />
          ) : (
            <Image
              className="hidden max-sm:block max-md:block "
              height={50}
              onClick={() => setToggle(!toggle)}
              src={NaveBar}
              alt="-"
            />
            // <AiOutlineMenu
            //   onClick={() => setToggle(!toggle)}
            //   className="text-4xl lg:hidden md:hidden block"
            // />
          )}

          <button
            style={{
              boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
            }}
            className={
              "p-3 sm:p-1 overflow-hidden flex text-black items-center  font-bold bg-[#FFD01F] rounded-xl relative"
            }
          >
            <a
              className={`${classes.animion} sm:text-[12px] md:text-[12px] flex items-center gap-2`}
            >
              Request Quote
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
                    style={{
                      filter: "invert(1)",
                    }}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+klEQVR4nO3dz0obURxH8bvoUqm40VJ8Cn0RoRvbVZVxoU/gwqfwLfQB7Ku0CF2460Lpzor2yGAUBI0JJLlf5p4PZBeYX+7JDPkzyZQiSZIkSZIkSVLTgBXgC7AHbNWep2nAV+AvL/0AVmvP1hygA/7zuvPa8zWF8TGebNaeswlMFqO3W3vWwWPyGL3t2vMOGtPFuAY+1p55sJguRn+/ndozDxaP7y/up4hxUHvmwcIYOYwRBPeMHBgjB8bIgTFyYIwcGCMHxsiBMXJgjBwYIwfGyIExcmCMHBgjB8bIgTFyYIwcGCMHxsiBMXJgjBwYY+ziLAMfgs8o7EoLgH3g9+iB3wBnwMact9kZ4/WFOX7jGXkJrBljgYDPwO2Yw8TJHLbZuWe8vTjf3jlu/zTGAgGH7wT5M8Ntde4ZIUHwpW1OEIyREwRj5ATBGDlBMEZOEIyRE8QYQUGMERTEGEFBjBEUxBhBQYwRFMQYQUGMERTEGEFBjBEUxBhBQYyRFeTOr12zgkzKf2ILCmKMoCDGCApijKAgxggL0v/t6tUMb7/601aB9dKyGb7KmpXLeZ91Hy0wSO+0tCo0yM0ifzQUZfSxSKKl0qL+mkvkuSgtG11zKcn30rL+AlghUf4BR7XXI+3wtTv6AeiibzvAp9prIEmSJEmSJElSefYAxjXAYCIzdLwAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </a>
          </button>
        </div>

        {/* Responsive menu */}

        <ul
          className={`flex text-2xl pt-20 flex-col gap-4 text-center  scroll-smooth duration-300 fixed bg-white z-20 top-[0px] lg:hidden md:hidden w-full h-screen ms-auto 
       ${toggle ? "right-0" : "right-[-100%]"}`}
        >
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-4xl absolute right-0 top-2 flex justify-start m-3 "
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-4xl lg:hidden  hidden  "
            />
          )}

          <li>Service</li>
          <li>Portfolio</li>
          <li onClick={() => setToggle(!toggle)}>
            <Link href="/about">About</Link>
          </li>
          <li>Contact</li>
          <li>Blogs</li>
        </ul>
      </div>
    </>
  );
};

import Logo from "./Logo";
import classes from "./Hander.module.css";
export default () => {
  return (
    <nav className="flex px-36 py-6 justify-between items-center">
      <div className="flex items-center gap-2">
        <Logo />
        <h1 className="font-bold text-xl">GBJ BUZZ</h1>
      </div>
      <ul className="flex gap-5 text-xl ">
        <li>Service</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blogs</li>
      </ul>
      <button
        className={
          "p-3 flex items-center text-white font-bold bg-[#FFD01F] rounded-xl relative"
        }
      >
        <a className={`${classes.animion} flex gap-2`}>
          Request A Quote
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
    </nav>
  );
};

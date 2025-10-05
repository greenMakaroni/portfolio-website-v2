import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "../../custom_hooks/useScrollPosition";
import useWindowDimensions from "../../custom_hooks/useWindowDimensions";

export default function Nav() {
  const location = useLocation();
  const { height, width } = useWindowDimensions();

  const scrollPosition = useScrollPosition();
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [height, width]);

  useEffect(() => {
    if (scrollPosition.prev < scrollPosition.current) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [scrollPosition.prev]);

  function styleDesktopNav(url) {
    console.log("location.pathname: ", location.pathname);
    switch (location.pathname) {
      case "/":
        return `hover:underline
          underline-offset-8
          hover:decoration-white
          p-4 text-base text-white font-['Kanit']  
          ${
            location.pathname === url ? `text-white underline` : "no-underline"
          }`;

      case "/education":
        return `hover:underline
          hover:underline-offset-8
          hover:decoration-red-800
          p-4 text-base text-black font-['Kanit']  
          ${location.pathname === url ? `text-red-900 ` : "no-underline"}`;

      default:
        return `hover:underline
          hover:underline-offset-8
          hover:decoration-red-800
          p-4 text-base text-black font-['Kanit']  
          ${location.pathname === url ? `text-red-900 ` : "no-underline"}`;
    }
  }

  return (
    <nav
      className={`  fixed flex flex-row items-center justify-center w-screen h-[80px] select-none  top-0 right-0 overflow-hidden z-40 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-row w-1/2 justify-evenly">
        {[
          {
            url: "/",
            text: "home",
          },
          {
            url: "/portfolio",
            text: "portfolio",
          },
          {
            url: "/education",
            text: "education",
          },
        ].map(({ url, text, icon }, index) => {
          return (
            <Link key={index} to={url} className={styleDesktopNav(url)}>
              {text}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

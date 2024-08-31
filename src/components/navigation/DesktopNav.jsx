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

  return (
    <nav
      className={`duration-150 hover:bg-white fixed flex flex-row items-center justify-center w-screen h-[80px] select-none  top-0 right-0 overflow-hidden z-40 ${
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
          {
            url: "/contact",
            text: "contact",
          },
        ].map(({ url, text, icon }, index) => {
          return (
            <Link
              key={index}
              to={url}
              className={`
        hover:underline
        hover:underline-offset-8
        hover:decoration-red-800
        duration-150
         p-4 text-base text-black font-['Kanit'] font-thin ${
           location.pathname === url
             ? "bg-gradient-to-r from-[#8a0000] to-[#fc7474] inline-block text-transparent bg-clip-text "
             : "no-underline"
         }`}
            >
              {text}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

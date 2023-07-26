import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "../../custom_hooks/useScrollPosition"; 
import useWindowDimensions from '../../custom_hooks/useWindowDimensions'

export default function Nav() {
  const location = useLocation();
  const { height, width } = useWindowDimensions();

  const scrollPosition = useScrollPosition();
  const [show, setShow] = useState(true);

  // useEffect(() => {
  //   setInterval(() => {
  //     setShow(true)
  //   }, 3000)
  // }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [height, width]);

  useEffect(() => {
    if (scrollPosition.prev < scrollPosition.current) {
      setShow(false);
      } else {
        setShow(true);
      }
  }, [scrollPosition.prev])

  return (
    <nav className={`animate-showNav fixed flex flex-row align-center w-screen h-[60px] bg-white/[0] pt-[20px] pb-[20px] select-none duration-100 top-0 right-0 overflow-hidden z-10 ${show ? "opacity-100" : "opacity-0"}`}>
      <div className="flex flex-row m-0 p-0 w-screen justify-center">
        <Link to="/" className={`mr-[30px] p-0 text-base text-black font-['Geologica'] font-thin ${location.pathname === "/" ? "underline decoration-black decoration-2 underline-offset-4" : "no-underline" }`}> Home </Link>
        <Link to="/education" className={`mr-[30px] p-0 text-base text-black font-['Geologica'] font-thin ${location.pathname === "/education" ? "underline decoration-black decoration-2 underline-offset-4" : "no-underline" }`}> Education </Link>
        <Link to="/portfolio" className={`mr-[30px] p-0 text-base text-black font-['Geologica'] font-thin ${location.pathname === "/portfolio" ? "underline decoration-black decoration-2 underline-offset-4" : "no-underline" }`}> Portfolio </Link>
        <Link to="/contact" className={`mr-[30px] p-0 text-base text-black font-['Geologica'] font-thin ${location.pathname === "/contact" ? "underline decoration-black decoration-2 underline-offset-4" : "no-underline" }`}> Contact </Link>
      </div>
    </nav>
  )
}


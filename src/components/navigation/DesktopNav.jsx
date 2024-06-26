import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "../../custom_hooks/useScrollPosition"; 
import useWindowDimensions from '../../custom_hooks/useWindowDimensions'

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
  }, [scrollPosition.prev])

  return (
    <nav className={`duration-150 hover:bg-white fixed flex flex-row items-center justify-center w-screen h-[60px]  py-[40px] select-none duration-100 top-0 right-0 overflow-hidden z-40 ${show ? "opacity-100" : "opacity-0"}`}>
      <div className="flex flex-row m-0 p-0 w-screen justify-center">
        <Link to="/" className={`
        hover:bg-gradient-to-r 
        hover:from-[#8a0000] 
        hover:to-[#fc7474] 
        hover:inline-block 
        hover:text-transparent 
        hover:bg-clip-text 
        duration-150
        mr-[30px] p-0 text-base text-black font-['Geologica'] font-thin ${location.pathname === "/" ? "underline decoration-[#8a0000] decoration-2 underline-offset-8" : "no-underline" }`}> Home </Link>
        <Link to="/education" className={`
        hover:bg-gradient-to-r 
        hover:from-[#8a0000] 
        hover:to-[#fc7474] 
        hover:inline-block 
        hover:text-transparent 
        hover:bg-clip-text 
        duration-150
        mr-[30px] p-0 text-base text-black font-['Geologica'] font-thin ${location.pathname === "/education" ? "underline decoration-[#8a0000] decoration-2 underline-offset-8" : "no-underline" }`}> Education </Link>
        <Link to="/portfolio" className={`
        hover:bg-gradient-to-r 
        hover:from-[#8a0000] 
        hover:to-[#fc7474] 
        hover:inline-block 
        hover:text-transparent 
        hover:bg-clip-text 
        duration-150
        mr-[30px] p-0 text-base text-black font-['Geologica'] font-thin ${location.pathname === "/portfolio" ? "underline decoration-[#8a0000] decoration-2 underline-offset-8" : "no-underline" }`}> Portfolio </Link>
        <Link to="/contact" className={`
        hover:bg-gradient-to-r 
        hover:from-[#8a0000] 
        hover:to-[#fc7474] 
        hover:inline-block 
        hover:text-transparent 
        hover:bg-clip-text 
        duration-150
        mr-[30px] p-0 text-base text-black font-['Geologica'] font-thin ${location.pathname === "/contact" ? "underline decoration-[#8a0000] decoration-2 underline-offset-8" : "no-underline" }`}> Contact </Link>
      </div>
    </nav>
  )
}


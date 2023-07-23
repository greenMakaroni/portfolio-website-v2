import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "../../custom_hooks/useScrollPosition"; 
import useWindowDimensions from '../../custom_hooks/useWindowDimensions'

import "./nav.css";

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
    <nav className={show ? "nav" : "nav-hidden"}>
      <div className="links">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}> Home </Link>
        <Link to="/education" className={location.pathname === "/education" ? "nav-link active" : "nav-link"}> Education </Link>
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}> Portfolio </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}> Contact </Link>
      </div>
    </nav>
  )
}

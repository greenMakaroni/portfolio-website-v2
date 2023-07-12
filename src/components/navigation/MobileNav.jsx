import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./mobileNav.css";

const MobileNav = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false);

  const NavigationMenu = () => {
    return (
      <nav className="navigation-menu" style={open ? { animation: "none" } : { animation: "menuAppear-Mobile ease 0.3s" }}>

        <Link 
          to="/" 
          style={open ? { animation: "none" } : { animation: "linkFadeIn ease 1s;" }} 
          className={location.pathname === "/" ? "link mobile-active" : "link"} 
          onClick={() => setOpen(!open)} > 
          Home 
        </Link>

        <Link 
          to="/portfolio" style={open ? { animation: "none" } : { animation: "linkFadeIn ease 1s;" }} 
          className={location.pathname === "/portfolio" ? "link mobile-active" : "link"} 
          onClick={() => setOpen(!open)} > 
          Projects 
        </Link>

        <Link 
          to="/contact" 
          style={open ? { animation: "none" } : { animation: "linkFadeIn ease 1s;" }} 
          className={location.pathname === "/contact" ? "link mobile-active" : "link"} 
          onClick={() => setOpen(!open)} > 
          Contact 
        </Link>

      </nav>
    )
  }
  return (
    <>
      <div className={"div-hamburger"} onClick={() => setOpen(!open)}>
        <div className={open ? "top-close" : "hamburger-top"}></div>
        <div className={open ? "middle-close" : "hamburger-middle"}></div>
        <div className={open ? "bottom-close" : "hamburger-bottom"}></div>
      </div>

      {open && <NavigationMenu />}
    </>

  )
}

export default MobileNav
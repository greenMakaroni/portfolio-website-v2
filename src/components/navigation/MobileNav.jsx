import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./mobileNav.css";

const MobileNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const NavigationMenu = () => {
    return (
      <nav
        className="navigation-menu"
        style={
          open
            ? { animation: "none" }
            : { animation: "menuAppear-Mobile ease 0.3s" }
        }
      >
        {[
          { url: "/", text: "Home" },
          { url: "/education", text: "Education" },
          { url: "/portfolio", text: "Portfolio" },
          { url: "/contact", text: "Contact" },
        ].map(({ url, text }, index) => {
          <Link
            key={index}
            to={url}
            style={
              open
                ? { animation: "none" }
                : { animation: "linkFadeIn ease 1s;" }
            }
            className={
              location.pathname === url ? "link mobile-active" : "link"
            }
            onClick={() => setOpen(!open)}
          >
            {text}
          </Link>;
        })}
      </nav>
    );
  };
  return (
    <div className="z-50">
      <div className={"div-hamburger"} onClick={() => setOpen(!open)}>
        <div className={open ? "top-close" : "hamburger-top"}></div>
        <div className={open ? "middle-close" : "hamburger-middle"}></div>
        <div className={open ? "bottom-close" : "hamburger-bottom"}></div>
      </div>

      {open && <NavigationMenu />}
    </div>
  );
};

export default MobileNav;

// Components
import Navigation from "../../components/navigation/Navigation.jsx";
import Scene from "../../components/education/Scene.jsx";
import Footer from "../../components/footer/Footer.jsx";

// Hooks
import { useEffect } from "react";
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx";

const Education = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 650;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" flex flex-col">
      <Navigation />
      <div className="flex flex-row">
        <div className="animate-appear opacity-0 fixed w-screen h-screen -z-10"></div>

        {/* render scene on desktop */}
        {!isMobile && <Scene />}
        <div
          className={`${
            isMobile ? "" : "pl-[10vw]"
          } animate-infoElementIn opacity-0  flex flex-col`}
        ></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Education;

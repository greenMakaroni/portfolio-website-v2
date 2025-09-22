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
    <div className=" flex flex-col p-0">
      <Navigation />
      <div className="flex flex-row ">
        {/* render scene on desktop */}
        <Scene />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Education;

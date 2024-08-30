// Components
import Navigation from "../../components/navigation/Navigation.jsx";
import Scene from "../../components/education/Scene.jsx";
import Footer from "../../components/footer/footer.jsx";

// Hooks
import { useState, useEffect } from "react";
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx";

const Education = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 650;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="flex flex-row">{!isMobile && <Scene />}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Education;

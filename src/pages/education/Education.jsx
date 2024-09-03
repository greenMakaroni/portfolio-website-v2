// Components
import Navigation from "../../components/navigation/Navigation.jsx";
import Scene from "../../components/education/Scene.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { BsMortarboardFill } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";

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
    <div className="flex flex-col">
      <Navigation />
      <div className=" flex flex-row">
        {!isMobile && <Scene />}
        <div
          className={`${
            isMobile ? "" : "pl-[10vw]"
          } animate-infoElementIn opacity-0  flex flex-col`}
        >
          <h1
            className={` py-[10px]  mt-[100px] text-4xl font-['Geologica'] bg-gradient-to-r to-[#8a0000] from-[#b74e4e] inline-block text-transparent bg-clip-text font-bold`}
          >
            education
          </h1>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Education;

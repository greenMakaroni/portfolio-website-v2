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
      <div className="bg-portfolioBg fixed -z-10 w-screen h-screen"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
            {[
              {
                title: "Degree type",
                text: "Bachelor of Science",
                icon: <BsMortarboardFill className="h-[20px] w-[20px]" />,
              },
              {
                title: "Field of study",
                text: "Software Engineering",
                icon: <FaSearch className="h-[20px] w-[20px]" />,
              },
              {
                title: "Grade classification",
                text: "First-Class Honours (1st)",
                icon: <GiTrophy className="h-[20px] w-[20px]" />,
              },
              {
                title: "Time period",
                text: "September 2020 - June 2023",
                icon: <IoCalendar className="h-[20px] w-[20px]" />,
              },
            ].map(({ title, text, icon }, index) => {
              return (
                <div
                  key={index}
                  className="my-[5vh] flex flex-col items-start justify-center p-2"
                >
                  <div className="mb-[10px] flex flex-row items-center justify-center">
                    {icon}
                    <h2 className="ml-[10px] font-['Kanit'] text-md font-bold">
                      {" "}
                      {title}
                    </h2>
                  </div>
                  <p className="font-['Courier_Prime'] text-sm">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Education;

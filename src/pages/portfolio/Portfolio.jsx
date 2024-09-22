// Hooks
import { useEffect } from "react";
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx";

// Components
import Navigation from "../../components/navigation/Navigation.jsx";
import Project from "../../components/portfolio/Project.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Scene from "../../components/portfolio/Scene.jsx";

// Data
import { projects } from "./projects.jsx";

const Portfolio = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 650;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col ">
      <Navigation />
      {!isMobile && <Scene />}
      <div className="w-screen h-screen fixed -z-20"></div>
      <div
        className={`${
          isMobile ? "" : "pl-[10vw]"
        } w-screen flex flex-col items-start select-none`}
      >
        <div
          className={`px-[20px] ${
            isMobile && "flex items-center justify-center "
          }`}
        >
          <h1
            className={`py-[10px] ml-[20px]  mt-[100px] animate-elementIn opacity-0 text-4xl font-['Geologica'] bg-gradient-to-br from-[#8a0000] to-[#ffbebe] inline-block text-transparent bg-clip-text font-bold`}
          >
            personal projects
          </h1>
        </div>

        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              date={project.date}
              destination={project.destination}
              icons={project.icons}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;

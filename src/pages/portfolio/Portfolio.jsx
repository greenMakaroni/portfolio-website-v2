// Hooks
import { useEffect } from "react";
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx";

// Components
import Navigation from "../../components/navigation/Navigation.jsx";
import Project from "../../components/portfolio/Project.jsx";
import Footer from "../../components/footer/Footer.jsx";

// Data
import { personalProjects, professionalProjects } from "./projects.jsx";

const Portfolio = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 650;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col ">
      <Navigation />

      <div
        className={`mb-[15vh] ${
          isMobile ? "flex items-start justify-center" : "px-1"
        } w-screen flex flex-col items-start select-none `}
      >
        <div className={`${isMobile && "flex items-center justify-center "}`}>
          <h1
            className={`pl-1 mt-[100px] animate-elementIn opacity-0 text-3xl font-['Geologica'] bg-gradient-to-br from-[#be2d2d] to-[#aa0606] inline-block text-transparent bg-clip-text font-bold`}
          >
            Professional Projects
          </h1>
        </div>

        <div className="flex flex-row flex-wrap mt-6 mb-11">
          {professionalProjects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                date={project.date}
                destination={project.destination}
                icons={project.icons}
                buttonText={project.buttonText}
              />
            );
          })}
        </div>

        <div className={`${isMobile && "flex items-center justify-center "}`}>
          <h1
            className={`pl-1 mt-[100px] animate-elementIn opacity-0 text-3xl font-['Geologica'] bg-gradient-to-br from-[#be2d2d] to-[#aa0606] inline-block text-transparent bg-clip-text font-bold`}
          >
            Personal Projects
          </h1>
        </div>

        <div className="flex flex-row flex-wrap mt-6 mb-11">
          {personalProjects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                date={project.date}
                destination={project.destination}
                icons={project.icons}
                buttonText={project.buttonText}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;

// Hooks
import { useEffect } from "react";
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx";

// Components
import Navigation from "../../components/navigation/Navigation.jsx";
import Project from "../../components/portfolio/Project.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Scene from "../../components/portfolio/Scene.jsx";
import Button from "../../components/shared/Button.jsx";
import VisibilityIcon from '@mui/icons-material/Visibility';

// Data
import { projects } from "./projects.js";
import PDF from "./Resume.pdf";

const Portfolio = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 650;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <Navigation />
      {!isMobile && <Scene />}
      <div className="w-screen h-screen fixed bg-portfolioBg bg-cover -z-20"></div>
      <div
        className={`${
          isMobile ? "" : "pl-[10vw]"
        } w-screen flex flex-col items-start select-none`}
      >

        <div className=" border-l-4 border-double border-b-4 rounded-bl-xl border-[#8a0000] px-[20px] mt-[150px] flex flex-row justify-center items-center ">
          <h1 className="animate-elementIn mr-[75px] opacity-0 text-4xl text-[#8a0000] font-['Kanit'] font-bold">
            My CV
          </h1>
          <Button icon={<VisibilityIcon />} text={"Online PDF"} link={PDF} />
        </div>

        <h1 className="px-[20px] mt-[75px] animate-elementIn opacity-0 text-4xl text-[#8a0000] font-['Kanit'] font-bold">
          Personal Projects
        </h1>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              num={index + 1}
              buttonText={project.buttonText}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;

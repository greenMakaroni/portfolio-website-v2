// Hooks
import { useEffect } from "react"
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx"


// Components
import Navigation from '../../components/navigation/Navigation'
import Project from '../../components/portfolio/Project'
import Footer from '../../components/footer/Footer.jsx'
import Scene from '../../components/portfolio/Scene.jsx'
// Data
import { projects } from './projects.js'

const Portfolio = () => {

      const { width } = useWindowDimensions()
    const isMobile = width < 650
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <Navigation />
      { !isMobile && <Scene /> } 
      <div className="w-screen h-screen fixed bg-portfolioBg bg-cover -z-20">
          </div>
      <div className={`${isMobile ? "" : "pl-[10vw]"} w-screen flex flex-col items-start select-none`}>
        <h1 className="mt-[150px] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
          Personal Projects
        </h1>
          {
            projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  num={index + 1}
                  buttonText={project.buttonText}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              )
            })
          }

      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
// Components
import Navigation from '../../components/navigation/Navigation'
import Project from '../../components/portfolio/Project'
import Footer from '../../components/footer/Footer.jsx'
import Scene from '../../components/portfolio/Scene.jsx'
// Data
import { academicProjects, personalProjects } from './projects.js'

const Portfolio = () => {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Scene />
      <div className="w-screen h-screen fixed bg-portfolioBg bg-cover -z-20">
          </div>
      <div className="px-[10vw] w-screen flex flex-col items-start select-none">
        <h1 className="mt-[100px] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
          Personal Projects
        </h1>
          {
            personalProjects.map((project, index) => {
              return (
                <Project
                  key={index}
                  num={index + 1}
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
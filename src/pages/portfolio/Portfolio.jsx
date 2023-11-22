// Components
import Navigation from '../../components/navigation/Navigation'
import Project from '../../components/portfolio/Project'
import Footer from '../../components/footer/Footer.jsx'

// Data
import { academicProjects, personalProjects } from './projects.js'

const Portfolio = () => {
  return (
    <div className="flex flex-col">
      <Navigation />

      <div className="px-[10vw] w-screen flex flex-col items-center select-none">
        <h1 className="mt-[150px] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
          Personal Projects
        </h1>
          {
            personalProjects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              )
            })
          }


        <h1 className="mt-[100px] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
          Academic Projects
        </h1>
          {
            academicProjects.map((project, index) => {
              return (
                <Project
                  key={index}
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
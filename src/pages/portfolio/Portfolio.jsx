import Navigation from '../../components/navigation/Navigation'
import Project from '../../components/portfolio/Project'
import {academicProjects, freelanceProjects, personalProjects} from './projects.js'

const Portfolio = () => {
  return (
    <>
      <Navigation />
      <div className="px-[10vw] mt-[150px] w-screen flex flex-col select-none">
        <h1 className="animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
          Freelance Pojects
        </h1>
        {
          freelanceProjects.map((project, index) => {
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
             <h1 className="mt-[100px] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
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
      </div>
    </>

  )
}

export default Portfolio
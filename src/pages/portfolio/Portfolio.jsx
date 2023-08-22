import Navigation from '../../components/navigation/Navigation'
import Project from '../../components/portfolio/Project'
import projects from './projects.js'

const Portfolio = () => {
  return (
    <>
      <Navigation />
      <div className="pl-[10vw] pr-[10vw] mt-[150px] w-screen flex flex-col select-none">
        <h1 className="animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
          Projects
        </h1>
        {
          projects.map((project, index) => {
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
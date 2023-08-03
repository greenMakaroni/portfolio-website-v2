import Navigation from '../../components/navigation/Navigation'
import Project from '../../components/portfolio/Project'

const Portfolio = () => {
  return (
    <>
      <Navigation />
      <div className="pl-[10vw] pr-[10vw] mt-[150px] w-screen flex flex-col select-none">
        <h1 className="animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
          Projects
        </h1>

        <Project
          title="Project management app"
          description="Full stack application to 
          manage projects and clients.
          React, apollo client, and 
          bootstrap on the front end.
          Express, GraphQL and
          MongoDB on the back end."
          link="https://github.com/greenMakaroni/project-management-app.git"
        />

        <Project
          title="Batuhan's resume"
          description="Developed a resume 
          website for a friend, with animated 3D 
          scene created in Blender, using React, three.js and react-three-fiber."
          link="https://batuhan-ozgur-basal-portfolio.firebaseapp.com/"
        />

        <Project
          title="Fuzzy inference system"
          description="Fuzzy inference system for assessing reliability of information and credibility of information sources. System variations created and tested in MATLAB."
          link="https://github.com/greenMakaroni/fuzzy_logic_coursework"
        />

        <Project
          title="Java module chooser"
          description="MVC application written in Java for choosing modules for the final year at the university. GUI created using javafx library."
          link="https://github.com/greenMakaroni/Module-Chooser-GUI"
        />

        <Project
          title="E-commerce store"
          description="eCommerce storefront written in React, 
          utilizing commerce.js API for 
          backend, and stripe for 
          processing of payments."
          link="https://github.com/greenMakaroni/react-commercejs-storefront"
        />
      </div>
    </>

  )
}

export default Portfolio
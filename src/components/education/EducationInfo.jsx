import PDF from './Appraisal Document.pdf'
import useWindowDimensions from '../../custom_hooks/useWindowDimensions'
import Project from './Project'
import Info from './Info'

const EducationInfo = () => {
  const { height, width } = useWindowDimensions()
  const isMobile = width < 650

  return (
    <div className={`flex flex-col absolute justify-start ${!isMobile ? "pt-[20vh] w-[60vw]" : " w-[100vw] pt-[100vh]"} `}>
      <div className="pl-[10vw] w-screen h-screen flex flex-col select-none">
        <Info
          header="University"
          paragraph="De Montfort University, Leicester, UK" />
        <Info
          header="Course"
          paragraph="BSc. Software engineering (2019-2023)" />
        <Info
          header="Degree classification"
          paragraph="First Class Honours (85%)"
        />
        
        <button className="animate-infoElementIn opacity-0 flex z-10 justify-center align-center border-2 border-black w-36 h-16 pt-4 pb-4 font-['Geologica'] font-thin hover:bg-black hover:text-white hover:cursor-pointer " onClick={() => window.open(PDF, "_blank")} >
          My marks PDF
        </button>
      </div>

      <div className="pl-[10vw] pr-[10vw] w-screen flex flex-col select-none">
        <h1 className="animate-infoElementIn opacity-0 text-xl text-black font-['Open Sans'] font-bold">
          Coursework
        </h1>
        <Project
          title="Fuzzy Logic"
          description="Fuzzy inference system for assessing reliability of information and credibility of information sources"
          link="https://github.com/greenMakaroni/fuzzy_logic_coursework" />
        <Project
          title="Fuzzy Logic"
          description="Fuzzy inference system for assessing reliability of information and credibility of information sources"
          link="https://github.com/greenMakaroni/fuzzy_logic_coursework" />
        <Project
          title="Fuzzy Logic"
          description="Fuzzy inference system for assessing reliability of information and credibility of information sources"
          link="https://github.com/greenMakaroni/fuzzy_logic_coursework" />
        <Project
          title="Fuzzy Logic"
          description="Fuzzy inference system for assessing reliability of information and credibility of information sources"
          link="https://github.com/greenMakaroni/fuzzy_logic_coursework" />
      </div>
    </div>
  )
}

export default EducationInfo
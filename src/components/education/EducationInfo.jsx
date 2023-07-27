import PDF from './Appraisal Document.pdf'
import useWindowDimensions from '../../custom_hooks/useWindowDimensions'
import Project from './Project'

const EducationInfo = () => {
  const { height, width } = useWindowDimensions()
  const isMobile = width < 650

  return (
    <div className={`flex flex-col absolute justify-start ${!isMobile ? "pt-[20vh] w-[60vw]" : " w-[100vw] pt-[100vh]"} `}>
      <div className="pl-[10vw] w-screen h-screen flex flex-col select-none">
        <h1 className="animate-infoElementIn opacity-0 pt-[40px] text-xl text-black font-['Open Sans'] font-bold">
          University
        </h1>
        <p className="animate-infoElementIn opacity-0 text-lg text-black font-['Geologica'] font-thin ">
          De Montfort University, Leicester, UK
        </p>
        <h1 className="animate-infoElementIn opacity-0 pt-[40px] text-xl text-black font-['Open Sans'] font-bold">
          Course
        </h1>
        <p className="animate-infoElementIn opacity-0 text-lg text-black font-['Geologica'] font-thin ">
          BSc. Software engineering (2019-2023)
        </p>
        <h1 className="animate-infoElementIn opacity-0 pt-[40px] text-xl text-black font-['Open Sans'] font-bold">
          Degree classification
        </h1>
        <p className="pb-[40px] animate-infoElementIn opacity-0 text-lg text-black font-['Geologica'] font-thin ">
          First Class Honours (85%)
        </p>
        <button className="animate-infoElementIn opacity-0 flex z-10 justify-center align-center border-2 border-black w-36 h-16 pt-4 pb-4 font-['Geologica'] font-thin hover:bg-black hover:text-white hover:cursor-pointer " onClick={() => window.open(PDF, "_blank")} >
          My marks PDF </button>
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
import PDF from './Appraisal Document.pdf'
const EducationInfo = () => {
  return (
    <div className="flex flex-col justify-start w-[60vw] h-[200vh] pt-[20vh] pl-[10vw]">
      <div className="w-screen h-screen flex flex-col select-none">
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
        <button className="animate-infoElementIn opacity-0 flex z-10 justify-center align-center border-2 border-black w-36 h-16 pt-4 pb-4 font-['Geologica'] font-thin hover:bg-black hover:text-white hover:cursor-pointer " onClick={() => window.open(PDF, "_blank")} > My marks </button>
      </div>
      <div className="w-screen h-screen flex flex-col select-none">
        <h1 className="animate-infoElementIn opacity-0 pt-[40px] text-xl text-black font-['Open Sans'] font-bold">
          Coursework
        </h1>
      </div>
    </div>
  )
}

export default EducationInfo
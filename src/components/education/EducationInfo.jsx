import PDF from './Appraisal Document.pdf'
const EducationInfo = () => {
  return (
    <div className="flex flex-column w-[60vw] h-[200vh] pt-[150px] pl-[150px]">
        <button className="flex justify-center align-center border-2 border-black w-36 h-16 pt-4 pb-4 z-10 font-['Geologica'] font-thin hover:bg-black hover:text-white hover:cursor-pointer " onClick={() => window.open(PDF, "_blank")} > My marks </button>
    </div>
  )
}

export default EducationInfo
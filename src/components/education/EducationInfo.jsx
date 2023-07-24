import "./edu_info.css"
import PDF from './Appraisal Document.pdf'

const EducationInfo = () => {
  return (
    <div className="edu_info_main">
        <h1 className="edu-title"> University </h1>
        <h2 className="edu-info-text"> De Montfort University, Leicester</h2>
        <h1 className="edu-title"> Undergraduate degree </h1>
        <h2 className="edu-info-text"> Bachelor of Science (BSc) </h2>
        <h1 className="edu-title"> Course </h1>
        <h2 className="edu-info-text"> Software Engineering </h2>

        <button className="flex justify-center align-center border-2 border-black w-36 pt-4 pb-4 z-10 hover:bg-black hover:text-white " onClick={() => window.open(PDF, "_blank")} > My marks </button>
    </div>
  )
}

export default EducationInfo
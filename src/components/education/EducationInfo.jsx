import "./edu_info.css"
import PDF from './Appraisal Document.pdf'

const EducationInfo = () => {
  return (
    <div className="edu_info_main">
        <h1 className="edu-title"> Undergraduate degree </h1>
        <h2 className="edu-info-text"> Bachelor of Science (BSc) </h2>
        <h1 className="edu-title"> Course </h1>
        <h2 className="edu-info-text"> Software Engineering </h2>
        <h1 className="edu-title"> University </h1>
        <h2 className="edu-info-text"> De Montfort University, Leicester, UK</h2>
        <button className="anchorButton" onClick={() => window.open(PDF, "_blank")} > My marks </button>
    </div>
  )
}

export default EducationInfo
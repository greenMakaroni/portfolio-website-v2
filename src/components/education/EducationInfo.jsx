import useWindowDimensions from '../../custom_hooks/useWindowDimensions'
import InfoSection from './InfoSection'
import Info from './Info'
import Button from '../shared/Button'
import PDF from './Appraisal Document.pdf'

const EducationInfo = () => {
  const { width } = useWindowDimensions()
  const isMobile = width < 650

  return (
    <div className={`flex flex-col absolute justify-start ${!isMobile ? "pt-[15vh] w-[60vw]" : " w-[100vw] pt-[100vh]"} `}>
      <div className="animate-infoElementIn opacity-0 pl-[10vw] w-screen h-screen flex flex-col select-none">
        <h1 className="mb-[3vh] text-4xl text-black font-['Open Sans'] font-bold">
          Degree
        </h1>
        <Info
          header="Course"
          paragraph="BSc. Software engineering with foundation year in computing." />

        <Info
          header="Institution"
          paragraph="De Montfort University, Leicester, England." />

        <Info
          header="Years"
          paragraph="2019-2023" />

        <Info
          header="Degree classification"
          paragraph="First class honours, (85%)." />
        <Button text="My marks PDF" link={PDF} />
      </div>

      <InfoSection>
        <h1 className="mb-[3vh] animate-elementIn opacity-0 text-4xl text-black font-['Open Sans'] font-bold pt-[20vh]">
          A-levels
        </h1>

        <Info
          header="Course"
          paragraph="IT Technician with specialization in online 
          applications." />

        <Info
          header="Institution"
          paragraph="ZSTiO nr1. Chorzów, Poland." />

        <Info
          header="Years"
          paragraph="2011–2015" />
      </InfoSection>

      <InfoSection>
        <h1 className="mb-[3vh] animate-elementIn opacity-0 text-4xl text-black font-['Open Sans'] font-bold">
          Certifications
        </h1>
        <Info
          header="Microsoft Technology Associate"
          paragraph="Introduction to programming using Python, (2019)." />
        <Button text="See online" link="https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=4yFp9n9HAW1ZqqgywoTHOg==" />
        <Info
          header="Udemy course"
          paragraph="The complete web development with MERN bootcamp, (2020)." />
        <Button text="See online" link="https://www.udemy.com/certificate/UC-79a9ec62-66fe-4a13-9890-f954ceadcfec/" />
      </InfoSection>


    </div>
  )
}

export default EducationInfo
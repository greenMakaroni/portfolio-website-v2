import useWindowDimensions from '../../custom_hooks/useWindowDimensions.jsx'
import InfoSection from './InfoSection'
import Info from './Info'
import Button from '../shared/Button'
import PDF from './Appraisal Document.pdf'
import { memo } from 'react'

const EducationInfo = ({ setSection }) => {

  const { width } = useWindowDimensions()
  const isMobile = width < 650

  // memo
  const MemoInfo = memo(Info)
  const MemoButton = memo(Button)
  
  return (
    <div className="flex flex-col absolute justify-start w-[60vw]">
      <InfoSection setSection={setSection} param="first" isMobile={isMobile}>
        <h1 className="mb-[3vh] text-4xl text-black font-['Kanit'] font-bold">
          Degree
        </h1>
        <MemoInfo
          header="Course"
          paragraph="Bachelor of Science in Software Engineering with foundation year in computing." />
        <MemoInfo
          header="Institution"
          paragraph="De Montfort University, Leicester, England." />
        <MemoInfo
          header="Years"
          paragraph="2019-2023" />
        <MemoButton text="My marks PDF" link={PDF} />
      </InfoSection>

      <InfoSection setSection={setSection} param="second" isMobile={isMobile}>
        <h1 className="mb-[3vh] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold pt-[20vh]">
          T-levels
        </h1>
        <MemoInfo
          header="Course"
          paragraph="IT Technician with specialization in online applications." />
        <MemoInfo
          header="Institution"
          paragraph="ZSTiO nr1. Chorzów, Poland." />
        <MemoInfo
          header="Years"
          paragraph="2011–2015" /> 
      </InfoSection> 

      <InfoSection setSection={setSection} param="third" isMobile={isMobile}>
        <h1 className="mb-[3vh] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
          Certifications
        </h1>
        <MemoInfo
          header="Microsoft Technology Associate"
          paragraph="Introduction to programming using Python, (2019)." />
        <MemoButton text="See online" link="https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=4yFp9n9HAW1ZqqgywoTHOg==" />
        <MemoInfo
          header="Udemy course"
          paragraph="The complete web development bootcamp using MERN, (2020)." />
        <MemoButton text="See online" link="https://www.udemy.com/certificate/UC-79a9ec62-66fe-4a13-9890-f954ceadcfec/" />
      </InfoSection>
    </div>
  )
}

export default EducationInfo
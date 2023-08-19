import useOnScreen from '../../custom_hooks/useOnScreen.jsx'
import useWindowDimensions from '../../custom_hooks/useWindowDimensions.jsx'
import { useRef, useEffect } from 'react'
import InfoSection from './InfoSection'
import Info from './Info'
import Button from '../shared/Button'
import PDF from './Appraisal Document.pdf'


const EducationInfo = ({ setSection }) => {

  const first = useRef()
  const isFirst = useOnScreen(first)

  const { width } = useWindowDimensions()
  const isMobile = width < 650

  useEffect(() => {
    isFirst && setSection((prevState) => ({
      prev: prevState.current,
      current: "first"
    }))
  }, [isFirst])


  return (
    <div className="flex flex-col absolute justify-start pt-[10vh] w-[60vw]">
      <div ref={first} className={`opacity-0 p-[15vh]  h-screen flex flex-col select-none ${isMobile ? "animate-elementIn w-[100vw]" : "animate-infoElementIn w-[50vw]"}`}>
        <h1 className="mb-[3vh] text-4xl text-black font-['Kanit'] font-bold">
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
        <Button text="My marks PDF" link={PDF} />
      </div>
      <>
        <InfoSection setSection={setSection} param="second" isMobile={isMobile}>
          <h1 className="mb-[3vh] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold pt-[20vh]">
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
      </>


      <InfoSection setSection={setSection} param="third" isMobile={isMobile}>
        <h1 className="mb-[3vh] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
          Certifications
        </h1>
        <Info
          header="Microsoft Technology Associate"
          paragraph="Introduction to programming using Python, (2019)." />
        <Button text="See online" link="https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=4yFp9n9HAW1ZqqgywoTHOg==" />
        <Info
          header="Udemy course"
          paragraph="The complete web development bootcamp using MERN, (2020)." />
        <Button text="See online" link="https://www.udemy.com/certificate/UC-79a9ec62-66fe-4a13-9890-f954ceadcfec/" />
      </InfoSection>
    </div>
  )
}

export default EducationInfo
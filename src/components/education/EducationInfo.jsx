// Components
import InfoSection from './InfoSection'
import Info from './Info'
import Button from '../shared/Button'
import PDF from './Appraisal Document.pdf'

// Icons
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import PsychologySharpIcon from '@mui/icons-material/PsychologySharp';

// Hooks
import { useEffect } from 'react'
import useWindowDimensions from '../../custom_hooks/useWindowDimensions.jsx'

const EducationInfo = ({ setSection }) => {

  const { width } = useWindowDimensions()
  const isMobile = width < 650

  useEffect(() => {
    return (
      setSection(() => ({
        prev: "first",
        current: "first"
      }))
    )
  }, [])

  return (
    <div className="flex flex-col justify-start w-[60vw]">
      <InfoSection setSection={setSection} param="first" isMobile={isMobile}>
        <h1 className=" mb-[3vh] text-4xl text-black font-['Kanit'] font-bold">
          Degree
        </h1>
        <Info
          header="Course"
          paragraph="Bachelor of Science in Software Engineering with foundation year in computing.">
          <PsychologySharpIcon sx={{ fontSize: 30}} />
        </Info>
        <Info
          header="Institution"
          paragraph="De Montfort University, Leicester, England." >
          <AccountBalanceOutlinedIcon sx={{ fontSize: 26}} />
        </Info>
        <Info
          header="Years"
          paragraph="2019-2023">
          <CalendarMonthOutlinedIcon sx={{ fontSize: 28}} />
        </Info>
        <Button text="Course overview" link={PDF} />
      </InfoSection>

      <InfoSection setSection={setSection} param="second" isMobile={isMobile}>
        <h1 className=" mb-[3vh] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold pt-[20vh]">
          T-levels
        </h1>
        <Info
          header="Course"
          paragraph="IT Technician with specialization in online applications." >
          <EngineeringSharpIcon sx={{ fontSize: 30}} />
        </Info>
        <Info
          header="Institution"
          paragraph="ZSTiO nr1. Chorzów, Poland.">
          <AccountBalanceOutlinedIcon sx={{ fontSize: 28}} />
        </Info>
        <Info
          header="Years"
          paragraph="2011–2015" >
          <CalendarMonthOutlinedIcon sx={{ fontSize: 28}} />
        </Info>
      </InfoSection>

      <InfoSection setSection={setSection} param="third" isMobile={isMobile}>
        <h1 className="mb-[3vh] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
          Certifications
        </h1>
      
        <Info
          header="Full Stack Web Development Bootcamp"
          paragraph="The complete web development bootcamp using MERN, (2020)." >
          <MilitaryTechOutlinedIcon sx={{ fontSize: 34}} />
        </Info>
        <Button text="View online" link="https://www.udemy.com/certificate/UC-79a9ec62-66fe-4a13-9890-f954ceadcfec/" />
       
        <div className="bg-black h-[2px] w-[100%] my-[25px] ">
        </div>

        <Info
          header="Microsoft Technology Associate"
          paragraph="Introduction to programming using Python, (2019)." >
          <MilitaryTechOutlinedIcon sx={{ fontSize: 34}} />
        </Info>
        <Button text="View online" link="https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=4yFp9n9HAW1ZqqgywoTHOg==" />
      </InfoSection>
    </div>
  )
}

export default EducationInfo
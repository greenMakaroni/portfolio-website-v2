// Components
import InfoSection from './InfoSection'
import Info from './Info'
import Button from '../shared/Button'

// Icons
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import EngineeringIcon from '@mui/icons-material/Engineering';

// Hooks
import { useEffect } from 'react'
import useWindowDimensions from '../../custom_hooks/useWindowDimensions.jsx'

// PDF
import PDF from './Appraisal Document.pdf'


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
    <div className={`overflow-x-hidden overflow-y-auto flex flex-col justify-start`}>
      <div className="w-screen h-screen fixed bg-eduBg bg-cover -z-10">

      </div>

      <div className="flex items-center mb-[20vw] ">
        <InfoSection setSection={setSection} param="first" isMobile={isMobile}>
          <h1 className=" mb-[3vh] text-4xl text-white font-['Kanit'] font-bold">
            Bachelor's degree
          </h1>
          <Info
            header="Course"
            paragraph="Bachelor of Science in Software Engineering.">
            <SchoolIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info
            header="Location"
            paragraph="De Montfort University, Leicester, England." >
            <LocationOnIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info
            header="Time period"
            paragraph="2020-2023">
            <CalendarMonthRoundedIcon sx={{ fontSize: 22 }} />
          </Info>
          <div className="mb-[15px]">
          </div>
          <Button text="Course overview" link={PDF} />
        </InfoSection>
      </div>

      <div className="h-screen w-screen flex items-center mb-[20vw] ">
        <InfoSection setSection={setSection} param="second" isMobile={isMobile}>
          <h1 className=" mb-[3vh] text-4xl text-white font-['Kanit'] font-bold">
            T levels
          </h1>
          <Info
            header="Course"
            paragraph="IT Technician with specialization in online applications.">
            <EngineeringIcon sx={{ fontSize: 30 }} />
          </Info>
          <Info
            header="Location"
            paragraph="ZSTiO nr 1. Chorzów, Poland." >
            <LocationOnIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info
            header="Time period"
            paragraph="2011-2015">
            <CalendarMonthRoundedIcon sx={{ fontSize: 22 }} />
          </Info>
          <div className="mb-[20px]">
          </div>
        </InfoSection>
      </div>

      <div className="mb-[20vh] h-screen w-screen flex items-center">
        <InfoSection setSection={setSection} param="third" isMobile={isMobile}>
          <h1 className="mb-[3vh] animate-elementIn opacity-0 text-4xl text-white font-['Kanit'] font-bold">
            Certifications
          </h1>

          {/* <Info
            header="Google Data Analytics"
            paragraph="Google Data Analytics Professional Certificate, (2023)." >
            <QueryStatsRoundedIcon sx={{ fontSize: 22 }} />
          </Info>

          <div className="mb-[20px]">
          </div>

          <Button text="View online" link=" " /> */}

          <Info
            header="Full Stack Web Development Bootcamp"
            paragraph="The complete MERN bootcamp, (2020)." >
            <CloudOutlinedIcon sx={{ fontSize: 22 }} />
          </Info>

          <div className="mb-[20px]">
          </div>
          <Button text="View online" link="https://www.udemy.com/certificate/UC-79a9ec62-66fe-4a13-9890-f954ceadcfec/" />

          <Info
            header="Microsoft Technology Associate"
            paragraph="Introduction to programming using Python, (2019)." >
            <ConstructionRoundedIcon sx={{ fontSize: 22 }} />
          </Info>
          <div className="mb-[20px]">
          </div>
          <Button text="View online" link="https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=4yFp9n9HAW1ZqqgywoTHOg==" />
        </InfoSection>

      </div>
    </div>
  )
}

export default EducationInfo
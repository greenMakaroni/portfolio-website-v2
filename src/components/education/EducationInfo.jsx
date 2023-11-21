// Components
import InfoSection from './InfoSection'
import Info from './Info'
import Button from '../shared/Button'

// Icons
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';

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
    <div className="flex flex-col justify-start w-[60vw]">
      <InfoSection setSection={setSection} param="first" isMobile={isMobile}>
        <h1 className=" mb-[3vh] text-4xl text-black font-['Kanit'] font-bold">
          Bachelor's degree
        </h1>
        <Info
          header="Course"
          paragraph="Bachelor of Science in Software Engineering.">
          <SchoolIcon sx={{ fontSize: 30 }} />
        </Info>
        <Info
          header="Location"
          paragraph="De Montfort University, Leicester, England." >
          <LocationOnIcon sx={{ fontSize: 26 }} />
        </Info>
        <Info
          header="Time period"
          paragraph="2020-2023">
          <CalendarMonthRoundedIcon sx={{ fontSize: 26 }} />
        </Info>

        <div className="mb-[20px]">

        </div>
        <Button text="Course overview" link={PDF} />
      </InfoSection>

      <InfoSection setSection={setSection} param="second" isMobile={isMobile}>
        <h1 className="mb-[3vh] animate-elementIn opacity-0 text-4xl text-black font-['Kanit'] font-bold">
          Certifications
        </h1>

        <Info
          header="Google Data Analytics"
          paragraph="Google Data Analytics Professional Certificate, (2023)." >
          <QueryStatsRoundedIcon sx={{ fontSize: 34 }} />
        </Info>

        <div className="mb-[20px]">
        </div>

        <Button text="View online" link="https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=4yFp9n9HAW1ZqqgywoTHOg==" />

        <Info
          header="Full Stack Web Development Bootcamp"
          paragraph="The complete web development bootcamp using MERN, (2020)." >
          <CloudOutlinedIcon sx={{ fontSize: 34 }} />
        </Info>

        <div className="mb-[20px]">
        </div>

        <Button text="View online" link="https://www.udemy.com/certificate/UC-79a9ec62-66fe-4a13-9890-f954ceadcfec/" />

        <Info
          header="Microsoft Technology Associate"
          paragraph="Introduction to programming using Python, (2019)." >
          <ConstructionRoundedIcon sx={{ fontSize: 34 }} />
        </Info>

        <div className="mb-[20px]">
        </div>
        
        <Button text="View online" link="https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=4yFp9n9HAW1ZqqgywoTHOg==" />

      </InfoSection>
    </div>
  )
}

export default EducationInfo
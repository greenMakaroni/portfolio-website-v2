// Components
import InfoSection from './InfoSection'
import Info from './Info'
import Button from '../shared/Button'

// Icons
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';


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
    <div className={`flex flex-col justify-start`}>
      <div className="w-screen h-screen fixed -z-10">
      </div>

      <div className="flex items-center mb-[20vw] ">
        <InfoSection setSection={setSection} param="first" isMobile={isMobile}>
          <h1 className=" mb-[5vh] text-4xl font-['Kanit'] font-bold bg-gradient-to-r from-[#8a0000] to-[#fc7474] inline-block text-transparent bg-clip-text">
            Bachelor's degree
          </h1>
          <Info
            paragraph="Bachelor of Science in Software Engineering, ( 1st ). ">
            <SchoolIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info
            paragraph="De Montfort University, Leicester, England." >
            <LocationOnIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info
            paragraph="2020-2023">
            <CalendarMonthRoundedIcon sx={{ fontSize: 22 }} />
          </Info>
          <div className="mb-[15px]">
          </div>
          <Button icon={<VisibilityIcon />} text="Course Results" link={PDF} />
        </InfoSection>
      </div>

      <div className="h-screen w-screen flex items-center mb-[20vw] ">
        <InfoSection setSection={setSection} param="second" isMobile={isMobile}>
          <h1 className=" mb-[5vh] text-4xl font-['Kanit'] font-bold bg-gradient-to-r from-[#8a0000] to-[#fc7474] inline-block text-transparent bg-clip-text">
            T levels
          </h1>
          <Info
            paragraph="IT Technician with specialization in online applications.">
            <EngineeringIcon sx={{ fontSize: 30 }} />
          </Info>
          <Info
            paragraph="ZSTiO nr 1. Chorzów, Poland." >
            <LocationOnIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info
            paragraph="2011-2015">
            <CalendarMonthRoundedIcon sx={{ fontSize: 22 }} />
          </Info>
          <div className="mb-[20px]">
          </div>
        </InfoSection>
      </div>

      <div className="mb-[20vh] w-screen flex items-center">
        <InfoSection setSection={setSection} param="third" isMobile={isMobile}>
          <h1 className="mb-[40px] animate-elementIn opacity-0 text-4xl font-['Kanit'] font-bold bg-gradient-to-r from-[#8a0000] to-[#fc7474] inline-block text-transparent bg-clip-text">
            Certifications
          </h1>

          <Info paragraph="Data Analytics Professional Certificate." >
            <QueryStatsRoundedIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info paragraph="Google." >
            <AccountBalanceOutlinedIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info paragraph="November 2nd, 2023" >
            <CalendarMonthRoundedIcon sx={{ fontSize: 22 }} />
          </Info>
          <Button icon={<VisibilityIcon />} text="View online" link="https://coursera.org/share/23b81ece187b0654c98ada825c5a3ca2" />

          <div className="mb-[20vh]">
          </div>

          <Info paragraph="The Complete Web Development Bootcamp." >
            <SchoolIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info paragraph="London App Brewery." >
            <AccountBalanceOutlinedIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info paragraph="October 13th, 2020" >
            <CalendarMonthRoundedIcon sx={{ fontSize: 22 }} />
          </Info>
          <Button icon={<VisibilityIcon />} text="View online" link="https://www.udemy.com/certificate/UC-79a9ec62-66fe-4a13-9890-f954ceadcfec/" />

          <div className="mb-[20vh]">
          </div>

          <Info paragraph="Introduction to programming using Python." >
            <SchoolIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info paragraph="Microsoft." >
            <AccountBalanceOutlinedIcon sx={{ fontSize: 22 }} />
          </Info>
          <Info paragraph="November 5th, 2019" >
            <CalendarMonthRoundedIcon sx={{ fontSize: 22 }} />
          </Info>
          <Button icon={<VisibilityIcon />} text="View online" link="https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=4yFp9n9HAW1ZqqgywoTHOg==" />

          <div className="h-[400px] mb-[40px]">
          </div>

        </InfoSection>
      </div>
    </div>
  )
}

export default EducationInfo
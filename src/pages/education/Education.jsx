import Navigation from "../../components/navigation/Navigation"
import Scene from "../../components/education/Scene"
import EducationInfo from "../../components/education/EducationInfo"
import { useState } from "react"
import useWindowDimensions from '../../custom_hooks/useWindowDimensions.jsx';

const Education = () => {
  const { width } = useWindowDimensions()
  const isMobile = width < 650
  const [section, setSection] = useState({prev: "first", current: "first"})
  const [isLoaded, setLoaded] = useState(false)


  return (
    <>
      { isMobile ? <Navigation /> : isLoaded && <Navigation /> }
      {!isMobile && <Scene section={section} isLoaded={isLoaded} setLoaded={setLoaded} />}
      <EducationInfo setSection={setSection} />
    </>
  )
}

export default Education
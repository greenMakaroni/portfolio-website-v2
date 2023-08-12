import Navigation from "../../components/navigation/Navigation"
import Scene from "../../components/education/Scene"
import DelayRendering from "../../custom_hooks/delayRendering"
import EducationInfo from "../../components/education/EducationInfo"
import { useState } from "react"
import useWindowDimensions from '../../custom_hooks/useWindowDimensions.jsx';

const Education = () => {
  const { width, height } = useWindowDimensions()
  const isMobile = width < 650
  const [section, setSection] = useState({prev: "first", current: "first"})
  const [isLoaded, setLoaded] = useState(false)


  return (
    <>
      <DelayRendering delay={1000} component={<Navigation />} />
      {!isMobile && <Scene section={section} isLoaded={isLoaded} setLoaded={setLoaded} />}
      <EducationInfo setSection={setSection} />
      {console.log(width, height)}
    </>
  )
}

export default Education
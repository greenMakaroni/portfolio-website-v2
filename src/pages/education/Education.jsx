import Navigation from "../../components/navigation/Navigation"
import Scene from "../../components/education/Scene"
import DelayRendering from "../../custom_hooks/delayRendering"
import EducationInfo from "../../components/education/EducationInfo"
import { useState } from "react"
import useWindowDimensions from '../../custom_hooks/useWindowDimensions.jsx';

const Education = () => {
  const { width } = useWindowDimensions()
  const isMobile = width < 650
  const [section, setSection] = useState("first")

  return (
    <>
      <DelayRendering delay={1000} component={<Navigation />} />
      {!isMobile && <Scene section={section} />}
      <EducationInfo setSection={setSection} />
    </>
  )
}

export default Education
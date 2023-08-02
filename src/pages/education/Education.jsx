import Navigation from "../../components/navigation/Navigation"
import Scene from "../../components/education/Scene"
import DelayRendering from "../../custom_hooks/delayRendering"
import EducationInfo from "../../components/education/EducationInfo"
import { useState } from "react"
const Education = () => {

  const [section, setSection] = useState("first")

  return (
    <>
      {/* <DelayRendering delay={1000} component={<Navigation />} /> */}
      <Scene section={section} />
      <EducationInfo setSection={setSection} />
    </>
  )
}

export default Education
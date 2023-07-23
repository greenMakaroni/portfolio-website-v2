import Navigation from "../../components/navigation/Navigation"
import Scene from "../../components/education/Scene"
import DelayRendering from "../../custom_hooks/delayRendering"
import EducationInfo from "../../components/education/EducationInfo"

const Education = () => {

  return (
    <>
      <DelayRendering delay={1000} component={<Navigation />} />
      <Scene />
      <EducationInfo />
    </>
  )
}

export default Education
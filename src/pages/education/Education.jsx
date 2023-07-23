import Navigation from "../../components/navigation/Navigation"
import Scene from "../../components/education/Scene"
import DelayRendering from "../../custom_hooks/delayRendering"

const Education = () => {

  return (
    <>
        <DelayRendering delay={2000} component={<Navigation />} />
        <Scene />
    </>
  )
}

export default Education
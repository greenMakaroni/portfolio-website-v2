import Navigation from "../../components/navigation/Navigation"
import Scene from "../../components/education/Scene"
import DelayRendering from "../../custom_hooks/delayRendering"
import EducationInfo from "../../components/education/EducationInfo"

const Education = () => {

  return (
    <>
      <div className="w-screen h-screen p-0 m-0 z-10 absolute bg-[#ff8800] animate-moveCanvas"></div>
      <DelayRendering delay={1000} component={<Navigation />} />
      <Scene />
      <EducationInfo />
    </>
  )
}

export default Education
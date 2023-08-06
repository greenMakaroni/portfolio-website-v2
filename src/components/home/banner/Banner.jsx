import useWindowDimensions from "../../../custom_hooks/useWindowDimensions"
import useOnScreen from "../../../custom_hooks/useOnScreen"
import { useRef } from "react"
import Scene from "./Scene"
const Banner = () => {
  const { width } = useWindowDimensions()
  const isMobile = width < 650
  const banner = useRef()
  const isVisible = useOnScreen(banner)

  return (
    <div ref={banner} className="w-screen h-screen p-0 m-0 flex flex-row justify-start">
      {
        isVisible &&
        <>
          <div className="w-screen h-screen flex flex-col justify-start items-start">
            <h1 className={`font-['Kanit'] font-bold text-6xl select-none ${isMobile ? "ml-[5vw] mt-[30vh]" :  "ml-[15vw] mt-[30vh]" }`}> Dawid Markieton </h1>
            <p className={`font-['Geologica'] font-thin text-2xl ${isMobile ?  "ml-[5vw]" : "ml-[15vw]"} select-none`}>Software engineer</p>
          </div>
        <Scene />
        </>
      }
    </div>
  )
}


export default Banner
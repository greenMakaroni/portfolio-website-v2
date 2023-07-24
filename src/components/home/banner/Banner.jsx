import useOnScreen from "../../../custom_hooks/useOnScreen"
import { useRef } from "react"

const Banner = () => {

  const banner = useRef()
  const isVisible = useOnScreen(banner)

  return (
    <div ref={banner} className="w-screen h-screen p-0 m-0 flex flex-row justify-start">

      {
        isVisible &&
        <>
          <div className="absolute w-screen h-screen flex flex-col justify-start items-start">
            <h1 className="m-0 font-['Open Sans'] ml-[15vw] mt-[15vw] select-none font-light"> Dawid Markieton </h1>
            <p className="font-['Geologica'] ml-[15vw] font-thin select-none"> BSc. Software engineering</p>
          </div>
        </>
      }


    </div>
  )
}

export default Banner
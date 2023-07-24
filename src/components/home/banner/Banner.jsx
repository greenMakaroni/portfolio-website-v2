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
          <div className="w-screen h-screen flex flex-col justify-start items-start">
            <h1 className="font-['Open Sans'] text-4xl ml-[15vw] mt-[15vw] select-none">Dawid Markieton </h1>
            <p className="font-['Geologica'] font-thin text-xl ml-[15vw] select-none">BSc. Software Engineering</p>
          </div>
        </>
      }
    </div>
  )
}

export default Banner
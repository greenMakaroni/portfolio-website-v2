import { useRef } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen"
import { memo } from 'react'

const Button = ({ text, link }) => {
  const button = useRef()
  const isVisible = useOnScreen(button)
  return (
    <div ref={button}>
      {isVisible &&
        <button
          className=" duration-300 rounded-lg animate-elementIn z-20 mt-[40px] mb-[3vh] opacity-0 flex justify-center align-center border-2 border-black w-36 h-16 pt-4 pb-4 font-['Geologica'] hover:font-light font-thin hover:bg-black hover:text-white hover:cursor-pointer "
          onClick={() => window.open(link, "_blank")} >
          {text}
        </button>}
    </div>
  )
}

export default memo(Button);
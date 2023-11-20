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
          className=" duration-300 rounded-sm animate-elementIn z-20 my-[35px] opacity-0 flex justify-center items-center border-2 border-black px-[24px] py-[14px] font-['Geologica'] hover:font-light font-thin hover:bg-black hover:text-white hover:cursor-pointer "
          onClick={() => window.open(link, "_blank")}>
          {text}
        </button>
      }
    </div>
  )
}

export default memo(Button);
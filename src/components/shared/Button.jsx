import { memo } from 'react'

const Button = ({ text, link }) => {
  return (
    <div className="z-40">
        <button
          className="text-sm 
          rounded-tl-2xl 
          rounded-br-2xl 
          duration-200 
          rounded-sm 
          my-[15px] 
          flex 
          justify-center 
          items-center 
          border-2 
          border-[#8a0000]
          text-black
          text-[14px]   
          px-[20px] 
          py-[12px] 
          font-['Geologica'] 
          font-thin 
          bg-[rgba(255,255,255,0.1)] 
          hover:bg-gradient-to-r 
          hover:from-[#8a0000] 
          hover:to-[#fc7474]
          hover:text-white 
          hover:cursor-pointer "

          onClick={() => window.open(link, "_blank")}>
          {text}
        </button>
    </div>
  )
}

export default memo(Button);
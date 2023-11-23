import { memo } from 'react'

const Button = ({ text, link }) => {
  return (
    <div >
        <button
          className="text-sm rounded-bl-2xl duration-200 rounded-sm z-20 my-[15px] flex justify-center items-center border-2 border-black px-[20px] py-[12px] font-['Geologica'] hover:font-light font-thin hover:bg-black hover:text-white hover:cursor-pointer "
          onClick={() => window.open(link, "_blank")}>
          {text}
        </button>
      
    </div>
  )
}

export default memo(Button);
import { memo } from 'react'

const Button = ({ text, link }) => {
  return (
    <div >
        <button
          className="rounded-bl-2xl duration-200 rounded-sm z-20 my-[35px] flex justify-center items-center border-2 border-black px-[24px] py-[14px] font-['Geologica'] hover:font-light font-thin hover:bg-black hover:text-white hover:cursor-pointer "
          onClick={() => window.open(link, "_blank")}>
          {text}
        </button>
      
    </div>
  )
}

export default memo(Button);
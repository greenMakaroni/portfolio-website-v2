const Button = ({text, link}) => {
  return (
    <button 
        className=" duration-500 rounded-lg animate-elementIn z-20 mt-[40px] mb-[3vh] opacity-0 flex justify-center align-center border-2 border-black w-36 h-16 pt-4 pb-4 font-['Geologica'] hover:text-lg font-thin hover:bg-black hover:text-white hover:cursor-pointer " 
        onClick={() => window.open(link, "_blank")} >
    {text}
  </button>
  )
}

export default Button
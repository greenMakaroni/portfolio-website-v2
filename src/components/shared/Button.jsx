const Button = ({text, link}) => {
  return (
    <button 
        className="animate-elementIn mt-[40px] opacity-0 flex z-30 justify-center align-center border-2 border-black w-36 h-16 pt-4 pb-4 font-['Geologica'] font-thin hover:bg-black hover:text-white hover:cursor-pointer " 
        onClick={() => window.open(link, "_blank")} >
    {text}
  </button>
  )
}

export default Button
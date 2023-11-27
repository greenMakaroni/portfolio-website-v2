import { useRef } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen.jsx"
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx"

const Project = ({ num, title, description, link, buttonText }) => {
    const { width } = useWindowDimensions()
    const isMobile = width < 650
    const project = useRef()
    const isVisible = useOnScreen(project)

    return (
        <div ref={project} className={`${isMobile ? "w-screen" : "w-[30vw] "} opacity-0 relative pt-[40px] px-[20px] mt-[8vh] mb-[25vh] flex flex-col items-start border-black ${isVisible && "animate-elementIn"}`}>

            <div className="flex flex-col">
                <h1 className={`duration-700  mb-[20px] text-[22px] text-black font-['Kanit'] font-bold`}> 
                <span className="font-['Geologica'] font-thin mr-[10px]">
                    {num}.
                </span> 
                {title} </h1>
                <p className={`duration-700  mr-[30px] p-0  text-black font-['Geologica'] font-thin`}> {description} </p>
            </div>

            <button
                className="w-[200px] rounded-bl-2xl rounded-tr-2xl duration-200 rounded-sm z-20 my-[50px] flex justify-center items-center border-2 border-black px-[24px] font-thin py-[14px] font-['Kanit'] hover:bg-[rgba(0,0,0,0.1)] hover:cursor-pointer "
                onClick={() => window.open(link, "_blank")} >
                {buttonText}
            </button>
        </div>
    )
}

export default Project
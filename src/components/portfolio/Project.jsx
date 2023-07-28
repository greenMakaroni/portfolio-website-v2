import { useRef } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen.jsx"
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx"

const Project = ({ title, description, link }) => {
    const { height, width } = useWindowDimensions()
    const isMobile = width < 650
    const project = useRef()
    const isVisible = useOnScreen(project)

    return (
        <div ref={project} className={`${isMobile ? "" : "w-1/2"} mt-[40px] opacity-0 relative py-[40px] px-[20px] mb-1.5 flex flex-col border-2 border-black ${isVisible && "animate-elementIn"}`}>
            <h1 className="mb-[20px] text-xl text-black font-['Open Sans'] font-bold"> {title} </h1>
            <p className="mr-[30px] p-0 text-base text-black font-['Geologica'] font-thin"> {description} </p>
            <button 
                className="mt-[20px] flex justify-center align-center border-2 border-black w-36 h-16 pt-4 pb-4 font-['Geologica'] font-thin hover:bg-black hover:text-white hover:cursor-pointer" 
                onClick={() => window.open(link, "_blank")} >
                Go to project
            </button>
        </div>
    )
}

export default Project
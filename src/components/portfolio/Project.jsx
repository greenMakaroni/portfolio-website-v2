import { useRef } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen.jsx"
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx"

const Project = ({ title, description, link }) => {
    const { width } = useWindowDimensions()
    const isMobile = width < 650
    const project = useRef()
    const isVisible = useOnScreen(project)

    return (
        <div
    
            ref={project}
            className={`${isMobile ? "" : "w-[25vw]"} border-x-2 opacity-0 relative pt-[40px] px-[40px] my-[6vh] flex flex-col justify-between border-black ${isVisible && "animate-elementIn"}`}>

            <div className="flex flex-col">
                <h1 className={`duration-700 absolute mb-[20px] text-[22px] text-black font-['Kanit'] font-bold`}> {title} </h1>
                <p className={`duration-700 mt-[50px] mr-[30px] p-0  text-black font-['Geologica'] font-thin`}> {description} </p>
            </div>

            <button
                className="rounded-bl-2xl duration-200 rounded-sm z-20 my-[30px] flex justify-center items-center border-2 border-black px-[24px] py-[14px] font-['Geologica'] hover:font-light font-thin hover:bg-black hover:text-white hover:cursor-pointer "
                onClick={() => window.open(link, "_blank")} >
                Go to project
            </button>
        </div>
    )
}

export default Project
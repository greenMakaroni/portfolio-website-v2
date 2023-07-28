import { useRef } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen.jsx"
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx"

const Project = ({title, description, link}) => {
    const { height, width } = useWindowDimensions()
    const isMobile = width < 650
    const project = useRef()
    const isVisible = useOnScreen(project)

    return (
        <div ref={project} className={`${isMobile ? "" : "w-1/2"} mt-[40px] opacity-0 relative p-[40px] mb-1.5 flex flex-col border-2 border-black ${isVisible && "animate-elementIn"}`}>
            <h1 className="mb-[10px] text-xl text-black font-['Open Sans'] font-bold"> {title} </h1>
            <p className="mr-[30px] p-0 text-base text-black font-['Geologica'] font-thin"> {description} </p>
            <a href={link}> nanana </a>
        </div>
    )
}

export default Project
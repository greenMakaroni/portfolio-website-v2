import { useRef } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen.jsx"

const Project = ({title, description, link}) => {

    const project = useRef()
    const isVisible = useOnScreen(project)

    return (
        <div ref={project} className={`opacity-0 p-[40px] w-[100%] h-[100%] flex flex-col border-2 border-black ${isVisible && "animate-elementIn"}`}>
            <h1> {title} </h1>
            <p> {description} </p>
            <a href={link}> nanana </a>
        </div>
    )
}

export default Project
import { useRef, useState } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen.jsx"
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx"

const Project = ({ title, description, link }) => {
    const { width } = useWindowDimensions()
    const isMobile = width < 650
    const project = useRef()
    const isVisible = useOnScreen(project)

    const [fonts, setFonts] = useState({
        header: "text-xl",
        par: "text-base"
    })

    const onEnter = () => {
        setFonts({header: "text-[26px]", par: "text-[22px]"})
    }

    const onLeave = () => {
        setFonts({header: "text-xl", par: ""})
    }
    return (
        <div
            onMouseEnter={() => onEnter()}
            onMouseLeave={() => onLeave()}
            ref={project}
            className={`
            ${isMobile ? "" : "w-[70vw] h-[60vh]"} 
            border-l-8
            opacity-0 
            relative 
            py-[40px] 
            px-[40px] 
            my-[10vh]
            flex 
            flex-col 
            justify-between 
          border-black 
            ${isVisible && "animate-elementIn"}`}>

            <div className="flex flex-col">
                <h1 className={`duration-700 absolute mb-[20px] ${fonts.header} text-black font-['Kanit'] font-bold`}> {title} </h1>
                <p className={`duration-700 mt-[50px] mr-[30px] p-0 ${fonts.par} text-black font-['Geologica'] font-thin`}> {description} </p>
            </div>

            <button
                className="
                duration-500
                rounded-lg 
                mt-[20px] 
                flex 
                justify-center 
                align-center 
                border-2 
                border-black 
                w-36 
                h-16 
                py-4 
                font-['Geologica'] 
                font-thin 
                hover:bg-black 
                hover:text-white 
                hover:cursor-pointer
                hover:text-lg"
                onClick={() => window.open(link, "_blank")} >
                Go to project
            </button>
        </div>
    )
}

export default Project
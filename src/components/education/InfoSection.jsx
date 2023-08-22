import { useRef, useEffect } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen"

const InfoSection = (props) => {

    const section = useRef()
    const isVisible = useOnScreen(section)

    useEffect(() => {
        isVisible && props.setSection((prevState) => ({
            prev: prevState.current,
            current: props.param
        }))
      }, [isVisible])

    return (
        <div ref={section} className={`${props.param == "first" ? "pt-[15vh] opacity-0 animate-elementIn " : "pt-[5vh]"} pl-[15vh] h-screen flex flex-col select-none ${props.isMobile ? "w-[100vw]" : "animate-infoElementIn w-[50vw]"}`}>
            {isVisible && props.children}
        </div>
    )
}

export default InfoSection
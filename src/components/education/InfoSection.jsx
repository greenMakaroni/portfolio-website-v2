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
        <div ref={section} className={`${props.param == "first" ? "pt-[15vh] opacity-0 animate-elementIn " : "pt-[5vh]"} min-h-[120vh] my-[10vh] flex flex-col select-none ${props.isMobile ? "pl-[5vh] w-[100vw]" : "pl-[15vh] animate-infoElementIn w-[50vw]"}`}>
            {isVisible && props.children}
        </div>
    )
}

export default InfoSection
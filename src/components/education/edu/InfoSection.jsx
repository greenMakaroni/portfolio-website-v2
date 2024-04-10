import { useRef, useEffect } from "react"
import useOnScreen from "../../../custom_hooks/useOnScreen"

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
        <div ref={section} className={`${props.param == "first" ? "pt-[15vh]" : "pt-[5vh]"} opacity-0 animate-infoElementIn min-h-screen flex flex-col select-none ${props.isMobile ? "pl-[5vh] w-[100vw] " : "pl-[15vh] w-[50vw]"}`}>
            { props.children }
        </div>
    )
}

export default InfoSection
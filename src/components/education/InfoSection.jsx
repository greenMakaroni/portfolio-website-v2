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
        <div ref={section} className={`pl-[15vh] pt-[5vh] h-screen flex flex-col select-none ${props.isMobile ? "w-[100vw]" : "w-[50vw]"}`}>
            {isVisible && props.children}
        </div>
    )
}

export default InfoSection
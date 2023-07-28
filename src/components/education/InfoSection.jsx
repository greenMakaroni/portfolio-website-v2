import { useRef } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen"

const InfoSection = (props) => {

    const section = useRef()
    const isVisible = useOnScreen(section)
    return (
        <div ref={section} className="pl-[10vw] w-screen h-screen flex flex-col select-none">
            {isVisible && props.children}
        </div>
    )
}

export default InfoSection
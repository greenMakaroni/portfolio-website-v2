import { useRef } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen"

const Info = ({ header, paragraph }) => {

    const info = useRef()
    const isVisible = useOnScreen(info)

    return (
        <div ref={info}>
            {isVisible &&
                <>
                    <h1 className="animate-elementIn opacity-0 pt-[40px] text-xl text-black font-['Kanit'] font-bold">
                        {header}
                    </h1>
                    <p className="animate-elementIn opacity-0 text-lg text-black font-['Geologica'] font-thin ">
                        {paragraph}
                    </p>
                </>}
        </ div>
    )
}

export default Info
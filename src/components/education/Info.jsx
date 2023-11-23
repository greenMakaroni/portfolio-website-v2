import { memo } from 'react'

const Info = (props) => {

    return (
        <div>
            <>
                <h1 className="animate-elementIn opacity-0 pt-[25px] text-md text-black font-['Kanit'] font-bold flex items-center">
                    <span className="mr-[15px] mb-[10px]">
                        {props.children}
                    </span>
                    {props.header}
                </h1>
                <p className="animate-elementIn opacity-0 text-sm text-black font-['Geologica'] font-thin ">
                    {props.paragraph}
                </p>
            </>
        </ div>
    )
}

export default memo(Info);
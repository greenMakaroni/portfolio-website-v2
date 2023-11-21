import { memo } from 'react'

const Info = (props) => {

    return (
        <div>
            <>
                <h1 className="animate-elementIn opacity-0 pt-[35px] text-xl text-black font-['Kanit'] font-bold flex items-center">
                    <span className="mr-[10px] mb-[10px]">
                        {props.children}
                    </span>
                    {props.header}
                </h1>
                <p className="animate-elementIn opacity-0 text-lg text-black font-['Geologica'] font-thin ">
                    {props.paragraph}
                </p>
            </>
        </ div>
    )
}

export default memo(Info);
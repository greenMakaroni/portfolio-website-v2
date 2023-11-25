import { memo } from 'react'

const Info = (props) => {

    return (
        <div className=" my-[15px]">
                <h1 className="py-[5px] text-md text-white font-['Kanit'] font-bold tracking-wider flex items-center">
                    <span className="mr-[15px] mb-[10px]">
                        {props.children}
                    </span>
                    {props.header}
                </h1>
                <p className="w-[300px] text-sm text-white font-['Geologica'] font-thin ">
                    {props.paragraph}
                </p>
        </ div>
    )
}

export default memo(Info);
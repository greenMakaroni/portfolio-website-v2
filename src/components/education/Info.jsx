import { memo } from 'react'

const Info = (props) => {

    return (
        <div className=" my-[15px]">
            <p className="flex py-[15px] items-center w-[400px] text-sm text-white font-['Geologica'] font-thin ">
                <span className="mr-[15px]">
                    {props.children}
                </span>
                {props.paragraph}
            </p>
        </ div>
    )
}

export default memo(Info);
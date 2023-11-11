import { memo } from 'react'

const Info = ({ header, paragraph }) => {

    return (
        <div>
                <>
                    <h1 className="animate-elementIn opacity-0 pt-[40px] text-xl text-black font-['Kanit'] font-bold">
                        {header}
                    </h1>
                    <p className="animate-elementIn opacity-0 text-lg text-black font-['Geologica'] font-thin ">
                        {paragraph}
                    </p>
                </>
        </ div>
    )
}

export default memo(Info);
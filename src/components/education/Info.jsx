
const Info = ({header, paragraph}) => {
    return (
        <>
            <h1 className="animate-infoElementIn opacity-0 pt-[40px] text-xl text-black font-['Open Sans'] font-bold">
                {header}
            </h1>
            <p className="animate-infoElementIn opacity-0 text-lg text-black font-['Geologica'] font-thin ">
                {paragraph}
            </p>
        </>
    )
}

export default Info
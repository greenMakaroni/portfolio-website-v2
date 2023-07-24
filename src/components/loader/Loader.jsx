import { Html, useProgress } from '@react-three/drei';


const Loader = ({ setLoaded }) => {
    const { progress } = useProgress()
    progress > 99 && setLoaded(true)    
    return <Html center className="relative flex m-0 p-0 h-screen w-screen bg-[#ff8800] text-[#ffffff] items-center justify-center z-10 font-['Geologica'] text-[2rem] "> Loading... </Html>
}

export default Loader
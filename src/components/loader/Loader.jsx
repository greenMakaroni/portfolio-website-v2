import { Html, useProgress } from '@react-three/drei';


const Loader = ({ setLoaded }) => {
    const { progress } = useProgress()
    const finishedLoading = progress > 99
    finishedLoading && setLoaded(true)    
    return <Html center className={` duration-300 ${progress > 20 && "opacity-0"} relative flex m-0 p-0 h-screen w-screen animate-pulse text-[#000000] items-center justify-center z-50 font-['Geologica'] text-[2rem]`}
    > <p> Loading... </p> </Html>
} 
export default Loader
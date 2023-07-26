import { Html, useProgress } from '@react-three/drei';


const Loader = (props) => {
    const { progress } = useProgress()
    const finishedLoading = progress == 100
    finishedLoading && props.setLoaded(true)    
    return <Html center className="relative flex m-0 p-0 h-screen w-screen bg-[#ff8800] text-[#ffffff] items-center justify-center z-50 font-['Geologica'] text-[2rem]"
    > <p className="animate-bounce"> Loading... </p> </Html>
}
export default Loader
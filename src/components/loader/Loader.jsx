import { useProgress } from '@react-three/drei';

const Loader = ({ setLoaded }) => {
    const { progress } = useProgress()
    const finishedLoading = progress > 99
    finishedLoading && setLoaded(true)    
    return(<></>)
} 
export default Loader
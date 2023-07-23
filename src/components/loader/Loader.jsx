import { Html, useProgress } from '@react-three/drei';
import "./loader.css"

const Loader = ({ setLoaded }) => {
    const { progress } = useProgress()
    progress > 99 && setLoaded(true)    
    return <Html center className="progress"> Loading... </Html>
}

export default Loader
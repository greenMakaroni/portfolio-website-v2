import { Html, useProgress } from '@react-three/drei';
import "./loader.css";

const Loader = ({ setLoaded }) => {
    const { progress } = useProgress();
    progress == 100 && setLoaded(true);
    return <Html center className="progress"> {progress}% </Html>
    
}

export default Loader
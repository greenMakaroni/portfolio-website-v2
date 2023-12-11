import { useEffect } from "react"
import { useProgress} from "@react-three/drei"

const Loader = ({ setLoaded }) => {
    const { progress } = useProgress()

    useEffect(() => {
      if(setLoaded) {
        progress == 100 && setLoaded(true)
      }  
    }, [progress])
    
  return (
    <></>
  )
}

export default Loader
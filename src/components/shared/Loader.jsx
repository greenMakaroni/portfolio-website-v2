import { useEffect } from "react"
import { useProgress} from "@react-three/drei"

const Loader = ({ setLoaded }) => {
    const { progress } = useProgress()

    useEffect(() => {
        progress == 100 && setLoaded(true)
    }, [progress])
    console.log(progress)
  return (
    <>
    </>
  )
}

export default Loader
import { memo } from "react"
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei"

const Shadows = () => (
    <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
      <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
    </AccumulativeShadows>
  )

  export default memo(Shadows)
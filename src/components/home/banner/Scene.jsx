import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Dmu } from './Dmu'

const Scene = () => {

  return (
    <div className="canvas">
      <Canvas >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Dmu />
      </Canvas>
    </div>

  )
}

export default Scene
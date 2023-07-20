import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Dmu } from './Dmu'
import Shadows from '../../shadows/Shadows.jsx'
import { CameraControls, GizmoHelper, GizmoViewport, Grid } from '@react-three/drei'

const Scene = () => {

  return (
    <div className="canvas">
      <Canvas shadows camera={{ position: [-3, 10, 15], fov: 25 }}>
        {/* Lights */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* Models */}
        <Dmu />

        {/* Drei helpers */}
        <Shadows />
        <CameraControls />
        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
          {/* alternative: <GizmoViewcube /> */}
        </GizmoHelper>
      </Canvas>
    </div>

  )
}

export default Scene
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Dmu } from './Dmu'
import { CameraControls, GizmoHelper, GizmoViewport } from '@react-three/drei'
const Scene = () => {

  return (
    <div className="canvas">
      <Canvas >
        {/* Lights */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* Models */}
        <Dmu />

        {/* Drei helpers */}
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
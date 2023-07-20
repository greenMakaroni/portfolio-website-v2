import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Dmu } from './Dmu'
import Shadows from '../../shadows/Shadows.jsx'
import { GizmoHelper, GizmoViewport, OrbitControls, Center, Environment } from '@react-three/drei'

const Scene = () => {

  return (
    <div className="canvas">
      <Canvas shadows camera={{ position: [-3, 1, 8], fov: 25 }}>
        {/* Lights */}
        <pointLight position={[10, 10, 10]} />

        {/* Models */}
        <Center>
          <Dmu />
        </Center>
       

        {/* Drei helpers */}
        <Shadows />
        {/* <CameraControls /> */}
        <OrbitControls enableZoom={true} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />

        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
          {/* alternative: <GizmoViewcube /> */}
        </GizmoHelper>
        <Environment preset="city" />

      </Canvas>
    </div>

  )
}

export default Scene
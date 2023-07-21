import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { GizmoHelper, GizmoViewport, OrbitControls, Center, Environment } from '@react-three/drei'
// models
import { Dmu } from './Dmu.jsx'
import Shadows from '../../shadows/Shadows.jsx'

// theatre.js
// import studio from "@theatre/studio"
import { editable, SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import dmuLogoAnimation from "./dmu_entry.json"

const sheet = getProject('Logo', { state: dmuLogoAnimation }).sheet('Logo entry');
// studio.initialize();


const Scene = () => {
  // play theatre animation
  useEffect(() => {
    sheet.project.ready.then(() => sheet.sequence.play({ iterationCount: 1, range: [0, 10] }))
  }, [])

  return (
    <div className="canvas">
      <Canvas shadows camera={{ position: [-3, 1, 8], fov: 25 }}>
        <SheetProvider sheet={sheet}>
         <PerspectiveCamera theatreKey="Camera" makeDefault position={[-3, 2, 10]} lookAt={[0, 0, 0]} fov={30} />
          {/* Lights */}
          <editable.pointLight theatreKey="light" position={[-10, 20, 10]} />

          {/* Models */}
          <Center>
            <Dmu />
          </Center>
          
          {/* Drei helpers */}
          <Shadows />
          <OrbitControls enableZoom={true} enablePan={true} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
          {/* <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
        </GizmoHelper> */}
          <Environment preset="city" />
        </SheetProvider>
      </Canvas>
    </div>
  )
}

export default Scene
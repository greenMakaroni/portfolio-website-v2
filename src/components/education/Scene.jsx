import { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, Environment } from '@react-three/drei'
// models
import { Dmu } from './Dmu.jsx'
import { Zstio } from './Zstio.jsx'
// loader
import Loader from '../loader/Loader.jsx';
// theatre.js
import { editable, SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import dmuEntryAnimation from "./dmu_entry.json"

// development utils
// import studio from "@theatre/studio"
// studio.initialize();

// get animations sheet
/* Development mode */
// const sheet_entry = getProject('Logo entry').sheet('Logo entry');

/* Production mode */
const sheet_entry = getProject('Logo entry', { state: dmuEntryAnimation }).sheet('Logo entry')

const Scene = ({ section, isLoaded, setLoaded }) => {

  // play animation when models are loaded
  useEffect(() => {
    if (isLoaded) {
      sheet_entry.project.ready
        .then(() => sheet_entry.sequence.play({ iterationCount: 1, range: [0.1, 6.5] })).then(() =>
          sheet_entry.sequence.play({ iterationCount: Infinity, range: [6.5, 12.5] })
        )
    }
  }, [isLoaded])

  useEffect(() => {
    if (section == "second") {
      sheet_entry.sequence.play({ iterationCount: 1, range: [13, 14.5] }).then(() => {
        sheet_entry.sequence.play({ iterationCount: Infinity, range: [14.5, 20.5] })
      })
    }

    if (section == "first") {
      sheet_entry.sequence.play({ iterationCount: 1, range: [13, 14.9], direction: 'reverse' }).then(() => {
        sheet_entry.sequence.play({ iterationCount: Infinity, range: [6.5, 12.5] })
      })
    }
  }, [section])

  return (
    <div className="m-0 p-0 absolute flex flex-row justify-end w-screen h-screen">
      <div className={`"m-0 p-0 w-screen h-screen fixed z-20 ${isLoaded && "animate-moveCanvas"}`}>
        {/* { play the transition when the scene is loaded} */}
        <Canvas shadows camera={{ position: [-3, 1, 8], fov: 25 }}>
          {/* { Suspense execution and serve loader until models are loaded } */}
          <Suspense fallback={<Loader setLoaded={setLoaded} />}>
            {/* { animation sheet provider } */}
            <SheetProvider sheet={sheet_entry}>
              <PerspectiveCamera theatreKey="Camera" makeDefault position={[-3, 2, 10]} fov={30} />
              {/* Lights */}
              <editable.pointLight theatreKey="light" position={[-10, 20, 10]} />
              {/* Models */}
              <Center>
                <Dmu />
              </Center>
              <Zstio />
              {/* Drei helpers */}
              <OrbitControls enableZoom={false} enableRotate={true} enablePan={true} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
              <Environment preset="city" />
            </SheetProvider>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Scene
import { useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, Environment } from '@react-three/drei'
// models
import { Dmu } from './Dmu.jsx'
import { Zstio } from './Zstio.jsx'
import { Star } from './Star.jsx'
// loader
import Loader from '../loader/Loader.jsx';
// theatre.js
import { SheetProvider, PerspectiveCamera } from '@theatre/r3f'
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

  // play transition animation on section change
  useEffect(() => {
    if (section.current == "third") {
      sheet_entry.sequence.play({ iterationCount: 1, range: [20.5, 21.5] }).then(() => {
        sheet_entry.sequence.play({ iterationCount: Infinity, range: [21.7, 27.5] })
      })
    }

    if (section.current == "second" && section.prev == "first") {
      sheet_entry.sequence.play({ iterationCount: 1, range: [13, 14] }).then(() => {
        sheet_entry.sequence.play({ iterationCount: Infinity, range: [14, 20.5] })
      })
    }

    if (section.current == "second" && section.prev == "third") {
      sheet_entry.sequence.play({ iterationCount: 1, range: [20.5, 21.5], direction: 'reverse' }).then(() => {
        sheet_entry.sequence.play({ iterationCount: Infinity, range: [14, 20.5] })
      })
    }

    if (section.current == "first") {
      sheet_entry.sequence.play({ iterationCount: 1, range: [13, 14], direction: 'reverse' }).then(() => {
        sheet_entry.sequence.play({ iterationCount: Infinity, range: [6.5, 12.5] })
      })
    }

  }, [section])

  return (
    <div className="m-0 p-0 absolute flex flex-row justify-end w-screen h-screen">
      <div className="m-0 p-0 z-[0] w-screen h-screen fixed animate-moveCanvas">
        {/* { play the transition when the scene is loaded} */}
        <Canvas shadows>
          {/* { Suspense execution and serve loader until models are loaded } */}
          <Suspense fallback={<Loader setLoaded={setLoaded} />}>
            {/* { animation sheet provider } */}
            <SheetProvider sheet={sheet_entry}>
              <PerspectiveCamera theatreKey="Camera" makeDefault position={[-3, -20, 10]} fov={30} />
              {/* Lights */}
              <pointLight position={[-10, 20, 10]} />
              {/* Models */}
              <Center>
                <Dmu />
              </Center>
              <Zstio />
              <Star />
              {/* Drei helpers */}
              <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
              <Environment preset="city" />
            </SheetProvider>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Scene
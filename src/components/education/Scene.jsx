import { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { GizmoHelper, GizmoViewport, OrbitControls, Center, Environment } from '@react-three/drei'
// models
import { Dmu } from './Dmu.jsx'
import Shadows from '../shadows/Shadows.jsx'
// loader
import LoadingTransition from '../loader/LoadingTransition.jsx';
import Loader from '../loader/Loader.jsx';
// theatre.js
import { editable, SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import { getProject, onChange } from '@theatre/core'
import dmuEntryAnimation from "./dmu_entry.json"
// development utils
// import studio from "@theatre/studio"
// studio.initialize();
// css
import "./edu_scene.css"


// get animations sheet
const sheet_entry = getProject('Logo entry', { state: dmuEntryAnimation }).sheet('Logo entry');

const Scene = () => {

  // true when models are fully loaded
  const [isLoaded, setLoaded] = useState(false)

  // play animation when models are loaded
  useEffect(() => {
    if (isLoaded) {
      sheet_entry.project.ready
        .then(() => sheet_entry.sequence.play({ iterationCount: 1, range: [0, 6.5] }))
    }

    return (
      setLoaded(false)
    )
  }, [isLoaded])

  // After first iteration of the animation, pointer.playing will change from true to false
  onChange(sheet_entry.sequence.pointer.playing, (playing) => {
    if (!playing) {
      // when entry animation finished playing, play the loop infinitely
      sheet_entry.sequence.play({ iterationCount: Infinity, range: [6.5, 12.5] })
    }
  })

  return (
    <div className="canvas_body">
      <div className="canvas">
        {/* { play the transition when the scene is loaded} */}
        { isLoaded && <LoadingTransition /> }
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

              {/* Drei helpers */}
              <Shadows />
              <OrbitControls enableZoom={false} enablePan={true} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
              {/* <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
        </GizmoHelper> */}
              <Environment preset="city" />
            </SheetProvider>
          </Suspense>
        </Canvas>
      </div>
    </div>

  )
}

export default Scene
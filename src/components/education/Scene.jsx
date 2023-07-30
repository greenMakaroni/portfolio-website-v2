import { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, Environment } from '@react-three/drei'
// models
import { Edu } from './Edu.jsx'
// loader
import Loader from '../loader/Loader.jsx';
// theatre.js
import { editable, SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import { getProject, onChange } from '@theatre/core'
import dmuEntryAnimation from "./dmu_entry.json"
// development utils
import studio from "@theatre/studio"
studio.initialize();

// get animations sheet
// 2nd argument to getProject('Logo entry', , { state: dmuEntryAnimation }).sheet('Logo entry')
const sheet_entry = getProject('Logo entry').sheet('Logo entry');

// responsive
import useWindowDimensions from '../../custom_hooks/useWindowDimensions.jsx';

const Scene = () => {

  const [isLoaded, setLoaded] = useState(false)
  const { height, width } = useWindowDimensions()
  const isMobile = width < 650

  // play animation when models are loaded
  // useEffect(() => {
  //   if (isLoaded) {
  //     sheet_entry.project.ready
  //       .then(() => sheet_entry.sequence.play({ iterationCount: 1, range: [0, 6.5] }))
  //   }
  // }, [isLoaded])

  // After first iteration of the animation, pointer.playing will change from true to false
  // onChange(sheet_entry.sequence.pointer.playing, (playing) => {
  //   if (!playing) {
  //     // when entry animation finished playing, play the loop infinitely
  //     sheet_entry.sequence.play({ iterationCount: Infinity, range: [6.5, 12.5] })
  //   }
  // })

  return (
    <div className="m-0 p-0 absolute flex flex-row justify-end w-screen h-screen">
      <div className={` m-0 p-0 w-screen h-screen ${!isMobile ? "animate-moveCanvas fixed z-20" : "relative"}`}>
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
                <Edu />
              </Center>

              {/* Drei helpers */}
              <OrbitControls enableZoom={false} enableRotate={!isMobile} enablePan={true} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
              <Environment preset="city" />
            </SheetProvider>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Scene
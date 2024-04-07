/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, Environment} from '@react-three/drei'

// models
import { Dmu } from './3Dmodels/Dmu.jsx'
import { Zstio } from './3Dmodels/Zstio.jsx'
import { Scroll } from './3Dmodels/Scroll.jsx'
import Box from './3Dmodels/Box.jsx'

// theatre.js
import { SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import dmuEntryAnimation from "./dmu_entry.json"
import { animationController, resetAnimation, entry } from "./Animations.jsx"

// Loader
import Loader from '../shared/Loader.jsx'

/* --------------------------- Animation development mode --------------------------- */
// import { onChange, val } from '@theatre/core'
// import studio from "@theatre/studio"

// studio.initialize();

// const sheet_entry = getProject('Logo entry').sheet('Logo entry'); // Animation Sheet


/* --------------------------- Animation production mode --------------------------- */
const sheet_entry = getProject('Logo entry', { state: dmuEntryAnimation }).sheet('Logo entry') // Animation Sheet

const Scene = ({ section }) => {
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => { 
    isLoaded && entry(sheet_entry)
  
    return (
      resetAnimation(sheet_entry)
    ) }, [isLoaded])

  // this logic is no good here *********************************************************** redo
  useEffect(() => { 
    if(section.current == "first" && section.prev == "first") {
      return
    } else {
       animationController(sheet_entry, section) 
    }

  }, [section])

  return (
    <div className={`m-0 p-0 absolute flex flex-row justify-end w-screen h-screen`}>
      <div className="m-0 p-0 z-[0] w-screen h-screen fixed opacity-0 animate-moveCanvas">
        {/* { play the transition when the scene is loaded} */}
        <Canvas shadows>
          {/* { Suspense execution and serve loader until models are loaded } */}
          <Suspense fallback={<Loader setLoaded={setLoaded} />}>
            {/* { animation sheet provider } */}
            <SheetProvider sheet={sheet_entry}>
              <PerspectiveCamera theatreKey="Camera" makeDefault position={[-10, -20, 10]} fov={30} />
              {/* Lights */}
              <spotLight castShadow intensity={0.4} position={[-4, 6, 4]} />

              {/* Models */}
              <Center>
                <Dmu />
              </Center>
              <Zstio />
              <Scroll />
              <Box time={1} dist={0} animate={false} color="black" geo={[7, 15, 7]} position={[0, -9.15, 0]} />
              <Box time={4} dist={4} animate={true} color="black" geo={[4, 4, 4]} position={[20, 3, -20]} />
              <Box time={2} dist={2} animate={true} color={0x8a0000} geo={[1, 1, 1]} position={[5, -3, -15]} />

              {/* Drei helpers */}
              <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} minAzimuthAngle={-1} maxAzimuthAngle={-2} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
              <Environment preset="forest" />
            </SheetProvider>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}


export default Scene
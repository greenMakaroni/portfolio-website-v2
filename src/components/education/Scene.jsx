/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, Environment } from '@react-three/drei'

// models
import { Dmu } from './3Dmodels/Dmu.jsx'
import { Zstio } from './3Dmodels/Zstio.jsx'
import { Scroll } from './3Dmodels/Scroll.jsx'

// theatre.js
import { SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import dmuEntryAnimation from "./dmu_entry.json"
import { animationController, entry } from "./Animations.jsx"

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

  useEffect(() => { isLoaded && entry(sheet_entry) }, [isLoaded])

  useEffect(() => {
    animationController(sheet_entry, section)
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
              <PerspectiveCamera theatreKey="Camera" makeDefault position={[-3, -20, 10]} fov={30} />
              {/* Lights */}
              <pointLight position={[-10, 20, 10]} />
              {/* Models */}
              <Center>
                <Dmu />
              </Center>
              <Zstio />
              <Scroll />

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
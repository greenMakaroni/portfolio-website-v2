import { useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
// models
// loader
// theatre.js
import { editable, SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import { Laptop } from './Laptop.jsx';
import { getProject } from '@theatre/core'

const sheet_entry = getProject('main').sheet('main');

const Scene = () => {

  return (
    <div className="m-0 p-0 absolute flex flex-row justify-end w-screen h-screen">
      <div className="m-0 p-0 w-screen h-screen fixed z-20">
        {/* { play the transition when the scene is loaded} */}
        <Canvas shadows>
          {/* { Suspense execution and serve loader until models are loaded } */}
          <Suspense >
            {/* { animation sheet provider } */}
            <SheetProvider sheet={sheet_entry}>
              <PerspectiveCamera theatreKey="Camera" makeDefault lookAt={[0, 0, 0]} position={[-20, 20, 20]} fov={60} />
              {/* Lights */}
              <pointLight position={[-10, 20, 10]} />
              {/* Models */}
                <Laptop />
              {/* Drei helpers */}
              <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
              <Environment preset="city" />
            </SheetProvider>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Scene
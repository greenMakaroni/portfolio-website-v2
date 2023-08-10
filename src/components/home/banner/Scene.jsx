import { useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment  } from '@react-three/drei'
// models
// loader
// theatre.js
import { editable, SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import { getProject } from '@theatre/core'

const sheet_entry = getProject('main').sheet('main');

const Scene = () => {

  return (
    <div className="m-0 p-0 border-2 border-orange-500 absolute flex flex-row justify-end w-screen h-screen">
      <div className="m-0 p-0 w-screen h-screen fixed">
        {/* { play the transition when the scene is loaded} */}
        <Canvas shadows>
          {/* { Suspense execution and serve loader until models are loaded } */}
          <Suspense >
            {/* { animation sheet provider } */}
            <SheetProvider sheet={sheet_entry}>
              <PerspectiveCamera theatreKey="Camera" makeDefault position={[7, 10, 10]} fov={30} />
              {/* Lights */}

     
              {/* Models */}


              {/* Drei helpers */}
              <Environment preset="city" />
            </SheetProvider>
          </Suspense>
          <OrbitControls enableZoom={false} enableRotate={true} enablePan={true} minAzimuthAngle={Math.PI + Math.PI / 4} maxAzimuthAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
        </Canvas>
      </div>
    </div>
  )
}

export default Scene
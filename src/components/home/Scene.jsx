/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, Environment, Grid } from '@react-three/drei'

// models
import Laptop from "./3Dmodels/Laptop.jsx"

const Scene = ({ section }) => {

  return (
      <div className="m-0 p-0 w-screen h-screen fixed">
        {/* { play the transition when the scene is loaded} */}
        <Canvas shadows camera={{ fov: 40, near: 0.1, far: 1000, position: [0, 4, 5]}}>

              {/* Models */}
                <Laptop />
    
              {/* Drei helpers */}
              {/* <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} /> */}
              <Environment preset="city" />
        </Canvas>
      </div>
  )
}

export default Scene
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
// models
import Cluster from "./3Dmodels/Cluster";

// loader
import Loader from "../../components/shared/Loader.jsx";
// theatre.js
// import { SheetProvider, PerspectiveCamera } from '@theatre/r3f'
// import { getProject } from '@theatre/core'

// const sheet_entry = getProject('main').sheet('main');

const Scene = () => {
  return (
    <div className="-z-10 absolute flex flex-row justify-end w-screen h-screen ">
      <div className="w-screen h-screen fixed">
        {/* { play the transition when the scene is loaded} */}
        <Canvas shadows>
          {/* { Suspense execution and serve loader until models are loaded } */}
          <Suspense fallback={<Loader />}>
            {/* Lights */}

            {/* Models */}
            <Cluster />

            {/* Drei helpers */}
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;

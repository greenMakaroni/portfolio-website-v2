/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Environment } from "@react-three/drei";

// Scene models
import { Dmu } from "./3Dmodels/Dmu.jsx";
import Box from "./3Dmodels/Box.jsx";
import Carousel from "./3Dmodels/Carousel.jsx";
//

// theatre.js
import { SheetProvider, PerspectiveCamera } from "@theatre/r3f";
import { getProject } from "@theatre/core";
import dmuEntryAnimation from "./dmu_entry.json";

// Loader
import Loader from "../shared/Loader.jsx";

/* --------------------------- Animation development mode --------------------------- */
// import { onChange, val } from "@theatre/core";
// import studio from "@theatre/studio";

// studio.initialize();

// const sheet_entry = getProject("Logo entry", {
//   state: dmuEntryAnimation,
// }).sheet("Logo entry"); // Animation Sheet

/* --------------------------- Animation production mode --------------------------- */
const sheet_entry = getProject("Logo entry", {
  state: dmuEntryAnimation,
}).sheet("Logo entry"); // Animation Sheet

const Scene = ({ section }) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      sheet_entry.project.ready
        .then(() =>
          sheet_entry.sequence.play({ iterationCount: 1, range: [0.1, 4.2] })
        )
        .then(() => {
          sheet_entry.sequence.play({
            iterationCount: Infinity,
            range: [5, 9],
          });
        });
    }
  }, [isLoaded, section]);

  return (
    <div
      className={`m-0 p-0 absolute flex flex-row justify-end w-screen h-screen`}
    >
      <div className="m-0 p-0 z-[0] w-screen h-screen fixed opacity-0 animate-moveCanvas">
        {/* { play the transition when the scene is loaded} */}
        <Canvas shadows>
          {/* { Suspense execution and serve loader until models are loaded } */}
          <Suspense fallback={<Loader setLoaded={setLoaded} />}>
            {/* { animation sheet provider } */}
            <SheetProvider sheet={sheet_entry}>
              <PerspectiveCamera
                theatreKey="Camera"
                makeDefault
                position={[-10, -20, 10]}
                fov={30}
              />
              {/* Lights */}
              <spotLight castShadow intensity={0.4} position={[-4, 6, 4]} />

              {/* Models */}
              <Center>
                <Dmu />
              </Center>
              <Center>
                <Carousel />
              </Center>

              <Box position={[0, -9.15, 0]} />

              {/* Drei helpers */}
              <OrbitControls
                enableZoom={false}
                enableRotate={true}
                enablePan={false}
                minAzimuthAngle={-1}
                maxAzimuthAngle={-2}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
              />
              <Environment preset="forest" />
            </SheetProvider>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;

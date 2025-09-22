/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useState, useEffect, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  Environment,
  useProgress,
} from "@react-three/drei";
import * as THREE from "three";

// Scene models
import { Dmu } from "./3Dmodels/Dmu.jsx";
import Box from "./3Dmodels/Box.jsx";

// theatre.js
import { SheetProvider, PerspectiveCamera } from "@theatre/r3f";
import { getProject } from "@theatre/core";
import dmuEntryAnimation from "./dmu_entry.json";

// Loader
import Loader from "../shared/Loader.jsx";

// postprocessing
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

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

/* ------------------------------------------------------------------------------------- */

// Helper that (re)plays the intro then the idle loop
async function playIntroThenLoop() {
  // ensure the project is ready before controlling the sequence
  await sheet_entry.project.ready;
  console.log("animation state: ", sheet_entry.project.ready);
  sheet_entry.sequence.pause(); // stop anything currently running
  sheet_entry.sequence.position = 0; // ← critical: rewind to the very start

  // play the intro once
  await sheet_entry.sequence.play({
    iterationCount: 1,
    range: [0.1, 4.2],
  });

  // then play the idle loop forever
  await sheet_entry.sequence.play({
    iterationCount: Infinity,
    range: [5, 9],
  });
}

const Scene = () => {
  const [start, setStart] = useState(false);
  const camRef = useRef();

  useEffect(() => {
    // flag to prevent state updates after unmount
    let cancelled = false; // boolean guard used inside the async IIFE

    (async () => {
      // 1) wait until Theatre project is fully initialized
      await sheet_entry.project.ready; // .ready -> Promise that resolves when Theatre is ready

      if (cancelled) return; // if unmounted while waiting, bail out

      const seq = sheet_entry.sequence; // cache the sequence reference locally

      // 2) hard reset any existing playback before starting
      seq.pause(); // .pause() -> stop current playback immediately
      seq.position = 0; // set playback head to the very beginning (time = 0)

      // 3) play the intro ONCE and wait for it to finish
      await seq.play({
        iterationCount: 1, // play exactly once
        range: [0.1, 4.2], // [startTime, endTime] in seconds on your timeline
      }); // await resolves when the one-shot finishes

      if (cancelled) return; // if unmounted during the intro, bail out safely

      // 4) now signal your R3F rig that it can start running in useFrame
      setStart(true); // flip your gate so useFrame logic activates

      // 5) start the infinite loop — IMPORTANT: do NOT await this (it never resolves)
      void seq.play({
        iterationCount: Infinity, // loop forever
        range: [5, 9], // loop segment
      }); // fire-and-forget so effect can complete
    })();

    // cleanup to avoid leaks and stale state updates
    return () => {
      cancelled = true; // prevent any pending async from calling setState
      setStart(false); // gate off your useFrame on unmount/navigation
      try {
        sheet_entry.sequence.pause(); // stop playback if it’s running
        sheet_entry.sequence.position = 0; // rewind for next mount
      } catch {
        /* ignore if sequence went away */
      }
    };
  }, [sheet_entry]);

  console.log("start: ", start);

  function CameraRig({ camRef, target = [0, 0, 0], radius = 20 }) {
    // ^ React component that will run inside <Canvas>, so it's allowed to use useFrame

    useFrame((state) => {
      if (!start || !camRef.current) return;
      const t = state.clock.elapsedTime * 0.1;
      camRef.current.position.x = Math.sin(t) * radius;
      camRef.current.position.z = Math.cos(t) * radius;
      camRef.current.lookAt(0, 0, 0);
    });

    return null; // this controller renders nothing; it only updates the camera each frame
  }

  return (
    <div
      className={`m-0 p-0 absolute flex flex-row justify-end w-screen h-screen`}
    >
      <div className="m-0 p-0 z-[0] w-screen h-screen fixed opacity-0 animate-moveCanvas">
        {/* { play the transition when the scene is loaded} */}
        <Canvas shadows>
          {/* { Suspense execution and serve loader until models are loaded } */}
          <Suspense fallback={<Loader />}>
            {/* { animation sheet provider } */}
            <SheetProvider sheet={sheet_entry}>
              <PerspectiveCamera
                theatreKey="Camera"
                ref={camRef}
                makeDefault
                position={[0, 2, 5]}
                fov={75}
              />

              <CameraRig camRef={camRef} target={[0, 1, 0]} radius={11} />

              {/* <PerspectiveCamera
                theatreKey="Camera"
                makeDefault
                position={[-10, -20, 10]}
                fov={30}
              /> */}
              {/* Lights */}
              <spotLight castShadow intensity={0.4} position={[-4, 6, 4]} />
              {/* Models */}
              <Center>
                <Dmu />
              </Center>
              {/* <Center>
                <Carousel />
              </Center> */}
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
              {/* ENVIRONMENT REQUIRES INTERNET CONNECTION, IT MAKES API CALL TO GITHUB REPO NEED TO MAKE IT LOCAL */}
              <Environment preset="forest" />
              {/* postprocessing */}
              {/* <EffectComposer>
                <Bloom
                  luminanceThreshold={0.2}
                  luminanceSmoothing={0.8}
                  height={100}
                />
                <Vignette eskil={false} offset={0.1} darkness={1} />
              </EffectComposer> */}
            </SheetProvider>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;

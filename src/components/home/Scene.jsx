import { Canvas } from "@react-three/fiber";
import { useState, useEffect, Suspense } from "react";
import Loader from "../shared/Loader";
import { OrbitControls, GizmoHelper, GizmoViewport } from "@react-three/drei";
import FloorGrid from "../../components/home/FloorGrid.jsx";

const Scene = () => {
  const [isLoaded, setLoaded] = useState(false);

  return (
    <Canvas>
      <Suspense fallback={<Loader setLoaded={setLoaded} />}>
        <FloorGrid />
        <OrbitControls
          enableZoom={true}
          enableRotate={true}
          enablePan={true}
          minAzimuthAngle={-1}
          maxAzimuthAngle={-2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />

        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
        </GizmoHelper>
      </Suspense>
    </Canvas>
  );
};

export default Scene;

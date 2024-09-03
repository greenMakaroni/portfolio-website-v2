import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

// model
import Box from "./Box.jsx";

const box_sizes = [...Array(256).keys()];

const Cluster = () => {
  const box = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    box.current.position.x = THREE.MathUtils.lerp(
      box.current.position.x,
      (3 - Math.sin(t / 2)) / 2,
      0.1
    );
    box.current.position.y = THREE.MathUtils.lerp(
      box.current.position.y,
      (3 - Math.sin(t / 3)) / 2,
      0.1
    );
    box.current.position.z = THREE.MathUtils.lerp(
      box.current.position.z,
      (5 - Math.sin(t / 3)) / 2,
      0.1
    );
  });

  return (
    <group ref={box}>
      {box_sizes.map((box, i) => {
        return (
          <Box
            key={i}
            scale={(Math.random() * 4 + 2) / 10}
            position={[
              Math.random() * 10,
              Math.random() * 12 - 7,
              Math.random() * 10 - 13,
            ]}
          />
        );
      })}
    </group>
  );
};

export default Cluster;

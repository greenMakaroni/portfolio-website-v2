import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

// model
import Box from "./Box.jsx";

// gradient from white through pink to dark cherry red
const colors = [0xeeeeee, 0xff597b, 0x444444, 0xda0037];

const box_sizes = [...Array(192)].map((e, i) => {
  return colors[Math.floor(Math.random() * colors.length)];
});

const Cluster = () => {
  const box_group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    box_group.current.position.x = THREE.MathUtils.lerp(
      box_group.current.position.x,
      (3 - Math.sin(t / 2)) / 2,
      0.1
    );
    box_group.current.position.y = THREE.MathUtils.lerp(
      box_group.current.position.y,
      (3 - Math.sin(t / 3)) / 2,
      0.1
    );
    box_group.current.position.z = THREE.MathUtils.lerp(
      box_group.current.position.z,
      (5 - Math.sin(t / 3)) / 2,
      0.1
    );
  });

  return (
    <group ref={box_group}>
      {box_sizes.map((color, i) => {
        return (
          <Box
            key={i}
            scale={(Math.random() * 4 + 2) / 10}
            color={color}
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

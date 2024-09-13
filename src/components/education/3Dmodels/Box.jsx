import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Box(props) {
  const box = useRef();

  useFrame((state) => {
    if (props.animate) {
      const t = state.clock.getElapsedTime();
      box.current.position.x = THREE.MathUtils.lerp(
        props.position[0],
        (1 - Math.sin(t) / props.time) * props.dist,
        0.1
      );
      box.current.position.y = THREE.MathUtils.lerp(
        props.position[1],
        (1 - Math.sin(t) / props.time) * props.dist,
        0.1
      );
      box.current.position.z = THREE.MathUtils.lerp(
        props.position[2],
        (1 - Math.sin(t) / props.time) * props.dist,
        0.1
      );
    }
  });

  return (
    <mesh ref={box} receiveShadow {...props}>
      <boxGeometry args={props.geo} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

export default Box;

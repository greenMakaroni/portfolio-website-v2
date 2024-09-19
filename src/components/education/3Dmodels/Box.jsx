import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MeshReflectorMaterial } from "@react-three/drei";
function Box(props) {
  const box = useRef();

  return (
    <mesh ref={box} receiveShadow {...props}>
      <boxGeometry args={props.geo} />
      <meshStandardMaterial color="#17171b" />
    </mesh>
  );
}

export default Box;

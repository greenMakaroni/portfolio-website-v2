import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useScroll,
  Image,
  ScrollControls,
  Float,
  Mask,
} from "@react-three/drei";
import * as THREE from "three";
import url from "./av.webp";

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
    state.events.update(); // Raycasts every frame rather than on pointer-move
  });
  return <group ref={ref} {...props} />;
}

function Card({ url, ...props }) {
  const ref = useRef();

  return (
    <Float floatIntensity={0.2} rotationIntensity={0.5}>
      <Image
        ref={ref}
        url={url}
        geometry={new THREE.PlaneGeometry(2.6, 2.6)}
        transparent
        side={THREE.DoubleSide}
        {...props}
      ></Image>
    </Float>
  );
}

function Cards({ radius = 1.4, count = 4 }) {
  {
    return Array.from({ length: count }, (_, i) => (
      <Card
        key={i}
        url={url}
        position={[
          Math.sin((i / count) * Math.PI * 2) * radius * 3,
          0,
          Math.cos((i / count) * Math.PI * 2) * radius * 3,
        ]}
        rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
      />
    ));
  }
}

function Carousel(props) {
  return (
    <ScrollControls pages={4} infinite>
      <Rig rotation={[0.14, 0, 0]}>
        <Cards />
      </Rig>
    </ScrollControls>
  );
}

export default Carousel;

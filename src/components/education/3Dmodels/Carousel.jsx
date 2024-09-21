import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useScroll,
  Image,
  ScrollControls,
  Float,
  Mask,
  Plane,
} from "@react-three/drei";
import * as THREE from "three";
import url from "./av.webp";

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    // Rotate contents
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    // Raycasts every frame rather than on pointer-move
    state.events.update();
  });
  return <group ref={ref} {...props} />;
}

function Card({ url, ...props }) {
  const ref = useRef();

  return (
    <Float floatIntensity={0.2} rotationIntensity={0.5}>
      <Image
        scale={2}
        castShadow
        ref={ref}
        url={url}
        side={THREE.DoubleSide}
        {...props}
      ></Image>
    </Float>
  );
}

function Cards({ radius = 1.6, count = 3 }) {
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
      <Rig rotation={[0.02, 0, 0]}>
        <Cards />
      </Rig>
    </ScrollControls>
  );
}

export default Carousel;

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Image, ScrollControls, Float } from "@react-three/drei";
import * as THREE from "three";

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
    <Float floatIntensity={0.15} rotationIntensity={0.4}>
      <Image scale={[9, 5]} castShadow ref={ref} url={url} {...props}></Image>
    </Float>
  );
}

function Cards({ radius = 4.5, count = 4 }) {
  {
    return Array.from({ length: count }, (_, i) => (
      <group>
        <Card
          key={i}
          url={`/assets/image_${(i % 4) + 1}.jpg`}
          position={[
            Math.sin((i / count) * Math.PI * 2) * radius * 3,
            2.5,
            Math.cos((i / count) * Math.PI * 2) * radius * 3,
          ]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        />
      </group>
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

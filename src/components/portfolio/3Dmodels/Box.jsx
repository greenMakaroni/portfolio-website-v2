import { Outlines } from "@react-three/drei";

const Box = (props) => {
  // gray black red white
  const colors = [0x3e3939, 0x2c2727, 0x8f0005, 0xffffff, 0xb0453e];
  const random_color = Math.floor(Math.random() * colors.length);

  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={colors[random_color]} />
      <Outlines thickness={0.06} color="red" />
    </mesh>
  );
};

export default Box;

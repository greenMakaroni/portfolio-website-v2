import { Outlines } from "@react-three/drei";
const Box = (props) => {
  // gray black red white

  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
      <Outlines thickness={0.05} color={0x870900} />
    </mesh>
  );
};

export default Box;

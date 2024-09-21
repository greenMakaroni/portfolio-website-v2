import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";

function Box({
  args = [7, 15, 7],
  radius = 0.04,
  smoothness = 6,
  color = "#696969",
  ...props
}) {
  return (
    <RoundedBox
      args={args}
      radius={radius}
      smoothness={smoothness}
      receiveShadow
      {...props}
    >
      <meshPhongMaterial color={color} />
    </RoundedBox>
  );
}

export default Box;

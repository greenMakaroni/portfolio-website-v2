import { RoundedBox } from "@react-three/drei";

function Box({
  args = [8, 15, 8],
  radius = 0.04,
  smoothness = 8,
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

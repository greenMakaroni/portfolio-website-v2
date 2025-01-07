import { Grid } from "@react-three/drei";

const FloorGrid = () => {
  return (
    <Grid
      position={[0, -0.01, 0]}
      cellSize={2}
      cellThickness={0.8}
      cellColor={0x787878}
      followCamera={false}
      fadeDistance={50}
      fadeStrength={2}
      sectionSize={6}
      sectionThickness={1}
      sectionColor={0xc80008}
      infiniteGrid={true}
    />
  );
};

export default FloorGrid;

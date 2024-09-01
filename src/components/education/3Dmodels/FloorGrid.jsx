import { Grid } from "@react-three/drei";

const FloorGrid = () => {
  return (
    <Grid
      position={[0, -1.6, 0]}
      cellSize={1}
      cellThickness={0.8}
      cellColor={0x787878}
      followCamera={false}
      fadeDistance={35}
      fadeStrength={2}
      sectionSize={3}
      sectionThickness={1}
      sectionColor={0x000000}
      infiniteGrid={true}
    />
  );
};

export default FloorGrid;

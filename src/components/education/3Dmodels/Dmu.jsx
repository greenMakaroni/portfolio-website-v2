/** 
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 dmu.glb
*/

import { useGLTF, useTexture } from "@react-three/drei";
import { editable } from "@theatre/r3f";
import * as THREE from "three";
import dmuURL from "./dmu.glb";

export const Dmu = (props) => {
  const { nodes } = useGLTF(dmuURL);
  const texture = useTexture("./baked_pedestal.jpg");
  texture.flipY = false;
  const pedestalMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  return (
    <group {...props}>
      <editable.mesh
        receiveShadow
        castShadow
        theatreKey="pedestal"
        geometry={nodes.pedestal.geometry}
        material={pedestalMaterial}
        position={[0.01, -0.14, 0]}
        scale={[0.28, 0.28, 0.28]}
      />
      <editable.mesh
        castShadow
        theatreKey="tongue"
        geometry={nodes.tongue.geometry}
        material={nodes.tongue.material}
        position={[0.05, 2.38, 0.01]}
        rotation={[1.6, 0.02, 0.54]}
        scale={21.19}
      />
      <editable.mesh
        castShadow
        theatreKey="tail"
        geometry={nodes.tail.geometry}
        material={nodes.tail.material}
        position={[-0.19, 2.99, -0.1]}
        rotation={[1.6, 0.02, 0.54]}
        scale={21.19}
      />
      <editable.mesh
        castShadow
        theatreKey="shuriken"
        geometry={nodes.shuriken.geometry}
        material={nodes.shuriken.material}
        position={[-0.07, 1.91, -0.05]}
        rotation={[-1.53, -0.01, 2.6]}
        scale={-0.03}
      />
      <editable.mesh
        castShadow
        theatreKey="nose"
        geometry={nodes.nose.geometry}
        material={nodes.nose.material}
        position={[0.08, 2.64, 0.04]}
        rotation={[1.6, 0.02, 0.54]}
        scale={21.19}
      />
      <editable.mesh
        castShadow
        theatreKey="mouth"
        geometry={nodes.mouth.geometry}
        material={nodes.mouth.material}
        position={[0.14, 2.54, -0.27]}
        rotation={[-1.53, -0.01, 2.6]}
        scale={-20.38}
      />
      <editable.mesh
        castShadow
        theatreKey="face"
        geometry={nodes.face.geometry}
        material={nodes.face.material}
        position={[0.06, 2.58, 0.03]}
        rotation={[1.6, 0.02, 0.54]}
        scale={21.19}
      />
      <editable.mesh
        castShadow
        theatreKey="eye"
        geometry={nodes.eye.geometry}
        material={nodes.eye.material}
        position={[0.06, 2.65, 0.03]}
        rotation={[1.6, 0.02, 0.54]}
        scale={21.19}
      />
      <editable.mesh
        castShadow
        theatreKey="claw"
        geometry={nodes.claw.geometry}
        material={nodes.claw.material}
        position={[0.32, 2.31, 0.17]}
        rotation={[1.6, 0.02, 0.54]}
        scale={21.19}
      />
    </group>
  );
};

useGLTF.preload("./dmu.glb");

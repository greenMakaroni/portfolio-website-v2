import { useGLTF, Html, PresentationControls } from '@react-three/drei'

export default function Laptop(props) {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

  return (
    <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
      <primitive position-y={-1.5} object={scene} {...props}>
        <Html
          wrapperClass='laptop'
          position={[0, 1.55, -1.5]}
          transform
          distanceFactor={1.2}
          rotation-x={-0.25}
        >
          <iframe src="https://hackertyper.net/#" />
        </Html>
      </primitive>
    </PresentationControls>

  )
}
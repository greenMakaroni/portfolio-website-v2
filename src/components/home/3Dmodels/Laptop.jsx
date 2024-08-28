import { useGLTF, Html, PresentationControls } from '@react-three/drei'

export default function Laptop(props) {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

  return (
    <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
      <primitive className=" rounded-full"  position-y={-1.5} object={scene} {...props}>
        <Html
          wrapperClass='laptop'
          position={[0, 1.55, -1.5]}
          transform
          distanceFactor={1.2}
          rotation-x={-0.25}
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9685.996304702747!2d-1.1417809751034995!3d52.6328958034527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877611f2d96bcb7%3A0x6c216a818f1e4d12!2sCity%20Centre%2C%20Leicester!5e0!3m2!1sen!2suk!4v1713976545196!5m2!1sen!2suk"></iframe>
        </Html>
      </primitive>
    </PresentationControls>

  )
}
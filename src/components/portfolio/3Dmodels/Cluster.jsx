import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Box from "./Box.jsx";

const box_sizes = [...Array(400).keys()].map(() => (Math.random() * 7) / 10)

const Cluster = () => {
    const box = useRef()
    
    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()
        box.current.position.x = THREE.MathUtils.lerp(box.current.position.x, (3 - Math.sin(t / 2)) / 2, 0.3)
        box.current.position.y = THREE.MathUtils.lerp(box.current.position.y, (3 - Math.sin(t / 3)) / 2, 0.3)
        box.current.position.z = THREE.MathUtils.lerp(box.current.position.z, (5 - Math.sin(t / 3)) / 2, 0.3)
      })

    return (
        <group ref={box}>
            {
                box_sizes.map((box, i) => {
                    return (
                        <Box 
                            key={i} 
                            scale={(Math.random() * 7) / 10} 
                            position={[(Math.random() * 12), (Math.random() * 10) - 7, (Math.random() * 10) - 11]} />
                        )
                })
            }
        </group>
    )
}

export default Cluster
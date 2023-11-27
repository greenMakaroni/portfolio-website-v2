import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { colors } from '@mui/material'


const Box = (props) => {
    const box = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const colors = [0x3E3939, 0x2C2727, 0xFF7517, 0xFFFFFF]
    const random_color = Math.floor(Math.random() * colors.length);

    useFrame((state, delta) => {
        if(active) {
            box.current.rotation.x += delta / 2
            box.current.rotation.y += delta / 2
        }
    })
  

    return (
        <mesh  
            ref={box}
            {...props}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>

                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={hovered ? 'white' : colors[random_color]} />
        </mesh>
    )
}

export default Box
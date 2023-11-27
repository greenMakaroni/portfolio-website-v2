
const Box = (props) => {
    
    const colors = [0x3E3939, 0x2C2727, 0xFF7517, 0xFFFFFF]
    const random_color = Math.floor(Math.random() * colors.length);

    return (
        <mesh {...props}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={ colors[random_color] } />
        </mesh>
    )
}

export default Box
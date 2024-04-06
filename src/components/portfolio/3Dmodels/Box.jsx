
const Box = (props) => {
    // gray black red white
    const colors = [0x3E3939, 0x2C2727, 0x8f0005, 0xFFFFFF, 0xb0453e]
    const random_color = Math.floor(Math.random() * colors.length);

    return (
        <mesh {...props}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={ colors[random_color] } />
        </mesh>
    )
}

export default Box
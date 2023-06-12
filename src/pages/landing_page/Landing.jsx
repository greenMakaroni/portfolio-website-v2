import useWindowDimensions from "../../custom_hooks/useWindowDimensions"

const Landing = () => {

  const { width, height } = useWindowDimensions()

  return (
    <div>width: {width}, height: {height}</div>
  )
}

export default Landing
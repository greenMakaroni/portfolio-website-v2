import MobileNav from "./MobileNav"
import Nav from "./Nav"

// window dimensions hook
import useWindowDimensions from '../../custom_hooks/useWindowDimensions';

export default function Navigation() {

    const { width } = useWindowDimensions();

  return (
    <>
        { width < 650 ? <MobileNav /> : <Nav /> }
    </>
  )
}

import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"

// window dimensions hook
import useWindowDimensions from '../../custom_hooks/useWindowDimensions';

export default function Navigation() {

    const { width } = useWindowDimensions();

  return (
    <>
        { width < 650 ? <MobileNav /> : <DesktopNav /> }
    </>
  )
}

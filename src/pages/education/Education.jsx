
// Components
import Navigation from "../../components/navigation/Navigation.jsx"
import Scene from "../../components/education/Scene.jsx"
import EducationInfo from "../../components/education/edu/EducationInfo.jsx"
import Footer from "../../components/footer/Footer.jsx"

// Hooks
import { useState, useEffect } from "react"
import useWindowDimensions from '../../custom_hooks/useWindowDimensions.jsx';

const Education = () => {
  const [section, setSection] = useState({prev: "first", current: "first"})

  const { width } = useWindowDimensions()
  const isMobile = width < 650

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className="flex flex-col">
        <Navigation />
        <div className="flex flex-row">
          {!isMobile && <Scene section={section}  />}
          <EducationInfo setSection={setSection} />
        </div>
        <Footer />
      </div>
  )
}

export default Education
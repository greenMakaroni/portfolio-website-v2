// Components
import Navigation from '../../components/navigation/Navigation.jsx'
import Banner from "../../components/home/banner/Banner.jsx"
import Skills from "../../components/home/skills/Skills.jsx"
import Footer from '../../components/footer/Footer.jsx'

// Hooks
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <Navigation />
      <Banner />
      <Skills />
      <Footer />
    </div>
   
  )
}

export default Home
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
    <>
      <Navigation />
      <div className="snap-y snap-mandatory h-screen w-screen overflow-y-auto overflow-x-hidden ">
        <div className="bg-blue-300 snap-start h-screen w-screen">
        </div>
        <div className="bg-red-300 snap-start h-screen w-screen">
        </div>
        <div className="bg-green-300 snap-start h-screen w-screen">
        </div>
        <div className="bg-yellow-300 snap-start h-screen w-screen">
        </div>
      </div>
    </>

  )
}

export default Home
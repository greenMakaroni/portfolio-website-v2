// Components
import Navigation from '../../components/navigation/Navigation.jsx'
import Skills from "../../components/home/skills/Skills.jsx"
import Footer from '../../components/footer/Footer.jsx'
import Scene from '../../components/home/Scene.jsx'

// Hooks
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <div className="z-50 snap-y snap-mandatory h-screen w-screen overflow-y-auto overflow-x-hidden ">
        <div className="snap-start h-screen w-screen">
          <div className="w-screen h-screen fixed bg-homeBg bg-cover -z-20">
          </div>
          <Scene />
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
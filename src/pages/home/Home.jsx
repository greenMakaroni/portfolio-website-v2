import Navigation from '../../components/navigation/Navigation.jsx'
import Banner from "../../components/home/banner/Banner.jsx"
import Skills from "../../components/home/skills/Skills.jsx"

import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-screen h-screen p-0 m-0 z-10 absolute bg-[#ff8800] animate-moveCanvas"></div>
      <Navigation />
      <Banner />
      <Skills />
    </>
   
  )
}

export default Home
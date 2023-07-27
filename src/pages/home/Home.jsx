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
      <Navigation />
      <Banner />
      <Skills />
    </>
   
  )
}

export default Home
import React from 'react'
import Nabver from '../components/Nabver';
import HeroImg from "../components/HeroImg";
import Skills from '../components/Skills';
import Work from '../components/Work';
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Nabver/>
      <HeroImg/>
      <Skills/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home

import React from 'react'
import Nabver from '../components/Nabver';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Projects = () => {
  return (
    <div>
      <Nabver/>
      <HeroImg2 heading=" PROJECTS." text="Some of my recent work
      " />
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Projects

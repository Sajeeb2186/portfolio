import React from 'react'
import Nabver from '../components/Nabver';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import Experience from '../components/Experience';

const About = () => {
  return (
    <div>
      <Nabver/>
      <HeroImg2 heading="ABOUT." text="I am a Full Stack Developer"/> 
      <AboutContent/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default About

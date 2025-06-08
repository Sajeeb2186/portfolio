import "./HeroImgStyle.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import React from 'react'
import BackImg from "../assets/bg.jpg";
import {Link} from "react-router-dom";
import ProfileImg from "../assets/sajeeb.png"; // or .png



const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        {/* <img className="backImg" src={BackImg} alt="BackImg"/> */}

        <motion.img
  className="backImg"
  src={BackImg}
  alt="Background"
  initial={{ opacity: 0, scale: 1.1 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 3 }}
/>
      </div>

      <div className="content">

       <img 
          src={ProfileImg} 
          alt="Profile of Sajeeb Mia" 
          className="profile-img" 
        />


        


       


        
        <p>
  <Typewriter
    words={["HI, This is MD. Sajeeb Mia"]}
    cursor
    cursorStyle=""
    typeSpeed={70}
    delaySpeed={1000}
  />
</p>
        
        <h1>
           <Typewriter
    words={["Full Stack Web Developer"]}
    cursor
    cursorStyle=""
    typeSpeed={80}
    delaySpeed={5000}
  />
  </h1>
        <div>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg

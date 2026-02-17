import "./HeroImgStyle.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import React from 'react'
import ProfileImg from "../assets/sajeeb.png";
import ResumePDF from "../assets/Resume_MD_Sajeeb_Mia__Node_JS.pdf";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const HeroImg = () => {
  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-left"
          variants={leftVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, It's Me
          </motion.p>

          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            MD. Sajeeb Mia
          </motion.h1>
          
          <motion.div 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            And I'm a <span className="dynamic-text">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Software Engineer",
                  "Problem Solver"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.div>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Computer Science graduate passionate about creating innovative web solutions. 
            Ready to bring fresh ideas and modern development skills to exciting projects!
          </motion.p>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <a href="https://www.facebook.com/mdsajeeb.ahmed.739/" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://x.com/AhmedSajee46372" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/sajeeb.404/" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="linkedin.com/in/md-sajeeb-mia-b95009228" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </motion.div>

          <motion.div
            className="hero-btn-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a href={ResumePDF} download="Resume_MD_Sajeeb_Mia.pdf" className="hero-btn">Download CV</a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-right"
          variants={rightVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hexagon-container">
            <motion.img 
              src={ProfileImg} 
              alt="Sajeeb Mia" 
              className="hero-profile-img"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="hexagon-glow"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroImg

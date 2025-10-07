import "./HeroImgStyle.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import React from 'react'
import BackImg from "../assets/bg.jpg";
import {Link} from "react-router-dom";
import ProfileImg from "../assets/sajeeb.png";

const HeroImg = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="hero">
      <div className="mask">
        <motion.img
          className="backImg"
          src={BackImg}
          alt="Background"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="hero-overlay"></div>
      </div>

      <motion.div 
        className="content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="profile-container" variants={itemVariants}>
          <motion.img 
            src={ProfileImg} 
            alt="Profile of Sajeeb Mia" 
            className="profile-img"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="profile-ring"></div>
        </motion.div>

        <motion.div className="intro-text" variants={itemVariants}>
          <span className="greeting">👋 Hello, I'm</span>
        </motion.div>

        <motion.h1 className="main-title" variants={itemVariants}>
          <Typewriter
            words={["MD. Sajeeb Mia"]}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            delaySpeed={1000}
          />
        </motion.h1>
        
        <motion.div className="subtitle" variants={itemVariants}>
          <Typewriter
            words={[
              "Full Stack Web Developer",
              "Fresh CS Graduate", 
              "React.js Enthusiast",
              "Problem Solver",
              "Ready to Work"
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.div>

        <motion.p className="description" variants={itemVariants}>
          Fresh Computer Science graduate passionate about creating innovative web solutions. 
          Ready to bring fresh ideas and modern development skills to your next project!
        </motion.p>

        <motion.div className="cta-buttons" variants={itemVariants}>
          <Link to="/projects" className="btn btn-primary">
            <span>View My Work</span>
            <i className="arrow">→</i>
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            <span>Let's Talk</span>
            <i className="icon">💬</i>
          </Link>
        </motion.div>

        <motion.div className="scroll-indicator" variants={itemVariants}>
          <div className="scroll-text">Scroll Down</div>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroImg

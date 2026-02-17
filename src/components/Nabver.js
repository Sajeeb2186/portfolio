import "./NavberStyle.css";
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImg from "../assets/sajeeb.png";

const Nabver = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  
  const closeMobileMenu = () => setClick(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className={color ? "header header-bg" : "header"}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Link to="/" onClick={closeMobileMenu}>
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img src={profileImg} alt="Sajeeb" className="logo-img" />
          <h1 className="logo">
            Sajeeb<span className="logo-accent">.</span>
          </h1>
        </motion.div>
      </Link>
      
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <motion.li variants={linkVariants} whileHover="hover">
          <Link 
            to="/" 
            onClick={closeMobileMenu}
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </Link>
        </motion.li>
        <motion.li variants={linkVariants} whileHover="hover">
          <Link 
            to="/projects" 
            onClick={closeMobileMenu}
            className={location.pathname === "/projects" ? "active-link" : ""}
          >
            Projects
          </Link>
        </motion.li>
        <motion.li variants={linkVariants} whileHover="hover">
          <Link 
            to="/about" 
            onClick={closeMobileMenu}
            className={location.pathname === "/about" ? "active-link" : ""}
          >
            About
          </Link>
        </motion.li>
        <motion.li variants={linkVariants} whileHover="hover">
          <Link 
            to="/contact" 
            onClick={closeMobileMenu}
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            Contact
          </Link>
        </motion.li>
      </ul>
      
      <motion.div 
        className="hamburger" 
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </motion.div>
    </motion.div>
  )
}

export default Nabver

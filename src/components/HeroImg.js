import "./HeroImgStyle.css";

import React from 'react'
import BackImg from "../assets/bg.jpg";
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="backImg" src={BackImg} alt="BackImg"/>
      </div>

      <div className="content">
        <p>HI, This is Sajeeb  and I am here to make life beautiful</p>
        
        <h1>React Developer.</h1>
        <div>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg

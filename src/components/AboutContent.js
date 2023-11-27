import { Link } from "react-router-dom"
import "./AboutContentStyle.css"

import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.jpg";


import React from 'react'


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
          <h1>Who I am</h1>
          <p> I am a react front-end developer.I create responsive secure website for my clients.</p>
           <Link to="/contact">
            <button className="btn">Contact</button>
           </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="top">
                   <img src={React1} className="img" alt="true"/>
                </div>

                <div className="bottom">
                   <img src={React2} className="img" alt="true"/>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default AboutContent

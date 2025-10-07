import "./WorkcardStyle.css";
import { motion } from "framer-motion";
import React from 'react';

const WorkCard = (props) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image-container">
        <img src={props.imgsrc} alt={props.title} className="project-image"/>
        <div className="project-overlay">
          <div className="overlay-content">
            <h3>View Project</h3>
            <p>Click to explore</p>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h2 className="project-title">{props.title}</h2>
        <p className="project-description">{props.text}</p>
        
        {props.technologies && (
          <div className="tech-stack">
            {props.technologies.map((tech, index) => (
              <span key={index} className="tech-tag-small">{tech}</span>
            ))}
          </div>
        )}
        
        <div className="project-buttons">
          {props.view && (
            <a 
              href={props.view} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary-small"
            >
              <span>Live Demo</span>
              <i className="icon">🔗</i>
            </a>
          )}
          {props.source && (
            <a 
              href={props.source} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary-small"
            >
              <span>Source Code</span>
              <i className="icon">📄</i>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default WorkCard

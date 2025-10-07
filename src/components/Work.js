import "./WorkcardStyle.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import { motion } from "framer-motion";
import React from 'react';

const Work = () => {
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
    <div className="work-container">
      <motion.div
        className="work-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="project-heading">Featured Projects</h1>
        <p className="project-subtitle">
          Here are some of my recent projects that showcase my skills and experience
        </p>
      </motion.div>

      <motion.div 
        className="project-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {WorkCardData.map((val, ind) => {
          return (
            <motion.div key={ind} variants={itemVariants}>
              <WorkCard
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                technologies={val.technologies}
              />
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        className="view-more-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>Want to see more of my work?</p>
        <a href="/projects" className="btn btn-outline">
          View All Projects
        </a>
      </motion.div>
    </div>
  )
}

export default Work

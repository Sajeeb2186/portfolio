import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceStyle.css';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Developing full-stack web applications using MERN stack. Built 10+ projects including e-commerce platforms, management systems, and social impact applications.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      icon: "💼"
    },
    {
      title: "Web Development Projects",
      company: "Personal Portfolio",
      period: "2022 - 2023",
      description: "Created various web applications including restaurant websites, scholarship management systems, and food donation platforms with modern UI/UX design.",
      technologies: ["React.js", "Firebase", "Material-UI", "Bootstrap"],
      icon: "🚀"
    },
    {
      title: "Learning & Development",
      company: "Self-taught Developer",
      period: "2021 - 2022",
      description: "Intensive learning phase focusing on modern web technologies, best practices, and building strong foundation in programming concepts.",
      technologies: ["JavaScript", "HTML/CSS", "Git", "Responsive Design"],
      icon: "📚"
    }
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="experience-section">
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Experience & Journey</h2>
          <p>My path in web development and the milestones I've achieved</p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="timeline-marker">
                <span className="timeline-icon">{exp.icon}</span>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                  
                  <div className="timeline-technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="timeline-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="experience-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <h3>2+</h3>
              <p>Years Learning</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Projects Built</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Dedication</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
import React from 'react';
import { motion } from 'framer-motion';
import './SkillsStyle.css';

const Skills = () => {
  const skills = [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'Java', level: 85, icon: '☕' },
    { name: 'Spring Boot', level: 80, icon: '🍃' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'PostgreSQL', level: 75, icon: '🐘' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'TypeScript', level: 80, icon: '�' },
    { name: 'JavaScript', level: 90, icon: '💛' },
    { name: 'Next.js', level: 75, icon: '⚡' },
    { name: 'Express.js', level: 85, icon: '�' },
    { name: 'HTML/CSS', level: 95, icon: '🎨' },
    { name: 'Git/GitHub', level: 85, icon: '�' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <div className="skills-section">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Technologies</h2>
          <p>Here are the technologies I work with to bring ideas to life</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Additional Technologies</h3>
          <div className="tech-tags">
            {['REST APIs', 'JPA/Hibernate', 'MySQL', 'Firebase', 'JWT', 'Spring Security', 'Maven', 'Microservices', 'Docker', 'AWS', 'Socket.io', 'Redux', 'Bootstrap', 'Tailwind CSS', 'Vercel', 'Netlify'].map((tech, index) => (
              <motion.span
                key={index}
                className="tech-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';
import './SkillsStyle.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'Microservices']
    },
    {
      title: 'Database',
      icon: '💾',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'JPA/Hibernate', 'Firebase']
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: ['Git/GitHub', 'Docker', 'AWS', 'Maven', 'JWT', 'Spring Security', 'Socket.io']
    }
  ];

  return (
    <div className="skills-section-compact">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Technical Skills</h2>
        </motion.div>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
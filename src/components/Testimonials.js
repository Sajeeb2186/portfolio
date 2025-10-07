import React from 'react';
import { motion } from 'framer-motion';
import './TestimonialsStyle.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Academic Excellence",
      role: "Computer Science Graduate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "Successfully completed my Computer Science degree with strong focus on software development. Built multiple projects demonstrating both frontend and backend capabilities using modern technologies.",
      rating: 5
    },
    {
      name: "Backend Development Mastery",
      role: "Java Spring Boot Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Mastered enterprise-level backend development with Java Spring Boot, PostgreSQL, and microservices architecture. Built robust APIs with authentication, authorization, and database management.",
      rating: 5
    },
    {
      name: "Full-Stack Development",
      role: "MERN & Java Stack",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "Proficient in both MERN stack and Java-based backend development. Created diverse projects ranging from e-commerce platforms to management systems with different technology stacks.",
      rating: 5
    }
  ];

  const achievements = [
    { number: "15+", label: "Projects Built", icon: "🚀" },
    { number: "12+", label: "Technologies Learned", icon: "💡" },
    { number: "4+", label: "Years Learning", icon: "📚" },
    { number: "100%", label: "Passion & Dedication", icon: "❤️" }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="testimonials-section">
      <div className="container">
        {/* Achievements Section */}
        <motion.div
          className="achievements-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <motion.h3
                  className="achievement-number"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {achievement.number}
                </motion.h3>
                <p className="achievement-label">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Journey & Achievements</h2>
          <p>Here's what I've accomplished during my learning journey and academic career</p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                {/* <img src={testimonial.image} alt={testimonial.name} className="author-image" /> */}
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
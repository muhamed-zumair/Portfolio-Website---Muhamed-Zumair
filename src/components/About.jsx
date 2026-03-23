import React from 'react';
import { School, Book, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Column - Image Slides in from Left */}
        <motion.div 
          className="about-image-column"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="about-image-wrapper">
            <div className="image-bg-box"></div>
            <img src="/me.png" alt="Muhamed Zumair" className="about-me-img" />
          </div>
        </motion.div>

        {/* Right Column - Text & Horizontal Timeline Slides in from Right */}
        <motion.div 
          className="about-text-column"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="about-heading">ABOUT ME</h1>
          <p className="about-description">
            I'm a second-year Computer Science undergraduate at IIT Sri Lanka, affiliated with the University of Westminster (UoW). I'm passionate about technology, design, and innovation, and I love bringing ideas to life through creative UI/UX design and efficient software development.
          </p>
          <p className="about-description">
            With experience in both front-end and back-end technologies, I focus on building applications that are scalable, efficient, and user-friendly. As a fast learner and adaptable team player, I enjoy solving problems, exploring new tools, and continuously improving my skills.
          </p>

          {/* Horizontal Educational Timeline */}
          <div className="timeline-container">
            
            {/* Timeline Item 1 */}
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="icon-circle">
                <School size={28} className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">GCE Ordinary Level</h3>
                <p className="timeline-detail">ST MARY'S COLLEGE</p>
                <p className="timeline-detail">HAMBANTOTA</p>
              </div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }} /* slightly longer delay to create a staggering effect */
            >
              <div className="icon-circle">
                <Book size={28} className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">GCE Advanced Level</h3>
                <p className="timeline-detail">Physical Science Stream</p>
                <p className="timeline-detail">Combined Mathematics, Physics, Chemistry</p>
                <p className="timeline-detail">ST MARY'S COLLEGE</p>
                <p className="timeline-detail">HAMBANTOTA</p>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }} /* longest delay so it appears last */
            >
              <div className="icon-circle">
                <GraduationCap size={28} className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">BSc (Hons) Computer Science</h3>
                <p className="timeline-detail">University of Westminster (UoW)</p>
                <p className="timeline-detail">Affiliated through IIT Sri Lanka</p>
                <p className="timeline-detail">Second Year</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
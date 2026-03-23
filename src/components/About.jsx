import React from 'react';
import { School, Book, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Column - Image Only */}
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <div className="image-bg-box"></div>
            <img src="/me.png" alt="Muhamed Zumair" className="about-me-img" />
          </div>
        </div>

        {/* Right Column - Text & Horizontal Timeline */}
        <div className="about-text-column">
          <h1 className="about-heading">ABOUT ME</h1>
          <p className="about-description">
            I'm a second-year Computer Science undergraduate at IIT Sri Lanka, affiliated with the University of Westminster (UoW). I'm passionate about technology, design, and innovation, and I love bringing ideas to life through creative UI/UX design and efficient software development.
          </p>
          <p className="about-description">
            With experience in both front-end and back-end technologies, I focus on building applications that are scalable, efficient, and user-friendly. As a fast learner and adaptable team player, I enjoy solving problems, exploring new tools, and continuously improving my skills.
          </p>

          {/* Horizontal Educational Timeline */}
          <div className="timeline-container">
            
            <div className="timeline-item">
              <div className="icon-circle">
                <School size={28} className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">GCE Ordinary Level</h3>
                <p className="timeline-detail">ST MARY'S COLLEGE</p>
                <p className="timeline-detail">HAMBANTOTA</p>
              </div>
            </div>

            <div className="timeline-item">
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
            </div>

            <div className="timeline-item">
              <div className="icon-circle">
                <GraduationCap size={28} className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">BSc (Hons) Computer Science</h3>
                <p className="timeline-detail">University of Westminster (UoW)</p>
                <p className="timeline-detail">Affiliated through IIT Sri Lanka</p>
                <p className="timeline-detail">Second Year</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Massive Headline */}
        <div className="contact-header">
          <h2 className="contact-subheading">HAVE A PROJECT IN MIND?</h2>
          <h1 className="contact-heading">LET'S WORK<br/>TOGETHER</h1>
        </div>

        {/* Contact Links Grid */}
        <div className="contact-links">
          {/* Email Button */}
          <a href="mailto:mohozumair26@gmail.com" className="contact-card">
            <div className="contact-card-content">
              <Mail size={32} className="contact-icon" />
              <span className="contact-text">Email Me</span>
            </div>
            <ArrowUpRight size={28} className="contact-arrow" />
          </a>

          {/* LinkedIn Button */}
          <a href="https://linkedin.com/in/muhamedzumair" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-content">
              <Linkedin size={32} className="contact-icon" />
              <span className="contact-text">LinkedIn</span>
            </div>
            <ArrowUpRight size={28} className="contact-arrow" />
          </a>

          {/* GitHub Button */}
          <a href="https://github.com/muhamed-zumair" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-content">
              <Github size={32} className="contact-icon" />
              <span className="contact-text">GitHub</span>
            </div>
            <ArrowUpRight size={28} className="contact-arrow" />
          </a>
        </div>

      </div>

      {/* Footer Area */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Muhamed Zumair. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
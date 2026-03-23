import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "EventLK",
      description: "A smart, AI-powered event planning and management platform designed specifically to streamline operations for university clubs and societies. Developed using Agile methodology, it features AI-driven budget and venue recommendations, QR-based registration, and centralized tools for task tracking and financial management to drastically improve efficiency and user experience. (eventlk.com)",
      tags: ["PNext.js", "Node.js", "PostgreSQL", "Python", "Random Forest","TailWind CSS."]
    },
    {
      title: "Estate Agent Web App",
      description: "Designed and developed a fully responsive, client-side React web application tailored for property browsing. Implemented dynamic UI components and complex search functionality to filter listings, structured with robust dependency management to ensure seamless deployment and smooth user interaction across devices.",
      tags: ["React", "JavaScript", "Dynamic UI"]
    },
    {
      title: "Personal Task Manager",
      description: "Built a lightweight, highly responsive GUI-based application using Python and Tkinter. Engineered robust file handling with JSON, and implemented full CRUD (Create, Read, Update, Delete) operations along with dynamic task filtering to optimize personal productivity and workflow organization.",
      tags: ["Python", "Tkinter", "JSON"]
    },
    {
      title: "Web Design Project",
      description: "Designed and developed an interactive awareness website focused on UN SDG 14: Life Below Water. Utilized HTML, CSS, and vanilla JavaScript to structure, style, and build an engaging user experience aimed at educating users and promoting marine life conservation.",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a high-impact, brutalist-style personal portfolio to showcase my work and experience. Built from the ground up focusing on a responsive, single-page layout, heavy typography, and smooth, interactive 3D UI elements.",
      tags: ["React", "CSS", "Framer Motion"]
    }
  ];

  return (
    <section className="projects-section" id="portfolio">
      <div className="projects-container">
        <h1 className="projects-heading">PROJECTS</h1>
        
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="tech-stack">
                {project.tags.map((tag, tagIndex) => (
                  <span className="tech-pill" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
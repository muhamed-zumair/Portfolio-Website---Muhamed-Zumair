import React, { useEffect, useRef, useState } from 'react';
import './Projects.css'; // Make sure this matches your exact filename (e.g. projects.css vs Projects.css)

const Projects = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  // Add state to detect mobile screens so it stacks normally on phones
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      if (!sectionRef.current || isMobile) return; 
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollDistance = -top; 
      const scrollableHeight = height - windowHeight;
      
      let progress = scrollableHeight > 0 ? scrollDistance / scrollableHeight : 0;
      progress = Math.max(0, Math.min(progress, 1));
      
      setScrollProgress(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, [isMobile]);

  const projectList = [
    {
      title: "EventLK",
      description: "A smart, AI-powered event planning and management platform designed specifically to streamline operations for university clubs and societies. Developed using Agile methodology, it features AI-driven budget and venue recommendations, QR-based registration, and centralized tools for task tracking and financial management to drastically improve efficiency and user experience.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Python", "Random Forest","TailWind CSS."],
      link: "https://www.eventlk.com"
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
    // Uses the "projects-scroll-section" class to match your CSS file
    <section className="projects-scroll-section" ref={sectionRef} id="portfolio">
      <div className="sticky-wrapper">
        <h1 className="projects-heading">PROJECTS</h1>
        
        <div 
          className="projects-track"
          // This moves the track horizontally based on scroll progress
          style={isMobile ? {} : { transform: `translateX(calc(-${scrollProgress}% + ${scrollProgress}vw))` }}
        >
          {projectList.map((project, index) => {
            const CardTag = project.link ? 'a' : 'div';
            const linkAttributes = project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};

            return (
              <CardTag 
                className={`project-card ${project.link ? 'is-clickable' : ''}`} 
                key={index} 
                {...linkAttributes}
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-stack">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="tech-pill" key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
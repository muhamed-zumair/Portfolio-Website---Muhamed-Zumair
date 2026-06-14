import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Figma } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // --- Horizontal Scroll Logic for Projects ---
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return; 
      
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
    }
  }, []); 

  const projectList = [
    {
      title: "EventLK",
      description: "A smart, AI-powered event planning and management platform designed specifically to streamline operations for university clubs and societies.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Python", "Tailwind CSS"],
      liveLink: "https://www.eventlk.com",
      githubLink: "https://github.com/Rism583/Project-Eventlk-1",
      image: "/eventlk.JPG"
    },
    {
      title: "MHM Taxi",
      badge: "Client Project",
      description: "A streamlined, full-stack ride-hailing web platform prioritizing frictionless user journeys, real-time tracking concepts, and fare estimation.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Figma"],
      liveLink: "https://mhmtaxi.com",
      image: "/mhmtaxi.png"
    },
    {
      title: "Rosary Global",
      badge: "Freelance",
      description: "A premium corporate web platform designed and developed from scratch to establish international trust and communicate services to a global clientele.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Figma"],
      liveLink: "https://rosaryglobal.com",
      image: "/rosaryglobal.png"
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a high-impact, brutalist-style personal portfolio built from the ground up focusing on a responsive, single-page layout.",
      tags: ["React", "CSS", "Framer Motion"],
      liveLink: "https://zumair.me",
      githubLink: "https://github.com/muhamed-zumair/Portfolio-Website---Muhamed-Zumair",
      image: "/portfolio.png"
    },
    {
      title: "Estate Agent Web App",
      description: "Designed and developed a fully responsive, client-side React web application tailored for property browsing with dynamic UI components.",
      tags: ["React", "JavaScript", "Dynamic UI"],
      liveLink: "https://muhamed-zumair.github.io/Estate-Agent-Client-side-Web-Application/",
      githubLink: "https://github.com/muhamed-zumair/Estate-Agent-Client-side-Web-Application",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Smart Class API",
      description: "A robust, secure backend API service engineered to manage educational resources, student authentication, and dynamic classroom data.",
      tags: ["java", "JAX-RS"],
      githubLink: "https://github.com/muhamed-zumair/SmartCampusAPI",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    },
    /*
    {
      title: "Personal Task Manager",
      description: "Built a lightweight, highly responsive GUI-based application using Python and Tkinter to optimize personal productivity.",
      tags: ["Python", "Tkinter", "JSON"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Web Design Project",
      description: "Designed and developed an interactive awareness website focused on UN SDG 14: Life Below Water to promote marine conservation.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/",
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80"
    }
      */

  ];

  const designList = [
    {
      title: "EventLK",
      type: "Web App UI",
      description: "Designed a user-centric interface for an AI-powered event management platform tailored to university societies. The UX strategy focused on simplifying complex operations.",
      tools: ["Figma", "Prototyping", "UX Mapping"],
      image: "/eventlk_des.png",
      figmaLink: "https://www.figma.com/design/W4hXcK0yQmx3rA3v022mNT/eventlk?node-id=0-1&p=f&t=EhGs270WosZEIKj0-0",
      liveLink: "https://www.eventlk.com"
    },
    {
      title: "Rosary Global",
      type: "Web UI",
      description: "Engineered a sophisticated, professional web presence designed to project international credibility utilizing a highly structured grid system and elegant typography.",
      tools: ["Figma", "Design System"],
      image: "/rosary_des.png",
      figmaLink: "https://www.figma.com/design/caDzD497Tg3YaIkvx625UA/Rosary?node-id=0-1&p=f&t=nVLRq31tFwoC4nC3-0",
      liveLink: "https://example.com"
    },
    {
      title: "MHM Taxi",
      type: "Web UI",
      description: "Designed a streamlined, mobile-first interface for a ride-hailing service prioritizing frictionless user journeys, interactive maps, and real-time tracking.",
      tools: ["Figma", "UI Design", "User Testing"],
      image: "/mhm_des.png",
      figmaLink: "https://www.figma.com/design/y1FrQB71hJESKYlJMayi24/MHM?node-id=0-1&p=f&t=fPanrUIyXSeVyqzu-0",
      liveLink: "https://example.com"
    },
    {
      title: "Product Showcase",
      type: "Animated Landing Page",
      description: "An immersive, kinetic landing page concept designed to highlight products. Bold typography, and dynamic visual reveals to maximize user engagement.",
      tools: ["Figma", "Motion UI"],
      image: "/sample_des.png",
      figmaLink: "https://www.figma.com/design/hJtx9Qn4O8zJchWxkkTy1H/animated-webpage?node-id=0-1&p=f&t=SXrcLkmfm2PPQQYI-0",
      liveLink: "https://example.com"
    }
  ];

  return (
    <>
      {/* --- SECTION 1: HORIZONTAL SCROLLING PROJECTS --- */}
      <section className="projects-scroll-section" ref={sectionRef} id="portfolio">
        <div className="sticky-wrapper">
          <div className="projects-header-group">
            <h1 className="projects-heading">PROJECTS</h1>
            <h2 className="projects-subheading">Selected Works</h2>
          </div>
          
          <div 
            className="projects-track"
            style={{ transform: `translateX(calc(-${scrollProgress}% + ${scrollProgress}vw))` }}
          >
            {projectList.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image-wrapper">
                  {/* Optional Freelance/Client Badge */}
                  {project.badge && (
                    <span className="project-badge">{project.badge}</span>
                  )}
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="tech-stack">
                    {project.tags.map((tag, tagIndex) => (
                      <span className="tech-pill" key={tagIndex}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="project-actions">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <ExternalLink size={16} /> Live Preview
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      <Github size={16} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: VERTICAL STACKING DESIGNS --- */}
      <section className="designs-stack-section" id="designs">
        <div className="projects-header-group designs-header">
          <h1 className="projects-heading">DESIGNS</h1>
          <h2 className="projects-subheading">UI / UX Concepts</h2>
        </div>

        <div className="designs-container">
          {designList.map((design, index) => (
            <div 
              className="design-stack-card" 
              key={index}
              style={{ top: `calc(25vh + ${index * 40}px)` }}
            >
              <div className="design-image-wrapper">
                 <img src={design.image} alt={design.title} loading="lazy" />
              </div>
              <div className="design-content-wrapper">
                <div className="design-card-header">
                  <div className="header-text">
                    <h3 className="project-title">{design.title}</h3>
                    <span className="design-type">{design.type}</span>
                  </div>
                  
                  {/* Action Buttons Group (Figma + Live) */}
                  <div className="design-actions">
                    {design.figmaLink && (
                      <a href={design.figmaLink} target="_blank" rel="noopener noreferrer" className="figma-btn">
                        <Figma size={16} /> Figma
                      </a>
                    )}
                    {design.liveLink && (
                      <a href={design.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary design-live-btn">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="project-desc">{design.description}</p>
                <div className="tech-stack">
                  {design.tools.map((tool, toolIndex) => (
                    <span className="tech-pill design-pill" key={toolIndex}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
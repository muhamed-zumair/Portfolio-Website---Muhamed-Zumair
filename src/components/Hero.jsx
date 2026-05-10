import React, { useEffect, useRef } from 'react';
import { Download, Github, Linkedin, Instagram } from 'lucide-react'; // Imported new icons
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Adjust canvas to window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle Configuration
    const particlesArray = [];
    // Automatically reduce particles on mobile for better performance and cleaner visuals
    const numberOfParticles = window.innerWidth < 768 ? 40 : 80; 

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; 
        this.speedX = (Math.random() - 0.5) * 1.5; 
        this.speedY = (Math.random() - 0.5) * 1.5; 
        this.opacity = Math.random() * 0.5 + 0.2; 
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="hero-section">
      
      <canvas ref={canvasRef} className="particles-canvas"></canvas>

      <div className="hero-text-container">
        <div className="text-wrapper">
          <h2 className="greeting">Hello, I'm</h2>
          <div className="name-stack">
            <h1 className="name-solid">MUHAMED</h1>
            <h1 className="name-solid">ZUMAIR</h1>
          </div>
        </div>
      </div>

      <div className="designer-label-container">
        <div className="cube">
          <div className="cube-face face-front">DESIGNER</div>
          <div className="cube-face face-top">DEVELOPER</div>
          <div className="cube-face face-back">DESIGNER</div>
          <div className="cube-face face-bottom">DEVELOPER</div>
        </div>
      </div>

      <div className="model-container">
        <img src="/model.png" alt="3D Character" className="model-img" />
      </div>

      <a 
        href="/Muhamed_Zumair_CV.pdf" 
        download="Muhamed_Zumair_CV.pdf" 
        className="download-btn"
      >
        <Download size={20} strokeWidth={2.5} />
        Download CV
      </a>

      {/* --- NEW SOCIAL MEDIA PANEL --- */}
      <div className="social-panel">
        <a href="https://github.com/muhamed-zumair" target="_blank" rel="noreferrer" className="social-icon">
          <Github size={24} strokeWidth={2} />
        </a>
        <a href="https://www.linkedin.com/in/muhamedzumair/" target="_blank" rel="noreferrer" className="social-icon">
          <Linkedin size={24} strokeWidth={2} />
        </a>
        <a href="https://www.instagram.com/zumair_mz" target="_blank" rel="noreferrer" className="social-icon">
          <Instagram size={24} strokeWidth={2} />
        </a>
      </div>

    </main>
  );
};

export default Hero;
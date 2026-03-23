import React from 'react';
import { Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <main className="hero-section">
      
      {/* 1. The Main Typography Layer (Behind the model) */}
      <div className="hero-text-container">
        <div className="text-wrapper">
          <h2 className="greeting">Hello, I'm</h2>
          <div className="name-stack">
            <h1 className="name-solid">MUHAMED</h1>
            <h1 className="name-solid">ZUMAIR</h1>
          </div>
          {/* THE DESIGNER LABEL CONTAINER HAS BEEN REMOVED FROM HERE */}
        </div>
      </div>

      {/* 2. New Position for the Designer Label Container */}
      <div className="designer-label-container">
        <div className="cube">
          <div className="cube-face face-front">DESIGNER</div>
          <div className="cube-face face-top">DEVELOPER</div>
          <div className="cube-face face-back">DESIGNER</div>
          <div className="cube-face face-bottom">DEVELOPER</div>
        </div>
      </div>

      {/* 3. The 3D Model Layer (In front of the text) */}
      <div className="model-container">
        <img src="/model.png" alt="3D Character" className="model-img" />
      </div>

      {/* 4. The Button Layer (In front of everything) */}
      <button className="download-btn">
        <Download size={20} strokeWidth={2.5} />
        Download CV
      </button>

    </main>
  );
};

export default Hero;
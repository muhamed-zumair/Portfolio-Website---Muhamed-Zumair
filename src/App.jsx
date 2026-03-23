import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // New Import
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Background Columns */}
      <div className="background-grid">
        <div className="col-black"></div>
        <div className="col-blue"></div>
        <div className="col-black"></div>
      </div>

      {/* Components */}
      <Navbar />
      <Hero />
      
      {/* The new About section is added here */}
      <About />
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'; // <--- Add this import
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="background-grid">
        <div className="col-black"></div>
        <div className="col-blue"></div>
        <div className="col-black"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects /> {/* <--- Add the component here */}
    </div>
  );
}

export default App;
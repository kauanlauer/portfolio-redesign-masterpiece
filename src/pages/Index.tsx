
import React, { useEffect } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import TCC from '../components/TCC';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Header />
      <main>
        <About />
        <Projects />
        <TCC />
        <Contact />
      </main>
    </div>
  );
};

export default Index;

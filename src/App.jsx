import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Education from './components/Education';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the "funny" preloader animation
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-black-main text-white-text min-h-screen selection:bg-brand-blue selection:text-white-text overflow-x-hidden">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="animate-[fadeIn_0.8s_ease-out]">
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}

export default App;

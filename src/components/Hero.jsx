import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import abhayHeroImg from '../assets/images/abhay_hero.png';
import resumePdf from '../assets/documents/Abhay_Choudhary_Resume.pdf';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black-main relative pt-20 border-b border-black-border overflow-hidden">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>
      
      {/* Ambient Blue Glow behind Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none"
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Name and Dynamic Taglines */}
        <div className="text-left w-full lg:w-3/5 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 bg-black-card border border-brand-blue/20 rounded-sm mb-2 border-l-4 border-l-brand-blue shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-blue mr-3 animate-pulse shadow-[0_0_8px_#2563eb]"></span>
            <span className="text-gray-text text-xs tracking-[0.2em] font-bold uppercase">Software Engineer</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white-text tracking-tighter leading-[0.95] uppercase"
          >
            Abhay <br className="hidden md:block" />
            <span className="text-brand-blue">Choudhary</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-text tracking-tight mt-6"
          >
            Engineering{' '}
            <span className="text-brand-blue-light font-mono font-normal">
               <Typewriter
                words={['Scalable Web Apps.', 'AI-Driven Systems.', 'Robust APIs.', 'Data Structures.']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, borderLeftOpacity: 0 }}
            animate={{ opacity: 1, borderLeftOpacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-text font-light leading-relaxed max-w-lg mt-8 border-l border-brand-blue/30 pl-6"
          >
            Computer Science student specializing in full-stack architecture. I turn complex problems into robust logic and real-world solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row gap-5 pt-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-4 bg-brand-blue text-white-text font-bold uppercase tracking-widest hover:bg-brand-blue-dark transition-all duration-300 rounded-sm text-center shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              View My Work
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Abhay2092" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-transparent border border-gray-text/30 text-white-text font-bold uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue-light transition-all duration-300 rounded-sm text-center flex justify-center items-center backdrop-blur-sm group/btn"
            >
              <svg className="w-5 h-5 mr-2 group-hover/btn:text-brand-blue-light transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </motion.a>
          </motion.div>

          {/* Resume Buttons Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white-text/80 hover:text-brand-blue transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View CV
            </a>
            <span className="text-gray-text/30">|</span>
            <a 
              href={resumePdf} 
              download="Abhay_Choudhary_Resume.pdf"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white-text/80 hover:text-brand-blue transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right Side: Professional Image Integration */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-16 lg:mt-0 relative group"
        >
          {/* Decorative frames behind image */}
          <div className="absolute inset-0 border-2 border-brand-blue/20 translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-700"></div>
          
          <div className="relative z-10 w-full max-w-[380px] aspect-[4/5] object-cover overflow-hidden rounded-sm border-2 border-black-border shadow-2xl group-hover:border-brand-blue/40 transition-all duration-500">
            <img 
              src={abhayHeroImg} 
              alt="Abhay Choudhary" 
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
            />
            {/* Soft Blue Overlay focused at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-main/80 via-transparent to-transparent opacity-60"></div>
            
            {/* floating details badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-black-main/80 backdrop-blur-md border border-white/10 rounded-sm transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-1">Status</span>
                <p className="text-white text-xs font-light">Building for the future. Based in India.</p>
            </div>
          </div>
          
          {/* Subtle star accent */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 -left-4 w-12 h-12 text-brand-blue/40 opacity-50 select-none"
          >✦</motion.div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-2 -right-6 w-8 h-8 text-brand-blue/30 opacity-40 select-none"
          >✧</motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

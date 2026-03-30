import React from 'react';
import resumePdf from '../assets/documents/Abhay_Choudhary_Resume.pdf';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black-main/80 backdrop-blur-md border-b border-black-border selection:bg-brand-blue selection:text-white-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-4">
            <img src="/vite.png" alt="Vite Logo" className="w-8 h-8 object-contain animate-pulse" />
            <a href="#" className="font-extrabold text-2xl tracking-tighter text-white-text uppercase">
              Abhay <span className="text-brand-blue">Choudhary</span>
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 text-[10px] font-bold tracking-[0.2em] text-gray-text uppercase">
              <a href="#about" className="hover:text-white-text transition-colors duration-200">About</a>
              <a href="#projects" className="hover:text-white-text transition-colors duration-200">Projects</a>
              <a href="#skills" className="hover:text-white-text transition-colors duration-200">Skills</a>
              <a href="#problem-solving" className="hover:text-white-text transition-colors duration-200">Skills In Action</a>
              <a href="#resume" className="hover:text-white-text transition-colors duration-200">Resume</a>
              <a href="#contact" className="px-5 py-2.5 bg-brand-blue text-white-text hover:bg-brand-blue-dark transition-colors duration-200 rounded-sm">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

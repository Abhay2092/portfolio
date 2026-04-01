import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black-main text-white-text py-12 text-center border-t border-black-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <span className="text-3xl font-black uppercase tracking-tighter">Abhay <span className="text-brand-blue">Choudhary</span></span>
        </div>
        
        <p className="text-gray-text font-bold uppercase tracking-widest text-sm mb-8">
          Developer &bull; Problem Solver &bull; Engineer
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#about" className="font-bold text-gray-text hover:text-brand-blue uppercase tracking-widest transition-colors duration-200">About</a>
          <a href="#skills" className="font-bold text-gray-text hover:text-brand-blue uppercase tracking-widest transition-colors duration-200">Skills</a>
          <a href="#projects" className="font-bold text-gray-text hover:text-brand-blue uppercase tracking-widest transition-colors duration-200">Projects</a>
          <a href="#contact" className="font-bold text-gray-text hover:text-brand-blue uppercase tracking-widest transition-colors duration-200">Contact</a>
        </div>
        
        <div className="border-t border-black-border pt-8 flex flex-col justify-center items-center text-xs font-bold text-gray-text uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Abhay Choudhary. All Rights Reserved.</p>
          <p className="mt-2 text-[10px] text-brand-blue-dark">Built with React &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

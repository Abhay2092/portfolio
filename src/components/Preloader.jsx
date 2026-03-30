import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. The Web Thread (Shooting from Top) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[40vh] bg-gradient-to-b from-brand-blue to-white/40 origin-top animate-[webShoot_0.8s_ease-out_forwards]">
        {/* Glow effect on the thread */}
        <div className="absolute inset-0 bg-brand-blue blur-[4px] opacity-40"></div>
      </div>

      {/* 2. The Hanging Spider-Man (Minimalist Silhouette) */}
      <div className="relative group perspective-[1000px] mt-[-5vh]">
        <div className="animate-[swing_3s_infinite_ease-in-out] origin-top pt-[35vh]">
            <div className="relative w-24 h-32 flex flex-col items-center">
                {/* Spider-Man Body Silhouette */}
                <svg 
                    width="60" 
                    height="80" 
                    viewBox="0 0 100 130" 
                    fill="none" 
                    className="drop-shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all group-hover:drop-shadow-[0_0_20px_#2563eb]"
                >
                    {/* Head */}
                    <ellipse cx="50" cy="25" rx="18" ry="22" fill="#2563eb" />
                    <path d="M42 22C42 22 44 28 48 28C52 28 58 22 58 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    
                    {/* Torso */}
                    <path d="M35 45C35 45 40 85 50 85C60 85 65 45 65 45" fill="#1e40af" />
                    
                    {/* Arms (holding web) */}
                    <path d="M50 0V20M35 45L45 10M65 45L55 10" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
                    
                    {/* Legs (Tucked in) */}
                    <path d="M40 85L30 110M60 85L70 110" stroke="#1e3a8a" strokeWidth="5" strokeLinecap="round" />
                    <path d="M30 110L45 120M70 110L55 120" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
                </svg>
                
                {/* Subtle web-shot particles */}
                <div className="absolute -top-4 w-4 h-4 bg-white/20 blur-md rounded-full animate-pulse"></div>
            </div>
        </div>
      </div>

      {/* 3. Loading Indicator below */}
      <div className="mt-40 flex flex-col items-center space-y-4">
        <div className="relative w-48 h-1 bg-white/5 rounded-full overflow-hidden">
            <div 
                className="absolute inset-y-0 left-0 bg-brand-blue shadow-[0_0_10px_#2563eb] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
        
        <div className="flex flex-col items-center">
            <span className="text-white-text font-black text-2xl tracking-[0.2em]">{progress}%</span>
            <p className="text-brand-blue-light font-mono text-[9px] tracking-[0.4em] uppercase opacity-60 animate-pulse">
                Establishing Web Connection...
            </p>
        </div>
      </div>

      {/* 4. Background Accents */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-brand-blue rounded-full blur-[2px] opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-brand-blue rounded-full blur-[4px] opacity-10"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes webShoot {
          0% { height: 0; opacity: 0; }
          100% { height: 40vh; opacity: 1; }
        }

        @keyframes swing {
          0% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
          100% { transform: rotate(-8deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}} />
    </div>
  );
};

export default Preloader;

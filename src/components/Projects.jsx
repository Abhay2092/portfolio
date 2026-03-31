import React from 'react';
import { motion } from 'framer-motion';
import nexamartImg from '../assets/images/nexamart_v2.png';
import aitripImg from '../assets/images/aitrip_v2.png';
import featImg from '../assets/images/feat_v2.png';

const Projects = () => {
  const projects = [
    {
      title: 'NexaMart',
      date: "Oct' 25",
      type: 'Full-Stack Marketing Platform',
      tech: ['PHP', 'MySQL', 'JS', 'Tailwind'],
      description: 'Built a full-stack marketing platform supporting multi-category product listings and seller onboarding. Implemented robust authentication with session-based login and 15-minute auto-logout.',
      image: nexamartImg,
      github: 'https://github.com/Abhay2092/Nexamart09',
      demo: 'https://nexamartstore.wuaze.com/'
    },
    {
      title: 'AI Trip Planner',
      date: "2025",
      type: 'AI Web Application',
      tech: ['FastAPI', 'LangGraph', 'LangChain'],
      description: 'Developed a production-ready AI trip planning system for personalized itinerary generation using multi-agent workflows. Implemented RAG and API integrations to ensure high-accuracy recommendations.',
      image: aitripImg,
      github: 'https://github.com/Abhay2092/AI-trip-planner',
      demo: 'https://github.com/Abhay2092/AI-trip-planner' // Placeholder since no live link provided
    },
    {
      title: 'F.E.A.T (Field Enhanced Awareness Tech)',
      date: "Mar' 26",
      type: 'AI Defence System',
      tech: ['Python', 'OpenCV', 'YOLOv8', 'Edge AI', 'Raspberry Pi'],
      description: 'Developed an edge-based AI smart visor for real-time threat detection with 0% internet dependency, designed for defence scenarios in DIL environments, ensuring reliable on-device processing. Built an adversarial defence pipeline (Feature Squeezing, Spatial Smoothing) and optimized YOLOv8 (INT8) for embedded systems, achieving 30–60 FPS with accurate detection of camouflaged threats and HUD-based visualization.',
      image: featImg,
      github: 'https://github.com/Abhay2092/FEAT',
      demo: 'https://github.com/Abhay2092/FEAT' // Placeholder since no live link provided
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-black-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white-text uppercase tracking-tighter">
            Featured <span className="text-brand-blue">Projects</span>
          </h2>
          <div className="h-[2px] w-32 bg-brand-blue mx-auto mt-6 rounded-full opacity-50"></div>
          <p className="text-gray-text mt-8 text-lg font-light max-w-2xl mx-auto leading-relaxed italic">
            "Turning complex logic into scalable systems and intuitive user experiences."
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}
            >
              {/* Project Image Panel */}
              <div className="w-full lg:w-3/5 relative">
                  <div className={`absolute -inset-4 bg-brand-blue/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 ${index % 2 === 1 ? 'right-0' : 'left-0'}`}></div>
                  
                  <div className="relative overflow-hidden rounded-sm border border-black-border group-hover:border-brand-blue/30 transition-all duration-500 shadow-2xl group-hover:shadow-brand-blue/5">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full aspect-video object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-main via-transparent to-transparent opacity-40"></div>
                    
                    {/* Floating Tech Badges */}
                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-black-main/80 backdrop-blur-md border border-brand-blue/20 text-brand-blue text-[9px] font-bold uppercase tracking-widest rounded-sm">
                                {t}
                            </span>
                        ))}
                    </div>
                  </div>
              </div>

              {/* Project Content Panel */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-3">
                    <div className="flex items-center gap-4">
                        <span className="text-brand-blue font-mono text-sm">/ 0{index + 1}</span>
                        <div className="h-[1px] w-12 bg-gray-text/20"></div>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-text">{project.date}</span>
                    </div>
                
                    <h3 className="text-3xl md:text-5xl font-black text-white-text uppercase tracking-tight group-hover:text-brand-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-brand-blue-light/70 font-mono text-[10px] uppercase tracking-widest font-bold">
                        {project.type}
                    </p>
                </div>
                
                <p className="text-gray-text leading-relaxed text-base font-light border-l border-brand-blue/30 pl-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-[9px] font-bold text-gray-text/40 uppercase tracking-widest">
                            {t} {i !== project.tech.length - 1 && "•"}
                        </span>
                    ))}
                </div>
                
                <div className="pt-8 flex flex-wrap lg:flex-nowrap items-center gap-5">
                   <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noreferrer"
                    className="px-10 py-4 bg-brand-blue text-white-text font-black uppercase tracking-widest text-[10px] hover:bg-brand-blue-dark transition-all rounded-sm shadow-xl flex items-center gap-3 group/btn"
                  >
                    View Live Project
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noreferrer"
                    className="px-10 py-4 bg-transparent border border-gray-text/20 text-white-text font-black uppercase tracking-widest text-[10px] hover:border-brand-blue transition-all rounded-sm text-center flex items-center gap-3"
                  >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
            <a 
              href="https://github.com/Abhay2092" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-10 py-5 bg-black-card border border-black-border text-white-text font-black uppercase tracking-[0.2em] text-[10px] hover:border-brand-blue hover:text-brand-blue-light transition-all rounded-sm hover:-translate-y-1 shadow-lg"
            >
              All Github Repositories
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


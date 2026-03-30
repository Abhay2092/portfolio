import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const certifications = [
    { title: "C++ Programming: OOPs and DSA", provider: "CSE Pathshala", date: "Aug' 23", link: "https://drive.google.com/file/d/19Wbo_PR5fsToEgAcRX65_FU7aJZNAGwK/view" },
    { title: "Build Generative AI Apps and Solutions", provider: "Infosys Springboard", date: "Aug' 25", link: "https://drive.google.com/file/d/1QGXksJrVbx9sHEHKxQ36oPSVykzDpfqp/view" },
    { title: "Master Generative AI & Generative AI tools", provider: "Infosys Springboard", date: "Aug' 25", link: "https://drive.google.com/file/d/1zsOln-LvvYc7ngTlbgP7nyh6-N-Io1Xp/view" },
    { title: "Cloud Computing", provider: "NPTEL", date: "Jun' 25", link: "https://drive.google.com/file/d/1R3UP9CpCP8THigtH1OaPmzZtGei_oNkD/view" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-24 bg-black-card border-t border-b border-black-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Training */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12 border-b-2 border-brand-blue pb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.477 2.387a2 2 0 00.547 1.022l1.428 1.428a2 2 0 002.828 0l1.428-1.428a2 2 0 00.547-1.022l.477-2.387a2 2 0 00-1.414-1.96l-2.387-.477a2 2 0 00-1.022.547l-1.428 1.428a2 2 0 01-2.828 0l-1.428-1.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.477 2.387a2 2 0 00.547 1.022l1.428 1.428a2 2 0 002.828 0l1.428-1.428a2 2 0 00.547-1.022l.477-2.387a2 2 0 00-1.414-1.96l-2.387-.477z" />
              </svg>
              <h2 className="text-3xl font-black text-white-text uppercase tracking-tighter">
                Technical <span className="text-brand-blue">Training</span>
              </h2>
            </div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 border border-black-border border-l-4 border-l-brand-blue bg-black-main shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-colors"></div>
              
              <span className="text-brand-blue font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block py-1 px-3 bg-brand-blue/10 border border-brand-blue/20 rounded-sm w-fit">Jun' 25 - Jul' 25</span>
              <h3 className="text-2xl font-black text-white-text uppercase mb-2 tracking-tight">
                DSA using CPP
              </h3>
              <h4 className="text-lg text-brand-blue-light font-bold mb-6 uppercase tracking-widest text-xs">
                CSE Pathshala
              </h4>
              <p className="text-gray-text leading-relaxed font-light mb-8 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                Gained hands-on experience implementing Object-Oriented Programming (OOP) principles. Developed efficient algorithms using arrays, linked lists, stacks, queues, trees, and graphs. Enhanced problem-solving and coding efficiency.
              </p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/19Wbo_PR5fsToEgAcRX65_FU7aJZNAGwK/view" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center px-8 py-3 bg-brand-blue text-white font-bold uppercase tracking-widest text-[10px] hover:bg-brand-blue-dark transition-all rounded-sm shadow-xl"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Certificate
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12 border-b-2 border-brand-blue pb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-3xl font-black text-white-text uppercase tracking-tighter">
                Key <span className="text-brand-blue">Certificates</span>
              </h2>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex justify-between items-center p-5 bg-black-main border border-black-border hover:border-brand-blue/40 transition-all group rounded-sm"
                >
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white-text uppercase tracking-wide group-hover:text-brand-blue transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] text-gray-text font-bold uppercase tracking-widest">{cert.provider}</span>
                        <span className="text-[10px] text-brand-blue-light font-mono bg-brand-blue/5 px-2 py-0.5 rounded-sm">{cert.date}</span>
                    </div>
                  </div>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={cert.link} 
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 ml-4 w-9 h-9 flex items-center justify-center bg-black-card border border-white/10 text-white-text hover:bg-brand-blue hover:text-white transition-all rounded-full"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

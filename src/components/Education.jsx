import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University (Phagwara, Punjab)",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      date: "Aug' 23 - Present",
      score: "CGPA: 7.07"
    },
    {
      institution: "Army Public School (Meerut, UP)",
      degree: "Intermediate",
      date: "Apr' 22 - Mar' 23",
      score: "Percentage: 69.8%"
    },
    {
      institution: "Army Public School (Mhow, MP)",
      degree: "Matriculation",
      date: "Apr' 20 - Mar' 21",
      score: "Percentage: 83.4%"
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="py-24 bg-black-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-16 border-b-2 border-brand-blue pb-4 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white-text uppercase tracking-tighter">
            Academic <span className="text-brand-blue">Path</span>
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-brand-blue-dark ml-4 pl-10 pb-8 space-y-16"
        >
          {education.map((edu, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute w-5 h-5 bg-brand-blue rounded-full -left-[51px] top-1 border-4 border-black-main group-hover:bg-brand-blue-light transition-colors group-hover:scale-125 duration-300"></div>
              
              <div className="mb-2">
                <span className="text-brand-blue-light font-bold uppercase tracking-widest text-[10px] py-1 px-2 bg-brand-blue/10 border border-brand-blue/20 rounded-sm">
                  {edu.date}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-white-text uppercase leading-tight mt-4 mb-1 tracking-tight">
                {edu.degree}
              </h3>
              
              <h4 className="text-lg text-gray-text font-bold uppercase tracking-widest text-xs mb-4">
                {edu.institution}
              </h4>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 bg-black-card border border-brand-blue/30 text-white-text px-4 py-2 font-bold uppercase tracking-widest text-[10px] rounded-sm group-hover:border-brand-blue/60 transition-colors"
              >
                <span className="text-brand-blue">{edu.score}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

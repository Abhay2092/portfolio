import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      items: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
      ]
    },
    {
      title: 'Databases & Tools',
      items: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' }
      ]
    },
    {
      title: 'Core Fundamentals',
      items: [
        { name: 'DSA', icon: 'https://img.icons8.com/ios-filled/50/2563eb/binary-file.png' },
        { name: 'OOPs', icon: 'https://img.icons8.com/ios-filled/50/2563eb/object-oriented-programming.png' },
        { name: 'DBMS', icon: 'https://img.icons8.com/ios-filled/50/2563eb/database.png' },
        { name: 'OS', icon: 'https://img.icons8.com/ios-filled/50/2563eb/operating-system.png' }
      ]
    }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-black-card border-t border-b border-black-border relative overflow-hidden">
      
      {/* Decorative background scanline */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent animate-[pan_3s_linear_infinite]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white-text uppercase tracking-tighter shadow-sm inline-block">
             Technical <span className="text-brand-blue">Skills</span>
          </h2>
          <div className="h-[2px] w-24 bg-brand-blue mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="p-8 border border-black-border bg-black-main rounded-sm shadow-xl group hover:border-brand-blue/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white-text uppercase tracking-[0.2em] mb-10 pl-4 border-l-2 border-brand-blue">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.items.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex flex-col items-center space-y-3 group/skill cursor-default p-2 rounded-sm hover:bg-black-card transition-colors duration-200"
                  >
                    <div className="w-12 h-12 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-brand-blue/20 blur-xl rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity"></div>
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className={`w-10 h-10 object-contain relative z-10 filter ${skill.invert ? 'brightness-200 grayscale contrast-200' : 'grayscale-[0.3]'} group-hover/skill:grayscale-0 group-hover/skill:scale-110 transition-all duration-300`} 
                        />
                    </div>
                    <span className="text-[11px] font-bold text-gray-text uppercase tracking-widest text-center group-hover/skill:text-white-text transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 p-8 border border-brand-blue/20 bg-brand-blue/5 rounded-sm flex flex-col items-center text-center space-y-4"
        >
            <p className="text-sm font-light text-gray-text italic max-w-2xl">
                "These skills represent years of dedicated problem solving in C++ and hands-on application development across full-stack architectures."
            </p>
            <span className="h-[1px] w-12 bg-brand-blue/30"></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Resume.css';
import resumePdf from '../assets/documents/Abhay_Choudhary_Resume.pdf';
import resumePreviewImg from '../assets/images/preview_image_resume.png';

const Resume = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;
            const rect = timelineRef.current.getBoundingClientRect();
            const winHeight = window.innerHeight;
            const triggerPoint = winHeight * 0.65;
            const scrolled = triggerPoint - rect.top;
            let progress = (scrolled / rect.height) * 100;
            progress = Math.max(0, Math.min(100, progress));
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15
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
        <section id="resume" className="py-24 bg-black-card border-t border-black-border relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h4 className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-2">HISTORY</h4>
                    <h2 className="text-4xl md:text-6xl font-black text-white-text uppercase tracking-tighter">
                        Education & <span className="text-brand-blue">Resume</span>
                    </h2>
                </motion.div>

            <div className="resume-grid">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="resume-timeline-col"
                >
                    <h3 className="timeline-heading">Education Journey</h3>
                    <div className="resume-items-wrapper" ref={timelineRef}>
                        <div 
                            className="animated-timeline-line" 
                            style={{ height: `${scrollProgress}%` }}
                        />
                        
                        <div className="resume-item group">
                            <div className="resume-date">Aug 2023 – Present</div>
                            <h4 className="group-hover:text-brand-blue transition-colors">B.Tech – Computer Science</h4>
                            <p>Lovely Professional University</p>
                            <p className="resume-desc">CGPA: 7.07</p>
                        </div>
    
                        <div className="resume-item group">
                            <div className="resume-date">Apr 2022 – Mar 2023</div>
                            <h4 className="group-hover:text-brand-blue transition-colors">Intermediate (12th Grade)</h4>
                            <p>Army Public School, Meerut</p>
                            <p className="resume-desc">Percentage: 69.8%</p>
                        </div>
    
                        <div className="resume-item" style={{ borderLeftColor: 'transparent', paddingBottom: 0 }}>
                            <div className="resume-date">Apr 2020 – Mar 2021</div>
                            <h4 className="group-hover:text-brand-blue transition-colors">Matriculation (10th Grade)</h4>
                            <p>Army Public School, Mhow</p>
                            <p className="resume-desc">Percentage: 83.4%</p>
                        </div>
                  </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="resume-preview-col"
                >
                    <div className="resume-card-container">
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="resume-doc-preview group"
                        >
                            <img src={resumePreviewImg} alt="Resume Preview" className="doc-image-bg grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />
                            <div className="preview-overlay">
                                <motion.a 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={resumePdf} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="preview-btn"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    View Document
                                </motion.a>
                            </div>
                        </motion.div>

                        <div className="resume-download-actions">
                            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Technical Dossier</h5>
                            <p className="download-hint">Get an offline copy of my professional profile.</p>

                            <div className="download-btn-group pt-4">
                                <motion.a 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={resumePdf} 
                                    download="Abhay_Choudhary_Resume.pdf" 
                                    className="px-8 py-4 bg-brand-blue text-white font-black uppercase tracking-widest text-[11px] hover:bg-brand-blue-dark transition-all duration-300 rounded-sm text-center flex items-center justify-center gap-2 shadow-xl"
                                >
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                    Download PDF
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
    );
};

export default Resume;

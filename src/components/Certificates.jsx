import React from 'react';
import { motion } from 'framer-motion';
import './Certificates.css';

// Import Preview Images
import imgNptel from '../assets/Certificates/Prieview_Image_NPTEL_Cloud computing.png';
import imgProgPath from '../assets/Certificates/Prieview_Image_Programming Pathshala_Java SpringBoot.png';
import imgGoogleCloud from '../assets/Certificates/Prieview_Image_Google Cloud_Introduction to Generative AI.png';
import imgInfosys from '../assets/Certificates/Prieview_Image_Infosys_Build Generative AI Apps and Solutions with No-Code Tools.png';

const certificatesData = [
    {
        id: 1,
        title: "Data Structure And Algorithm using CPP",
        company: "CSE Pathshala",
        image: imgProgPath,
        link: "https://drive.google.com/file/d/19Wbo_PR5fsToEgAcRX65_FU7aJZNAGwK/view"
    },
    {
        id: 2,
        title: "Build Generative AI Apps and Solutions",
        company: "Infosys Springboard",
        image: imgInfosys,
        link: "https://drive.google.com/file/d/1QGXksJrVbx9sHEHKxQ36oPSVykzDpfqp/view"
    },
    {
        id: 3,
        title: "Master Generative AI & Generative AI tools",
        company: "Infosys Springboard",
        image: imgGoogleCloud,
        link: "https://drive.google.com/file/d/1zsOln-LvvYc7ngTlbgP7nyh6-N-Io1Xp/view"
    },
    {
        id: 4,
        title: "Cloud Computing",
        company: "NPTEL",
        image: imgNptel,
        link: "https://drive.google.com/file/d/1R3UP9CpCP8THigtH1OaPmzZtGei_oNkD/view"
    }
];

const Certificates = () => {
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
      hidden: { scale: 0.9, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
      }
    };

    return (
        <section id="certificates" className="py-24 bg-black-main relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h4 className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-2">CREDENTIALS</h4>
                    <h2 className="text-4xl md:text-6xl font-black text-white-text uppercase tracking-tighter">
                        Technical <span className="text-brand-blue">Credentials</span>
                    </h2>
                    <p className="mt-4 text-gray-text font-light max-w-2xl mx-auto text-center">
                        Professional certifications validating expertise across Cloud, AI, and Software Engineering.
                    </p>
                </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="certificates-container"
            >
                <div className="certificates-scroll">
                    {certificatesData.map((cert) => (
                        <motion.div 
                            key={cert.id} 
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="certificate-card"
                        >
                            <div className="certificate-image-wrapper relative group/img overflow-hidden rounded-sm border border-white/5">
                                <img 
                                    src={cert.image} 
                                    alt={cert.title} 
                                    className="certificate-image w-full h-full object-cover transition-all duration-700 grayscale-[0.3] group-hover/img:grayscale-0 group-hover/img:scale-105" 
                                />
                                
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="w-10 h-10 bg-black-main/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-brand-blue shadow-lg group-hover/img:bg-brand-blue group-hover/img:text-white transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="certificate-overlay absolute inset-0 bg-black-main/60 backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-all duration-400 flex items-center justify-center text-center">
                                    <a 
                                        href={cert.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="px-6 py-3 bg-brand-blue text-white font-bold uppercase tracking-widest text-[10px] rounded-sm hover:bg-brand-blue-dark transition-all transform hover:scale-105 shadow-xl"
                                    >
                                        Open Certificate
                                    </a>
                                </div>
                            </div>
                            <div className="certificate-info">
                                <h3 className="cert-title" title={cert.title}>{cert.title}</h3>
                                <p className="cert-company">{cert.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
    );
};

export default Certificates;

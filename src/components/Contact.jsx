import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import abhayContactImg from '../assets/images/abhay_hero.png';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        emailjs.sendForm(
            'service_61184h6',
            'template_gtd30er',
            form.current,
            'o7Y9L_OovD5F66H0-'
        )
        .then(() => {
            setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
            form.current.reset();
        })
        .catch(() => {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

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
        <section id="contact" className="contact-section py-32 bg-black-main relative overflow-hidden text-center sm:text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center flex flex-col items-center"
                >
                    {/* Round Photo Container */}
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-brand-blue/30 p-2 mb-8 relative group"
                    >
                        <div className="absolute inset-0 bg-brand-blue/20 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                        <img 
                            src={abhayContactImg} 
                            alt="Abhay Choudhary" 
                            className="w-full h-full object-cover rounded-full grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-black text-white-text uppercase tracking-tighter">
                        Get In <span className="text-brand-blue">Touch</span>
                    </h2>
                    <p className="text-gray-text mt-6 text-base font-light max-w-2xl mx-auto border-t border-black-border pt-6 text-center">
                        Have a project in mind or want to discuss a software engineering role? Let's connect and build something remarkable together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    
                    {/* Contact Info */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div 
                            variants={itemVariants} 
                            className="contact-info-card p-10 border border-black-border bg-black-card rounded-sm group hover:border-brand-blue/50 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Subtle Inner Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <h3 className="text-brand-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-10 relative z-10 flex items-center">
                                <span className="w-8 h-[1px] bg-brand-blue/30 mr-4"></span>
                                Contact Details
                            </h3>
                            
                            <div className="space-y-8 relative z-10">
                                <a href="mailto:abhaychoudhary3521@gmail.com" className="flex items-center space-x-6 group/item">
                                    <div className="w-14 h-14 flex items-center justify-center bg-black-main border border-brand-blue/20 rounded-sm group-hover/item:border-brand-blue/60 group-hover/item:bg-black-card transition-all duration-300 shadow-lg">
                                        <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-text/50 font-bold uppercase tracking-widest mb-1">Email Me</span>
                                        <span className="text-white-text group-hover/item:text-brand-blue-light transition-colors text-sm sm:text-lg font-light tracking-tight">abhaychoudhary3521@gmail.com</span>
                                    </div>
                                </a>
                                
                                <div className="flex items-center space-x-6">
                                    <div className="w-14 h-14 flex items-center justify-center bg-black-main border border-brand-blue/20 rounded-sm shadow-lg">
                                        <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-text/50 font-bold uppercase tracking-widest mb-1">Based In</span>
                                        <span className="text-white-text uppercase tracking-[0.1em] text-xs font-bold">New Delhi, India</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants} 
                            className="contact-info-card p-10 border border-black-border bg-black-card rounded-sm group hover:border-brand-blue/50 transition-all duration-500 relative overflow-hidden"
                        >
                             <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                             
                             <h3 className="text-brand-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-10 relative z-10 flex items-center">
                                <span className="w-8 h-[1px] bg-brand-blue/30 mr-4"></span>
                                Social Platforms
                             </h3>
                             
                             <div className="flex gap-6 relative z-10">
                                <a href="https://linkedin.com/in/abhay-choudhary09" target="_blank" rel="noreferrer" className="w-16 h-16 flex items-center justify-center bg-black-main border border-black-border hover:border-brand-blue hover:text-brand-blue hover:bg-black-card transition-all duration-300 rounded-sm text-gray-text group/social">
                                    <svg className="w-7 h-7 transform group-hover/social:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/Abhay2092" target="_blank" rel="noreferrer" className="w-16 h-16 flex items-center justify-center bg-black-main border border-black-border hover:border-white hover:text-white hover:bg-black-card transition-all duration-300 rounded-sm text-gray-text group/social">
                                    <svg className="w-7 h-7 transform group-hover/social:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                             </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black-card border border-black-border p-10 lg:p-14 rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-brand-blue/30 transition-all duration-500"
                    >
                        {/* Box Top Accent */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

                        <form ref={form} onSubmit={sendEmail} className="space-y-10 text-left relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue flex items-center">
                                       <span className="w-1.5 h-1.5 bg-brand-blue mr-2 rounded-full shadow-[0_0_8px_#2563eb]"></span>
                                       Full Name
                                    </label>
                                    <input 
                                        type="text" 
                                        name="user_name"
                                        required
                                        className="w-full bg-black-main border border-black-border focus:border-brand-blue/60 focus:bg-black-card px-5 py-4 text-white-text outline-none transition-all placeholder:text-gray-text/20 text-sm font-light rounded-sm shadow-inner"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue flex items-center">
                                       <span className="w-1.5 h-1.5 bg-brand-blue mr-2 rounded-full shadow-[0_0_8px_#2563eb]"></span>
                                       Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        name="user_email"
                                        required
                                        className="w-full bg-black-main border border-black-border focus:border-brand-blue/60 focus:bg-black-card px-5 py-4 text-white-text outline-none transition-all placeholder:text-gray-text/20 text-sm font-light rounded-sm shadow-inner"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue flex items-center">
                                   <span className="w-1.5 h-1.5 bg-brand-blue mr-2 rounded-full shadow-[0_0_8px_#2563eb]"></span>
                                   Your Message
                                </label>
                                <textarea 
                                    name="message"
                                    required
                                    rows="5" 
                                    className="w-full bg-black-main border border-black-border focus:border-brand-blue/60 focus:bg-black-card px-5 py-4 text-white-text outline-none transition-all placeholder:text-gray-text/20 text-sm font-light resize-none rounded-sm shadow-inner"
                                    placeholder="Briefly describe your project or opportunity..."
                                ></textarea>
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-4 bg-brand-blue text-white-text font-black uppercase tracking-[0.2em] text-[10px] rounded-sm hover:bg-brand-blue-dark transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] disabled:opacity-50 disabled:cursor-not-wait"
                            >
                                {isSubmitting ? 'Transmitting...' : 'Send Message'}
                            </motion.button>
                            
                            {status.message && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-4 p-3 text-[10px] font-bold uppercase tracking-widest text-center border ${status.type === 'success' ? 'bg-green-500/10 border-green-500/50 text-green-500' : 'bg-red-500/10 border-red-500/50 text-red-500'}`}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
            
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/[0.01] -skew-x-12 transform translate-x-1/2 -z-0"></div>
        </section>
    );
};

export default Contact;

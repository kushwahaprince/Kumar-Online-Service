import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { CONTACT_INFO } from '../../constants/contact';

const Hero = () => {
    return (
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
            <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary-700 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        Online & Fast Service
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Your One-Stop <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                            Digital Solution
                        </span> Center
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                        {CONTACT_INFO.tagline}. From PF(UAN) and PAN Card to Passport, we handle all your digital and government documentation needs with care and speed.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a href="#services" className="btn-primary flex items-center gap-2 group">
                            Get Started
                            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline flex items-center gap-2"
                        >
                            <FaWhatsapp className="text-green-600 text-lg" />
                            Contact via WhatsApp
                        </a>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary-600">
                                <FaEnvelope />
                            </div>
                            <span className="hidden sm:inline">{CONTACT_INFO.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <FaWhatsapp />
                            </div>
                            <span>{CONTACT_INFO.whatsapp}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Company Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="aspect-square bg-gradient-to-br from-gray-50 to-blue-50 rounded-full flex items-center justify-center relative overflow-hidden p-8">
                            {/* Company Logo - Circular */}
                            <div className="relative z-10 w-full h-full">
                                <img
                                    src="/kumar-services-logo.jpg"
                                    alt="Kumar Online Services"
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Decorative blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

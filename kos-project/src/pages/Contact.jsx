import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../components/contact/ContactForm';
import { CONTACT_INFO } from '../constants/contact';

const Contact = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const preselectedService = queryParams.get('service');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-50 min-h-screen py-12"
        >
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-gray-600">
                        Have a question or need a service? Fill out the form below or reach out to us directly.
                        We are here to help you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info & Map */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Info Cards */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-gray-900 mb-6 text-lg">Get in Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                                        <HiLocationMarker size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Visit Us</h4>
                                        <p className="text-gray-600 text-sm mt-1">{CONTACT_INFO.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                        <FaWhatsapp size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">WhatsApp</h4>
                                        <p className="text-gray-600 text-sm mt-1">
                                            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="hover:text-primary-600 transition-colors">
                                                {CONTACT_INFO.whatsapp}
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                                        <HiMail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Email Us</h4>
                                        <p className="text-gray-600 text-sm mt-1">
                                            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary-600 transition-colors">
                                                {CONTACT_INFO.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 h-64 lg:h-80 overflow-hidden">
                            <iframe
                                src={CONTACT_INFO.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '0.5rem' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <ContactForm preselectedService={preselectedService} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;

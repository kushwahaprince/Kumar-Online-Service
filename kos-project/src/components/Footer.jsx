import React from 'react';
import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { CONTACT_INFO } from '../constants/contact';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                K
                            </div>
                            <span className="font-heading font-bold text-xl">Kumar Online Service</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {CONTACT_INFO.tagline}
                            <br />
                            Your trusted partner for all digital and government service needs.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/prince_creationn?igsh=MThkcmM2YWpxYmJhMQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Services', path: '/services' },
                                { name: 'How It Works', path: '/#how-it-works' },
                                { name: 'Reviews', path: '/reviews' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-primary-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-6">Popular Services</h3>
                        <ul className="space-y-3">
                            {[
                                'Driving Licence',
                                'PAN Card',
                                'Aadhaar Services',
                                'Passport',
                                'Ticket Booking',
                            ].map((service) => (
                                <li key={service}>
                                    <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <HiLocationMarker className="text-primary-500 text-xl mt-1" />
                                <span className="text-gray-400">{CONTACT_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiPhone className="text-primary-500 text-xl" />
                                <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-400 hover:text-white transition-colors">
                                    {CONTACT_INFO.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaWhatsapp className="text-green-500 text-xl" />
                                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    {CONTACT_INFO.whatsapp}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiMail className="text-primary-500 text-xl" />
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} {CONTACT_INFO.brandName}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

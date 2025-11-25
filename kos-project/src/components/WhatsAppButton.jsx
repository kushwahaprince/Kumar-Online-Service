import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants/contact';

const WhatsAppButton = () => {
    return (
        <motion.a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, I need help with a service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 group-hover:opacity-40"></div>
            <FaWhatsapp className="text-3xl relative z-10" />
            <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;

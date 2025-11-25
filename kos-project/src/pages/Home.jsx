import React from 'react';
import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <ServicesGrid />
            <HowItWorks />
            <Testimonials />
        </motion.div>
    );
};

export default Home;

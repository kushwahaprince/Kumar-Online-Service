import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                    <p className="text-gray-600">
                        Don't just take our word for it. Here is what our customers have to say about our services.
                    </p>
                </div>

                <div
                    className="max-w-4xl mx-auto relative px-4 md:px-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-primary-600 transition-colors hidden md:block"
                    >
                        <HiChevronLeft size={40} />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-primary-600 transition-colors hidden md:block"
                    >
                        <HiChevronRight size={40} />
                    </button>

                    <div className="relative h-80 md:h-64 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center"
                            >
                                <FaQuoteLeft className="text-4xl text-primary-100 mb-6" />
                                <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 leading-relaxed italic">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 shadow-md">
                                        {testimonials[currentIndex].initials}
                                    </div>
                                    <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                                    <div className="flex gap-1 text-yellow-400 my-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"} />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">{testimonials[currentIndex].date}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary-600 w-6' : 'bg-gray-300 hover:bg-primary-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { services } from '../../data/services';

const ServicesGrid = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-gray-600">
                        We offer a wide range of digital and government services. Choose what you need and let us handle the rest.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6 line-clamp-2">
                                {service.description}
                            </p>
                            <Link
                                to={`/services?id=${service.id}`}
                                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                            >
                                Book Now <HiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/services" className="btn-secondary">
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;

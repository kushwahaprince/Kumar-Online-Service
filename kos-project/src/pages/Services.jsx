import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiSearch, HiFilter } from 'react-icons/hi';
import ServiceCard from '../components/services/ServiceCard';
import { services, categories } from '../data/services';

const Services = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredServices, setFilteredServices] = useState(services);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialServiceId = queryParams.get('id');

    useEffect(() => {
        const filtered = services.filter(service => {
            const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
        setFilteredServices(filtered);
    }, [searchTerm, activeCategory]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-50 min-h-screen py-12"
        >
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Services</h1>
                    <p className="text-gray-600">
                        Browse our comprehensive list of digital and government services.
                        We ensure hassle-free processing for all your needs.
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 sticky top-24 z-30">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type="text"
                                placeholder="Search services..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Categories */}
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === category
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 gap-6">
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                defaultExpanded={service.id === initialServiceId}
                            />
                        ))
                    ) : (
                        <div className="text-center py-12 text-gray-500">
                            <p className="text-lg">No services found matching your criteria.</p>
                            <button
                                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                                className="text-primary-600 hover:underline mt-2"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Services;

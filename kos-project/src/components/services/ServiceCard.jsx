import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronUp, HiDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, defaultExpanded = false }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-lg ring-2 ring-primary-100' : 'hover:shadow-md'
                }`}
        >
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-6 cursor-pointer flex items-start gap-4"
            >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                    {service.icon}
                </div>
                <div className="flex-grow">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                        <button className="text-gray-400 hover:text-primary-600 transition-colors">
                            {isExpanded ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
                        </button>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100 bg-gray-50/50"
                    >
                        <div className="p-6 space-y-6">
                            <p className="text-gray-700">{service.fullDescription}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">1</span>
                                        Process Steps
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.steps.map((step, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <HiDocumentText className="text-primary-500" />
                                        Required Documents
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.requiredDocs.map((doc, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
                                                {doc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                                <Link
                                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                                    className="btn-primary text-sm py-2"
                                >
                                    Book This Service
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ServiceCard;

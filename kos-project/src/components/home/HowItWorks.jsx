import React from 'react';
import { motion } from 'framer-motion';
import { HiCursorClick, HiDocumentText, HiCheckCircle } from 'react-icons/hi';

const steps = [
    {
        id: 1,
        title: 'Choose Your Service',
        description: 'Browse our wide range of services and select the one you need help with.',
        icon: <HiCursorClick />,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        id: 2,
        title: 'Fill Details & Upload',
        description: 'Provide the necessary information and upload required documents securely.',
        icon: <HiDocumentText />,
        color: 'bg-purple-100 text-purple-600',
    },
    {
        id: 3,
        title: 'We Handle the Rest',
        description: 'Sit back and relax. We process your application and deliver the results.',
        icon: <HiCheckCircle />,
        color: 'bg-green-100 text-green-600',
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-gray-600">
                        Getting your work done is as easy as 1-2-3. Simple, transparent, and fast.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center text-4xl shadow-lg mb-6 relative z-10`}>
                                {step.icon}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                                    {step.id}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 max-w-xs">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

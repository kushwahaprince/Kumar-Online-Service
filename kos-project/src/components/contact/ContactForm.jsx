import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiUpload, HiExclamationCircle } from 'react-icons/hi';
import { services } from '../../data/services';

const ContactForm = ({ preselectedService }) => {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
        defaultValues: {
            service: preselectedService || ''
        }
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [fileName, setFileName] = useState('');

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setShowSuccess(true);
        reset();
        setFileName('');
        setTimeout(() => setShowSuccess(false), 5000);
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 relative overflow-hidden">
            {/* Success Overlay */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-4xl mb-4"
                        >
                            <HiCheck />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-600">
                            Thank you for contacting us. We will get back to you shortly via WhatsApp or Email.
                        </p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="mt-6 btn-primary"
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                            placeholder="John Doe"
                        />
                        {errors.name && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><HiExclamationCircle /> {errors.name.message}</span>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            {...register('phone', {
                                required: 'Phone number is required',
                                pattern: { value: /^[0-9]{10}$/, message: 'Valid 10-digit number required' }
                            })}
                            type="tel"
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                            placeholder="9876543210"
                        />
                        {errors.phone && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><HiExclamationCircle /> {errors.phone.message}</span>}
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                        })}
                        type="email"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                        placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><HiExclamationCircle /> {errors.email.message}</span>}
                </div>

                {/* Service Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                    <select
                        {...register('service', { required: 'Please select a service' })}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all ${errors.service ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                    >
                        <option value="">Select a Service</option>
                        {services.map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Other">Other / General Inquiry</option>
                    </select>
                    {errors.service && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><HiExclamationCircle /> {errors.service.message}</span>}
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                        {...register('message')}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                        placeholder="Tell us more about your requirement..."
                    ></textarea>
                </div>

                {/* File Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Document (Optional)</label>
                    <div className="relative">
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        <label
                            htmlFor="file-upload"
                            className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-all group"
                        >
                            <div className="flex items-center gap-2 text-gray-500 group-hover:text-primary-600">
                                <HiUpload className="text-xl" />
                                <span className="text-sm font-medium">{fileName || "Click to upload file"}</span>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-3 text-lg font-semibold shadow-lg shadow-primary-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                        </div>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

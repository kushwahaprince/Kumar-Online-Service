import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { HiFilter } from 'react-icons/hi';
import { testimonials } from '../data/testimonials';

const Reviews = () => {
    const [filterRating, setFilterRating] = useState(0);

    const filteredReviews = filterRating > 0
        ? testimonials.filter(t => t.rating === filterRating)
        : testimonials;

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
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
                    <p className="text-gray-600">
                        Read what our valued customers have to say about our services.
                        Your satisfaction is our priority.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex items-center justify-center gap-4 mb-10 flex-wrap">
                    <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <HiFilter /> Filter by rating:
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilterRating(0)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterRating === 0 ? 'bg-primary-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            All
                        </button>
                        {[5, 4, 3].map(rating => (
                            <button
                                key={rating}
                                onClick={() => setFilterRating(rating)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${filterRating === rating ? 'bg-primary-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {rating} <FaStar className="text-yellow-400" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Reviews Grid */}
                {filteredReviews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredReviews.map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                        {review.initials}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{review.name}</h3>
                                        <div className="flex gap-1 text-yellow-400 my-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} size={14} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    "{review.text}"
                                </p>

                                <span className="text-xs text-gray-400">{review.date}</span>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        <p>No reviews found with {filterRating} stars.</p>
                        <button
                            onClick={() => setFilterRating(0)}
                            className="text-primary-600 hover:underline mt-2"
                        >
                            Clear filter
                        </button>
                    </div>
                )}

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Share Your Experience
                    </h2>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                        We value your feedback! If you've used our services, we'd love to hear from you.
                        Your review helps us improve and helps others make informed decisions.
                    </p>
                    <a href="mailto:kushwahaprince199@gmail.com" className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                        Write a Review
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Reviews;

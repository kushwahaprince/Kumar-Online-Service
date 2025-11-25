import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();

    // Check if we are on auth pages to potentially hide navbar/footer if desired
    // For now, we keep them everywhere as per standard design

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;

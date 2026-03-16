import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LanguageTransition from '../LanguageTransition';

const WHATSAPP_NUMBER = '918885072259';

const Layout = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="app-wrapper">
            <LanguageTransition />
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />

            {/* WhatsApp Floating Button */}
            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="float-whatsapp"
                aria-label="Chat on WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white">
                    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.737 5.47 2.027 7.774L0 32l8.437-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.853l-.485-.29-5.01 1.194 1.25-4.877-.317-.5A13.26 13.26 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.307-9.907c-.4-.2-2.364-1.167-2.73-1.3-.367-.133-.633-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.687-.623-3.213-1.98-1.187-1.057-1.99-2.363-2.223-2.763-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.767-.013a1.474 1.474 0 00-1.067.5c-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.04.955.413 1.7.66 2.28.845.958.305 1.83.262 2.52.159.769-.115 2.364-.967 2.697-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
                </svg>
            </a>

            {/* Scroll to Top Button */}
            <button
                className={`float-scroll-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </button>

            <style dangerouslySetInnerHTML={{
                __html: `
        .app-wrapper { display: flex; flex-direction: column; min-height: 100vh; }
        .main-content { flex: 1; }

        /* WhatsApp Float */
        .float-whatsapp {
            position: fixed;
            bottom: 90px;
            right: 28px;
            width: 58px;
            height: 58px;
            background: #25D366;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 6px 20px rgba(37,211,102,0.45);
            z-index: 9999;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: wa-pulse 2.5s infinite;
        }
        .float-whatsapp:hover {
            transform: scale(1.12);
            box-shadow: 0 10px 30px rgba(37,211,102,0.6);
            animation: none;
        }
        @keyframes wa-pulse {
            0%, 100% { box-shadow: 0 6px 20px rgba(37,211,102,0.45); }
            50% { box-shadow: 0 6px 30px rgba(37,211,102,0.75), 0 0 0 10px rgba(37,211,102,0.1); }
        }

        /* Scroll-to-Top Float */
        .float-scroll-top {
            position: fixed;
            bottom: 28px;
            right: 28px;
            width: 58px;
            height: 58px;
            background: #fe7623;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 6px 20px rgba(254,118,35,0.4);
            z-index: 9999;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.35s ease, transform 0.35s ease, box-shadow 0.3s ease;
            pointer-events: none;
        }
        .float-scroll-top.visible {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }
        .float-scroll-top:hover {
            box-shadow: 0 10px 28px rgba(254,118,35,0.6);
            transform: translateY(-3px);
        }
      `}} />
        </div>
    );
};

export default Layout;


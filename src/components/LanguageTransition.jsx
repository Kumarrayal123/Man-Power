import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assest/logo.png';

const LanguageTransition = () => {
    const { isChanging } = useLanguage();

    if (!isChanging) return null;

    return (
        <div className="language-transition-overlay">
            <div className="transition-content">
                <img src={logo} alt="Logo" className="transition-logo" />
                <div className="transition-loader"></div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .language-transition-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #ffffff;
                    z-index: 99999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.3s ease-out;
                }

                .transition-content {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 30px;
                }

                .transition-logo {
                    height: 100px;
                    width: auto;
                    animation: logoPulse 1.5s ease-in-out infinite;
                }

                .transition-loader {
                    width: 50px;
                    height: 3px;
                    background: #f0f0f0;
                    position: relative;
                    overflow: hidden;
                    border-radius: 10px;
                }

                .transition-loader::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: var(--color-primary, #FE7622);
                    animation: loaderSlide 2s linear infinite;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes logoPulse {
                    0%, 100% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.05); opacity: 1; }
                }

                @keyframes loaderSlide {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
            `}} />
        </div>
    );
};

export default LanguageTransition;

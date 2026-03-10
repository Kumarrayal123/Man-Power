import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../assest/logo.png';


const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Info */}
                    <div className="footer-col brand">
                        <Link to="/" className="footer-logo-link">
                            <img src={logo} alt="Manpower Logo" className="footer-logo-img" />
                        </Link>

                        <p>Providing premium manpower solutions since 2003. We are leaders in recruitment, staffing, and HR outsourcing in the India.</p>
                        <div className="social-links">
                            <a href="#"><Facebook size={18} /></a>
                            <a href="#"><Instagram size={18} /></a>
                            <a href="#"><Linkedin size={18} /></a>
                            <a href="#"><Youtube size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-title">Our Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/manpower-supply">Manpower Supply</Link></li>
                            <li><Link to="/recruitment">Recruitment</Link></li>
                            <li><Link to="/contract-staffing">Contract Staffing</Link></li>
                            <li><Link to="/executive-search">Executive Search</Link></li>
                            <li><Link to="/hr-outsourcing">HR Outsourcing</Link></li>
                        </ul>
                    </div>

                    {/* Sectors */}
                    <div className="footer-col">
                        <h4 className="footer-title">Sectors</h4>
                        <ul className="footer-links">
                            <li><Link to="/oil-gas">Oil & Gas</Link></li>
                            <li><Link to="/oil-gas">Civil Construction</Link></li>
                            <li><Link to="/oil-gas">Infrastructure</Link></li>
                            <li><Link to="/oil-gas">MEP Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} />
                                <span>Hyderabad</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <a href="tel:8885072259">8885072259</a>
                            </li>
                            <li>
                                <Mail size={18} />
                                <a href="mailto:info@smaarelysium.com">info@smaarelysium.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <p>&copy; {new Date().getFullYear()} Smaar Elysium. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="https://thepatternscompany.com/" target="_blank" rel="noreferrer">Designed by The Patterns Company</a>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .site-footer { background: #1a1d21; color: #adb5bd; padding-top: 80px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 40px; margin-bottom: 60px; }
        
        .footer-logo-link { display: block; margin-bottom: 25px; }
        .footer-logo-img { height: 70px; width: auto; filter: brightness(0) invert(1); }
        .footer-col.brand p { line-height: 1.8; margin-bottom: 25px; }

        
        .social-links { display: flex; gap: 10px; }
        .social-links a { width: 36px; height: 36px; background: #2a2e34; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; transition: 0.3s; }
        .social-links a:hover { background: var(--color-primary); }
        
        .footer-title { color: white; font-size: 1.1rem; margin-bottom: 25px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .footer-links li { margin-bottom: 12px; }
        .footer-links a:hover { color: var(--color-primary); padding-left: 5px; }
        
        .footer-contact li { display: flex; gap: 15px; margin-bottom: 20px; line-height: 1.6; }
        .footer-contact i, .footer-contact svg { color: var(--color-primary); flex-shrink: 0; }
        .footer-contact span, .footer-contact a { color: #adb5bd; }
        
        .footer-bottom { background: #fe7623; border-top: 1px solid #2a2e34; font-size: 0.85rem; color: #fff; width: 100%; }
        .footer-bottom-inner { max-width: 1200px; margin: 0 auto; padding: 25px 40px; display: flex; justify-content: space-between; align-items: center; }
        .footer-bottom-links a { margin-left: 20px; }
        .footer-bottom-links a:hover { color: white; }
        
        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; text-align: center; gap: 15px; }
        }
      `}} />
        </footer>
    );
};

export default Footer;

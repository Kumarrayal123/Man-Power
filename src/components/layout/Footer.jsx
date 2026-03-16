import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assest/logo.png';


const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Info */}
                    <div className="footer-col brand">
                        <Link to="/" className="footer-logo-link">
                            <img src={logo} alt="Manpower Logo" className="footer-logo-img" />
                        </Link>

                        <p>{t.footerDesc}</p>
                        <div className="social-links">
                            <a href="#"><Facebook size={18} /></a>
                            <a href="#"><Instagram size={18} /></a>
                            <a href="#"><Linkedin size={18} /></a>
                            <a href="#"><Youtube size={18} /></a>
                        </div>
                    </div>

                    {/* Sectors */}
                    <div className="footer-col">
                        <h4 className="footer-title">{t.sectorsTitle}</h4>
                        <ul className="footer-links">
                            <li><Link to="/building-contract">{t.building}</Link></li>
                            <li><Link to="/railway-contract">{t.railway}</Link></li>
                            <li><Link to="/steel-construction">{t.steel}</Link></li>
                            <li><Link to="/electric-mechanic">{t.electric}</Link></li>
                            <li><Link to="/oil-gas">{t.oilGas}</Link></li>
                            <li><Link to="/civil-construction">{t.civil}</Link></li>
                            <li><Link to="/facility-management">{t.facility}</Link></li>
                            <li><Link to="/logistics">{t.logistics}</Link></li>
                            <li><Link to="/manufacture">{t.manufacture}</Link></li>
                            <li><Link to="/mep">{t.mepSolutions}</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-title">{t.services}</h4>
                        <ul className="footer-links">
                            <li><Link to="/">{t.supply}</Link></li>
                            <li><Link to="/recruitment">{t.recruitment}</Link></li>
                            <li><Link to="/contract-staffing">{t.staffing}</Link></li>
                            <li><Link to="/executive-search">{t.search}</Link></li>
                            <li><Link to="/hr-outsourcing">{t.outsourcing}</Link></li>
                            <li><Link to="/security-solutions">{t.security}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4 className="footer-title">{t.contactUs}</h4>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} />
                                <span>{t.dubai}</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <a href="tel:8885072259">{t.phone}</a>
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
                    <p>&copy; {new Date().getFullYear()} Smaar Elysium. {t.rightsReserved}</p>
                    <div className="footer-bottom-links">
                        <a href="https://thepatternscompany.com/" target="_blank" rel="noreferrer">{t.designedBy}</a>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .site-footer { background: #fff; color: #000000; padding-top: 80px;border-top: 1px solid #000000; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 40px; margin-bottom: 60px; }
        
        .footer-logo-link { display: block; margin-bottom: 25px; }
        .footer-logo-img { height: 70px; width: auto; 
        // filter: brightness(0) invert(1); 
        }
        .footer-col.brand p { line-height: 1.8; margin-bottom: 25px; }

        
        .social-links { display: flex; gap: 10px; }
        .social-links a { width: 36px; height: 36px; background: #2a2e34; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; transition: 0.3s; }
        .social-links a:hover { background: var(--color-primary); }
        
        .footer-title { color: #000000; font-size: 1.1rem; margin-bottom: 25px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .footer-links li { margin-bottom: 12px; }
        .footer-links a:hover { color: var(--color-primary); padding-left: 5px; }
        
        .footer-contact li { display: flex; gap: 15px; margin-bottom: 20px; line-height: 1.6; }
        .footer-contact i, .footer-contact svg { color: var(--color-primary); flex-shrink: 0; }
        .footer-contact span, .footer-contact a { color: #000000; }
        
        .footer-bottom { background: #fe7623; border-top: 1px solid #2a2e34; font-size: 0.85rem; color: #fff; width: 100%; }
        .footer-bottom-inner { max-width: 1200px; margin: 0 auto; padding: 25px 40px; display: flex; justify-content: space-between; align-items: center; }
        .footer-bottom-links a { margin-left: 20px;color:#fff; }
        .footer-bottom-links a:hover { color: white; }
        
        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
          .footer-col.brand, .footer-col:last-child { grid-column: 1 / -1; }
          .footer-bottom-inner { flex-direction: column; text-align: center; gap: 10px; padding: 20px; }
          .footer-bottom-links a { margin-left: 0; }
          .footer-logo-img { height: 55px; }
          .site-footer { padding-top: 50px; }
        }
      `}} />
        </footer>
    );
};

export default Footer;

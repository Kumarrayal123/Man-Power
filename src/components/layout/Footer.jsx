import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assest/logo.png';

const SocialIcon = ({ d, size = 18 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
    >
        <path d={d} />
    </svg>
);

const FacebookIcon = (props) => (
    <SocialIcon {...props} d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
);

const InstagramIcon = (props) => (
    <SocialIcon {...props} d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
);

const XIcon = (props) => (
    <SocialIcon {...props} d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
);

const LinkedInIcon = (props) => (
    <SocialIcon {...props} d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
);

const YouTubeIcon = (props) => (
    <SocialIcon {...props} d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
);

const PinterestIcon = (props) => (
    <SocialIcon {...props} d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.945-.199-2.395.042-3.427.218-.924 1.4-5.932 1.4-5.932s-.358-.714-.358-1.77c0-1.658.962-2.896 2.157-2.896 1.017 0 1.508.763 1.508 1.678 0 1.022-.65 2.551-.986 3.97-.282 1.186.594 2.153 1.765 2.153 2.119 0 3.748-2.235 3.748-5.459 0-2.854-2.05-4.85-4.978-4.85-3.39 0-5.38 2.541-5.38 5.172 0 1.024.394 2.125.887 2.723.097.117.111.22.081.341-.09.37-.291 1.186-.33 1.35-.053.218-.173.264-.398.158-1.487-.692-2.417-2.868-2.417-4.615 0-3.759 2.73-7.213 7.876-7.213 4.135 0 7.348 2.945 7.348 6.883 0 4.108-2.59 7.414-6.183 7.414-1.207 0-2.343-.627-2.731-1.369l-.744 2.828c-.269 1.023-.996 2.306-1.482 3.097a12.012 12.012 0 0 0 3.393.486c6.621 0 11.988-5.366 11.988-11.987C24.005 5.367 18.638 0 12.017 0z" />
);


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
                            <a href="https://www.facebook.com/profile.php?id=61583625191720" target="_blank" rel="noreferrer"><FacebookIcon size={18} /></a>
                            <a href="https://www.instagram.com/smaarelysium/" target="_blank" rel="noreferrer"><InstagramIcon size={18} /></a>
                            <a href="https://x.com/SmaarElysium" target="_blank" rel="noreferrer"><XIcon size={18} /></a>
                            <a href="https://www.linkedin.com/company/smaar-elysium/?viewAsMember=true" target="_blank" rel="noreferrer"><LinkedInIcon size={18} /></a>
                            <a href="https://youtube.com/@smaarelysium?si=FkO5NgN9mSdXo6Cl" target="_blank" rel="noreferrer"><YouTubeIcon size={18} /></a>
                            <a href="https://www.pinterest.com/smaarelysium/" target="_blank" rel="noreferrer"><PinterestIcon size={18} /></a>
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
    .site-footer { background: #fff; color: #000000; padding-top: 80px; border-top: 1px solid #000000; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 40px; margin-bottom: 60px; }
        
        .footer-logo-link { display: block; margin-bottom: 25px; }
        .footer-logo-img {
    height: 70px; width: auto;
    /* filter: brightness(0) invert(1); */
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
        .footer-bottom-links a { margin-left: 20px; color: #fff; }
        .footer-bottom-links a:hover { color: white; }

@media(max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
}
@media(max-width: 600px) {
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

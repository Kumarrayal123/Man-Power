import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown, Languages } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assest/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null); // 'services' | 'sectors' | null
    const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'sectors' | 'language' | null
    const { language, setLanguage, t } = useLanguage();
    const location = useLocation();
    const navRef = useRef(null);
    const langRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setMobileDropdown(null);
        setActiveDropdown(null);
    }, [location]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target) &&
                langRef.current && !langRef.current.contains(e.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDesktopDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    const toggleMobileDropdown = (menu) => {
        setMobileDropdown(mobileDropdown === menu ? null : menu);
    };

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setActiveDropdown(null);
    };


    return (
        <>
            {/* Top Info Bar - Now White with Light Border */}
            <div className="info-bar">
                <div className="container info-bar__inner">
                    <div className="info-bar__contact">
                        <nav className="info-bar__links">
                            <Link to="/about">{t.aboutUs}</Link>
                            <Link to="/projects">{t.projects}</Link>
                            {/* <Link to="/clients">Clients</Link>
                            <Link to="/insights">Insights</Link> */}
                        </nav>
                        <div className="info-bar__separator"></div>
                        <a href="tel:8885072259"><Phone size={14} className="icon-red" /> {t.phone}</a>
                        <a href="mailto:info@smaarelysium.com"><Mail size={14} className="icon-red" /> {t.email}</a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container site-header__inner">
                    <Link to="/" className="site-header__logo">
                        <img src={logo} alt="Manpower Logo" className="header-logo-img" />
                    </Link>


                    {/* Desktop Nav - 18px font size */}
                    <nav className="main-nav" ref={navRef}>
                        <ul className="main-nav__list">
                            <li className={`main-nav__item has-dropdown ${activeDropdown === 'services' ? 'dropdown-open' : ''}`}>
                                <span className="nav-dropdown-trigger" onClick={() => toggleDesktopDropdown('services')}>{t.services} <ChevronDown size={14} className={`dropdown-chevron ${activeDropdown === 'services' ? 'rotated' : ''}`} /></span>
                                <ul className="dropdown">
                                    <li><Link to="/" onClick={closeDropdown}>{t.supply}</Link></li>
                                    <li><Link to="/recruitment" onClick={closeDropdown}>{t.recruitment}</Link></li>
                                    <li><Link to="/contract-staffing" onClick={closeDropdown}>{t.staffing}</Link></li>
                                    <li><Link to="/executive-search" onClick={closeDropdown}>{t.search}</Link></li>
                                    <li><Link to="/hr-outsourcing" onClick={closeDropdown}>{t.outsourcing}</Link></li>
                                    <li><Link to="/security-solutions" onClick={closeDropdown}>{t.security}</Link></li>
                                </ul>
                            </li>
                            <li className={`main-nav__item has-dropdown ${activeDropdown === 'sectors' ? 'dropdown-open' : ''}`}>
                                <span className="nav-dropdown-trigger" onClick={() => toggleDesktopDropdown('sectors')}>{t.sectors} <ChevronDown size={14} className={`dropdown-chevron ${activeDropdown === 'sectors' ? 'rotated' : ''}`} /></span>
                                <ul className="dropdown">
                                    <li><Link to="/building-contract" onClick={closeDropdown}>{t.building}</Link></li>
                                    <li><Link to="/railway-contract" onClick={closeDropdown}>{t.railway}</Link></li>
                                    <li><Link to="/steel-construction" onClick={closeDropdown}>{t.steel}</Link></li>
                                    <li><Link to="/electric-mechanic" onClick={closeDropdown}>{t.electric}</Link></li>
                                    <li><Link to="/oil-gas" onClick={closeDropdown}>{t.oilGas}</Link></li>
                                    <li><Link to="/civil-construction" onClick={closeDropdown}>{t.civil}</Link></li>
                                    <li><Link to="/facility-management" onClick={closeDropdown}>{t.facility}</Link></li>
                                    {/* <li><Link to="/oil-gas">Infrastructure</Link></li> */}
                                    <li><Link to="/logistics" onClick={closeDropdown}>{t.logistics}</Link></li>
                                    <li><Link to="/manufacture" onClick={closeDropdown}>{t.manufacture}</Link></li>
                                    <li><Link to="/mep" onClick={closeDropdown}>{t.mep}</Link></li>
                                </ul>
                            </li>
                            <li className="main-nav__item">
                                <Link to="/contact">{t.contactUs}</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="site-header__actions">
                        <div id="google_translate_element" className="google-translate-container"></div>
                        <div className={`lang-dropdown ${activeDropdown === 'language' ? 'active' : ''}`} ref={langRef}>
                            <button
                                className="lang-toggle"
                                onClick={() => toggleDesktopDropdown('language')}
                                aria-expanded={activeDropdown === 'language'}
                                aria-label="Select Language"
                            >
                                <Languages size={18} className="lang-icon" />
                                <span className="lang-text">{language}</span>
                                <ChevronDown size={14} className={`dropdown-chevron ${activeDropdown === 'language' ? 'rotated' : ''}`} />
                            </button>
                            <div className="lang-menu">
                                <button
                                    className={`lang-option ${language === 'EN' ? 'active' : ''}`}
                                    onClick={() => handleLanguageChange('EN')}
                                >
                                    English
                                </button>
                                <button
                                    className={`lang-option ${language === 'AR' ? 'active' : ''}`}
                                    onClick={() => handleLanguageChange('AR')}
                                >
                                    العربية
                                </button>
                            </div>
                        </div>
                        <Link to="/book-manpower" className="nav-bk-btn d-none-mobile">{t.bookManpower}</Link>
                        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="container">
                        <ul className="mobile-menu__list">
                            <li className={`mobile-menu__item ${mobileDropdown === 'services' ? 'active' : ''}`}>
                                <div className="mobile-menu__toggle" onClick={() => toggleMobileDropdown('services')}>
                                    <span>{t.services}</span>
                                    <ChevronDown size={20} className="toggle-icon" />
                                </div>
                                <ul className="mobile-dropdown">
                                    <li><Link to="/">{t.supply}</Link></li>
                                    <li><Link to="/recruitment">{t.recruitment}</Link></li>
                                    <li><Link to="/contract-staffing">{t.staffing}</Link></li>
                                    <li><Link to="/executive-search">{t.search}</Link></li>
                                    <li><Link to="/hr-outsourcing">{t.outsourcing}</Link></li>
                                    <li><Link to="/security-solutions">{t.security}</Link></li>
                                </ul>
                            </li>
                            <li className={`mobile-menu__item ${mobileDropdown === 'sectors' ? 'active' : ''}`}>
                                <div className="mobile-menu__toggle" onClick={() => toggleMobileDropdown('sectors')}>
                                    <span>{t.sectors}</span>
                                    <ChevronDown size={20} className="toggle-icon" />
                                </div>
                                <ul className="mobile-dropdown">
                                    <li><Link to="/building-contract">{t.building}</Link></li>
                                    <li><Link to="/railway-contract">{t.railway}</Link></li>
                                    <li><Link to="/steel-construction">{t.steel}</Link></li>
                                    <li><Link to="/electric-mechanic">{t.electric}</Link></li>
                                    <li><Link to="/oil-gas">{t.oilGas}</Link></li>
                                    <li><Link to="/civil-construction">{t.civil}</Link></li>
                                    <li><Link to="/facility-management">{t.facility}</Link></li>
                                    <li><Link to="/logistics">{t.logistics}</Link></li>
                                    <li><Link to="/manufacture">{t.manufacture}</Link></li>
                                    <li><Link to="/mep">{t.mep}</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/about">{t.aboutUs}</Link></li>
                            <li><Link to="/projects">{t.projects}</Link></li>
                            <li><Link to="/contact">{t.contactUs}</Link></li>
                            <li><Link to="/book-manpower" className="nav-bk-btn" style={{ display: 'inline-flex', width: '100%', justifyContent: 'center', marginTop: '20px' }}>{t.bookManpower}</Link></li>
                        </ul>
                    </div>
                </div>
            </header>

            <style dangerouslySetInnerHTML={{
                __html: `
        .info-bar { background: #ffffff; color: #333; font-size: 0.85rem; padding: 12px 0; border-bottom: 1px solid #f0f0f0; }
        .info-bar__inner { display: flex; justify-content: flex-end; align-items: center; }
        .info-bar__contact { display: flex; align-items: center; gap: 20px; }
        .info-bar__links { display: flex; gap: 15px; margin-right: 20px; }
        .info-bar__links a { font-weight: 500; color: #666; }
        .info-bar__links a:hover { color: var(--color-primary); }
        .info-bar__separator { width: 1px; height: 14px; background: #ddd; margin: 0 5px; }
        .info-bar__contact a { color: #333; display: inline-flex; align-items: center; gap: 6px; font-weight: 600; }
        .icon-red { color: var(--color-primary); }
        
        .site-header { background: #ffffff; position: sticky; top: 0; z-index: 1000; transition: 0.3s; height: 100px; display: flex; align-items: center; border-bottom: 1px solid transparent; }
        .site-header.scrolled { height: 80px; box-shadow: 0 2px 15px rgba(0,0,0,0.08); border-bottom-color: #f0f0f0; }
        .site-header__inner { display: flex; align-items: center; justify-content: space-between; width: 100%; }
        
        .header-logo-img { 
          height: 60px; 
          width: auto; 
          display: block;
          transition: 0.3s;
        }
        .scrolled .header-logo-img { height: 50px; }

        
        .main-nav__list { display: flex; gap: 25px; margin-left: 40px; }
        .main-nav__item { position: relative; }
        .main-nav__item > a, .nav-dropdown-trigger { padding: 10px 0; font-weight: 500; font-size: 18px; color: #000; display: flex; align-items: center; gap: 8px; transition: 0.2s; cursor: pointer; }
        .main-nav__item > a:hover, .nav-dropdown-trigger:hover { color: var(--color-primary); }
        
        .dropdown { position: absolute; top: 100%; left: 0; background: white; min-width: 240px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-top: 3px solid var(--color-primary); opacity: 0; visibility: hidden; transform: translateY(15px); transition: 0.3s; padding: 10px 0; }
        .has-dropdown.dropdown-open .dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
        .dropdown li a { display: block; padding: 12px 25px; font-size: 16px; color: #333; font-weight: 500; transition: 0.3s; }
        .dropdown li a:hover { color: var(--color-primary); background: #fff8f8; padding-left: 30px; }
        .dropdown-chevron { transition: transform 0.3s; }
        .dropdown-chevron.rotated { transform: rotate(180deg); }
        
        .site-header__actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .google-translate-container {
          margin-right: 5px;
        }

        /* Hide the Google Translate attribution/powered by text if desired */
        .goog-logo-link { display: none !important; }
        .goog-te-gadget { color: transparent !important; }
        .goog-te-gadget .goog-te-combo { 
          padding: 8px 12px; 
          border: 1px solid var(--color-primary); 
          border-radius: 50px; 
          font-family: inherit; 
          font-weight: 600; 
          font-size: 14px; 
          color: var(--color-primary);
          background: #ffffff;
          outline: none;
          cursor: pointer;
        }
        .goog-te-gadget .goog-te-combo:hover {
          background: #fff8f5;
        }

        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid var(--color-primary);
          padding: 8px 16px;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: var(--color-primary);
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(254, 118, 34, 0.1);
        }
        
        .lang-toggle:hover {
          background: var(--color-primary);
          color: #fff;
          box-shadow: 0 4px 12px rgba(254, 118, 34, 0.25);
          transform: translateY(-1px);
        }
        
        .lang-toggle:active {
          transform: translateY(0);
        }

        .lang-icon { transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .lang-toggle:hover .lang-icon { transform: rotate(180deg); }
        
        .lang-text {
          min-width: 20px;
          text-align: center;
        }

        @media (max-width: 992px) {
          .site-header__actions { gap: 10px; }
          .lang-toggle { padding: 6px 12px; font-size: 13px; }
        }

        /* Language Dropdown Styles */
        .lang-dropdown {
          position: relative;
        }
        
        .lang-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: #ffffff;
          min-width: 140px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border: 1px solid #f0f0f0;
          margin-top: 10px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1001;
          padding: 8px;
          overflow: hidden;
        }

        .lang-dropdown.active .lang-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .lang-option {
          display: block;
          width: 100%;
          padding: 10px 16px;
          text-align: left;
          background: none;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          color: #444;
          cursor: pointer;
          transition: 0.2s;
        }

        .lang-option:hover {
          background: #fff8f5;
          color: var(--color-primary);
        }

        .lang-option.active {
          background: var(--color-primary);
          color: #ffffff;
        }

        .lang-dropdown.active .lang-toggle {
          background: var(--color-primary);
          color: #fff;
        }
        
        .lang-dropdown.active .lang-toggle .lang-icon {
          transform: rotate(180deg);
        }

        @media (max-width: 480px) {
          .lang-toggle { padding: 5px 10px; }
          .lang-text { font-size: 12px; }
          .site-header__actions { gap: 8px; }
        }

        .nav-bk-btn { 
          background: #ffffff; color: #000; border: 1px solid var(--color-primary); 
          padding: 10px 25px; border-radius: 100px; font-weight: 700; font-size: 15px;
          transition: 0.3s; text-transform: uppercase; letter-spacing: 1px;
        }
        .nav-bk-btn:hover { background: var(--color-primary); color: #fff; box-shadow: 0 5px 15px rgba(254, 118, 34, 0.3); }
        
        .hamburger { display: none; background: none; border: none; cursor: pointer; color: #000; }
        .mobile-menu { position: fixed; top: 80px; left: 0; right: 0; bottom: 0; background: white; z-index: 999; transform: translateX(100%); transition: 0.4s; padding: 40px 0; overflow-y: auto; }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-menu__list { text-align: left; padding: 0 30px; }
        .mobile-menu__list li { margin-bottom: 20px; border-bottom: 1px solid #f5f5f5; padding-bottom: 15px; }
        .mobile-menu__list a, .mobile-menu__toggle { font-size: 1.3rem; font-weight: 700; color: #000; text-decoration: none; cursor: pointer; }
        
        .mobile-menu__toggle { display: flex; justify-content: space-between; align-items: center; }
        .toggle-icon { transition: 0.3s; color: #666; }
        .mobile-menu__item.active .toggle-icon { transform: rotate(180deg); color: var(--color-primary); }
        .mobile-menu__item.active .mobile-menu__toggle span { color: var(--color-primary); }
        
        .mobile-dropdown { max-height: 0; overflow: hidden; transition: 0.4s ease; background: #fafafa; margin: 10px -30px -15px; border-top: 1px solid #eee; }
        .mobile-menu__item.active .mobile-dropdown { max-height: 500px; padding: 15px 30px; }
        .mobile-dropdown li { border-bottom: none; margin-bottom: 10px; padding-bottom: 0; }
        .mobile-dropdown li:last-child { margin-bottom: 0; }
        .mobile-dropdown a { font-size: 1.1rem; font-weight: 500; color: #444; }
        
        @media (max-width: 1100px) {
          .main-nav__list { gap: 15px; margin-left: 20px; }
          .main-nav__item > a, .nav-dropdown-trigger { font-size: 15px; gap: 4px; }
          .nav-bk-btn { padding: 9px 16px; font-size: 13px; letter-spacing: 0.5px; }
          .header-logo-img { height: 50px; }
          .scrolled .header-logo-img { height: 44px; }
          .info-bar__contact { gap: 12px; }
          .info-bar__contact a { font-size: 0.82rem; }
          .info-bar__links a { font-size: 0.82rem; }
        }
        @media (max-width: 992px) {
          .main-nav, .info-bar { display: none; }
          .hamburger { display: block; margin-left: 20px; }
          .d-none-mobile { display: none; }
          .site-header { height: 80px; }
        }
      `}} />
        </>
    );
};

export default Header;

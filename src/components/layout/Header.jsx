import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null); // 'services' | 'sectors' | null
    const location = useLocation();

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
    }, [location]);

    const toggleMobileDropdown = (menu) => {
        setMobileDropdown(mobileDropdown === menu ? null : menu);
    };

    return (
        <>
            {/* Top Info Bar - Now White with Light Border */}
            <div className="info-bar">
                <div className="container info-bar__inner">
                    <div className="info-bar__contact">
                        <nav className="info-bar__links">
                            <Link to="/about">About us</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/clients">Clients</Link>
                            <Link to="/insights">Insights</Link>
                        </nav>
                        <div className="info-bar__separator"></div>
                        <a href="tel:+97142632006"><Phone size={14} className="icon-red" /> +971 4 2632006</a>
                        <a href="tel:0558777717"><Phone size={14} className="icon-red" /> 055 - 8777717</a>
                        <a href="mailto:info@manpower.ae"><Mail size={14} className="icon-red" /> info@manpower.ae</a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container site-header__inner">
                    <Link to="/" className="site-header__logo">
                        <div className="logo-text">
                            <span className="logo-main">manpower</span>
                            <div className="logo-slogan">ANY WORK. OUR MANPOWER!</div>
                        </div>
                    </Link>

                    {/* Desktop Nav - 18px font size */}
                    <nav className="main-nav">
                        <ul className="main-nav__list">
                            <li className="main-nav__item has-dropdown">
                                <Link to="/services">Manpower Services <ChevronDown size={14} /></Link>
                                <ul className="dropdown">
                                    <li><Link to="/">Manpower Supply</Link></li>
                                    <li><Link to="/recruitment">Recruitment</Link></li>
                                    <li><Link to="/contract-staffing">Contract Staffing</Link></li>
                                    <li><Link to="/executive-search">Executive Search</Link></li>
                                    <li><Link to="/hr-outsourcing">HR Outsourcing</Link></li>
                                    <li><Link to="/security-solutions">Security Solutions</Link></li>
                                </ul>
                            </li>
                            <li className="main-nav__item has-dropdown">
                                <Link to="/sectors">Sectors We Serve <ChevronDown size={14} /></Link>
                                <ul className="dropdown">
                                    <li><Link to="/oil-gas">Oil and Gas</Link></li>
                                    <li><Link to="/civil-construction">Civil Construction</Link></li>
                                    <li><Link to="/facility-management">Facility Management</Link></li>
                                    {/* <li><Link to="/oil-gas">Infrastructure</Link></li> */}
                                    <li><Link to="/logistics">Logistics</Link></li>
                                    <li><Link to="/manufacture">Manufacture</Link></li>
                                    <li><Link to="/mep">Mechanical, Electrical & Plumbing- MEP</Link></li>
                                </ul>
                            </li>
                            <li className="main-nav__item">
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="site-header__actions">
                        <Link to="/contact" className="nav-bk-btn d-none-mobile">BOOK MANPOWER</Link>
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
                                    <span>Manpower Services</span>
                                    <ChevronDown size={20} className="toggle-icon" />
                                </div>
                                <ul className="mobile-dropdown">
                                    <li><Link to="/">Manpower Supply</Link></li>
                                    <li><Link to="/recruitment">Recruitment</Link></li>
                                    <li><Link to="/contract-staffing">Contract Staffing</Link></li>
                                    <li><Link to="/executive-search">Executive Search</Link></li>
                                    <li><Link to="/hr-outsourcing">HR Outsourcing</Link></li>
                                    <li><Link to="/security-solutions">Security Solutions</Link></li>
                                </ul>
                            </li>
                            <li className={`mobile-menu__item ${mobileDropdown === 'sectors' ? 'active' : ''}`}>
                                <div className="mobile-menu__toggle" onClick={() => toggleMobileDropdown('sectors')}>
                                    <span>Sectors We Serve</span>
                                    <ChevronDown size={20} className="toggle-icon" />
                                </div>
                                <ul className="mobile-dropdown">
                                    <li><Link to="/oil-gas">Oil and Gas</Link></li>
                                    <li><Link to="/civil-construction">Civil Construction</Link></li>
                                    <li><Link to="/facility-management">Facility Management</Link></li>
                                    <li><Link to="/logistics">Logistics</Link></li>
                                    <li><Link to="/manufacture">Manufacture</Link></li>
                                    <li><Link to="/mep">Mechanical, Electrical & Plumbing- MEP</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/book-manpower" className="nav-bk-btn" style={{ display: 'inline-flex', width: '100%', justifyContent: 'center', marginTop: '20px' }}>BOOK MANPOWER</Link></li>
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
        
        .logo-text { display: flex; flex-direction: column; line-height: 1; }
        .logo-main { font-weight: 900; font-size: 1.8rem; color: #000; text-transform: lowercase; letter-spacing: -1px; }
        .logo-sub { color: var(--color-primary); font-weight: 900; font-size: 1.8rem; text-transform: lowercase; letter-spacing: -1px; margin-top: -5px; }
        .logo-slogan { font-size: 0.55rem; font-weight: 800; color: var(--color-primary); letter-spacing: 0.5px; margin-top: 2px; }
        
        .main-nav__list { display: flex; gap: 25px; margin-left: 40px; }
        .main-nav__item { position: relative; }
        .main-nav__item > a { padding: 10px 0; font-weight: 500; font-size: 18px; color: #000; display: flex; align-items: center; gap: 8px; transition: 0.2s; }
        .main-nav__item > a:hover { color: var(--color-primary); }
        
        .dropdown { position: absolute; top: 100%; left: 0; background: white; min-width: 240px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-top: 3px solid var(--color-primary); opacity: 0; visibility: hidden; transform: translateY(15px); transition: 0.3s; padding: 10px 0; }
        .has-dropdown:hover .dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
        .dropdown li a { display: block; padding: 12px 25px; font-size: 16px; color: #333; font-weight: 500; transition: 0.3s; }
        .dropdown li a:hover { color: var(--color-primary); background: #fff8f8; padding-left: 30px; }
        
        .nav-bk-btn { 
          background: #ffffff; color: #000; border: 1px solid var(--color-primary); 
          padding: 10px 25px; border-radius: 100px; font-weight: 700; font-size: 15px;
          transition: 0.3s; text-transform: uppercase; letter-spacing: 1px;
        }
        .nav-bk-btn:hover { background: var(--color-primary); color: #fff; box-shadow: 0 5px 15px rgba(242, 51, 70, 0.3); }
        
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

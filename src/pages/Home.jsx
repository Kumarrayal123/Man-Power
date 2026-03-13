import React, { useState, useEffect, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { ArrowRight, Construction, Hammer, Shield, Users, Briefcase, BarChart, Droplet, Sparkles, LayoutGrid, MonitorCheck, Contact, Zap as ZapIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import img5 from "../assest/mp-5.jpg";
import img6 from "../assest/mp-6.jpg";
import img7 from "../assest/mp-7.jpg";
import Mechanical from "../assest/mechanical.jfif";
import Facility from "../assest/Facility.jfif";
import Logistics from "../assest/Logistics.jfif";
import heroImage from "../assest/manpower-supply-meadia/homepagehero.png";
import msHero from "../assest/manpower-supply-meadia/manpower-supply-hero.png";
import rcHero from "../assest/manpower-supply-meadia/recruitment-hero.png";
import csHero from "../assest/manpower-supply-meadia/contract-staffing-hero.png";
import esHero from "../assest/manpower-supply-meadia/executive-search-hero.png";
import hrHero from "../assest/manpower-supply-meadia/hr-hero.png";
import ssHero from "../assest/manpower-supply-meadia/security-solutions-hero.png";
import heroVideo from "../assest/manpower-supply-meadia/herovideo.mp4";
import quoteHero from "../assest/manpower-supply-meadia/quote_section_architecture.png";

// Custom hook for counting animation when in view
const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    let startTimestamp = null;
                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                        // easeOutQuart easing function for smooth deceleration
                        const easeOut = 1 - Math.pow(1 - progress, 4);
                        setCount(Math.floor(easeOut * end));

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setHasAnimated(true);
                        }
                    };
                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return { count, countRef };
};

const Counter = ({ end, suffix = "", duration = 2000 }) => {
    const { count, countRef } = useCountUp(end, duration);
    return (
        <span ref={countRef} className="journey-num">
            {count}{suffix}
        </span>
    );
};

const Home = () => {
    const { t } = useLanguage();
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: t.faq1Q,
            answer: t.faq1A
        },
        {
            question: t.faq2Q,
            answer: t.faq2A
        },
        {
            question: t.faq3Q,
            answer: t.faq3A
        }
    ];

    const homeFaqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
    };

    return (
        <div className="home-page">
            <SEOHead
                title={t.homeSEOTitle}
                description={t.homeSEODesc}
                keywords="manpower supply UAE, staffing solutions Dubai, recruitment agency UAE, HR outsourcing Middle East"
                canonical="https://www.smaarelysium.com"
                schema={homeFaqSchema}
            />
            <div className="container hero-wrapper">
                {/* Hero Section - Refined to match Smaar Elysium */}
                <section className="home-hero video-slide">
                    {/* Video Background */}
                    <div className="hero-video-container active">
                        <video src={heroVideo} autoPlay loop muted playsInline className="hero-video-bg" />
                        <div className="hero-video-overlay"></div>
                    </div>

                    <div className="home-hero__content">
                        <h1 className="home-hero__title">{t.heroTitle}</h1>
                        <p className="home-hero__text">{t.heroText}</p>
                        <div className="home-hero__actions">
                            <Link to="/contact" className="hero-btn-main">{t.bookNow}</Link>
                        </div>
                    </div>
                </section>
            </div>

            {/* Services Grid */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t.expertise}</span>
                        <h2 className="section-title">{t.compStaffing}</h2>
                    </div>

                    <div className="featured-services-grid">
                        {[
                            {
                                title: t.supply,
                                img: msHero,
                                link: "/"
                            },
                            {
                                title: t.recruitment,
                                img: rcHero,
                                link: "/recruitment"
                            },
                            {
                                title: t.staffing,
                                img: csHero,
                                link: "/contract-staffing"
                            },
                            {
                                title: t.search,
                                img: esHero,
                                link: "/executive-search"
                            },
                            {
                                title: t.outsourcing,
                                img: hrHero,
                                link: "/hr-outsourcing"
                            },
                            {
                                title: t.security,
                                img: ssHero,
                                link: "/security-solutions"
                            }
                        ].map((service, i) => (
                            <Link to={service.link} key={i} className="featured-service-card">
                                <img src={service.img} alt={service.title} className="fs-card-bg" />
                                <div className="fs-card-overlay">
                                    <h3 className="fs-card-title">{service.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manpower Supply Services Section */}
            <section className="supply-services-section">
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '40px' }}>
                        <h2 className="section-title">{t.supplyInDubai}</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#555', fontSize: '1.1rem' }}>{t.supplyDesc}</p>
                    </div>

                    <div className="supply-grid-container">
                        {[
                            { title: t.civilSupply, desc: t.civilSupplyDesc, icon: <Construction size={48} strokeWidth={1.2} />, link: "/services/civil-manpower" },
                            { title: t.mechSupply, desc: t.mechSupplyDesc, icon: <Hammer size={48} strokeWidth={1.2} />, link: "/services/mechanical-manpower" },
                            { title: t.elecSupply, desc: t.elecSupplyDesc, icon: <ZapIcon size={48} />, link: "/services/electrical-manpower" },
                            { title: t.plumbSupply, desc: t.plumbSupplyDesc, icon: <Droplet size={48} strokeWidth={1.2} />, link: "/services/plumbing-manpower" },
                            { title: t.helperSupply, desc: t.helperSupplyDesc, icon: <Users size={48} strokeWidth={1.2} />, link: "/services/helper-manpower" },
                            { title: t.cleaningSupply, desc: t.cleaningSupplyDesc, icon: <Sparkles size={48} strokeWidth={1.2} />, link: "/services/cleaning-manpower" }
                        ].map((item, i) => (
                            <div key={i} className="supply-card">
                                <div className="supply-card-icon">{item.icon}</div>
                                <h3 className="supply-card-title">{item.title}</h3>
                                <p className="supply-card-desc">{item.desc}</p>
                                {/* <Link to={item.link} className="supply-card-link">Read More <ArrowRight size={18} /></Link> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Book Manpower Banner Section */}
            <section className="book-banner-section">
                <div className="container">
                    <div className="book-banner-inner">
                        <div className="book-banner-header">
                            <h2>{t.seamlessAcq}</h2>
                            <p>{t.seamlessAcqDesc}</p>
                        </div>

                        <div className="book-steps-grid">
                            <div className="book-step">
                                <div className="book-step-icon-wrapper">
                                    <div className="book-step-icon">
                                        <LayoutGrid strokeWidth={1.5} size={32} color="#FE7622" />
                                    </div>
                                    <span className="book-step-badge">1</span>
                                </div>
                                <h3>{t.idReq}</h3>
                                <p>{t.idReqDesc}</p>
                            </div>

                            <div className="book-step">
                                <div className="book-step-icon-wrapper">
                                    <div className="book-step-icon">
                                        <MonitorCheck strokeWidth={1.5} size={32} color="#FE7622" />
                                    </div>
                                    <span className="book-step-badge">2</span>
                                </div>
                                <h3>{t.specVolume}</h3>
                                <p>{t.specVolumeDesc}</p>
                            </div>

                            <div className="book-step">
                                <div className="book-step-icon-wrapper">
                                    <div className="book-step-icon">
                                        <Contact strokeWidth={1.5} size={32} color="#FE7622" />
                                    </div>
                                    <span className="book-step-badge">3</span>
                                </div>
                                <h3>{t.mobilize}</h3>
                                <p>{t.mobilizeDesc}</p>
                            </div>
                        </div>

                        <div className="book-banner-action">
                            <Link to="/contact" className="book-banner-btn">{t.bookNow}</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Section / Counters */}
            <section className="journey-section">
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '40px' }}>
                        <h2 className="section-title" style={{ color: '#666', fontWeight: '500' }}>{t.opImpact}</h2>
                    </div>
                    <div className="journey-grid-container">
                        <div className="journey-grid">
                            <div className="journey-item">
                                <Counter end={100} suffix="+" duration={2000} />
                                <h3 className="journey-label">{t.activeDeploy}</h3>
                                <p className="journey-desc">{t.activeDeployDesc}</p>
                            </div>
                            <div className="journey-item">
                                <Counter end={100} suffix="+" duration={2000} />
                                <h3 className="journey-label">{t.partnerOrg}</h3>
                                <p className="journey-desc">{t.partnerOrgDesc}</p>
                            </div>
                            <div className="journey-item">
                                <Counter end={100} suffix="+" duration={2000} />
                                <h3 className="journey-label">{t.projDelivered}</h3>
                                <p className="journey-desc">{t.projDeliveredDesc}</p>
                            </div>
                            <div className="journey-item">
                                <Counter end={1000} suffix="+" duration={2500} />
                                <h3 className="journey-label">{t.profDeployed}</h3>
                                <p className="journey-desc">{t.profDeployedDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Area Section */}
            <section className="core-area-section">
                <div className="container">
                    <div className="core-area-header">
                        <h2 className="core-area-title">{t.indEmpower}</h2>
                        <p className="core-area-desc">{t.indEmpowerDesc}</p>
                    </div>

                    <div className="core-area-grid">
                        {/* Top row - large blocks */}
                        <Link to="/oil-gas" className="core-area-item large">
                            <img src={img5} alt="Oil & Gas" className="core-area-img" />
                            <div className="core-area-overlay">
                                <h3 className="core-area-item-title">Oil &amp; Gas</h3>
                            </div>
                        </Link>
                        <Link to="/oil-gas" className="core-area-item large">
                            <img src={img6} alt="Civil Construction" className="core-area-img" />
                            <div className="core-area-overlay">
                                <h3 className="core-area-item-title">{t.civil}</h3>
                            </div>
                        </Link>

                        {/* Bottom row - small blocks */}
                        <Link to="/oil-gas" className="core-area-item small">
                            <img src={Logistics} alt="Logistics" className="core-area-img" />
                            <div className="core-area-overlay">
                                <h3 className="core-area-item-title">{t.logistics}</h3>
                            </div>
                        </Link>
                        <Link to="/oil-gas" className="core-area-item small">
                            <img src={img7} alt="Manufacture" className="core-area-img" />
                            <div className="core-area-overlay">
                                <h3 className="core-area-item-title">{t.manufacture}</h3>
                            </div>
                        </Link>
                        <Link to="/oil-gas" className="core-area-item small">
                            <img src={Facility} alt="Facility Management" className="core-area-img" />
                            <div className="core-area-overlay">
                                <h3 className="core-area-item-title">{t.facility}</h3>
                            </div>
                        </Link>
                        <Link to="/oil-gas" className="core-area-item small">
                            <img src={Mechanical} alt="Mechanical, Electrical & Plumbing - MEP" className="core-area-img" />
                            <div className="core-area-overlay">
                                <h3 className="core-area-item-title">{t.mep}</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>



            {/* Request a Quote Section */}
            <section className="quote-section">
                <div className="container">
                    <div className="quote-wrapper">
                        <div className="quote-image-side">
                            <img src={quoteHero} alt="Strategic Partnership Architecture" />
                        </div>
                        <div className="quote-form-side">
                            <span className="quote-label">{t.stratPartner}</span>
                            <h2 className="quote-title">{t.accelProj}</h2>
                            <p className="quote-desc">{t.accelProjDesc}</p>

                            <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-row">
                                    <input type="text" placeholder={t.enterName} required />
                                    <input type="email" placeholder={t.enterEmail} required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder={t.phoneNum} required />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder={t.comments} rows="4"></textarea>
                                </div>



                                <button type="submit" className="quote-submit-btn">{t.bookNow}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="faq-main-title">{t.faqTitle}</h2>
                    <p className="faq-subtitle">{t.faqSubtitle}</p>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                                <div
                                    className="faq-question-btn"
                                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                >
                                    <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                                    <span className="faq-question-text">{faq.question}</span>
                                </div>
                                <div className="faq-answer-container" style={{ maxHeight: openFaq === index ? '300px' : '0' }}>
                                    <div className="faq-answer-content">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <style dangerouslySetInnerHTML={{
                __html: `
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        .home-hero { 
            background: var(--color-primary); 
            border-radius: 40px; 
            color: white; 
            padding: 80px 100px; 
            display: flex; 
            align-items: center; 
            justify-content: space-between;
            position: relative;
            overflow: hidden;
            min-height: 500px;
        }
        .home-hero.video-slide { background: var(--color-dark); }
        .hero-video-container {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 1;
            opacity: 1;
            visibility: visible;
        }
        .hero-video-bg {
            width: 100%; height: 100%; object-fit: cover;
        }
        .hero-video-overlay {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.4);
        }

        .home-hero__content { flex: 1; z-index: 3; max-width: 600px; position: relative; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        
        .hero-btn-main { 
            background: #ffffff; color: #000; border: none; 
            padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem;
            display: inline-block; transition: 0.3s; position: relative; z-index: 3;
        }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        
        .home-hero__image { 
            flex: 0.8; display: flex; justify-content: flex-end; align-items: flex-end; 
            position: absolute; right: 40px; bottom: 0; z-index: 2;
            opacity: 0; visibility: hidden; transition: opacity 0.8s ease, visibility 0.8s ease;
        }
        .home-hero__image.active { opacity: 1; visibility: visible; }
        .hero-workers-img { width: 550px; max-width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        .services-section { background: var(--color-white); padding-top: 100px; padding-bottom: 60px; }
        
        .featured-services-grid { 
            display: grid; 
            grid-template-columns: repeat(3, 1fr); 
            gap: 30px; 
            margin-top: 50px; 
        }
        .featured-service-card { 
            position: relative; 
            border-radius: 20px; 
            overflow: hidden; 
            height: 280px; 
            display: block;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: 0.4s;
            cursor: pointer;
            isolation: isolate;
        }
        .featured-service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        .fs-card-bg { 
            width: 100%; 
            height: 100%; 
            object-fit: cover; 
            transition: 0.6s transform ease;
            position: absolute;
            inset: 0;
            z-index: -1;
        }
        .featured-service-card:hover .fs-card-bg {
            transform: scale(1.05);
        }
        .fs-card-overlay { 
            position: absolute; 
            bottom: 0; left: 0; right: 0; 
            height: 60%; 
            background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%);
            display: flex; 
            align-items: flex-end; 
            justify-content: center; 
            padding-bottom: 40px;
            pointer-events: none;
        }
        .fs-card-title { 
            color: #ffffff; 
            font-size: 1.8rem; 
            font-weight: 500; 
            font-family: var(--font-body); 
            text-align: center;
        }
        
        /* New Manpower Supply Section */
        .supply-services-section { padding: 80px 0; background: #fff; }
        .supply-grid-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            border: 1px solid #e2e4e8;
            border-radius: 20px;
            overflow: hidden;
            background: #f8f9fa;
        }
        .supply-card {
            background: #f8f9fa;
            padding: 50px 40px;
            text-align: center;
            color: #333;
            transition: 0.4s ease;
            position: relative;
            border-bottom: 1px solid #e2e4e8;
            border-right: 1px solid #e2e4e8;
        }
        .supply-card:nth-child(2n) {
            border-right: none;
        }
        .supply-card:nth-last-child(-n+2) {
            border-bottom: none;
        }
        
        .supply-card:hover {
            background: var(--color-primary);
            color: #fff;
            transform: scale(1.01);
            z-index: 10;
            box-shadow: 0 15px 30px rgba(254, 118, 34, 0.3);
            border-radius: 12px; 
            border-color: transparent;
        }
        .supply-card-icon {
            margin-bottom: 25px;
            color: #444;
            transition: 0.4s;
            display: flex;
            justify-content: center;
        }
        .supply-card:hover .supply-card-icon { color: #fff; }
        .supply-card-title {
            font-size: 1.35rem; font-weight: 500; margin-bottom: 20px; letter-spacing: -0.5px;
            display: flex; align-items: center; justify-content: center;
        }
        .supply-card-desc {
            font-size: 0.95rem; line-height: 1.6; margin-bottom: 30px; opacity: 0.75; min-height: 5rem;
        }
        .supply-card:hover .supply-card-desc { opacity: 0.95; }
        .supply-card-link {
            display: inline-flex; align-items: center; gap: 8px; font-weight: 400; font-size: 0.95rem; transition: 0.3s;
        }
            .supply-card:hover .supply-card-title{
            color:#fff;}
        .supply-card-link:hover { gap: 12px; }
        
        /* Book Manpower Banner Section */
        .book-banner-section {
            padding: 80px 0;
            background: #fff;
        }
        .book-banner-inner {
            background: #232a55;
            border-radius: 30px;
            padding: 80px 40px;
            color: #fff;
            text-align: center;
        }
        .book-banner-header h2 {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 20px;
            line-height: 1.2;
            color: #fff;
        }
        .book-banner-header p {
            font-size: 1.1rem;
            opacity: 0.9;
            margin-bottom: 60px;
            line-height: 1.6;
        }
        
        .book-steps-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            margin-bottom: 60px;
            text-align: left;
        }
        .book-step {
            display: flex;
            flex-direction: column;
        }
        .book-step-icon-wrapper {
            position: relative;
            width: fit-content;
            margin-bottom: 25px;
        }
        .book-step-icon {
            width: 80px;
            height: 80px;
            background: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .book-step-badge {
            position: absolute;
            top: 0;
            right: -5px;
            width: 24px;
            height: 24px;
            background: #FE7622;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.85rem;
            font-weight: 700;
            border: 2px solid #232a55;
        }
        .book-step h3 {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 15px;
            color: #fff;
        }
        .book-step p {
            font-size: 0.95rem;
            line-height: 1.6;
            opacity: 0.8;
            color: #fff;
        }
        
        .book-banner-action {
            text-align: center;
        }
        .book-banner-btn {
            background: #fff;
            color: #333;
            padding: 15px 50px;
            border-radius: 100px;
            font-weight: 600;
            font-size: 1.1rem;
            display: inline-block;
            transition: 0.3s;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .book-banner-btn:hover {
            background: var(--color-primary);
            color: #fff;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        
        /* The Journey of Smaar Elysium Section */
        .journey-section { padding: 60px 0 80px; background: #fff; }
        .journey-grid-container {
            background: linear-gradient(to right, var(--color-primary), var(--color-primary-dark));
            border-radius: 20px;
            color: white;
            padding: 50px 0;
            box-shadow: 0 15px 35px rgba(254, 118, 34, 0.2);
        }
        .journey-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .journey-item { 
            text-align: center; 
            padding: 0 30px;
            border-right: 1px solid rgba(255,255,255,0.15);
        }
        .journey-item:last-child { border-right: none; }
        .journey-num { 
            display: block; 
            font-size: clamp(2.5rem, 4vw, 3.5rem); 
            font-weight: 500; 
            color: #fff; 
            margin-bottom: 10px; 
            letter-spacing: 1px;
        }
        .journey-label { 
            font-size: 1.3rem; 
            font-weight: 500; 
            margin-bottom: 15px; 
            color: #fff;
        }
        .journey-desc {
            font-size: 0.9rem;
            line-height: 1.5;
            opacity: 0.9;
        }
        
        /* Our Core Area Section */
        .core-area-section { padding: 80px 0; background: #fff; }
        .core-area-header { text-align: center; margin-bottom: 50px; }
        .core-area-title { font-size: 2.8rem; font-weight: 500; color: #555; margin-bottom: 20px; }
        .core-area-desc { font-size: 1.05rem; color: #777; max-width: 800px; margin: 0 auto; line-height: 1.7; }
        
        .core-area-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 280px);
            border-radius: 20px;
            overflow: hidden;
            background: #000; /* For better contrast during loading */
        }
        .core-area-item { position: relative; overflow: hidden; display: block; }
        .core-area-item.large { grid-column: span 2; }
        .core-area-item.small { grid-column: span 1; }
        
        .core-area-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; opacity: 0.85; }
        .core-area-item:hover .core-area-img { transform: scale(1.05); opacity: 1; }
        
        .core-area-overlay {
            position: absolute; inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%);
            display: flex; align-items: flex-end; justify-content: center;
            padding-bottom: 30px; pointer-events: none;
        }
        .core-area-item-title { color: #fff; font-size: 1.15rem; font-weight: 600; text-align: center; margin: 0; line-height: 1.4; }
        .large .core-area-item-title { font-size: 1.4rem; }
        
        /* Clients Section */
        .clients-section { padding: 80px 0 100px; background: #fff; text-align: center; }
        .clients-header h2 { font-size: 2.8rem; font-weight: 500; color: #666; margin-bottom: 20px; }
        .trustindex-placeholder { margin-bottom: 80px; font-size: 0.9rem; color: #222; }
        .clients-logos-header h2 { font-size: 2.8rem; font-weight: 500; color: #666; margin-bottom: 40px; }
        
        .marquee-container {
            overflow: hidden;
            position: relative;
            width: 100%;
            padding: 20px 0;
            display: flex;
        }
        
        .marquee-content.left-to-right {
            display: flex;
            white-space: nowrap;
            animation: scroll-left-to-right 25s linear infinite;
            gap: 60px;
        }
        
        .marquee-group {
            display: flex;
            flex-shrink: 0;
            gap: 60px;
            align-items: center;
            justify-content: space-around;
            min-width: 100%;
        }
        
        @keyframes scroll-left-to-right {
            0% { transform: translateX(calc(-100% - 60px)); }
            100% { transform: translateX(0); }
        }
        
        .client-logo-box img { 
            max-width: 180px; 
            max-height: 60px; 
            width: auto;
            object-fit: contain;
            filter: grayscale(100%) opacity(0.8); 
            transition: 0.3s; 
        }
        .client-logo-box:hover img { filter: grayscale(0%) opacity(1); }
        
        /* Request a Quote Section */
        .quote-section { padding: 40px 0 100px; background: #fff; }
        .quote-wrapper {
            display: flex;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.1);
            min-height: 600px;
        }
        .quote-image-side {
            flex: 1;
            position: relative;
        }
        .quote-image-side img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            inset: 0;
        }
        .quote-form-side {
            flex: 1;
            background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary) 100%);
            padding: 60px 50px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .quote-label { font-size: 1rem; opacity: 0.9; margin-bottom: 5px; display: block; }
        .quote-title { 
            font-size: 2.8rem; 
            font-weight: 600; 
            margin-bottom: 20px; 
            color: #ffffff;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .quote-title:hover {
            color: #FE7622;
            text-shadow: 0 0 15px rgba(254, 118, 34, 0.4);
            transform: translateX(10px);
        }
        .quote-desc { font-size: 0.95rem; line-height: 1.6; opacity: 0.9; margin-bottom: 40px; max-width: 90%; }
        
        .quote-form input, .quote-form textarea {
            width: 100%;
            background: transparent;
            border: 1px solid rgba(255,255,255,0.2);
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-size: 0.95rem;
            outline: none;
            transition: all 0.3s ease;
        }
        .quote-form input::placeholder, .quote-form textarea::placeholder { color: rgba(255,255,255,0.5); }
        
        .quote-form input:hover, .quote-form textarea:hover {
            border-color: var(--color-primary);
            box-shadow: 0 0 10px rgba(254, 118, 34, 0.3);
            background: rgba(255,255,255,0.05);
        }
        
        .quote-form input:focus, .quote-form textarea:focus { 
            border-color: var(--color-primary); 
            background: rgba(255,255,255,0.1); 
            box-shadow: 0 0 15px rgba(254, 118, 34, 0.5);
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .form-group { margin-bottom: 20px; }
        .quote-form textarea { resize: none; }
        
        .recaptcha-placeholder { margin-bottom: 30px; }
        .recaptcha-box { 
            background: #fff; border-radius: 4px; padding: 10px 15px; 
            display: inline-flex; align-items: center; gap: 15px;
            color: #333; font-size: 0.9rem; width: 260px; justify-content: space-between;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .recaptcha-box input[type="checkbox"] { width: 24px; height: 24px; cursor: pointer; border: 2px solid #ccc; flex-shrink: 0; }
        .recaptcha-box label { cursor: pointer; flex: 1; margin-top: 2px; }
        .recaptcha-logo { display:flex; flex-direction: column; align-items: center; font-size: 0.5rem; color: #999; }
        
        .quote-submit-btn {
            background: #fff; color: #333; border: none; padding: 15px 40px;
            border-radius: 100px; font-weight: 600; font-size: 1.1rem; cursor: pointer; transition: 0.3s;
        }
        .quote-submit-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
        
        /* FAQ Section */
        .faq-section { padding: 60px 0 100px; background: #fff; }
        .faq-main-title { font-size: 3rem; font-weight: 400; color: #000; margin-bottom: 20px; }
        .faq-subtitle { font-size: 1.1rem; color: #333; margin-bottom: 40px; text-transform: uppercase; }
        
        .faq-list { max-width: 100%; border-top: 1px solid #f1f1f1; }
        .faq-item { border-bottom: 1px solid #f1f1f1; transition: 0.3s; }
        .faq-question-btn { 
            display: flex; 
            align-items: center; 
            width: 100%; 
            padding: 25px 20px; 
            background: none; 
            border: none; 
            cursor: pointer; 
            text-align: left;
            transition: 0.3s;
        }
        .faq-icon {
            font-size: 1.5rem;
            margin-right: 15px;
            color: #888;
            font-weight: 300;
            width: 20px;
            display: inline-block;
        }
        .faq-question-text {
            font-size: 1.45rem;
            color: #777;
            font-weight: 400;
            transition: 0.3s;
        }
        .faq-item.active .faq-icon, .faq-item.active .faq-question-text { color: #FE7622; }
        
        .faq-answer-container {
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
            background: #fafafa;
        }
        .faq-answer-content { padding: 30px 40px; }
        .faq-answer-content p {
            color: #000; font-size: 0.95rem; line-height: 1.7; margin: 0; font-weight: 400; letter-spacing: 0.2px;
        }
        
        @media (max-width: 1200px) {
            .home-hero { padding: 60px 60px; }
            .hero-workers-img { width: 450px; }
            .featured-services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 992px) {
        .faq-question-text{
        font-size: 0.95rem;
        }
        .faq-question-btn{
        padding:15px 10px;
        }
        .faq-answer-content{
        padding:15px 20px;
        }
          .home-hero { flex-direction: column; text-align: center; padding: 60px 30px 0; min-height: auto; border-radius: 20px; }
          .home-hero__content { max-width: 100%; display: flex; flex-direction: column; align-items: center; margin-bottom: 20px; }
          .home-hero__image { position: relative; justify-content: center; width: 100%; display: flex; right: 0; bottom: 0; }
          .hero-workers-img { width: 100%; max-width: 400px; display: block; margin-bottom: -12%; }
          .featured-services-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .section-title { font-size: 2.2rem; }
          .journey-grid { grid-template-columns: 1fr 1fr; gap: 40px 0; }
          .journey-item:nth-child(even) { border-right: none; }
          .journey-item:nth-child(1), .journey-item:nth-child(2) { padding-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.15); }
          .supply-grid-container { border-radius: 15px; }
          .supply-card { padding: 30px 20px; }
          .supply-card-title { font-size: 1.1rem; margin-bottom: 15px; }
          .supply-card-desc { font-size: 0.85rem; margin-bottom: 15px; min-height: auto; }
          .book-steps-grid { grid-template-columns: 1fr; gap: 50px; text-align: center; }
          .book-step { align-items: center; }
          .book-banner-inner { padding: 50px 30px; }
          .book-banner-header h2 { font-size: 2.2rem; }
          .core-area-grid { grid-template-columns: 1fr 1fr; grid-template-rows: repeat(3, 250px); }
          .core-area-item.small { grid-column: span 1; }
          .quote-wrapper { flex-direction: column; }
          .quote-image-side { min-height: 300px; }
          .form-row { grid-template-columns: 1fr; gap: 0; }
        }
        @media (max-width: 600px) {
          .featured-services-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
          .featured-service-card { height: 160px; border-radius: 12px; }
          .fs-card-title { font-size: 1.1rem; }
          .journey-grid { grid-template-columns: 1fr 1fr; gap: 20px 0; }
          .journey-item { padding: 10px 15px !important; border-bottom: none !important; border-right: 1px solid rgba(255,255,255,0.15) !important; }
          .journey-item:nth-child(even) { border-right: none !important; }
          .journey-item:nth-child(1), .journey-item:nth-child(2) { padding-bottom: 25px !important; border-bottom: 1px solid rgba(255,255,255,0.15) !important; }
          .journey-num { font-size: 1.8rem; margin-bottom: 5px; display: block; }
          .journey-label { font-size: 0.95rem; margin-bottom: 8px; }
          .journey-desc { font-size: 0.75rem; }
          .projects-grid { grid-template-columns: 1fr; }
          .core-area-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
          .core-area-item { height: 250px; grid-column: span 1 !important; }
          .quote-form-side { padding: 40px 25px; }
          .quote-title { font-size: 2.2rem; }
          .supply-card { padding: 20px 15px; }
          .supply-card-icon { margin-bottom: 15px; }
          .supply-card-title { font-size: 1rem; margin-bottom: 10px; }
          .supply-card-desc { font-size: 0.8rem; margin-bottom: 0; }
        }
      `}} />
        </div >
    );
};



export default Home;

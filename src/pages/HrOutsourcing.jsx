import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import '../styles/sectorPages.css';
import heroImage from "../assest/manpower-supply-meadia/hr-hero1.png";
import btsImg from "../assest/manpower-supply-meadia/hroutsourcing_bts.jpg";
import btsGroup7Img from "../assest/manpower-supply-meadia/hr_outsourcing_bts.jpg";
import insight1Img from "../assest/manpower-supply-meadia/uae_hr_insight_1.png";
import insight2Img from "../assest/manpower-supply-meadia/uae_hr_insight_2.png";
import insight3Img from "../assest/manpower-supply-meadia/uae_hr_insight_3.png";
import insight4Img from "../assest/manpower-supply-meadia/uae_hr_insight_4.png";
import cbsBgImg from "../assest/manpower-supply-meadia/hr_outsourcing_choose_best.jpg";

const HROutsourcing = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: t.hrFaqQ1,
      answer: t.hrFaqA1
    },
    {
      question: t.hrFaqQ2,
      answer: t.hrFaqA2
    },
    {
      question: t.hrFaqQ3,
      answer: t.hrFaqA3
    },
    {
      question: t.hrFaqQ4,
      answer: t.hrFaqA4
    },
    {
      question: t.hrFaqQ5,
      answer: t.hrFaqA5
    },
    {
      question: t.hrFaqQ6,
      answer: t.hrFaqA6
    }
  ];

  return (
    <div className="service-page recruitment-page">
      <SEOHead
        title={t.hrHeroTitle}
        description={t.hrHeroText}
        keywords="HR outsourcing UAE, payroll outsourcing UAE, HR management services, labour law compliance UAE, HR BPO UAE, employee management outsourcing, Smaar Elysium HR"
        canonical="https://www.smaarelysium.com/hr-outsourcing"
        faqSchema={faqs.map(f => ({
          question: f.question,
          answer: f.answer
        }))}
      />
      {/* Hero Section */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">{t.hrHeroTitle.split(' ').slice(0, 2).join(' ')}<br />{t.hrHeroTitle.split(' ').slice(2).join(' ')}</h1>
            <p className="home-hero__text">{t.hrHeroText}</p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">{t.commonBookNow || 'Book Now'}</Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img
              src={heroImage}
              alt="HR Outsourcing Team"
              className="hero-workers-img"
            />
          </div>
        </section>
      </div>

      <div className="container">
        {/* Main Content Area */}
        <div className="service-main-content">
          <div className="service-intro">
            <h2>{t.hrIntroTitle}</h2>
            <p>{t.hrIntroText}</p>
          </div>

          {/* Choose Best For You Banner */}
          <div className="choose-best-split">
            <div className="cbs-left">
              <h2>{t.hrChooseTitle}</h2>
              <p>{t.hrChooseP1}</p>
              <p>{t.hrChooseP2}</p>
              <p>{t.hrChooseP3}</p>
              <p>{t.hrChooseP4}</p>
              <p>{t.hrChooseP5}</p>
            </div>

            <div className="cbs-right" style={{ backgroundImage: `url(${cbsBgImg})` }}>
              <div className="cbs-logo">
                <span className="logo-main">Smaar Elysium</span>
                <span className="logo-slogan" style={{ display: 'block' }}>{t.hrLogoSlogan}</span>
              </div>
              <div className="cbs-overlay"></div>
              <div className="cbs-content">
                <div className="cbs-text-block">
                  <span className="cbs-go-beyond">{t.hrGrid1}</span>
                  <span className="cbs-ordinary">{t.hrGrid2}</span>
                  <span className="cbs-find">{t.hrGrid3}</span>
                  <span className="cbs-executives">{t.hrGrid4}</span>
                </div>
              </div>
              <div className="cbs-footer">
                <div className="cbs-footer-pill">www.smaarelysium.com</div>
                <div className="cbs-footer-info">
                  <span><i className="fa-brands fa-whatsapp"></i> {t.phone}</span>
                  <span className="cbs-divider">|</span>
                  <span>sales@smaarelysium.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Build Your HR System Split Section */}
          <div className="build-team-split">
            <div className="bts-left">
              <div className="bts-workers-container">
                <img
                  src={btsGroup7Img}
                  alt="HR Outsourcing Team"
                  className="bts-workers-img"
                />
              </div>

              <div className="bts-web-pill">www.smaarelysium.com</div>

              <div className="bts-contact-footer">
                <div className="bts-contact-item">
                  <i className="fa-brands fa-whatsapp"></i> {t.phone}
                </div>
                <div className="bts-contact-divider">|</div>
                <div className="bts-contact-item">
                  smaarelysium.@gmail.com
                </div>
              </div>
            </div>

            <div className="bts-right">
              <h3>{t.hrBtsTitle}</h3>
              <p>{t.hrBtsP1}</p>
              <p>{t.hrBtsP2}</p>
              <p>{t.hrBtsP3}</p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="why-choose-us-section">
            <h2 className="section-title">{t.hrWhyTitle}</h2>
            <p className="section-intro">{t.hrWhyIntro}</p>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>{t.hrBenefit1Title}</h3>
                <p>{t.hrBenefit1Desc}</p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>{t.hrBenefit2Title}</h3>
                <p>{t.hrBenefit2Desc}</p>
              </div>

              <div className="benefit-card bg-red">
                <h3>{t.hrBenefit3Title}</h3>
                <p>{t.hrBenefit3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-main-title">{t.commonFaqTitle || 'FAQ'}</h2>
          <p className="faq-subtitle">{t.commonFaqSubtitle || 'MOST ASKED QUESTIONS.'}</p>

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

      <div className="insights-section">
        <h2 className="insights-title">{t.hrInsightTitle}</h2>

        <div className="insights-grid">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="insight-card">
              <div className="insight-image-wrap">
                <img src={num === 1 ? insight1Img : num === 2 ? insight2Img : num === 3 ? insight3Img : insight4Img} alt={`Insight ${num}`} />
              </div>
              <div className="insight-content">
                <h3>{t[`hrInsight${num}Title`]}</h3>
                <p>{t[`hrInsight${num}Desc`]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .home-hero { background: var(--color-primary); border-radius: 40px; color: white; padding: 80px 100px; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden; min-height: 500px; }
        .home-hero__content { flex: 1; z-index: 2; max-width: 600px; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        .hero-btn-main { background: #ffffff; color: #000; border: none; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image { flex: 0.8; display: flex; justify-content: flex-end; align-items: flex-end; position: absolute; right: 40px; bottom: 0; }
        .hero-workers-img { width: 550px; max-width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        @media (max-width: 1200px) { 
            .home-hero { padding: 60px 60px; } 
            .hero-workers-img { width: 450px; } 
        }
        @media (max-width: 992px) { 
            .home-hero { flex-direction: column; text-align: center; padding: 60px 30px 0; min-height: auto; border-radius: 20px; } 
            .home-hero__content { max-width: 100%; display: flex; flex-direction: column; align-items: center; margin-bottom:  20px; } 
            .home-hero__image { position: relative; width: 100%; display: flex; right: 0; bottom: 0; justify-content: center; left: auto; right: auto; bottom: auto; } 
            .hero-workers-img { width: 100%; max-width: 400px; display: block; margin-bottom: -12%; } 
        }
        @media (max-width: 576px) { 
            .home-hero { padding: 40px 25px 0; border-radius: 20px; } 
            .hero-workers-img { max-width: 100%; } 
        }

        /* Choose Best For You Split Design */
        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        .cbs-left {
            flex: 1;
            background: #f4f5f7;
            padding: 50px;
        }
        .cbs-left h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 30px;
            color: #333;
        }
        .cbs-left p {
            color: #888;
            margin-bottom: 15px;
            font-size: 1.05rem;
            line-height: 1.7;
        }
        .cbs-right {
            background-position: center;
            background-size: cover;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .cbs-logo {
            position: absolute;
            top: 25px;
            left: 25px;
            z-index: 3;
            color: #fff;
        }
        .cbs-logo .logo-main { font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-sub { color: #d11a2a; font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-slogan { font-size: 0.5rem; font-weight: 800; color: #d11a2a; letter-spacing: 0.5px; }
        .cbs-overlay {
            background: rgba(0,0,0,0.5);
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            z-index: 1;
        }
        .cbs-content {
            position: relative;
            z-index: 2;
            padding: 50px 40px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .cbs-text-block {
            text-align: right;
            transform: translateY(20px);
        }
        .cbs-go-beyond { font-size: 2.2rem; font-weight: 600; display: block; color: #fff; letter-spacing: 1px; }
        .cbs-ordinary { font-size: 3rem; font-weight: 900; display: block; margin-top: -10px; color: #fff; letter-spacing: 1px; }
        .cbs-find { font-size: 1.8rem; font-weight: 600; color: #3b82f6; display: block; margin-top: 5px; }
        .cbs-executives { font-size: 3rem; color: #3b82f6; font-weight: 900; display: block; margin-top: -10px; }

        @media (max-width: 768px) {
            .cbs-left { padding: 40px 25px; }
            .cbs-left h2 { font-size: 1.8rem; }
            .cbs-text-block { transform: translateY(0); padding: 20px; text-align: center; }
            .cbs-go-beyond { font-size: 1.5rem; }
            .cbs-ordinary { font-size: 2.2rem; }
            .cbs-find { font-size: 1.2rem; }
            .cbs-executives { font-size: 2.2rem; }
            .cbs-footer-info { font-size: 0.9rem; flex-direction: column; gap: 5px; }
            .cbs-divider { display: none; }
            .bts-right h3 { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
            .cbs-go-beyond { font-size: 1.2rem; }
            .cbs-ordinary { font-size: 1.7rem; }
            .cbs-find { font-size: 1.1rem; }
            .cbs-executives { font-size: 1.7rem; }
            .cbs-footer-pill { font-size: 0.8rem; letter-spacing: 1px; top: -13px; }
        }

        .cbs-footer {
            position: relative;
            z-index: 2;
            background: #ac1420;
            color: #fff;
            display: flex;
            justify-content: center;
            padding: 25px;
            align-items: center;
        }
        .cbs-footer-pill {
            background: #fff;
            color: #ac1420;
            padding: 6px 30px;
            border-radius: 20px;
            font-weight: 600;
            position: absolute;
            top: -17px;
            font-size: 1rem;
            letter-spacing: 3px;
        }
        .cbs-footer-info { 
            display: flex; 
            gap: 20px; 
            font-size: 1.1rem; 
            font-weight: 400; 
            margin-top: 10px;
            letter-spacing: 1px;
        }
        .cbs-divider { margin: 0 10px; opacity: 0.5; }

        @media (max-width: 1100px) {
            .choose-best-split { flex-direction: column; }
            .cbs-right { min-height: 400px; }
        }

        .service-page { padding-bottom: 0; }

        /* Hero Section (from Home) */
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        
        
        
        
        
        .hero-btn-main { 
            background: #ffffff; color: #000; border: none; 
            padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem;
            display: inline-block; transition: 0.3s;
        }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        
        

        @media (max-width: 1024px) {
            
            
        }
        @media (max-width: 576px) {
            
            
        }

        .service-main-content { padding: 60px 0; }
        .service-intro { text-align: center; margin-bottom: 50px; }
        .service-intro h2 { font-size: 2.5rem; font-weight: 700; color: #333; }
        
        /* Build Team Split Section */
        .build-team-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 80px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            background: transparent;
            position: relative;
        }
        .bts-left {
            flex: 1;
            background-image: radial-gradient(circle, #ddd 1px, transparent 1px);
            background-size: 20px 20px;
            background-color: #f8f9fa;
            background-size: cover;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            min-height: 450px;
            padding: 0;
            overflow: hidden;
        }
        .bts-workers-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            position: relative;
            z-index: 2;
            padding-top: 40px;
            margin-bottom: 40px;
        }
        .bts-workers-img { max-width: 450px; height: auto; object-fit: contain; display: block; }
        .bts-web-pill {
            position: absolute;
            bottom: 70px;
            left: 50%;
            transform: translateX(-50%);
            background: #fff;
            padding: 10px 30px;
            border-radius: 100px;
            font-weight: 600;
            color: #333;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            z-index: 3;
            font-size: 1.1rem;
        }
        .bts-contact-footer {
            width: 100%;
            background: #87101c;
            color: #fff;
            padding: 15px 30px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 4;
            font-size: 1.1rem;
            font-weight: 500;
        }
        .bts-contact-item { display: flex; align-items: center; gap: 10px; }
        .bts-contact-divider { margin: 0 20px; opacity: 0.5; }
        .bts-right {
            flex: 1;
            background: #e31837;
            color: #fff;
            padding: 60px 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .bts-right h3 { font-size: 2.2rem; font-weight: 700; margin-bottom: 30px; line-height: 1.2; }
        .bts-right p { font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px; opacity: 0.95; font-weight: 400; }
        .bts-right p:last-child { margin-bottom: 0; }

        @media (max-width: 992px) {
            .build-team-split { flex-direction: column; }
            .bts-right { padding: 40px 30px; }
            .bts-workers-img { max-width: 380px; }
            .bts-left { min-height: 400px; }
        }
        @media (max-width: 576px) {
            .bts-contact-footer { flex-direction: column; gap: 10px; padding: 15px; text-align: center; }
            .bts-contact-divider { display: none; }
            .bts-web-pill { bottom: 90px; padding: 8px 20px; font-size: 1rem; }
            .bts-workers-img { max-width: 280px; }
            .bts-left { min-height: 300px; }
        }

        .why-choose-us-section { margin-top: 80px; margin-bottom: 80px; }
        .why-choose-us-section .section-title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 25px;
            color: #000;
            text-transform: uppercase;
        }
        .why-choose-us-section .section-intro {
            font-size: 1.1rem;
            color: #333;
            max-width: 100%;
            margin-bottom: 50px;
            line-height: 1.6;
        }
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
            overflow: hidden;
        }
        .benefit-card {
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 400px;
            text-align: center;
        }
        .benefit-card h3 { font-size: 1.8rem; font-weight: 700; margin-bottom: 25px; line-height: 1.2; }
        .benefit-card p { font-size: 1.05rem; line-height: 1.6; }
        .benefit-card.bg-red { background-color: #FE7622; color: #fff; }
        .benefit-card.bg-gray { background-color: #e0e0e0; color: #333; }
        
        @media (max-width: 992px) {
            .benefits-grid { grid-template-columns: 1fr; }
            .benefit-card { min-height: auto; padding: 50px 30px; }
            .why-choose-us-section .section-title { font-size: 2.2rem; }
        }
        
        /* FAQ Section */
        .faq-section { padding: 60px 0 100px; background: #fff; }
        .faq-main-title { font-size: 3rem; font-weight: 400; color: #000; margin-bottom: 20px; text-transform: uppercase; }
        .faq-subtitle { font-size: 1.1rem; color: #333; margin-bottom: 40px; text-transform: uppercase; }
        .faq-list { max-width: 100%; border-top: 1px solid #f1f1f1; }
        .faq-item { border-bottom: 1px solid #f1f1f1; transition: 0.3s; }
        .faq-question-btn { 
            display: flex; align-items: center; width: 100%; padding: 25px 20px;
            background: none; border: none; cursor: pointer; text-align: left; transition: 0.3s;
        }
        .faq-icon { font-size: 1.5rem; margin-right: 15px; color: #888; font-weight: 300; width: 20px; display: inline-block; }
        .faq-question-text { font-size: 1.45rem; color: #777; font-weight: 400; transition: 0.3s; }
        .faq-item.active .faq-icon, .faq-item.active .faq-question-text { color: #FE7622; }
        .faq-answer-container { overflow: hidden; transition: max-height 0.3s ease-in-out; background: #fafafa; }
        .faq-answer-content { padding: 30px 40px; }
        .faq-answer-content p { color: #000; font-size: 0.95rem; line-height: 1.7; margin: 0; font-weight: 400; letter-spacing: 0.2px; }
        `}} />
    </div>
  );
};

export default HROutsourcing;
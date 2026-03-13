import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import heroImage from "../assest/manpower-supply-meadia/recruitment-hero.png";
import btsImg from "../assest/manpower-supply-meadia/recruitment_hiring.png";
import btsGroup7Img from "../assest/manpower-supply-meadia/recruitment_team.png";
import insight1 from "../assest/manpower-supply-meadia/uae_insight_intro.png";
import insight2 from "../assest/manpower-supply-meadia/uae_insight_need.png";
import insight3 from "../assest/manpower-supply-meadia/uae_insight_benefits.png";
import insight4 from "../assest/manpower-supply-meadia/uae_insight_advantage.png";

const Recruitment = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: t.faqRec1Q,
      answer: t.faqRec1A
    },
    {
      question: t.faqRec2Q,
      answer: t.faqRec2A
    },
    {
      question: t.faqRec3Q,
      answer: t.faqRec3A
    },
    {
      question: t.faqRec4Q,
      answer: t.faqRec4A
    },
    {
      question: t.faqRec5Q,
      answer: t.faqRec5A
    },
    {
      question: t.faqRec6Q,
      answer: t.faqRec6A
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <div className="service-page recruitment-page">
      <SEOHead
        title={t.recHeroTitle}
        description={t.recHeroText}
        keywords="recruitment agency UAE, recruitment agency Dubai, talent acquisition UAE, permanent staffing Dubai"
        canonical="https://smaarelysium.com/recruitment"
        schema={faqSchema}
      />
      {/* Hero Section - Using Home Page Style */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title" dangerouslySetInnerHTML={{ __html: t.recHeroTitle.replace('Solutions', '<br />Solutions') }} />
            <p className="home-hero__text">{t.recHeroText}</p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">{t.bookNow}</Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img
              src={heroImage}
              alt="Recruitment Experts"
              className="hero-workers-img"
            />
          </div>
        </section>
      </div>

      {/* Main Content Section */}
      <div className="service-content-section">
        <div className="container">
          {/* Choose Best For You Banner */}
          <div className="choose-best-split">
            <div className="cbs-left">
              <h2>{t.recChooseTitle}</h2>
              <p>{t.recChooseP1}</p>
              <p>{t.recChooseP2}</p>
              <p>{t.recChooseP3}</p>
              <p>{t.recChooseP4}</p>
            </div>

            <div className="cbs-right" style={{ backgroundImage: `url(${btsImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="cbs-logo">
                <span className="logo-main">Smaar Elysium</span>
                <span className="logo-slogan" style={{ display: 'block' }}>{t.recLogoSlogan}</span>
              </div>
              <div className="cbs-overlay"></div>
              <div className="cbs-content">
                <div className="cbs-text-block">
                  <span className="cbs-go-beyond">{t.recGrid1}</span>
                  <span className="cbs-ordinary">{t.recGrid2}</span>
                  <span className="cbs-find">{t.recGrid3}</span>
                  <span className="cbs-executives">{t.recGrid4}</span>
                </div>
              </div>
              <div className="cbs-footer">
                <div className="cbs-footer-pill">www.smaarelysium.com</div>
                <div className="cbs-footer-info">
                  <span><i className="fa-brands fa-whatsapp"></i> 8885072259</span>
                  <span className="cbs-divider">|</span>
                  <span>sales@smaarelysium.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Build Your Efficient Team Split Section - Simplified */}
          <div className="build-team-split">
            <div className="bts-left">
              <div className="bts-workers-container">
                <img
                  src={btsGroup7Img}
                  alt="Team of Workers"
                  className="bts-workers-img"
                />
              </div>

              <div className="bts-web-pill">www.smaarelysium.com</div>

              <div className="bts-contact-footer">
                <div className="bts-contact-item">
                  <i className="fa-brands fa-whatsapp"></i> 8885072259
                </div>
                <div className="bts-contact-divider">|</div>
                <div className="bts-contact-item">
                  info@smaarelysium.com
                </div>
              </div>
            </div>

            <div className="bts-right">
              <h3>{t.recBtsTitle}</h3>
              <p>{t.recBtsP1}</p>
              <p>{t.recBtsP2}</p>
              <p>{t.recBtsP3}</p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="why-choose-us-section">
            <h2 className="section-title">{t.recWhyTitle}</h2>
            <p className="section-intro">{t.recWhyIntro}</p>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>{t.recBenefit1Title}</h3>
                <p>{t.recBenefit1Desc}</p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>{t.recBenefit2Title}</h3>
                <p>{t.recBenefit2Desc}</p>
              </div>

              <div className="benefit-card bg-red">
                <h3>{t.recBenefit3Title}</h3>
                <p>{t.recBenefit3Desc}</p>
              </div>
            </div>
          </div>

          {/* Manpower Supply Insights Section */}

        </div>
      </div>



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



      <div className="insights-section">
        <h2 className="insights-title">{t.msInsightTitle}</h2>

        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={insight1} alt="Insight 1" />
            </div>
            <div className="insight-content">
              <h3>{t.msInsight1Title}</h3>
              <p>{t.msInsight1Desc}</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={insight2} alt="Insight 2" />
            </div>
            <div className="insight-content">
              <h3>{t.msInsight2Title}</h3>
              <p>{t.msInsight2Desc}</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={insight3} alt="Insight 3" />
            </div>
            <div className="insight-content">
              <h3>{t.msInsight3Title}</h3>
              <p>{t.msInsight3Desc}</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={insight4} alt="Insight 4" />
            </div>
            <div className="insight-content">
              <h3>{t.msInsight4Title}</h3>
              <p>{t.msInsight4Desc}</p>
              {/* <Link to="/insights" className="insight-btn">
                Read More <ChevronRight size={18} />
              </Link> */}
            </div>
          </div>
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
            margin-bottom: 25px;
            font-weight: 500;
            color: #000;
        }
        .cbs-left p {
            color: #888;
            margin-bottom: 15px;
            font-size: 1.05rem;
            line-height: 1.7;
        }
        .cbs-right {
            flex: 1;
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
            .cbs-ordinary { font-size: 2.22rem; }
            .cbs-find { font-size: 1.25rem; }
            .cbs-executives { font-size: 2.22rem; }
            .cbs-footer-info { font-size: 0.9rem; flex-direction: column; gap: 5px; }
            .cbs-divider { display: none; }
            .bts-right h3 { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
            .cbs-go-beyond { font-size: 1.25rem; }
            .cbs-ordinary { font-size: 1.8rem; }
            .cbs-find { font-size: 1.1rem; }
            .cbs-executives { font-size: 1.8rem; }
            .cbs-footer-pill { font-size: 0.8rem; letter-spacing: 1px; top: -13px; }
        }

        .cbs-footer {
            position: relative;
            z-index: 2;
            background: #ac1420; /* Darker red */
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
        
        
        .hero-workers-img { width: 550px; max-width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }

        /* Content Section */
        .service-content-section {
            padding: 80px 0;
            background: #fff;
        }
        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        /* Build Your Efficient Team Split - Simplified & Smaller */
        .build-team-split {
            display: flex;
            border-radius: 40px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            background: #fff;
            position: relative;
            min-height: 450px; /* Reduced from 650px */
        }
        .bts-left {
            flex: 1;
            background: #f4f5f7;
            background-image: radial-gradient(circle, #ddd 1px, transparent 1px);
            background-size: 20px 20px;
            padding: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .bts-workers-container {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 1;
        }
        .bts-workers-img {
            width: 100%;
            max-width: 450px;
            height: auto;
            display: block;
            filter: drop-shadow(0 15px 25px rgba(0,0,0,0.1));
        }

        .bts-web-pill {
            background: #fff;
            color: #333;
            padding: 6px 20px;
            border-radius: 50px;
            font-weight: 700;
            display: inline-block;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            z-index: 4;
            position: absolute;
            bottom: 60px; /* Adjusted */
            left: 40px;
            letter-spacing: 1px;
            font-size: 0.9rem;
        }

        .bts-contact-footer {
            background: #8b1520;
            color: #fff;
            padding: 15px 40px;
            display: flex;
            gap: 20px;
            font-weight: 600;
            font-size: 1rem;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 5;
        }
        .bts-contact-divider { opacity: 0.5; }

        .bts-right {
            flex: 1.2;
            background: #FE7622;
            color: #fff;
            padding: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 2;
        }
        .bts-right h3 {
            font-size: 2.2rem;
            margin-bottom: 20px;
            font-weight: 700;
            line-height: 1.2;
            color: #fff;
        }
        .bts-right p {
            font-size: 1.05rem;
            line-height: 1.6;
            margin-bottom: 15px;
            color: rgba(255,255,255,0.95);
        }

        /* Responsive Design */
        @media (max-width: 992px) {
            .build-team-split { flex-direction: column; border-radius: 25px; min-height: auto; }
            .bts-left { min-height: 350px; padding: 40px; }
            .bts-right { padding: 40px; }
            .bts-right h3 { font-size: 1.8rem; }
            .bts-workers-img { max-width: 380px; }
            .bts-web-pill { left: 50%; transform: translateX(-50%); bottom: 50px; }
            .bts-contact-footer { padding: 12px 20px; justify-content: center; font-size: 0.85rem; }
        }

        @media (max-width: 576px) {
            .bts-right h3 { font-size: 1.6rem; }
            .bts-workers-img { max-width: 280px; }
            .bts-left { min-height: 300px; }
        }
        .why-choose-us-section {
            margin-top: 80px;
            margin-bottom: 80px;
        }
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
            border-radius: 0;
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
        .benefit-card h3 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 25px;
            line-height: 1.2;
        }
        .benefit-card p {
            font-size: 1.05rem;
            line-height: 1.6;
        }
        .benefit-card.bg-red {
            background-color: #FE7622;
            color: #fff;
        }
        .benefit-card.bg-gray {
            background-color: #e0e0e0;
            color: #333;
        }
        
        /* Responsive design for Why Choose Us */
        @media (max-width: 992px) {
            .benefits-grid {
                grid-template-columns: 1fr;
            }
            .benefit-card {
                min-height: auto;
                padding: 50px 30px;
            }
            .why-choose-us-section .section-title {
                font-size: 2.2rem;
            }
        }
        /* Manpower Supply Insights Styling */
        .insights-section {
            margin-top: 60px;
            margin-bottom: 100px;
        }
        .insights-title {
            text-align: center;
            font-size: 2.5rem;
            color: #555;
            margin-bottom: 60px;
            font-weight: 500;
        }
        .insights-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
        }
        .insight-card {
            background: #ff741f;
            border-radius: 25px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
        }
        .insight-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .insight-image-wrap {
            height: 250px;
            background: #fa3e52;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .insight-image-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        .insight-card:hover .insight-image-wrap img {
            transform: scale(1.1);
        }
        .insight-content {
            padding: 30px 25px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .insight-content h3 {
            font-size: 1.3rem;
            color: #fff;
            margin-bottom: 20px;
            line-height: 1.4;
            font-weight: 600;
            min-height: 3.5rem;
        }
        .insight-content p {
            color: #fff;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 25px;
            flex-grow: 1;
        }
        .insight-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            color: #555;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            background: #fff;
        }
        .insight-btn:hover {
            border-color: #FE7622;
            color: #FE7622;
            background: #fdf2f3;
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .insights-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
            .insights-grid { grid-template-columns: repeat(2, 1fr); }
            .insights-title { font-size: 2rem; }
        }
        
        /* FAQ Section styling mirrored from Home.jsx */
        .faq-section { padding: 60px 0 100px; background: #fff; }
        .faq-main-title { font-size: 3rem; font-weight: 400; color: #000; margin-bottom: 20px; text-transform: uppercase; }
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
        `}} />
    </div>
  );
};

export default Recruitment;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import heroImage from "../assest/manpower-supply-meadia/security-solutions-hero.png";
import btsImg from "../assest/manpower-supply-meadia/securitysolutions_bts.jpg";
import btsGroup7Img from "../assest/manpower-supply-meadia/security_bts.jpg";
import secInsight1 from "../assest/manpower-supply-meadia/security_insight_intro.png";
import secInsight2 from "../assest/manpower-supply-meadia/security_insight_need.png";
import secInsight3 from "../assest/manpower-supply-meadia/security_insight_benefits.png";
import secInsight4 from "../assest/manpower-supply-meadia/security_insight_advantage.png";
import secCbsBg from "../assest/manpower-supply-meadia/security_choose_best.png";
import secBtsLeft from "../assest/manpower-supply-meadia/security_bts_left.png";

const SecuritySolutions = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const { t } = useLanguage();

  const faqs = [
    {
      question: t.ssFaqQ1,
      answer: t.ssFaqA1
    },
    {
      question: t.ssFaqQ2,
      answer: t.ssFaqA2
    },
    {
      question: t.ssFaqQ3,
      answer: t.ssFaqA3
    },
    {
      question: t.ssFaqQ4,
      answer: t.ssFaqA4
    },
    {
      question: t.ssFaqQ5,
      answer: t.ssFaqA5
    },
    {
      question: t.ssFaqQ6,
      answer: t.ssFaqA6
    }
  ];

  return (
    <div className="service-page recruitment-page">
      <SEOHead
        title={t.ssSEOTitle}
        description={t.ssSEODesc}
        keywords="security staffing UAE, licensed security guards UAE, security personnel agency, corporate security solutions UAE, event security UAE, CCTV operators UAE, Smaar Elysium security"
        canonical="https://www.smaarelysium.com/security-solutions"
      />
      {/* Hero Section */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">{t.ssHeroTitle}</h1>
            <p className="home-hero__text">{t.ssHeroText}</p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">{t.bookNow}</Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img
              src={heroImage}
              alt="Security Solutions Team"
              className="hero-workers-img"
            />
          </div>
        </section>
      </div>

      <div className="container">
        {/* Main Content Area */}
        <div className="service-main-content">
          <div className="service-intro">
            <h2>{t.ssChooseTitle}</h2>
            <p>{t.ssChooseP1}</p>
          </div>

          {/* Choose Best For You Banner */}
          <div className="choose-best-split">
            <div className="cbs-left">
              <h2>{t.ssChooseTitle}</h2>
              <p>{t.ssCbsP1}</p>
              <p>{t.ssCbsP2}</p>
              <p>{t.ssCbsP3}</p>
              <p>{t.ssCbsP4}</p>
              <p>{t.ssCbsP5}</p>
            </div>

            <div className="cbs-right" style={{ backgroundImage: `url(${secCbsBg})` }}>
              <div className="cbs-logo">
                <span className="logo-main">Smaar Elysium</span>
                <span className="logo-slogan" style={{ display: 'block' }}>{t.ssLogoSlogan}</span>
              </div>
              <div className="cbs-overlay"></div>
              <div className="cbs-content">
                <div className="cbs-text-block">
                  <span className="cbs-go-beyond">{t.ssGrid1}</span>
                  <span className="cbs-ordinary">{t.ssGrid2}</span>
                  <span className="cbs-find">{t.ssGrid3}</span>
                  <span className="cbs-executives">{t.ssGrid4}</span>
                </div>
              </div>
              <div className="cbs-footer">
                <div className="cbs-footer-pill">www.smaarelysium.com</div>
                <div className="cbs-footer-info">
                  <span><i className="fa-brands fa-whatsapp"></i> {t.phone}</span>
                  <span className="cbs-divider">|</span>
                  <span>{t.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Build Your Security Team Split Section */}
          <div className="build-team-split">
            <div className="bts-left" style={{ backgroundImage: `url(${secBtsLeft})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="bts-web-pill">www.smaarelysium.com</div>
              <div className="bts-contact-footer">
                <div className="bts-contact-item">
                  <i className="fa-brands fa-whatsapp"></i> {t.phone}
                </div>
                <div className="bts-contact-divider">|</div>
                <div className="bts-contact-item">
                  {t.email}
                </div>
              </div>
            </div>

            <div className="bts-right">
              <h3>{t.ssBtsTitle}</h3>
              <p>{t.ssBtsP1}</p>
              <p>{t.ssBtsP2}</p>
              <p>{t.ssBtsP3}</p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="why-choose-us-section">
            <h2 className="section-title">{t.whyChooseUs}</h2>
            <p className="section-intro">{t.ssWhyIntro}</p>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>{t.ssBen1Title}</h3>
                <p>{t.ssBen1Desc}</p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>{t.ssBen2Title}</h3>
                <p>{t.ssBen2Desc}</p>
              </div>

              <div className="benefit-card bg-red">
                <h3>{t.ssBen3Title}</h3>
                <p>{t.ssBen3Desc}</p>
              </div>
            </div>
          </div>

          {/* Standardized Quote Section */}
          <div className="quote-section">
            <div className="quote-container">
              <div className="quote-label">{t.requestQuote}</div>
              <h2 className="quote-title">{t.quickFollowUp}</h2>
              <p className="quote-text">{t.fillForm}</p>
              <Link to="/contact" className="quote-btn">{t.bookNow}</Link>
            </div>
          </div>

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
        <h2 className="insights-title">{t.ssInsightTitle}</h2>

        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={secInsight1} alt="Security Staffing Introduction" />
            </div>
            <div className="insight-content">
              <h3>{t.ssInsight1Title}</h3>
              <p>{t.ssInsight1Desc}</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={secInsight2} alt="Security Solutions Need" />
            </div>
            <div className="insight-content">
              <h3>{t.ssInsight2Title}</h3>
              <p>{t.ssInsight2Desc}</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={secInsight3} alt="Security Staffing Benefits" />
            </div>
            <div className="insight-content">
              <h3>{t.ssInsight3Title}</h3>
              <p>{t.ssInsight3Desc}</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={secInsight4} alt="Security Solutions Advantage" />
            </div>
            <div className="insight-content">
              <h3>{t.ssInsight4Title}</h3>
              <p>{t.ssInsight4Desc}</p>
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

        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        .cbs-left { flex: 1; background: #f4f5f7; padding: 50px; }
        .cbs-left h2 { font-size: 2.2rem; font-weight: 700; margin-bottom: 30px; color: #333; }
        .cbs-left p { color: #888; margin-bottom: 15px; font-size: 1.05rem; line-height: 1.7; }
        .cbs-right {
            flex: 1;
            background-size: cover;
            background-position: center top;
            min-height: 500px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .cbs-logo { position: absolute; top: 25px; left: 25px; z-index: 3; color: #fff; }
        .cbs-logo .logo-main { font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-sub { color: #d11a2a; font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-slogan { font-size: 0.5rem; font-weight: 800; color: #d11a2a; letter-spacing: 0.5px; }
        .cbs-overlay { background: rgba(0,0,0,0.5); position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1; }
        .cbs-content { position: relative; z-index: 2; padding: 50px 40px; flex: 1; display: flex; align-items: center; justify-content: flex-end; }
        .cbs-text-block { text-align: right; transform: translateY(20px); }
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
        .cbs-footer { position: relative; z-index: 2; background: #ac1420; color: #fff; display: flex; justify-content: center; padding: 25px; align-items: center; }
        .cbs-footer-pill { background: #fff; color: #ac1420; padding: 6px 30px; border-radius: 20px; font-weight: 600; position: absolute; top: -17px; font-size: 1rem; letter-spacing: 3px; }
        .cbs-footer-info { display: flex; gap: 20px; font-size: 1.1rem; font-weight: 400; margin-top: 10px; letter-spacing: 1px; }
        .cbs-divider { margin: 0 10px; opacity: 0.5; }
        @media (max-width: 1100px) { .choose-best-split { flex-direction: column; } .cbs-right { min-height: 400px; } }

        .service-page { padding-bottom: 0; }
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        
        
        
        
        .hero-btn-main { background: #ffffff; color: #000; border: none; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        
        
        @media (max-width: 1024px) {   }
        @media (max-width: 576px) {   }

        .service-main-content { padding: 60px 0; }
        .service-intro { text-align: center; margin-bottom: 50px; }
        .service-intro h2 { font-size: 2.5rem; font-weight: 700; color: #333; }

        .build-team-split { display: flex; border-radius: 12px; overflow: hidden; margin-bottom: 80px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); background: transparent; position: relative; }
        .bts-left { flex: 1; background-color: #111; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; min-height: 450px; padding: 0; overflow: hidden; }
        .bts-workers-container { width: 100%; height: 100%; display: flex; align-items: flex-end; justify-content: center; position: relative; z-index: 2; padding-top: 40px; margin-bottom: 40px; }
        .bts-workers-img { max-width: 450px; height: auto; object-fit: contain; display: block; }
        .bts-web-pill { position: absolute; bottom: 70px; left: 50%; transform: translateX(-50%); background: #fff; padding: 10px 30px; border-radius: 100px; font-weight: 600; color: #333; box-shadow: 0 5px 15px rgba(0,0,0,0.1); z-index: 3; font-size: 1.1rem; }
        .bts-contact-footer { width: 100%; background: #87101c; color: #fff; padding: 15px 30px; display: flex; justify-content: flex-start; align-items: center; position: absolute; bottom: 0; left: 0; z-index: 4; font-size: 1.1rem; font-weight: 500; }
        .bts-contact-item { display: flex; align-items: center; gap: 10px; }
        .bts-contact-divider { margin: 0 20px; opacity: 0.5; }
        .bts-right { flex: 1; background: #e31837; color: #fff; padding: 60px 50px; display: flex; flex-direction: column; justify-content: center; }
        .bts-right h3 { font-size: 2.2rem; font-weight: 700; margin-bottom: 30px; line-height: 1.2; }
        .bts-right p { font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px; opacity: 0.95; font-weight: 400; }
        .bts-right p:last-child { margin-bottom: 0; }
        @media (max-width: 992px) { .build-team-split { flex-direction: column; } .bts-right { padding: 40px 30px; } .bts-workers-img { max-width: 380px; } .bts-left { min-height: 400px; } }
        @media (max-width: 576px) { .bts-contact-footer { flex-direction: column; gap: 10px; padding: 15px; text-align: center; } .bts-contact-divider { display: none; } .bts-web-pill { bottom: 90px; padding: 8px 20px; font-size: 1rem; } .bts-workers-img { max-width: 280px; } .bts-left { min-height: 300px; } }

        .why-choose-us-section { margin-top: 80px; margin-bottom: 80px; }
        .why-choose-us-section .section-title { font-size: 3rem; font-weight: 800; margin-bottom: 25px; color: #000; text-transform: uppercase; }
        .why-choose-us-section .section-intro { font-size: 1.1rem; color: #333; max-width: 100%; margin-bottom: 50px; line-height: 1.6; }
        .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; overflow: hidden; }
        .benefit-card { padding: 60px 40px; display: flex; flex-direction: column; justify-content: center; min-height: 400px; text-align: center; }
        .benefit-card h3 { font-size: 1.8rem; font-weight: 700; margin-bottom: 25px; line-height: 1.2; }
        .benefit-card p { font-size: 1.05rem; line-height: 1.6; }
        .benefit-card.bg-red { background-color: #FE7622; color: #fff; }
        .benefit-card.bg-gray { background-color: #e0e0e0; color: #333; }
        @media (max-width: 992px) { .benefits-grid { grid-template-columns: 1fr; } .benefit-card { min-height: auto; padding: 50px 30px; } .why-choose-us-section .section-title { font-size: 2.2rem; } }

        .insights-section { margin-top: 60px; margin-bottom: 100px; }
        .insights-title { text-align: center; font-size: 2.5rem; color: #555; margin-bottom: 60px; font-weight: 500; }
        .insights-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; }
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
          background: linear-gradient(135deg, #8e2de2, #4a00e0);
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
        .insight-btn { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; border: 1px solid #ddd; border-radius: 8px; color: #555; text-decoration: none; font-weight: 500; transition: all 0.3s ease; background: #fff; }
        .insight-btn:hover { border-color: #FE7622; color: #FE7622; background: #fdf2f3; }
        @media (max-width: 1200px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } .insights-title { font-size: 2rem; } }

        .faq-section { padding: 60px 0 100px; background: #fff; }
        .faq-main-title { font-size: 3rem; font-weight: 400; color: #000; margin-bottom: 20px; text-transform: uppercase; }
        .faq-subtitle { font-size: 1.1rem; color: #333; margin-bottom: 40px; text-transform: uppercase; }
        .faq-list { max-width: 100%; border-top: 1px solid #f1f1f1; }
        .faq-item { border-bottom: 1px solid #f1f1f1; transition: 0.3s; }
        .faq-question-btn { display: flex; align-items: center; width: 100%; padding: 25px 20px; background: none; border: none; cursor: pointer; text-align: left; transition: 0.3s; }
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

export default SecuritySolutions;
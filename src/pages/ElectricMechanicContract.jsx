import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';
import { ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import heroImage from "../assest/manpower-supply-meadia/Electrichero.png";
import btsImg from "../assest/manpower-supply-meadia/electric_mechanic_team.png";
import sectorInsight1Img from "../assest/manpower-supply-meadia/electric_mechanic_team.png";
import sectorInsight2Img from "../assest/manpower-supply-meadia/emc_insight_2.png";
import sectorInsight3Img from "../assest/manpower-supply-meadia/emc_insight_3.png";
import sectorInsight4Img from "../assest/manpower-supply-meadia/emc_insight_4.png";

const ElectricMechanicContract = () => {
    const { t } = useLanguage();
    const [openFaq, setOpenFaq] = React.useState(0);

    const faqs = [
        { question: t.emFaqQ1, answer: t.emFaqA1 },
        { question: t.emFaqQ2, answer: t.emFaqA2 },
        { question: t.emFaqQ3, answer: t.emFaqA3 },
        { question: t.emFaqQ4, answer: t.emFaqA4 },
        { question: t.emFaqQ5, answer: t.emFaqA5 },
        { question: t.emFaqQ6, answer: t.emFaqA6 }
    ];

    return (
        <div className="electric-mechanic-page recruitment-page">
            <SEOHead
                title={t.emSEOTitle}
                description={t.emSEODesc}
                keywords="electrical mechanical manpower UAE, MEP staffing Dubai, industrial electricians UAE, mechanical fitters staffing, electrical engineering workforce Dubai"
                canonical="https://www.smaarelysium.com/electric-mechanic-contract"
                faqSchema={faqs.map(f => ({
                    question: f.question,
                    answer: f.answer
                }))}
            />
            {/* ── Hero Section ── */}
            <div className="container hero-wrapper">
                <section className="home-hero">
                    <div className="home-hero__content">
                        <h1 className="home-hero__title">
                            {t.emHeroTitle}
                        </h1>
                        <p className="home-hero__text">
                            {t.emHeroText}
                        </p>
                        <div className="home-hero__actions">
                            <Link to="/contact" className="hero-btn-main">
                                {t.getInTouch}
                            </Link>
                        </div>
                    </div>
                    <div className="home-hero__image">
                        <img src={heroImage} alt="Electric Mechanic Hero" className="hero-workers-img" />
                    </div>
                </section>
            </div>

            {/* ── Main Content Section ── */}
            <div className="service-content-section">
                <div className="container">

                    <div className="choose-best-split">
                        <div className="cbs-left">
                            <h2>{t.emChooseTitle}</h2>
                            <p>{t.emChooseP1}</p>
                            <p>{t.emChooseP2}</p>
                            <p>{t.emChooseP3}</p>
                        </div>

                        <div className="cbs-right" style={{ backgroundImage: `url(${btsImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="cbs-overlay"></div>
                            <div className="cbs-logo">
                                <span className="logo-main">Smaar Elysium</span>
                                <span>®</span>
                                <span className="logo-slogan">
                                    {t.emLogoSlogan}
                                </span>
                            </div>
                            <div className="cbs-content">
                                <div className="cbs-text-block">
                                    <span className="cbs-go-beyond">{t.emGrid1}</span>
                                    <span className="cbs-ordinary">{t.emGrid2}</span>
                                    <span className="cbs-find">{t.emGrid3}</span>
                                    <span className="cbs-executives">{t.emGrid4}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="build-team-split">
                        <div className="bts-left">
                            <img
                                src={btsImg}
                                alt="Electric Mechanic Team"
                                className="bts-workers-img"
                            />
                        </div>
                        <div className="bts-right">
                            <h3>{t.emBtsTitle}</h3>
                            <p>{t.emBtsP1}</p>
                            <p>{t.emBtsP2}</p>
                            <Link
                                to="/contact"
                                className="hero-btn-main"
                                style={{ background: '#fff', color: '#1f2937' }}
                            >
                                {t.requestStaff}
                            </Link>
                        </div>
                    </div>

                    <div className="domains-container">
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>{t.emDom1Title}</h3>
                                <p>{t.emDom1Desc}</p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>{t.emDom2Title}</h3>
                                <p>{t.emDom2Desc}</p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>{t.emDom3Title}</h3>
                                <p>{t.emDom3Desc}</p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>{t.emDom4Title}</h3>
                                <p>{t.emDom4Desc}</p>
                            </div>
                        </div>
                    </div>

                    <section className="why-choose-us-section">
                        <h2 className="section-title">{t.whyChooseUs}</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card bg-red">
                                <h3>{t.emBen1Title}</h3>
                                <p>{t.emBen1Desc}</p>
                            </div>
                            <div className="benefit-card bg-gray">
                                <h3>{t.emBen2Title}</h3>
                                <p>{t.emBen2Desc}</p>
                            </div>
                            <div className="benefit-card bg-red">
                                <h3>{t.emBen3Title}</h3>
                                <p>{t.emBen3Desc}</p>
                            </div>
                        </div>
                    </section>

                    <div className="quote-section">
                        <div className="quote-container">
                            <div className="quote-label">{t.requestQuote}</div>
                            <h2 className="quote-title">{t.quickFollowUp}</h2>
                            <p className="quote-text">{t.fillForm}</p>
                            <Link to="/contact" className="quote-btn">{t.bookNow}</Link>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <section className="faq-section">
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
                                    <div className="faq-answer-container">
                                        <div className="faq-answer-content">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>

            <div className="insights-section">
                <h2 className="insights-title">{t.csInsightTitle}</h2>
                <div className="insights-grid">
                    <div className="insight-card">
                        <div className="insight-image-wrap">
                            <img src={sectorInsight1Img} alt="Insight 1" />
                        </div>
                        <div className="insight-content">
                            <h3>{t.csInsight1Title}</h3>
                            <p>{t.csInsight1Desc}</p>
                        </div>
                    </div>
                    <div className="insight-card">
                        <div className="insight-image-wrap">
                            <img src={sectorInsight2Img} alt="Insight 2" />
                        </div>
                        <div className="insight-content">
                            <h3>{t.csInsight2Title}</h3>
                            <p>{t.csInsight2Desc}</p>
                        </div>
                    </div>
                    <div className="insight-card">
                        <div className="insight-image-wrap">
                            <img src={sectorInsight3Img} alt="Insight 3" />
                        </div>
                        <div className="insight-content">
                            <h3>{t.csInsight3Title}</h3>
                            <p>{t.csInsight3Desc}</p>
                        </div>
                    </div>
                    <div className="insight-card">
                        <div className="insight-image-wrap">
                            <img src={sectorInsight4Img} alt="Insight 4" />
                        </div>
                        <div className="insight-content">
                            <h3>{t.csInsight4Title}</h3>
                            <p>{t.csInsight4Desc}</p>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
          position: relative;
        }
        .quote-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .quote-text {
          color: #fff;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 20px 0 30px;
          max-width: 600px;
        }
        .quote-btn {
          display: inline-block;
          background: #fff;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .quote-section {
            padding: 40px 25px;
            margin: 60px 0;
          }
          .quote-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .quote-label {
            position: static;
            display: inline-block;
            margin-bottom: 20px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }

        .insights-section { margin-top: 60px; margin-bottom: 100px; padding: 0 40px; }
        .insights-title { text-align: center; font-size: 2.5rem; color: #555; margin-bottom: 60px; font-weight: 500; }
        .insights-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; }
        .insight-card { background: #ff741f; border-radius: 25px; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; }
        .insight-card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .insight-image-wrap { height: 250px; background: #fa3e52; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .insight-image-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .insight-card:hover .insight-image-wrap img { transform: scale(1.1); }
        .insight-content { padding: 30px 25px; flex-grow: 1; display: flex; flex-direction: column; }
        .insight-content h3 { font-size: 1.3rem; color: #fff; margin-bottom: 20px; line-height: 1.4; font-weight: 600; min-height: 3.5rem; }
        .insight-content p { color: #fff; font-size: 0.95rem; line-height: 1.6; margin-bottom: 25px; flex-grow: 1; }
        .insight-btn { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; border: 1px solid #ddd; border-radius: 8px; color: #555; text-decoration: none; font-weight: 500; transition: all 0.3s ease; background: #fff; }
        .insight-btn:hover { border-color: #FE7622; color: #FE7622; background: #fdf2f3; }
        @media (max-width: 1200px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } .insights-title { font-size: 2rem; } }
      `}} />
        </div>
    );
};

export default ElectricMechanicContract;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { Target, Activity, Users, Eye, ShieldCheck, Heart, ChevronRight } from 'lucide-react';
import heroImage from "../assest/manpower-supply-meadia/OilGasSector-hero.png";
import btsImg from "../assest/manpower-supply-meadia/oilandgas_bts.jpg";
import sectorInsight1Img from "../assest/manpower-supply-meadia/oilandgas_insight_1.jpg";
import sectorInsight2Img from "../assest/manpower-supply-meadia/oilandgas_insight_2.jpg";
import sectorInsight3Img from "../assest/manpower-supply-meadia/oilandgas_insight_3.jpg";
import sectorInsight4Img from "../assest/manpower-supply-meadia/oilandgas_insight_4.jpg";

const OilAndGas = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = React.useState(0);

  const faqs = [
    { question: t.ogFaqQ1, answer: t.ogFaqA1 },
    { question: t.ogFaqQ2, answer: t.ogFaqA2 },
    { question: t.ogFaqQ3, answer: t.ogFaqA3 },
    { question: t.ogFaqQ4, answer: t.ogFaqA4 },
    { question: t.ogFaqQ5, answer: t.ogFaqA5 },
    { question: t.ogFaqQ6, answer: t.ogFaqA6 }
  ];

  return (
    <div className="oil-gas-page recruitment-page">
      <SEOHead
        title={t.ogSEOTitle}
        description={t.ogSEODesc}
        keywords="oil gas manpower UAE, petroleum sector staffing, drilling engineers UAE, HSE officers oil gas, refinery manpower supply, upstream downstream staffing UAE, Smaar Elysium oil gas"
        canonical="https://www.smaarelysium.com/oil-and-gas"
        faqSchema={faqs.map(f => ({
          question: f.question,
          answer: f.answer
        }))}
      />
      {/* ── Home Page Style Hero ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              {t.ogHeroTitle}
            </h1>
            <p className="home-hero__text">
              {t.ogHeroText}
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">
                {t.getInTouch}
              </Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img src={heroImage} alt={t.oilGas} className="hero-workers-img" />
          </div>
        </section>
      </div>

      {/* ── Main Content Section ── */}
      <div className="service-content-section">
        <div className="container">
          {/* ── Choose Best Split ── */}
          <div className="choose-best-split">
            <div className="cbs-left">
              <h2>{t.ogChooseTitle}</h2>
              <p>{t.ogChooseP1}</p>
              <p>{t.ogChooseP2}</p>
              <p>{t.ogChooseP3}</p>
            </div>

            <div className="cbs-right" style={{ backgroundImage: `url(${btsImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="cbs-overlay"></div>
              <div className="cbs-logo">
                <span className="logo-main">Smaar Elysium</span>
                <span>®</span>
                <span className="logo-slogan">{t.ogLogoSlogan}</span>
              </div>
              <div className="cbs-content">
                <div className="cbs-text-block">
                  <span className="cbs-go-beyond">{t.ogGrid1}</span>
                  <span className="cbs-ordinary">{t.ogGrid2}</span>
                  <span className="cbs-find">{t.ogGrid3}</span>
                  <span className="cbs-executives">{t.ogGrid4}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Build Team Split */}
          <div className="build-team-split">
            <div className="bts-left">
              <img
                src={btsImg}
                alt={t.oilGas}
                className="bts-workers-img"
              />
            </div>
            <div className="bts-right">
              <h3>{t.ogBtsTitle}</h3>
              <p>{t.ogBtsP1}</p>
              <p>{t.ogBtsP2}</p>
              <Link to="/contact" className="hero-btn-main" style={{ background: '#fff', color: '#1f2937' }}>
                {t.requestStaff}
              </Link>
            </div>
          </div>

          <section className="why-choose-us-section">
            <h2 className="section-title">{t.whyChooseUs}</h2>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>{t.ogBen1Title}</h3>
                <p>{t.ogBen1Desc}</p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>{t.ogBen2Title}</h3>
                <p>{t.ogBen2Desc}</p>
              </div>

              <div className="benefit-card bg-red">
                <h3>{t.ogBen3Title}</h3>
                <p>{t.ogBen3Desc}</p>
              </div>
            </div>
          </section>

          {/* ── Focus on Domains Section (From User Image) ── */}
          <div className="domains-container">
            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.ogDom1Title}</h3>
                <p>{t.ogDom1Desc}</p>
              </div>
            </div>
            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.ogDom2Title}</h3>
                <p>{t.ogDom2Desc}</p>
              </div>
            </div>
            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.ogDom3Title}</h3>
                <p>{t.ogDom3Desc}</p>
              </div>
            </div>
            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.ogDom4Title}</h3>
                <p>{t.ogDom4Desc}</p>
              </div>
            </div>
            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.ogDom5Title}</h3>
                <p>{t.ogDom5Desc}</p>
              </div>
            </div>
            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.ogDom6Title}</h3>
                <p>{t.ogDom6Desc}</p>
              </div>
            </div>
          </div>

          {/* Request a Quote Section */}
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





      {/* Contract Staffing Insights Styles */}
      < style dangerouslySetInnerHTML={{
        __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
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
        .quote-section {
          position: relative;
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
      `}} />
    </div>
  );
};

export default OilAndGas;
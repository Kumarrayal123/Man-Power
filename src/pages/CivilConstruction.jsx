// import React from 'react'

// function CivilConstruction() {
//   return (
//     <div>CivilConstruction</div>
//   )
// }

// export default CivilConstruction


import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';
import { ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import heroImage from "../assest/manpower-supply-meadia/civilconstructionsector-hero.png";
import btsImg from "../assest/manpower-supply-meadia/civilconstruction_bts.jpg";
import sectorInsight1Img from "../assest/manpower-supply-meadia/civilconstruction_insight_1.jpg";
import sectorInsight2Img from "../assest/manpower-supply-meadia/civilconstruction_insight_2.jpg";
import sectorInsight3Img from "../assest/manpower-supply-meadia/civilconstruction_insight_3.jpg";
import sectorInsight4Img from "../assest/manpower-supply-meadia/civilconstruction_insight_4.jpg";

const CivilConstruction = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = React.useState(0);

  const faqs = [
    { question: t.ccFaqQ1, answer: t.ccFaqA1 },
    { question: t.ccFaqQ2, answer: t.ccFaqA2 },
    { question: t.ccFaqQ3, answer: t.ccFaqA3 },
    { question: t.ccFaqQ4, answer: t.ccFaqA4 },
    { question: t.ccFaqQ5, answer: t.ccFaqA5 },
    { question: t.ccFaqQ6, answer: t.ccFaqA6 }
  ];

  return (
    <div className="oil-gas-page recruitment-page">
      <SEOHead
        title={t.ccSEOTitle}
        description={t.ccSEODesc}
        keywords="civil construction manpower UAE, site engineers UAE, construction workers supply, building contractor manpower, skilled labour construction UAE, structural workers UAE, Smaar Elysium construction"
        canonical="https://www.smaarelysium.com/civil-construction"
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
              {t.ccHeroTitle}
            </h1>
            <p className="home-hero__text">
              {t.ccHeroText}
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">
                {t.getInTouch}
              </Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img src={heroImage} alt="Civil Construction Workers" className="hero-workers-img" />
          </div>
        </section>
      </div>

      {/* ── Main Content Section ── */}
      <div className="service-content-section">
        <div className="container">

          {/* ── Choose Best Split (Same as Oil Page) ── */}
          <div className="choose-best-split">
            <div className="cbs-left">
              <h2>{t.ccChooseTitle}</h2>
              <p>{t.ccChooseP1}</p>
              <p>{t.ccChooseP2}</p>
              <p>{t.ccChooseP3}</p>
            </div>

            <div className="cbs-right" style={{ backgroundColor: 'var(--color-primary)' }}>
              <div className="cbs-logo">
                <span className="logo-main">Smaar Elysium</span>
                <span>®</span>
                <span className="logo-slogan">
                  {t.ccLogoSlogan}
                </span>
              </div>
              <div className="cbs-content">
                <div className="cbs-text-block">
                  <span className="cbs-go-beyond">{t.ccGrid1}</span>
                  <span className="cbs-ordinary">{t.ccGrid2}</span>
                  <span className="cbs-find">{t.ccGrid3}</span>
                  <span className="cbs-executives">{t.ccGrid4}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Build Team Split ── */}
          <div className="build-team-split">
            <div className="bts-left">
              <img
                src={btsImg}
                alt="Civil Construction Team"
                className="bts-workers-img"
              />
            </div>
            <div className="bts-right">
              <h3>{t.ccBtsTitle}</h3>
              <p>{t.ccBtsP1}</p>
              <p>{t.ccBtsP2}</p>
              <Link
                to="/contact"
                className="hero-btn-main"
                style={{ background: '#fff', color: '#1f2937' }}
              >
                {t.requestStaff}
              </Link>
            </div>
          </div>

          {/* ── Focus Domains Section ── */}
          <div className="domains-container">
            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.ccDom1Title}</h3>
                <p>{t.ccDom1Desc}</p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.ccDom2Title}</h3>
                <p>{t.ccDom2Desc}</p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.ccDom3Title}</h3>
                <p>{t.ccDom3Desc}</p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.ccDom4Title}</h3>
                <p>{t.ccDom4Desc}</p>
              </div>
            </div>
          </div>

          {/* ── Why Choose Us Section ── */}
          <section className="why-choose-us-section">
            <h2 className="section-title">{t.whyChooseUs}</h2>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>{t.ccBen1Title}</h3>
                <p>{t.ccBen1Desc}</p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>{t.ccBen2Title}</h3>
                <p>{t.ccBen2Desc}</p>
              </div>

              <div className="benefit-card bg-red">
                <h3>{t.ccBen3Title}</h3>
                <p>{t.ccBen3Desc}</p>
              </div>
            </div>
          </section>

          {/* <section className="clients-section">
            <div className="clients-header">
              <h2 className="section-header-mobile">What Our Clients Says</h2>
            </div>
            <br />
            <div className="clients-logos-header">
              <h2 className="section-header-mobile">Our Clients</h2>
            </div>
            <div className="marquee-container">
              <div className="marquee-content left-to-right">
                <div className="marquee-group">
                  {[
                    { name: "Client 1", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                    { name: "Client 2", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
                    { name: "Client 3", img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
                    { name: "Client 4", img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
                    { name: "Client 5", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/IBM_logo.svg" }
                  ].map((client, i) => (
                    <div key={i} className="client-logo-box">
                      <img src={client.img} alt={client.name} />
                    </div>
                  ))}
                </div>
                <div className="marquee-group" aria-hidden="true">
                  {[
                    { name: "Client 1", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                    { name: "Client 2", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
                    { name: "Client 3", img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
                    { name: "Client 4", img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
                    { name: "Client 5", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/IBM_logo.svg" }
                  ].map((client, i) => (
                    <div key={'dup-' + i} className="client-logo-box">
                      <img src={client.img} alt={client.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section> */}

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
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="insight-card">
              <div className="insight-image-wrap">
                <img src={num === 1 ? sectorInsight1Img : num === 2 ? sectorInsight2Img : num === 3 ? sectorInsight3Img : sectorInsight4Img} alt={`Insight ${num}`} />
              </div>
              <div className="insight-content">
                <h3>{t[`csInsight${num}Title`]}</h3>
                <p>{t[`csInsight${num}Desc`]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* ── Clients Section (Same) ── */}
      {/* <section className="clients-section">
            <h2 className="section-header-mobile">Our Clients</h2>
          </section> */}

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
      `}} />
    </div>
  );
};

export default CivilConstruction;

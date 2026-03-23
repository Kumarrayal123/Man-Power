import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';
import { ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import heroImage from "../assest/manpower-supply-meadia/facilitymanagementsector-hero.png";
import btsImg from "../assest/manpower-supply-meadia/manufacture_bts.jpg";
import sectorInsight1Img from "../assest/manpower-supply-meadia/manufacture_insight_1.jpg";
import sectorInsight2Img from "../assest/manpower-supply-meadia/manufacture_insight_2.jpg";
import sectorInsight3Img from "../assest/manpower-supply-meadia/manufacture_insight_3.jpg";
import sectorInsight4Img from "../assest/manpower-supply-meadia/manufacture_insight_4.jpg";

const Manufacture = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = React.useState(0);

  const faqs = [
    { question: t.manFaqQ1, answer: t.manFaqA1 },
    { question: t.manFaqQ2, answer: t.manFaqA2 },
    { question: t.manFaqQ3, answer: t.manFaqA3 },
    { question: t.manFaqQ4, answer: t.manFaqA4 },
    { question: t.manFaqQ5, answer: t.manFaqA5 },
    { question: t.manFaqQ6, answer: t.manFaqA6 }
  ];

  return (
    <div className="oil-gas-page recruitment-page">
      <SEOHead
        title={t.mnSEOTitle}
        description={t.mnSEODesc}
        keywords="manufacturing manpower UAE, factory workers Dubai, production line staff agency, machine operators UAE, manufacturing staffing solutions Dubai"
        canonical="https://www.smaarelysium.com/manufacture"
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
              {t.mnHeroTitle}
            </h1>
            <p className="home-hero__text">
              {t.mnHeroText}
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">
                {t.getInTouch}
              </Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img src={heroImage} alt="Manufacturing Workers" className="hero-workers-img" />
          </div>
        </section>
      </div>

      {/* ── Main Content Section ── */}
      <div className="service-content-section">
        <div className="container">

          {/* ── Choose Best Split (same layout) ── */}
          <div className="choose-best-split">
            <div className="cbs-left">
              <h2>{t.mnChooseTitle}</h2>
              <p>{t.mnChooseP1}</p>
              <p>{t.mnChooseP2}</p>
              <p>{t.mnChooseP3}</p>
            </div>

            <div className="cbs-right" style={{ backgroundImage: `url(${btsImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="cbs-overlay"></div>
              <div className="cbs-logo">
                <span className="logo-main">Smaar Elysium</span>
                <span>®</span>
                <span className="logo-slogan">
                  {t.mnLogoSlogan}
                </span>
              </div>
              <div className="cbs-content">
                <div className="cbs-text-block">
                  <span className="cbs-go-beyond">{t.mnGrid1}</span>
                  <span className="cbs-ordinary">{t.mnGrid2}</span>
                  <span className="cbs-find">{t.mnGrid3}</span>
                  <span className="cbs-executives">{t.mnGrid4}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Build Team Split ── */}
          <div className="build-team-split">
            <div className="bts-left">
              <img
                src={btsImg}
                alt="Manufacturing Team"
                className="bts-workers-img"
              />
            </div>
            <div className="bts-right">
              <h3>{t.mnBtsTitle}</h3>
              <p>{t.mnBtsP1}</p>
              <p>{t.mnBtsP2}</p>
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
                <h3>{t.mnDom1Title}</h3>
                <p>{t.mnDom1Desc}</p>
              </div>
            </div>
            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.mnDom2Title}</h3>
                <p>{t.mnDom2Desc}</p>
              </div>
            </div>
            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.mnDom3Title}</h3>
                <p>{t.mnDom3Desc}</p>
              </div>
            </div>
            <div className="domain-box">
              <div className="domain-content">
                <h3>{t.mnDom4Title}</h3>
                <p>{t.mnDom4Desc}</p>
              </div>
            </div>
          </div>

          {/* ── Why Choose Us Section ── */}
          <section className="why-choose-us-section">
            <h2 className="section-title">{t.whyChooseUs}</h2>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>{t.mnBen1Title}</h3>
                <p>{t.mnBen1Desc}</p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>{t.mnBen2Title}</h3>
                <p>{t.mnBen2Desc}</p>
              </div>

              <div className="benefit-card bg-red">
                <h3>{t.mnBen3Title}</h3>
                <p>{t.mnBen3Desc}</p>
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
          </section>

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
        <h2 className="insights-title">Manufacturing Insights</h2>
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

      {/* ── FAQ Section ── */}
      {/* <section className="faq-section">
            <div className="faq-container">
              <div className="faq-item">
                <div className="faq-question">
                  <span>What manufacturing roles do you supply?</span>
                </div>
                <div className="faq-answer">
                  <p>
                    We provide operators, technicians, quality inspectors, and
                    supervisors.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span>Do you offer temporary or long-term contracts?</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Both – we tailor agreements to your project length and
                    staffing needs.
                  </p>
                </div>
              </div>
            </div>
          </section> */}

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

export default Manufacture;
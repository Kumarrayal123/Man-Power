import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';
import { ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import heroImage from "../assest/manpower-supply-meadia/facilitymanagementsector.png";
import btsImg from "../assest/manpower-supply-meadia/facilitymanagement_bts.jpg";
import sectorInsight1Img from "../assest/manpower-supply-meadia/facilitymanagement_insight_1.jpg";
import sectorInsight2Img from "../assest/manpower-supply-meadia/facilitymanagement_insight_2.jpg";
import sectorInsight3Img from "../assest/manpower-supply-meadia/facilitymanagement_insight_3.jpg";
import sectorInsight4Img from "../assest/manpower-supply-meadia/facilitymanagement_insight_4.jpg";

const FacilityManagement = () => {
  return (
    <div className="oil-gas-page">
      <SEOHead
        title="Facility Management Manpower in UAE | Hard & Soft Services Staffing | Smaar Elysium"
        description="Smaar Elysium provides comprehensive facility management manpower across UAE including MEP technicians, cleaning crews, security personnel, and front-of-house staff for commercial and residential properties."
        keywords="facility management manpower UAE, MEP technicians staffing, cleaning staff agency UAE, facility services staff, building maintenance workers UAE, housekeeping staff UAE, Smaar Elysium facility"
        canonical="https://www.smaarelysium.com/facility-management"
      />
      {/* ── Hero Section ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              Facility Management<br />Sector
            </h1>
            <p className="home-hero__text">
              Delivering premium, tailored facility management manpower
              solutions to maximize asset lifespan and operational uptime across
              commercial, residential, and corporate ecosystems in the UAE.
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img src={heroImage} alt="Facility Management Staff" className="hero-workers-img" />
          </div>
        </section>
      </div>

      {/* ── Main Content Section ── */}
      <div className="service-content-section">
        <div className="container">

          {/* ── Choose Best Split (same layout) ── */}
          <div className="choose-best-split">
            <div className="cbs-left">
              <h2>Professional Facility Management Teams</h2>
              <p>
                Maintaining the modern infrastructure of the UAE requires a proactive
                and highly skilled workforce. We provide the personnel needed to keep your facilities
                running at peak performance.
              </p>
              <p>
                From preventative maintenance technicians to hospitality-trained soft services staff,
                our workforce is designed to enhance the end-user experience and protect your physical assets.
              </p>
              <p>
                With an unwavering focus on sustainability, hygiene, and continuous uptime, our teams
                ensure your properties exceed regulatory and occupant expectations.
              </p>
            </div>

            <div className="cbs-right">
              <div className="cbs-logo">
                <span className="logo-main">Smaar Elysium</span>
                {/* <span className="logo-sub">.ae</span> */}
                <span>®</span>
                <span className="logo-slogan">
                  FACILITY MANAGEMENT EXPERTS
                </span>
              </div>
              <div className="cbs-text-block">
                <span className="cbs-go-beyond">ELEVATING</span>
                <span className="cbs-ordinary">ASSETS</span>
                <span className="cbs-find">OPTIMIZED</span>
                <span className="cbs-executives">PERFORMANCE</span>
              </div>
            </div>
          </div>

          {/* ── Build Team Split ── */}
          <div className="build-team-split">
            <div className="bts-left">
              <img
                src={btsImg}
                alt="Facility Management Team"
                className="bts-workers-img"
              />
            </div>
            <div className="bts-right">
              <h3>Build Your Facility Management Crew</h3>
              <p>
                Whether you need a dedicated hard services engineering team or a discreet
                soft services crew for a luxury property, we deploy the right talent.
              </p>
              <p>
                Every candidate undergoes rigorous background checks and customer-service
                oriented training to guarantee seamless service delivery.
              </p>
              <Link
                to="/contact"
                className="hero-btn-main"
                style={{ background: '#fff', color: '#1f2937' }}
              >
                Request Staff
              </Link>
            </div>
          </div>

          {/* ── Focus Domains Section ── */}
          <div className="domains-container">
            <div className="domain-box">

              <div className="domain-content">
                <h3>Hard Services (MEP)</h3>
                <p>
                  Specialized technicians for predictive and reactive maintenance
                  of electrical, HVAC, and plumbing systems.
                </p>
              </div>
            </div>

            <div className="domain-box">

              <div className="domain-content">
                <h3>Soft Services (Cleaning)</h3>
                <p>
                  BICS-trained cleaning crews, housekeepers, and deep-cleaning
                  specialists ensuring immaculate environments.
                </p>
              </div>
            </div>

            <div className="domain-box">

              <div className="domain-content">
                <h3>Security & Safety</h3>
                <p>
                  SIRA-certified security guards, CCTV operators, and life-safety
                  personnel protecting your people and property.
                </p>
              </div>
            </div>

            <div className="domain-box">

              <div className="domain-content">
                <h3>Front of House & Admin</h3>
                <p>
                  Polished receptionists, concierge staff, and facility coordinators
                  acting as the welcoming face of your organization.
                </p>
              </div>
            </div>
          </div>

          {/* ── Why Choose Us Section ── */}
          <section className="why-choose-us-section">
            <h2 className="section-title">Why Choose Us</h2>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>Consistent Quality</h3>
                <p>
                  Personnel trained to deliver dependable facility
                  management services around the clock.
                </p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>Cost-Effective Teams</h3>
                <p>
                  Flexible staffing solutions that align with your budget and
                  project scale.
                </p>
              </div>

              <div className="benefit-card bg-red">
                <h3>Regulatory Compliance</h3>
                <p>
                  All staff are certified to meet UAE facility management
                  standards and safety regulations.
                </p>
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
              <div className="quote-label">Request a Quote</div>
              <h2 className="quote-title">Get a quick follow up!</h2>
              <p className="quote-text">In case you have any queries or want to hire our adept services, fill up this form, and our experts will get back to you!</p>
              <Link to="/contact" className="quote-btn">Book Now</Link>
            </div>
          </div>

          {/* Contract Staffing Insights Section */}
          <div className="insights-section">
            <h2 className="insights-title">Contract Staffing Insights</h2>

            <div className="insights-grid">
              <div className="insight-card">
                <div className="insight-image-wrap">
                  <img src={sectorInsight1Img} alt="Insight 1" />
                </div>
                <div className="insight-content">
                  <h3>Brief Introduction to Contract Staffing</h3>
                  <p>Contract Staffing is when businesses hire an agency to provide experts for a specific duration or project...</p>
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-image-wrap">
                  <img src={sectorInsight2Img} alt="Insight 2" />
                </div>
                <div className="insight-content">
                  <h3>Need of Contract Staffing</h3>
                  <p>Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes.....</p>
                  {/* <Link to="/insights" className="insight-btn">
                    Read More <ChevronRight size={18} />
                  </Link> */}
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-image-wrap">
                  <img src={sectorInsight3Img} alt="Insight 3" />
                </div>
                <div className="insight-content">
                  <h3>Benefits of getting Contract Staffing</h3>
                  <p>There are tons of advantages to getting Contract Staffing from us, including cost savings and agility.</p>
                  {/* <Link to="/insights" className="insight-btn">
                    Read More <ChevronRight size={18} />
                  </Link> */}
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-image-wrap">
                  <img src={sectorInsight4Img} alt="Insight 4" />
                </div>
                <div className="insight-content">
                  <h3>How can Contract Staffing work at Your Advantage?</h3>
                  <p>Staying lean and agile is important for every organization. And having a strong temporary workforce...</p>
                  {/* <Link to="/insights" className="insight-btn">
                    Read More <ChevronRight size={18} />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* ── FAQ Section ── */}
          {/* <section className="faq-section">
            <div className="faq-container">
              <div className="faq-item">
                <div className="faq-question">
                  <span>What types of facility staff do you provide?</span>
                </div>
                <div className="faq-answer">
                  <p>
                    We supply technicians, cleaners, security officers,
                    and administrative personnel.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span>Can you support 24/7 operations?</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Yes, we maintain rosters and backup teams for round‑the‑clock
                    coverage.
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          {/* ── Clients Section (Same) ── */}
          {/* <section className="clients-section">
            <h2 className="section-header-mobile">Our Clients</h2>
          </section> */}

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

        .insights-section { margin-top: 60px; margin-bottom: 100px; padding: 0 5%; }
        .insights-title { text-align: center; font-size: 2.5rem; color: #555; margin-bottom: 60px; font-weight: 500; }
        .insights-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; }
        .insight-card { background: #f8f9fa; border-radius: 25px; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; }
        .insight-card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .insight-image-wrap { height: 250px; background: #fa3e52; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .insight-image-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .insight-card:hover .insight-image-wrap img { transform: scale(1.1); }
        .insight-content { padding: 30px 25px; flex-grow: 1; display: flex; flex-direction: column; }
        .insight-content h3 { font-size: 1.3rem; color: #333; margin-bottom: 20px; line-height: 1.4; font-weight: 600; min-height: 3.5rem; }
        .insight-content p { color: #777; font-size: 0.95rem; line-height: 1.6; margin-bottom: 25px; flex-grow: 1; }
        .insight-btn { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; border: 1px solid #ddd; border-radius: 8px; color: #555; text-decoration: none; font-weight: 500; transition: all 0.3s ease; background: #fff; }
        .insight-btn:hover { border-color: #FE7622; color: #FE7622; background: #fdf2f3; }
        @media (max-width: 1200px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } .insights-title { font-size: 2rem; } }
      `}} />
    </div>
  );
};

export default FacilityManagement;
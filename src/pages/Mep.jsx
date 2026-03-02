import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';
import { ChevronRight } from 'lucide-react';

const Mep = () => {
  return (
    <div className="oil-gas-page">
      {/* ── Hero Section ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              MEP (Mechanical, Electrical & Plumbing)<br />Sector
            </h1>
            <p className="home-hero__text">
              Providing specialised MEP manpower for installations, maintenance
              and commissioning across the UAE.
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img
              src="https://manpower.ae/wp-content/uploads/2024/12/group_7-e1734330734971-600x511.png"
              alt="MEP Technicians"
              className="hero-workers-img"
              style={{
                width: '100%',
                maxWidth: '550px',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))'
              }}
            />
          </div>
        </section>
      </div>

      {/* ── Main Content Section ── */}
      <div className="service-content-section">
        <div className="container">

          {/* ── Choose Best Split (same layout) ── */}
          <div className="choose-best-split">
            <div className="cbs-left">
              <h2>Expert MEP Workforce</h2>
              <p>
                Our teams consist of certified mechanical, electrical, and
                plumbing technicians ready for installation and service work.
              </p>
              <p>
                We support HVAC, power distribution, fire protection, and
                plumbing systems with skilled staff.
              </p>
              <p>
                Personnel are accustomed to working on complex commercial and
                industrial projects.
              </p>
            </div>

            <div className="cbs-right">
              <div className="cbs-logo">
                <span className="logo-main">manpower</span>
                <span className="logo-sub">.ae</span>
                <span>®</span>
                <span className="logo-slogan">
                  MEP SPECIALISTS
                </span>
              </div>
              <div className="cbs-text-block">
                <span className="cbs-go-beyond">POWERING</span>
                <span className="cbs-ordinary">BUILDINGS</span>
                <span className="cbs-find">WITH</span>
                <span className="cbs-executives">EXPERTISE</span>
              </div>
            </div>
          </div>

          {/* ── Build Team Split ── */}
          <div className="build-team-split">
            <div className="bts-left">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
                alt="MEP Team"
                className="bts-workers-img"
              />
            </div>
            <div className="bts-right">
              <h3>Build Your MEP Team</h3>
              <p>
                From electricians to plumbers and HVAC technicians, we have the
                manpower you need.
              </p>
              <p>
                Every member is vetted for technical skills and safety
                compliance.
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
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>HVAC & Refrigeration</h3>
                <p>
                  Technicians experienced in climate control and cooling systems.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Electrical Systems</h3>
                <p>
                  Electricians for wiring, panels, and power distribution work.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Plumbing & Drainage</h3>
                <p>
                  Plumbers skilled in piping, fixtures, and water systems.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Fire Protection</h3>
                <p>
                  Specialists in sprinklers, alarms, and safety equipment.
                </p>
              </div>
            </div>
          </div>

          {/* ── Why Choose Us Section ── */}
          <section className="why-choose-us-section">
            <h2 className="section-title">Why Choose Us</h2>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>Technical Expertise</h3>
                <p>
                  Workforce with hands-on experience in MEP installations and
                  maintenance.
                </p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>Safety Compliance</h3>
                <p>
                  All staff trained in UAE MEP safety and best practices.
                </p>
              </div>

              <div className="benefit-card bg-red">
                <h3>Project Flexibility</h3>
                <p>
                  Teams can be scaled from small contracts to large complex
                  projects.
                </p>
              </div>
            </div>
          </section>

            <section className="clients-section">
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
                  <img src="https://manpower.ae/wp-content/uploads/2024/12/group_5-e1734335548682.png" alt="Insight 1" />
                </div>
                <div className="insight-content">
                  <h3>Brief Introduction to Contract Staffing</h3>
                  <p>Contract Staffing is when businesses hire an agency to provide experts for a specific duration or project...</p>
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-image-wrap">
                  <img src="https://manpower.ae/wp-content/uploads/2024/12/group_4-e1734335583764.png" alt="Insight 2" />
                </div>
                <div className="insight-content">
                  <h3>Need of Contract Staffing</h3>
                  <p>Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes.....</p>
                  <Link to="/insights" className="insight-btn">
                    Read More <ChevronRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-image-wrap">
                  <img src="https://manpower.ae/wp-content/uploads/2024/12/group_1-e1734335607370.png" alt="Insight 3" />
                </div>
                <div className="insight-content">
                  <h3>Benefits of getting Contract Staffing</h3>
                  <p>There are tons of advantages to getting Contract Staffing from us, including cost savings and agility.</p>
                  <Link to="/insights" className="insight-btn">
                    Read More <ChevronRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-image-wrap">
                  <img src="https://manpower.ae/wp-content/uploads/2024/12/group_5-e1734335634676.png" alt="Insight 4" />
                </div>
                <div className="insight-content">
                  <h3>How can Contract Staffing work at Your Advantage?</h3>
                  <p>Staying lean and agile is important for every organization. And having a strong temporary workforce...</p>
                  <Link to="/insights" className="insight-btn">
                    Read More <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── FAQ Section ── */}
          {/* <section className="faq-section">
            <div className="faq-container">
              <div className="faq-item">
                <div className="faq-question">
                  <span>What MEP trades do you provide?</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Electricians, HVAC technicians, plumbers, and fire protection
                    specialists.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span>Are your technicians certified?</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Yes, all technicians hold relevant certifications for their
                    trade.
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
        .insights-section {
          margin-top: 60px;
          margin-bottom: 100px;
          padding: 0 5%;
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
          background: #f8f9fa;
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
          color: #333;
          margin-bottom: 20px;
          line-height: 1.4;
          font-weight: 600;
          min-height: 3.5rem;
        }
        .insight-content p {
          color: #777;
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
          border-color: #f23346;
          color: #f23346;
          background: #fdf2f3;
        }
        
        /* Request a Quote Section */
        .quote-section {
          margin: 60px 0;
        }
        .quote-container {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 15px;
          padding: 50px 40px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          margin: 0 5%;
          color: white;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .quote-text {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.6;
          margin-bottom: 0;
          flex: 1;
        }
        .quote-btn {
          background: white;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          display: inline-block;
          white-space: nowrap;
          transition: all 0.3s ease;
          border: 2px solid white;
        }
        .quote-btn:hover {
          background: #f23346;
          color: white;
          border-color: #f23346;
        }
        
        @media (max-width: 1200px) {
          .insights-grid { grid-template-columns: repeat(2, 1fr); }
          .quote-container {
            padding: 40px 30px;
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .insights-grid { grid-template-columns: 1fr; }
          .insights-title { font-size: 2rem; }
          .quote-container {
            flex-direction: column;
            text-align: center;
            padding: 35px 20px;
            gap: 20px;
          }
          .quote-title {
            margin-top: 20px;
            margin-bottom: 15px;
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

export default Mep;
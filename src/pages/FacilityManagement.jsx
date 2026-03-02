import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';

const FacilityManagement = () => {
  return (
    <div className="oil-gas-page">
      {/* ── Hero Section ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              Facility Management<br />Sector
            </h1>
            <p className="home-hero__text">
              Delivering efficient and reliable facility management manpower
              solutions across the UAE for commercial, residential, and industrial sites.
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
              alt="Facility Management Staff"
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
              <h2>Professional Facility Management Teams</h2>
              <p>
                We provide skilled personnel to keep your facilities running
                smoothly, from maintenance technicians to site supervisors.
              </p>
              <p>
                Our workforce handles cleaning, security, mechanical repairs,
                and day-to-day operational support tailored to your needs.
              </p>
              <p>
                With an emphasis on sustainability and uptime, our teams
                ensure facilities meet regulatory and performance standards.
              </p>
            </div>

            <div className="cbs-right">
              <div className="cbs-logo">
                <span className="logo-main">manpower</span>
                <span className="logo-sub">.ae</span>
                <span>®</span>
                <span className="logo-slogan">
                  FACILITY MANAGEMENT EXPERTS
                </span>
              </div>
              <div className="cbs-text-block">
                <span className="cbs-go-beyond">MAINTAINING</span>
                <span className="cbs-ordinary">EFFICIENCY</span>
                <span className="cbs-find">WITH</span>
                <span className="cbs-executives">RELIABLE STAFF</span>
              </div>
            </div>
          </div>

          {/* ── Build Team Split ── */}
          <div className="build-team-split">
            <div className="bts-left">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
                alt="Facility Management Team"
                className="bts-workers-img"
              />
            </div>
            <div className="bts-right">
              <h3>Build Your Facility Management Crew</h3>
              <p>
                From janitorial staff to HVAC technicians, we have the
                personnel ready to support your operations.
              </p>
              <p>
                Every candidate undergoes thorough vetting and skill assessments
                to guarantee quality service delivery.
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
                <h3>Maintenance & Repairs</h3>
                <p>
                  Skilled technicians for electrical, plumbing, and mechanical
                  upkeep.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Cleaning & Janitorial</h3>
                <p>
                  Professional cleaning crews ensuring hygienic, presentable
                  environments.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Security Services</h3>
                <p>
                  Trained guards and surveillance teams to protect your
                  premises.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Administrative Support</h3>
                <p>
                  Receptionists, coordinators, and facility managers to keep
                  things organised.
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
    </div>
  );
};

export default FacilityManagement;
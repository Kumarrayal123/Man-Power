import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';

const Manufacture = () => {
  return (
    <div className="oil-gas-page">
      {/* ── Hero Section ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              Manufacturing<br />Sector
            </h1>
            <p className="home-hero__text">
              Supplying skilled manpower for manufacturing plants, assembly
              lines and industrial production facilities across the UAE.
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
              alt="Manufacturing Workers"
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
              <h2>Manufacturing Manpower Solutions</h2>
              <p>
                We provide experienced technicians, operators, and assembly
                line staff to keep production lines running efficiently.
              </p>
              <p>
                Our personnel cover machining, fabrication, quality control, and
                process engineering roles.
              </p>
              <p>
                Staff are trained to meet industry safety standards and are
                familiar with modern manufacturing systems.
              </p>
            </div>

            <div className="cbs-right">
              <div className="cbs-logo">
                <span className="logo-main">manpower</span>
                <span className="logo-sub">.ae</span>
                <span>®</span>
                <span className="logo-slogan">
                  MANUFACTURING INDUSTRY EXPERTS
                </span>
              </div>
              <div className="cbs-text-block">
                <span className="cbs-go-beyond">PRODUCING</span>
                <span className="cbs-ordinary">PERFORMANCE</span>
                <span className="cbs-find">WITH</span>
                <span className="cbs-executives">SKILLED WORKERS</span>
              </div>
            </div>
          </div>

          {/* ── Build Team Split ── */}
          <div className="build-team-split">
            <div className="bts-left">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
                alt="Manufacturing Team"
                className="bts-workers-img"
              />
            </div>
            <div className="bts-right">
              <h3>Build Your Manufacturing Team</h3>
              <p>
                Whether you need machine operators, technicians or supervisors,
                we have ready candidates.
              </p>
              <p>
                All recruits undergo strict vetting to ensure productivity and
                safety on site.
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
                <h3>Assembly & Production</h3>
                <p>
                  Skilled assemblers and line operators for high-volume
                  environments.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Quality Control</h3>
                <p>
                  Inspectors and technicians ensuring standards are met at every
                  stage.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Maintenance & Engineering</h3>
                <p>
                  Maintenance crews and engineers keeping equipment running
                  reliably.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Logistics & Handling</h3>
                <p>
                  Forklift operators and material handlers for seamless supply
                  within the plant.
                </p>
              </div>
            </div>
          </div>

          {/* ── Why Choose Us Section ── */}
          <section className="why-choose-us-section">
            <h2 className="section-title">Why Choose Us</h2>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>Industry Experience</h3>
                <p>
                  Teams familiar with manufacturing processes and equipment.
                </p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>Safety First</h3>
                <p>
                  Workforce trained on factory safety protocols and PPE use.
                </p>
              </div>

              <div className="benefit-card bg-red">
                <h3>Flexible Staffing</h3>
                <p>
                  Scale up or down according to production demands.
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

        </div>
      </div>
    </div>
  );
};

export default Manufacture;
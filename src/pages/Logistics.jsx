import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';

const Logistics = () => {
  return (
    <div className="oil-gas-page">
      {/* ── Hero Section ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              Logistics<br />Sector
            </h1>
            <p className="home-hero__text">
              Reliable logistics manpower solutions ensuring smooth supply chain
              operations across the UAE.
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
              alt="Logistics Team"
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
              <h2>Expert Logistics Manpower</h2>
              <p>
                From warehouse staff to supply chain coordinators, we provide
                the personnel needed to keep goods moving.
              </p>
              <p>
                Our workforce supports transportation, inventory management,
                and distribution tasks across multiple sectors.
              </p>
              <p>
                We supply qualified drivers, loaders, logistic coordinators, and
                supply chain analysts compliant with UAE regulations.
              </p>
            </div>

            <div className="cbs-right">
              <div className="cbs-logo">
                <span className="logo-main">manpower</span>
                <span className="logo-sub">.ae</span>
                <span>®</span>
                <span className="logo-slogan">
                  LOGISTICS SECTOR SPECIALISTS
                </span>
              </div>
              <div className="cbs-text-block">
                <span className="cbs-go-beyond">MOVING</span>
                <span className="cbs-ordinary">YOUR</span>
                <span className="cbs-find">SUPPLY</span>
                <span className="cbs-executives">FORWARD</span>
              </div>
            </div>
          </div>

          {/* ── Build Team Split ── */}
          <div className="build-team-split">
            <div className="bts-left">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
                alt="Logistics Staff"
                className="bts-workers-img"
              />
            </div>
            <div className="bts-right">
              <h3>Build Your Logistics Crew</h3>
              <p>
                Whether you need drivers, warehouse operators, or planners, we
                have ready-to-go teams.
              </p>
              <p>
                Rigorous vetting ensures every staff member is trained in safety
                and efficiency.
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
                <h3>Transportation & Delivery</h3>
                <p>
                  Skilled drivers and couriers for timely, safe deliveries.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Warehouse Operations</h3>
                <p>
                  Forklift operators and inventory staff to manage storage
                  facilities.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Supply Chain Planning</h3>
                <p>
                  Analysts and coordinators to optimise logistics networks.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Customs & Compliance</h3>
                <p>
                  Experts ensuring shipments meet regulatory requirements.
                </p>
              </div>
            </div>
          </div>

          {/* ── Why Choose Us Section ── */}
          <section className="why-choose-us-section">
            <h2 className="section-title">Why Choose Us</h2>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>Fast Mobilization</h3>
                <p>
                  Quick deployment of logistics teams to keep your operations
                  moving.
                </p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>Regulated Training</h3>
                <p>
                  Staff trained in transport safety, handling, and UAE
                  procedures.
                </p>
              </div>

              <div className="benefit-card bg-red">
                <h3>Scalable Solutions</h3>
                <p>
                  Workforce expandable based on your supply chain demands.
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
                  <span>Do you supply drivers and warehouse staff?</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Yes, we cover both logistics delivery and storage roles.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span>Can you handle cross-border logistics?</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Our workforce includes customs experts and planners for
                    international shipments.
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

export default Logistics;
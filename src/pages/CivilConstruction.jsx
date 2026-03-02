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

const CivilConstruction = () => {
  return (
    <div className="oil-gas-page">
      
      {/* ── Hero Section ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              Civil Construction<br />Sector
            </h1>
            <p className="home-hero__text">
              Delivering highly skilled manpower for infrastructure, commercial,
              residential, and industrial construction projects across the UAE.
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
              alt="Construction Workers"
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

          {/* ── Choose Best Split (Same as Oil Page) ── */}
          <div className="choose-best-split">
            <div className="cbs-left">
              <h2>Expert Manpower for Civil Construction</h2>
              <p>
                The Civil Construction industry demands precision, safety,
                and technical expertise. We provide qualified manpower that
                ensures projects are delivered on time and within budget.
              </p>
              <p>
                From foundations and structural works to finishing and
                infrastructure, our workforce supports every stage of
                development.
              </p>
              <p>
                We supply certified engineers, supervisors, safety officers,
                and skilled labor tailored to UAE construction standards.
              </p>
            </div>

            <div className="cbs-right">
              <div className="cbs-logo">
                <span className="logo-main">manpower</span>
                <span className="logo-sub">.ae</span>
                <span>®</span>
                <span className="logo-slogan">
                  CONSTRUCTION SECTOR SPECIALISTS
                </span>
              </div>
              <div className="cbs-text-block">
                <span className="cbs-go-beyond">BUILDING THE</span>
                <span className="cbs-ordinary">FUTURE</span>
                <span className="cbs-find">RELIABLE</span>
                <span className="cbs-executives">WORKFORCE</span>
              </div>
            </div>
          </div>

          {/* ── Build Team Split ── */}
          <div className="build-team-split">
            <div className="bts-left">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
                alt="Civil Construction Team"
                className="bts-workers-img"
              />
            </div>
            <div className="bts-right">
              <h3>Build Your Civil Construction Team</h3>
              <p>
                Whether it’s a high-rise building, road project, or industrial
                facility — we provide skilled manpower ready to deploy.
              </p>
              <p>
                Our vetting process guarantees trained, safety-compliant,
                and experienced professionals for every role.
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
                <h3>Infrastructure & Structural Works</h3>
                <p>
                  Skilled manpower for bridges, roads, foundations,
                  and reinforced concrete structures.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Commercial & Residential Projects</h3>
                <p>
                  Professional teams for towers, villas,
                  malls, and residential communities.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>MEP & Finishing Support</h3>
                <p>
                  Experienced workforce for electrical,
                  plumbing, HVAC, and finishing works.
                </p>
              </div>
            </div>

            <div className="domain-box">
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Heavy Equipment Operators</h3>
                <p>
                  Certified operators for cranes,
                  excavators, loaders, and construction machinery.
                </p>
              </div>
            </div>
          </div>

          {/* ── Why Choose Us Section ── */}
          <section className="why-choose-us-section">
            <h2 className="section-title">Why Choose Us</h2>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>Rapid Mobilization</h3>
                <p>
                  Fast deployment of manpower to keep your
                  construction timeline on track.
                </p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>Strict Safety Standards</h3>
                <p>
                  Workforce trained under UAE HSE
                  and construction compliance regulations.
                </p>
              </div>

              <div className="benefit-card bg-red">
                <h3>Experienced Professionals</h3>
                <p>
                  Engineers, supervisors, and skilled labor
                  with proven on-site experience.
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
        

          {/* ── Clients Section (Same) ── */}
          {/* <section className="clients-section">
            <h2 className="section-header-mobile">Our Clients</h2>
          </section> */}

        </div>
      </div>
    </div>



  );
};

export default CivilConstruction;

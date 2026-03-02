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

export default CivilConstruction;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';
import { ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import heroImage from "../assest/manpower-supply-meadia/facilitymanagementsector-hero.png";
import btsImg from "../assest/manpower-supply-meadia/manufacture_bts.jpg";
import sectorInsight1Img from "../assest/manpower-supply-meadia/manufacture_insight_1.jpg";
import sectorInsight2Img from "../assest/manpower-supply-meadia/manufacture_insight_2.jpg";
import sectorInsight3Img from "../assest/manpower-supply-meadia/manufacture_insight_3.jpg";
import sectorInsight4Img from "../assest/manpower-supply-meadia/manufacture_insight_4.jpg";

const Manufacture = () => {
  return (
    <div className="oil-gas-page">
      <SEOHead
        title="Manufacturing Sector Manpower in UAE | Industrial & Production Workers | Smaar Elysium"
        description="Smaar Elysium delivers certified manufacturing manpower across UAE including CNC operators, welders, quality inspectors, assembly line workers, and industrial maintenance technicians for factories and production plants."
        keywords="manufacturing manpower UAE, industrial workers supply, CNC operators UAE, welders staffing UAE, production workers agency, quality control technicians, Smaar Elysium manufacturing"
        canonical="https://www.smaarelysium.com/manufacturing"
      />
      {/* ── Hero Section ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              Manufacturing<br />Sector
            </h1>
            <p className="home-hero__text">
              Supplying high-performance, skilled manpower for heavy manufacturing, assembly
              lines, and precision industrial production facilities across the UAE.
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">
                Get in Touch
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
              <h2>Manufacturing Manpower Solutions</h2>
              <p>
                As industrial zones and smart manufacturing hubs expand across the UAE,
                having a reliable, technically proficient workforce is the key to scalability.
              </p>
              <p>
                We provide certified CNC operators, industrial electricians, QA/QC inspectors,
                and seasoned assembly line supervisors to keep your production operating around the clock.
              </p>
              <p>
                Our personnel are meticulously trained to adhere strictly to
                modern manufacturing methodologies, lean principles, and uncompromising factory safety standards.
              </p>
            </div>

            <div className="cbs-right">
              <div className="cbs-logo">
                <span className="logo-main">Smaar Elysium</span>
                {/* <span className="logo-sub">.ae</span> */}
                <span>®</span>
                <span className="logo-slogan">
                  MANUFACTURING INDUSTRY EXPERTS
                </span>
              </div>
              <div className="cbs-text-block">
                <span className="cbs-go-beyond">ACCELERATING</span>
                <span className="cbs-ordinary">PRODUCTION</span>
                <span className="cbs-find">WITH</span>
                <span className="cbs-executives">EXPERT LABOR</span>
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
              <h3>Build Your Manufacturing Team</h3>
              <p>
                Whether launching a new production shift or supplementing your core
                machining team, we provide precisely matched industrial talent.
              </p>
              <p>
                All recruits undergo strict technical vetting and practical skills
                assessments to ensure immediate on-site productivity and safety awareness.
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
                <h3>Assembly & Production</h3>
                <p>
                  High-volume assembly line workers, packaging staff, and
                  production supervisors ensuring output targets are consistently met.
                </p>
              </div>
            </div>

            <div className="domain-box">

              <div className="domain-content">
                <h3>Machining & Fabrication</h3>
                <p>
                  Certified CNC programmers, welders (TIG/MIG), metal fabricators,
                  and tool/die makers for precision engineering tasks.
                </p>
              </div>
            </div>

            <div className="domain-box">

              <div className="domain-content">
                <h3>Quality Assurance (QC)</h3>
                <p>
                  Detail-oriented inspectors and metrology technicians ensuring zero
                  defects and strict adherence to ISO manufacturing standards.
                </p>
              </div>
            </div>

            <div className="domain-box">

              <div className="domain-content">
                <h3>Industrial Maintenance</h3>
                <p>
                  Preventative and reactive maintenance crews, including millwrights
                  and heavy equipment mechanics, maximizing plant uptime.
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
                  <p> Staying lean and agile is important for every organization. And having a strong temporary workforce...</p>
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
          border-color: #FE7622;
          color: #FE7622;
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
          background: #FE7622;
          color: white;
          border-color: #FE7622;
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

export default Manufacture;
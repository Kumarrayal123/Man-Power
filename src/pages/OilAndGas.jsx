import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';
import { Target, Activity, Users, Eye, ShieldCheck, Heart, ChevronRight } from 'lucide-react';
import heroImage from "../assest/manpower-supply-meadia/OilGasSector-hero.png";
import btsImg from "../assest/manpower-supply-meadia/oilandgas_bts.jpg";
import sectorInsight1Img from "../assest/manpower-supply-meadia/oilandgas_insight_1.jpg";
import sectorInsight2Img from "../assest/manpower-supply-meadia/oilandgas_insight_2.jpg";
import sectorInsight3Img from "../assest/manpower-supply-meadia/oilandgas_insight_3.jpg";
import sectorInsight4Img from "../assest/manpower-supply-meadia/oilandgas_insight_4.jpg";

const OilAndGas = () => {
  return (
    <div className="oil-gas-page">
      {/* ── Home Page Style Hero ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">Oil & Gas<br />Sector</h1>
            <p className="home-hero__text">Empowering the UAE energy sector with specialized engineering, technical, and operational experts. We provide reliable manpower solutions for upstream, midstream, and downstream operations.</p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">Get in Touch</Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img src={heroImage} alt="Oil & Gas Workers" className="hero-workers-img" />
          </div>
        </section>
      </div>

      {/* ── Main Content Section ── */}
      <div className="service-content-section">
        <div className="container">
          {/* Choose Best For You Banner */}
          {/* <div className="choose-best-split">
            <div className="cbs-left">
              <h2>Expert Manpower for a Demanding Industry</h2>
              <p>The Oil & Gas sector requires 100% precision, uncompromising safety, and deep technical expertise. At Smaar Elysium, we understand these critical demands and provide manpower solutions that power your operations without interruption.</p>
              <p>From extraction and drilling to refining and distribution, our staff is equipped to handle the complexities of the energy landscape.</p>
              <p>We provide certified professionals who aren't just workers, but experts in their respective fields, ensuring that your projects in the UAE stay on track and compliant with all international energy standards.</p>
            </div>

            <div className="cbs-right">
              <div className="cbs-logo">
                <span className="logo-main">Smaar Elysium</span>
                <span className="logo-slogan" style={{ display: 'block' }}>ENERGY SECTOR SPECIALISTS</span>
              </div>
              <div className="cbs-overlay"></div>
              <div className="cbs-content">
                <div className="cbs-text-block">
                  <span className="cbs-go-beyond">POWERING THE</span>
                  <span className="cbs-ordinary">FUTURE</span>
                  <span className="cbs-find">UNMATCHED ENERGY</span>
                  <span className="cbs-executives">EXPERTISE</span>
                </div>
              </div>
            </div>
          </div> */}

          {/* Build Team Split */}
          <div className="build-team-split">
            <div className="bts-left">
              <img
                src={btsImg}
                alt="Oil & Gas Technical Staff"
                className="bts-workers-img"
              />
            </div>
            <div className="bts-right">
              <h3>Build Your Expert Oil & Gas Team</h3>
              <p>Whether you need a full crew for an offshore rig, specialized engineers for a refinery, or safety officers for a new pipeline project, we have the talent you need.</p>
              <p>Our rigorous vetting process ensures that every professional we provide is not only highly skilled but also deeply committed to HSE (Health, Safety, and Environment) zero-harm policies and operational excellence.</p>
              <Link to="/contact" className="hero-btn-main" style={{ background: '#fff', color: '#1f2937' }}>Request Staff</Link>
            </div>
          </div>

          {/* ── Focus on Domains Section (From User Image) ── */}
          <div className="domains-container">
            <div className="domain-box">
              
              <div className="domain-content">
                <h3>Upstream Extraction</h3>
                <p>Skilled personnel for exploration and production, including drilling engineers, rig operators, geoscientists, and offshore survival-certified crews.</p>
              </div>
            </div>
            <div className="domain-box">
              
              <div className="domain-content">
                <h3>Midstream Logistics</h3>
                <p>Expertise in storage and transportation with pipeline technicians, terminal operators, and logistics coordinators ensuring seamless energy distribution.</p>
              </div>
            </div>

            {/* New Card 3 */}
            <div className="domain-box">
              
              <div className="domain-content">
                <h3>Downstream Refining</h3>
                <p>We provide chemical engineers, process operators, and maintenance technicians specialized in refinery production, petrochemicals, and facility turnarounds.</p>
              </div>
            </div>

            {/* New Card 4 */}
            <div className="domain-box">
              
              <div className="domain-content">
                <h3>Shutdowns & Turnarounds</h3>
                <p>Rapid mobilization of large, multi-disciplinary workforces for scheduled plant maintenance, ensuring minimal downtime and strict operational safety.</p>
              </div>
            </div>

            {/* New Card 5 */}
            <div className="domain-box">
              
              <div className="domain-content">
                <h3>HSE & Compliance</h3>
                <p>Dedicated Safety Officers, QA/QC Inspectors, and Environmental Engineers ensuring your operations meet all local and international energy sector regulations.</p>
              </div>
            </div>

            {/* New Card 6 */}
            <div className="domain-box">
              
              <div className="domain-content">
                <h3>Technical Maintenance</h3>
                <p>Supplying certified welders, pipefitters, electricians, and mechanical fitters experienced in maintaining complex oilfield and plant machinery.</p>
              </div>
            </div>
          </div>


          {/* ── Our Clients Section (From Home Page) ── */}
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
                  <Link to="/insights" className="insight-btn">
                    Read More <ChevronRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-image-wrap">
                  <img src={sectorInsight2Img} alt="Insight 2" />
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
                  <img src={sectorInsight3Img} alt="Insight 3" />
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
                  <img src={sectorInsight4Img} alt="Insight 4" />
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



        </div>
      </div>

      {/* Contract Staffing Insights Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
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
        .quote-section {
          position: relative;
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
        @media (max-width: 1200px) {
          .insights-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .insights-grid { grid-template-columns: 1fr; }
          .insights-title { font-size: 2rem; }
        }
      `}} />
    </div>
  );
};

export default OilAndGas;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';
import { ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import heroImage from "../assest/manpower-supply-meadia/Railwayhero.png";
import btsImg from "../assest/manpower-supply-meadia/railway_contract_team.png";
import sectorInsight1Img from "../assest/manpower-supply-meadia/railway_contract_team.png";
import sectorInsight2Img from "../assest/manpower-supply-meadia/rc_insight_2.png";
import sectorInsight3Img from "../assest/manpower-supply-meadia/rc_insight_3.png";
import sectorInsight4Img from "../assest/manpower-supply-meadia/rc_insight_4.png";

const RailwayContract = () => {
    return (
        <div className="railway-contract-page">
            <SEOHead
                title="Railway Contract Manpower in UAE | Infrastructure Staffing | Smaar Elysium"
                description="Smaar Elysium provides highly skilled railway contract manpower across UAE, including railway engineers, track specialists, and transport infrastructure staff."
                keywords="railway contract manpower UAE, railway engineering staffing, transport infrastructure workforce Dubai, track maintenance workers UAE"
                canonical="https://www.smaarelysium.com/railway-contract"
            />
            {/* ── Hero Section ── */}
            <div className="container hero-wrapper">
                <section className="home-hero">
                    <div className="home-hero__content">
                        <h1 className="home-hero__title">
                            Railway Contract<br />Sector
                        </h1>
                        <p className="home-hero__text">
                            Providing highly specialized railway engineering and infrastructure
                            manpower to support the UAE’s rapidly expanding transit networks.
                        </p>
                        <div className="home-hero__actions">
                            <Link to="/contact" className="hero-btn-main">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                    <div className="home-hero__image">
                        <img src={heroImage} alt="Railway Contract Hero" className="hero-workers-img" />
                    </div>
                </section>
            </div>

            {/* ── Main Content Section ── */}
            <div className="service-content-section">
                <div className="container">

                    <div className="choose-best-split">
                        <div className="cbs-left">
                            <h2>Expert Railway Infrastructure Teams</h2>
                            <p>
                                As the UAE continues to connect its cities with world-class rail and metro networks, the demand for specialized rail professionals has never been higher. We supply the expertise needed.
                            </p>
                            <p>
                                From signaling engineers and track laying specialists to safety officers focused on railway protocols, our personnel are trained for this highly regulated environment.
                            </p>
                            <p>
                                We partner with global rail contractors to ensure steady, reliable workforce deployment across massive multi-year transit projects.
                            </p>
                        </div>

                        <div className="cbs-right">
                            <div className="cbs-logo">
                                <span className="logo-main">Smaar Elysium</span>
                                <span>®</span>
                                <span className="logo-slogan">
                                    RAILWAY EXPERTS
                                </span>
                            </div>
                            <div className="cbs-text-block">
                                <span className="cbs-go-beyond">CONNECTING</span>
                                <span className="cbs-ordinary">TRANSIT</span>
                                <span className="cbs-find">URBAN</span>
                                <span className="cbs-executives">NETWORKS</span>
                            </div>
                        </div>
                    </div>

                    <div className="build-team-split">
                        <div className="bts-left">
                            <img
                                src={btsImg}
                                alt="Railway Contract Team"
                                className="bts-workers-img"
                            />
                        </div>
                        <div className="bts-right">
                            <h3>Deploy Your Rail Crew</h3>
                            <p>
                                Deploying a team for railway construction or maintenance requires specific certifications. We handle the vetting of all technical professionals in this space.
                            </p>
                            <p>
                                Maintain strict operational schedules and ensure complete safety compliance by augmenting your core staff with our contract rail workers.
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

                    <div className="domains-container">
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>Track Laying & Maintenance</h3>
                                <p>
                                    Specialized workers for the installation, inspection, and ongoing maintenance of railway tracks.
                                </p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>Signaling & Comms</h3>
                                <p>
                                    Engineers and technicians to install and test complex railway signaling and communication systems.
                                </p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>Civil Rail Infrastructure</h3>
                                <p>
                                    Personnel for constructing platforms, tunnels, bridges, and stations associated with rail networks.
                                </p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>Rolling Stock Techs</h3>
                                <p>
                                    Mechanics and electricians focused on the maintenance and repair of the train carriages and engines.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="why-choose-us-section">
                        <h2 className="section-title">Why Choose Us</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card bg-red">
                                <h3>Certified Talent</h3>
                                <p>Personnel holding the necessary HSE and rail-specific technical certifications.</p>
                            </div>
                            <div className="benefit-card bg-gray">
                                <h3>Project Scalability</h3>
                                <p>Ability to supply large cohorts of workers for major infrastructure milestones.</p>
                            </div>
                            <div className="benefit-card bg-red">
                                <h3>Safety First</h3>
                                <p>We prioritize strict adherence to transit safety protocols in all workforce deployments.</p>
                            </div>
                        </div>
                    </section>

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
                                </div>
                            </div>
                            <div className="insight-card">
                                <div className="insight-image-wrap">
                                    <img src={sectorInsight2Img} alt="Insight 2" />
                                </div>
                                <div className="insight-content">
                                    <h3>Need of Contract Staffing</h3>
                                    <p>Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes it crucial for dynamic sectors like construction...</p>
                                </div>
                            </div>
                            <div className="insight-card">
                                <div className="insight-image-wrap">
                                    <img src={sectorInsight3Img} alt="Insight 3" />
                                </div>
                                <div className="insight-content">
                                    <h3>Benefits of getting Contract Staffing</h3>
                                    <p>There are tons of advantages to getting Contract Staffing from us, including massive cost savings and on-site agility.</p>
                                </div>
                            </div>
                            <div className="insight-card">
                                <div className="insight-image-wrap">
                                    <img src={sectorInsight4Img} alt="Insight 4" />
                                </div>
                                <div className="insight-content">
                                    <h3>How can Contract Staffing work at Your Advantage?</h3>
                                    <p>Staying lean and agile is important for every organization. A responsive workforce allows you to bid on larger contracts without excessive fixed overhead.</p>
                                </div>
                            </div>
                        </div>
                    </div>

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
        .insight-card { background: #ff741f; border-radius: 25px; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; }
        .insight-card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .insight-image-wrap { height: 250px; background: #fa3e52; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .insight-image-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .insight-card:hover .insight-image-wrap img { transform: scale(1.1); }
        .insight-content { padding: 30px 25px; flex-grow: 1; display: flex; flex-direction: column; }
        .insight-content h3 { font-size: 1.3rem; color: #fff; margin-bottom: 20px; line-height: 1.4; font-weight: 600; min-height: 3.5rem; }
        .insight-content p { color: #fff; font-size: 0.95rem; line-height: 1.6; margin-bottom: 25px; flex-grow: 1; }
        .insight-btn { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; border: 1px solid #ddd; border-radius: 8px; color: #555; text-decoration: none; font-weight: 500; transition: all 0.3s ease; background: #fff; }
        .insight-btn:hover { border-color: #FE7622; color: #FE7622; background: #fdf2f3; }
        @media (max-width: 1200px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } .insights-title { font-size: 2rem; } }
      `}} />
        </div>
    );
};

export default RailwayContract;

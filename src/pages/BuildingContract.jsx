import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';
import { ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import heroImage from "../assest/manpower-supply-meadia/homepagehero.png";
import btsImg from "../assest/manpower-supply-meadia/building_contract_team.png";
import sectorInsight1Img from "../assest/manpower-supply-meadia/building_contract_team.png";
import sectorInsight2Img from "../assest/manpower-supply-meadia/bc_insight_2.png";
import sectorInsight3Img from "../assest/manpower-supply-meadia/bc_insight_3.png";
import sectorInsight4Img from "../assest/manpower-supply-meadia/bc_insight_4.png";

const BuildingContract = () => {
    return (
        <div className="building-contract-page">
            <SEOHead
                title="Building Contract Manpower in UAE | Construction Staffing | Smaar Elysium"
                description="Smaar Elysium provides highly skilled building contract manpower across UAE, including civil engineers, project managers, and specialized construction staff."
                keywords="building contract manpower UAE, construction staffing Dubai, civil engineering workforce, building contractors UAE, construction site workers Dubai"
                canonical="https://www.smaarelysium.com/building-contract"
            />
            {/* ── Hero Section ── */}
            <div className="container hero-wrapper">
                <section className="home-hero">
                    <div className="home-hero__content">
                        <h1 className="home-hero__title">
                            Building Contract<br />Sector
                        </h1>
                        <p className="home-hero__text">
                            Delivering premium, tailored building contract and construction manpower
                            solutions to drive major infrastructural projects across the UAE.
                        </p>
                        <div className="home-hero__actions">
                            <Link to="/contact" className="hero-btn-main">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                    <div className="home-hero__image">
                        <img src={heroImage} alt="Building Contract Hero" className="hero-workers-img" />
                    </div>
                </section>
            </div>

            {/* ── Main Content Section ── */}
            <div className="service-content-section">
                <div className="container">

                    <div className="choose-best-split">
                        <div className="cbs-left">
                            <h2>Professional Building Contractors</h2>
                            <p>
                                Developing the modern skyline of the UAE requires a proactive, highly skilled workforce. We provide the personnel needed to bring your boldest architectural visions to life.
                            </p>
                            <p>
                                From structural engineers to highly trained heavy machinery operators, our workforce is designed to accelerate timelines and uphold superior construction quality.
                            </p>
                            <p>
                                With an unwavering focus on safety, structural integrity, and timeline management, our teams ensure your projects exceed regulatory standards.
                            </p>
                        </div>

                        <div className="cbs-right">
                            <div className="cbs-logo">
                                <span className="logo-main">Smaar Elysium</span>
                                <span>®</span>
                                <span className="logo-slogan">
                                    CONSTRUCTION EXPERTS
                                </span>
                            </div>
                            <div className="cbs-text-block">
                                <span className="cbs-go-beyond">BUILDING</span>
                                <span className="cbs-ordinary">FUTURE</span>
                                <span className="cbs-find">URBAN</span>
                                <span className="cbs-executives">LANDSCAPES</span>
                            </div>
                        </div>
                    </div>

                    <div className="build-team-split">
                        <div className="bts-left">
                            <img
                                src={btsImg}
                                alt="Building Contract Team"
                                className="bts-workers-img"
                            />
                        </div>
                        <div className="bts-right">
                            <h3>Deploy Your Construction Crew</h3>
                            <p>
                                Whether you need a dedicated site management team or skilled tradesmen for a commercial high-rise, we deploy the exact talent you need.
                            </p>
                            <p>
                                Every candidate undergoes rigorous safety checks and technical assessments to guarantee seamless project execution on site.
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
                                <h3>Civil Engineering</h3>
                                <p>
                                    Specialized engineers for foundational planning, structural design, and large-scale project execution.
                                </p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>Site Management</h3>
                                <p>
                                    Experienced site managers and foremen to oversee daily operations and enforce safety protocols.
                                </p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>Heavy Machinery</h3>
                                <p>
                                    Certified crane operators, excavators, and heavy equipment drivers for earthmoving and lifting.
                                </p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>Skilled Trades</h3>
                                <p>
                                    Masons, carpenters, scaffolders, and painters delivering precision finishing details on all structures.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="why-choose-us-section">
                        <h2 className="section-title">Why Choose Us</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card bg-red">
                                <h3>Safety First</h3>
                                <p>Personnel trained under strict HSE standards to maintain zero-incident construction sites.</p>
                            </div>
                            <div className="benefit-card bg-gray">
                                <h3>Rapid Scaling</h3>
                                <p>Flexible staffing that easily scales up during critical construction phases.</p>
                            </div>
                            <div className="benefit-card bg-red">
                                <h3>Proven Expertise</h3>
                                <p>All staff are vetted tradesmen with experience in major Middle Eastern developments.</p>
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
        .quote-section { margin: 60px 0; }
        .quote-container { background: linear-gradient(135deg, #001a4d 0%, #003d99 100%); border-radius: 15px; padding: 50px 40px; position: relative; display: flex; align-items: center; justify-content: space-between; gap: 50px; margin: 0 5%; color: white; }
        .quote-label { position: absolute; top: -15px; left: 30px; background: #001a4d; color: white; padding: 8px 20px; border-radius: 25px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .quote-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 600; margin-bottom: 20px; line-height: 1.3; }
        .quote-text { font-size: clamp(0.95rem, 2vw, 1.1rem); line-height: 1.6; margin-bottom: 0; flex: 1; }
        .quote-btn { background: white; color: #001a4d; padding: 14px 40px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1rem; display: inline-block; white-space: nowrap; transition: all 0.3s ease; border: 2px solid white; }
        .quote-btn:hover { background: #FE7622; color: white; border-color: #FE7622; }
        @media (max-width: 1200px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } .quote-container { padding: 40px 30px; gap: 30px; } }
        @media (max-width: 768px) { .insights-grid { grid-template-columns: 1fr; } .insights-title { font-size: 2rem; } .quote-container { flex-direction: column; text-align: center; padding: 35px 20px; gap: 20px; } .quote-title { margin-top: 20px; margin-bottom: 15px; } .quote-btn { width: 100%; text-align: center; } }
      `}} />
        </div>
    );
};

export default BuildingContract;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';
import { ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import heroImage from "../assest/manpower-supply-meadia/homepagehero.png";
import btsImg from "../assest/manpower-supply-meadia/steel_construction_team.png";
import sectorInsight1Img from "../assest/manpower-supply-meadia/steel_construction_team.png";
import sectorInsight2Img from "../assest/manpower-supply-meadia/sc_insight_2.png";
import sectorInsight3Img from "../assest/manpower-supply-meadia/sc_insight_3.png";
import sectorInsight4Img from "../assest/manpower-supply-meadia/sc_insight_4.png";

const SteelConstructionContract = () => {
    return (
        <div className="steel-construction-page">
            <SEOHead
                title="Steel Construction Manpower UAE | Structural Steel Staffing | Smaar Elysium"
                description="We provide expert steel construction manpower, including welders, fabricators, and structural steel erectors for heavy industrial and commercial projects in the UAE."
                keywords="steel construction manpower UAE, structural steel workers Dubai, welders staffing UAE, steel fabricators agency, metal construction workers Dubai"
                canonical="https://www.smaarelysium.com/steel-construction-contract"
            />
            {/* ── Hero Section ── */}
            <div className="container hero-wrapper">
                <section className="home-hero">
                    <div className="home-hero__content">
                        <h1 className="home-hero__title">
                            Steel Construction<br />Sector
                        </h1>
                        <p className="home-hero__text">
                            Deploying elite steel workers, welders, and structural
                            engineers to support the backbone of modern infrastructural development across the UAE.
                        </p>
                        <div className="home-hero__actions">
                            <Link to="/contact" className="hero-btn-main">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                    <div className="home-hero__image">
                        <img src={heroImage} alt="Steel Construction Hero" className="hero-workers-img" />
                    </div>
                </section>
            </div>

            {/* ── Main Content Section ── */}
            <div className="service-content-section">
                <div className="container">

                    <div className="choose-best-split">
                        <div className="cbs-left">
                            <h2>Master Steel Fabrication & Erection Teams</h2>
                            <p>
                                The structural integrity of modern megaprojects starts with steel. Our staffing agency specializes in sourcing and deploying top-tier steel construction professionals.
                            </p>
                            <p>
                                From certified 6G welders mapping out critical joins, to heavy steel erectors balancing beams high above the city, we supply the grit and expertise required.
                            </p>
                            <p>
                                We serve industrial fabrication yards and live commercial construction sites alike, ensuring your most demanding structural needs are met on schedule.
                            </p>
                        </div>

                        <div className="cbs-right">
                            <div className="cbs-logo">
                                <span className="logo-main">Smaar Elysium</span>
                                <span>®</span>
                                <span className="logo-slogan">
                                    STEELWORK EXPERTS
                                </span>
                            </div>
                            <div className="cbs-text-block">
                                <span className="cbs-go-beyond">FORGING</span>
                                <span className="cbs-ordinary">STRUCTURAL</span>
                                <span className="cbs-find">EXCELLENCE</span>
                                <span className="cbs-executives">NATIONWIDE</span>
                            </div>
                        </div>
                    </div>

                    <div className="build-team-split">
                        <div className="bts-left">
                            <img
                                src={btsImg}
                                alt="Steel Construction Team"
                                className="bts-workers-img"
                            />
                        </div>
                        <div className="bts-right">
                            <h3>Hire Your Steel Crew</h3>
                            <p>
                                Don't let a shortage of skilled welders delay your critical path. We provide flexible, certified metalworking teams at a moment's notice.
                            </p>
                            <p>
                                Our rigorous testing procedures ensure that every steelworker we provide holds the necessary safety and operational certifications for UAE sites.
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
                                <h3>Certified Welders</h3>
                                <p>
                                    Expert SMAW, TIG, and MIG welders tested for precision and durability on structural steel joints.
                                </p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>Steel Erectors</h3>
                                <p>
                                    Specialists adept at reading blueprints and safely lifting, positioning, and securing heavy steel frameworks.
                                </p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>Fabrication Shop Staff</h3>
                                <p>
                                    Fabricators, cutters, and grinders for off-site steel preparation in industrial manufacturing yards.
                                </p>
                            </div>
                        </div>
                        <div className="domain-box">
                            <div className="domain-content">
                                <h3>Quality Inspectors</h3>
                                <p>
                                    NDT inspectors and QA/QC personnel ensuring all steelwork meets stringent international standards.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="why-choose-us-section">
                        <h2 className="section-title">Why Choose Us</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card bg-red">
                                <h3>Pre-Tested Skills</h3>
                                <p>All welders and fabricators undergo practical trade tests before deployment.</p>
                            </div>
                            <div className="benefit-card bg-gray">
                                <h3>Heavy Industry Ready</h3>
                                <p>Our workforce thrives in demanding, high-risk industrial environments.</p>
                            </div>
                            <div className="benefit-card bg-red">
                                <h3>Flexible Contracts</h3>
                                <p>Hire specialized tradesmen only for the duration you need them.</p>
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
        @media (max-width: 1200px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } .insights-title { font-size: 2rem; } }
      `}} />
        </div>
    );
};

export default SteelConstructionContract;

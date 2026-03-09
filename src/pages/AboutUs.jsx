import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Activity, Users, Eye, ShieldCheck, Heart } from 'lucide-react';
import sectorInsight1Img from "../assest/manpower-supply-meadia/aboutus_insight_1.jpg";
import sectorInsight2Img from "../assest/manpower-supply-meadia/aboutus_insight_2.jpg";
import sectorInsight3Img from "../assest/manpower-supply-meadia/aboutus_insight_3.jpg";
import sectorInsight4Img from "../assest/manpower-supply-meadia/aboutus_insight_4.jpg";
import heroTeamImg from "../assest/manpower-supply-meadia/abouthero.png";
import journeyImg from "../assest/manpower-supply-meadia/about1.png";
import missionBg from "../assest/manpower-supply-meadia/hr_outsourcing_bts.jpg";
import visionBg from "../assest/manpower-supply-meadia/contract_staffing_bts.jpg";

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* ── Hero Section ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">About Us<br />Who We Are</h1>
            <p className="home-hero__text">
              Smaar Elysium is a premier manpower supply and staffing agency headquartered in the UAE,
              dedicated to connecting exceptional talent with outstanding organizations across the region
              and beyond.
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">Get in Touch</Link>
            </div>
          </div>
          <div className="home-hero__image-wrapper">
            <img
              src={heroTeamImg}
              alt="Smaar Elysium Team UAE"
              className="home-hero__image"
              style={{ borderRadius: '24px' }}
            />
          </div>
        </section>
      </div>

      {/* ── Our Journey Section ── */}
      <section className="journey-page-section">
        <div className="container">
          <div className="journey-split-card">
            <div className="journey-image-container">
              <img
                src={journeyImg}
                alt="Smaar Elysium Journey UAE"
                className="journey-full-img"
              />
            </div>
            <div className="journey-text-container">
              <h2 className="journey-page-heading">Our Journey</h2>
              <p className="journey-page-paragraph">
                Smaar Elysium began with a singular vision — to build a world-class manpower supply
                company that truly understands the dynamic needs of businesses operating in the UAE
                and the wider GCC region. Over the years, we have grown from a focused staffing
                consultancy into a comprehensive workforce solutions partner trusted across multiple
                industries.
              </p>
              <p className="journey-page-paragraph">
                With more than 15 years of combined expertise, our leadership team has navigated
                diverse market conditions and built a robust talent network that spans skilled
                professionals, semi-skilled workers, and executive-level leaders. We pride ourselves
                on blending deep local market knowledge with international best practices — delivering
                staffing outcomes that move businesses forward.
              </p>
              <p className="journey-page-paragraph">
                Today, Smaar Elysium stands as one of the UAE's most trusted names in manpower
                supply, contract staffing, HR outsourcing, and executive search — serving clients
                across construction, facilities management, logistics, security, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="stats-banner-section">
        <div className="container">
          <div className="stats-banner-grid">
            <div className="stats-banner-item">
              <span className="stats-num">15+</span>
              <span className="stats-label">Years of Experience</span>
            </div>
            <div className="stats-banner-item">
              <span className="stats-num">5,000+</span>
              <span className="stats-label">Professionals Placed</span>
            </div>
            <div className="stats-banner-item">
              <span className="stats-num">200+</span>
              <span className="stats-label">Active Clients</span>
            </div>
            <div className="stats-banner-item">
              <span className="stats-num">10+</span>
              <span className="stats-label">Industries Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision Section ── */}
      <section className="mv-section">
        <div className="container">
          <div className="mv-wrapper">
            <div className="mv-box mv-box-left" style={{ backgroundImage: `url(${missionBg})` }}>
              <div className="mv-content">
                <h2 className="mv-title">Our Mission</h2>
                <p className="mv-text">
                  To be the UAE's most reliable and forward-thinking manpower partner — delivering
                  tailored workforce solutions that empower businesses to scale confidently. We
                  are committed to connecting the right people with the right opportunities through
                  rigorous selection, compliance excellence, and a deep understanding of every
                  client's unique operational requirements.
                </p>
              </div>
            </div>
            <div className="mv-box mv-box-right" style={{ backgroundImage: `url(${visionBg})` }}>
              <div className="mv-content">
                <h2 className="mv-title">Our Vision</h2>
                <p className="mv-text">
                  To emerge as the GCC region's most trusted end-to-end human capital solutions
                  provider — a name synonymous with quality talent, seamless compliance, and
                  transformative workforce strategies. We aspire to be the partner every ambitious
                  organization turns to when building teams that drive sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values Section ── */}
      <section className="values-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide every decision, every placement, and every partnership at Smaar Elysium.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Target /></div>
              <h3>Commitment</h3>
              <p>We are unwaveringly dedicated to delivering results — placing the right talent with precision, speed, and professionalism every single time.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Activity /></div>
              <h3>Agility</h3>
              <p>We respond swiftly to the evolving demands of the market, offering flexible workforce solutions that adapt to your business rhythms.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Users /></div>
              <h3>Partnership</h3>
              <p>We see ourselves as an extension of your team — investing in your success with collaborative, long-term relationships built on shared goals.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Eye /></div>
              <h3>Transparency</h3>
              <p>Clear communication, honest assessments, and complete openness in every engagement — building the trust that underpins great partnerships.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><ShieldCheck /></div>
              <h3>Compliance</h3>
              <p>We navigate UAE labor laws and regulatory frameworks with expertise, ensuring every placement is fully compliant and risk-free for your organization.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Heart /></div>
              <h3>People First</h3>
              <p>We care genuinely about the candidates we place and the clients we serve — creating positive outcomes for every person and organization we work with.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do Section ── */}
      <section className="what-we-do-section">
        <div className="container">
          <div className="wwd-header">
            <span className="section-label">Our Services</span>
            <h2 className="wwd-title">Comprehensive Workforce Solutions</h2>
            <p className="wwd-desc">
              From blue-collar manpower supply to executive-level recruitment, we offer a full suite
              of workforce solutions designed for the UAE market.
            </p>
          </div>
          <div className="wwd-grid">
            <div className="wwd-card">
              <div className="wwd-number">01</div>
              <h3>Manpower Supply</h3>
              <p>Skilled, semi-skilled, and unskilled workforce deployed efficiently to match your operational timelines and site requirements.</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-number">02</div>
              <h3>Recruitment & Talent Acquisition</h3>
              <p>End-to-end permanent recruitment services powered by an extensive talent network and a rigorous multi-stage selection process.</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-number">03</div>
              <h3>Contract Staffing</h3>
              <p>Flexible short-term and long-term contract staffing solutions that give you skilled professionals without the overhead of permanent hires.</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-number">04</div>
              <h3>Executive Search</h3>
              <p>Confidential, high-calibre leadership hiring — identifying and securing top executive talent that drives your organizational vision forward.</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-number">05</div>
              <h3>HR Outsourcing</h3>
              <p>End-to-end HR management services including payroll processing, compliance management, and employee lifecycle administration.</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-number">06</div>
              <h3>Security Staffing</h3>
              <p>SIRA-licensed security personnel deployed for static guard duties, mobile patrols, access control, and event security across the UAE.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Insights Section ── */}
      <div className="insights-section">
        <h2 className="insights-title">Smaar Elysium Insights</h2>

        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={sectorInsight1Img} alt="UAE Workforce Landscape" />
            </div>
            <div className="insight-content">
              <h3>Understanding the UAE Workforce Landscape</h3>
              <p>The UAE's diversified economy creates unique manpower demands across construction, technology, hospitality, and finance — and we are perfectly positioned to meet them all.</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={sectorInsight2Img} alt="Why Partner With a Staffing Agency" />
            </div>
            <div className="insight-content">
              <h3>Why Partnering With a Staffing Agency Matters</h3>
              <p>For businesses expanding in the UAE, a local staffing partner provides critical advantages: faster hiring cycles, compliance assurance, and access to a pre-vetted talent pool.</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={sectorInsight3Img} alt="UAE Labour Law Compliance" />
            </div>
            <div className="insight-content">
              <h3>Navigating UAE Labour Law Compliance</h3>
              <p>UAE employment regulations are nuanced and constantly evolving. Our compliance experts ensure every hire meets current Ministry of Human Resources requirements — zero risk, full peace of mind.</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={sectorInsight4Img} alt="Building High Performance Teams" />
            </div>
            <div className="insight-content">
              <h3>Building High-Performance Teams in the UAE</h3>
              <p>A high-performing team is the true engine of business growth. Smaar Elysium's structured recruitment methodology ensures you hire for both skillset and cultural alignment — every time.</p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        /* Hero */
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        .home-hero { 
            background: var(--color-primary); 
            border-radius: 40px; 
            color: white; 
            padding: 80px 100px; 
            display: flex; 
            align-items: center; 
            justify-content: space-between;
            overflow: hidden;
            min-height: 500px;
        }
        .home-hero__content { flex: 1; z-index: 2; max-width: 600px; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        .hero-btn-main { background: #fff; color: #000; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image-wrapper { flex: 0 0 auto; }
        .home-hero__image { max-width: 450px; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        @media (max-width: 1024px) { .home-hero { flex-direction: column; text-align: center; padding: 60px 50px; } .home-hero__image { max-width: 350px; margin-top: 40px; } }
        @media (max-width: 576px) { .home-hero { padding: 40px 25px; border-radius: 20px; } .home-hero__image { max-width: 100%; } }

        /* General Shared */
        .section-label { color: #FE7622; font-size: 0.9rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 10px; }
        .section-title { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 20px; line-height: 1.2; }
        .section-subtitle { font-size: 1.1rem; color: #777; max-width: 650px; margin: 0 auto 50px; line-height: 1.6; }
        .text-center { text-align: center; }

        /* ── Our Journey Section ── */
        .journey-page-section { padding: 40px 0 80px; background: #fff; }
        .journey-split-card {
            display: flex;
            border-radius: 24px;
            overflow: hidden;
            background: #f5f5f5;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .journey-image-container {
            flex: 0 0 48%;
            position: relative;
            min-height: 420px;
        }
        .journey-full-img {
            width: 100%; height: 100%; object-fit: cover;
            position: absolute; inset: 0; display: block;
        }
        .journey-text-container {
            flex: 1; padding: 70px 60px;
            display: flex; flex-direction: column; justify-content: center;
        }
        .journey-page-heading {
            font-size: 2.4rem; font-weight: 600; color: #111;
            margin-bottom: 25px; letter-spacing: -0.5px;
        }
        .journey-page-paragraph {
            font-size: 1rem; color: #666; line-height: 1.8; margin-bottom: 20px;
        }
        .journey-page-paragraph:last-child { margin-bottom: 0; }

        @media (max-width: 1024px) {
            .journey-split-card { flex-direction: column; }
            .journey-image-container { min-height: 320px; position: static; }
            .journey-full-img { position: static; }
            .journey-text-container { padding: 50px 40px; }
        }
        @media (max-width: 576px) {
            .journey-text-container { padding: 35px 25px; }
            .journey-page-heading { font-size: 1.8rem; }
        }

        /* ── Stats Banner ── */
        .stats-banner-section { padding: 0 0 80px; background: #fff; }
        .stats-banner-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            background: linear-gradient(135deg, #FE7622, #E05200);
            border-radius: 20px;
            overflow: hidden;
        }
        .stats-banner-item {
            text-align: center;
            padding: 50px 30px;
            border-right: 1px solid rgba(255,255,255,0.2);
            display: flex; flex-direction: column; align-items: center; gap: 10px;
        }
        .stats-banner-item:last-child { border-right: none; }
        .stats-num {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 900; color: #fff; display: block;
        }
        .stats-label {
            font-size: 1rem; font-weight: 500; color: rgba(255,255,255,0.9);
        }
        @media (max-width: 900px) {
            .stats-banner-grid { grid-template-columns: repeat(2, 1fr); }
            .stats-banner-item:nth-child(2) { border-right: none; }
            .stats-banner-item { border-bottom: 1px solid rgba(255,255,255,0.2); }
            .stats-banner-item:nth-last-child(-n+2) { border-bottom: none; }
        }
        @media (max-width: 480px) {
            .stats-banner-grid { grid-template-columns: 1fr 1fr; }
            .stats-banner-item { padding: 35px 20px; }
        }

        /* ── Mission & Vision Section ── */
        .mv-section { padding: 0 0 80px; background: #fff; }
        .mv-wrapper { display: flex; border-radius: 24px; overflow: hidden; }
        .mv-box {
            flex: 1; min-height: 460px;
            background-size: cover; background-position: center;
            display: flex; align-items: center; justify-content: center;
            padding: 40px; position: relative;
        }
        .mv-box::before {
            content: ''; position: absolute; inset: 0;
            background: rgba(0,0,0,0.45);
        }
        .mv-content {
            background: #FE7622;
            color: white; padding: 50px 45px;
            width: 100%; max-width: 500px;
            position: relative; z-index: 2;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            border-radius: 4px;
        }
        .mv-title { font-size: 2.2rem; font-weight: 600; margin-bottom: 20px; }
        .mv-text { font-size: 1rem; line-height: 1.8; opacity: 0.97; }

        @media (max-width: 900px) {
            .mv-wrapper { flex-direction: column; }
            .mv-box { min-height: 400px; padding: 30px 20px; }
            .mv-content { padding: 40px 30px; }
            .mv-title { font-size: 1.8rem; }
        }
        @media (max-width: 480px) {
            .mv-box { min-height: 350px; }
            .mv-content { padding: 30px 25px; }
            .mv-title { font-size: 1.6rem; }
        }

        /* ── Core Values ── */
        .values-section { padding: 80px 0 100px; background: #f8f9fa; }
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .value-card { background: #fff; padding: 40px 30px; border-radius: 20px; box-shadow: 0 5px 20px rgba(0,0,0,0.04); transition: 0.4s; text-align: center; border-bottom: 4px solid transparent; }
        .value-card:hover { transform: translateY(-10px); box-shadow: 0 15px 40px rgba(0,0,0,0.1); border-color: #FE7622; }
        .value-icon { width: 70px; height: 70px; background: #fff4ee; color: #FE7622; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; transition: 0.4s; }
        .value-card:hover .value-icon { background: #FE7622; color: white; }
        .value-card h3 { font-size: 1.25rem; font-weight: 700; color: #111; margin-bottom: 15px; }
        .value-card p { font-size: 0.95rem; color: #666; line-height: 1.6; }

        @media (max-width: 1024px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .values-grid { grid-template-columns: 1fr; } .value-card { padding: 30px 25px; } }

        /* ── What We Do Section ── */
        .what-we-do-section { padding: 80px 0 100px; background: #fff; }
        .wwd-header { text-align: center; margin-bottom: 60px; }
        .wwd-title { font-size: 2.5rem; font-weight: 700; color: #111; margin-bottom: 16px; }
        .wwd-desc { font-size: 1.05rem; color: #777; max-width: 700px; margin: 0 auto; line-height: 1.7; }
        .wwd-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .wwd-card {
            background: #f8f9fa; padding: 40px 35px; border-radius: 20px;
            border-top: 4px solid transparent; transition: 0.3s;
            box-shadow: 0 4px 15px rgba(0,0,0,0.04);
        }
        .wwd-card:hover { border-color: #FE7622; transform: translateY(-6px); box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
        .wwd-number { font-size: 2.8rem; font-weight: 900; color: #FE7622; opacity: 0.3; margin-bottom: 15px; line-height: 1; }
        .wwd-card h3 { font-size: 1.2rem; font-weight: 700; color: #111; margin-bottom: 12px; }
        .wwd-card p { font-size: 0.95rem; color: #666; line-height: 1.7; }

        @media (max-width: 1024px) { .wwd-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .wwd-grid { grid-template-columns: 1fr; } .wwd-title { font-size: 1.9rem; } }

        /* ── Insights Section  ── */
        .insights-section { margin-top: 0; margin-bottom: 100px; padding: 0 5%; }
        .insights-title { text-align: center; font-size: 2.5rem; color: #555; margin-bottom: 60px; font-weight: 500; }
        .insights-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; }
        .insight-card { background: #f8f9fa; border-radius: 25px; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; }
        .insight-card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .insight-image-wrap { height: 220px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .insight-image-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .insight-card:hover .insight-image-wrap img { transform: scale(1.08); }
        .insight-content { padding: 28px 24px; flex-grow: 1; display: flex; flex-direction: column; }
        .insight-content h3 { font-size: 1.15rem; color: #222; margin-bottom: 14px; line-height: 1.4; font-weight: 600; }
        .insight-content p { color: #777; font-size: 0.92rem; line-height: 1.6; flex-grow: 1; }

        @media (max-width: 1200px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .insights-grid { grid-template-columns: 1fr; } .insights-title { font-size: 2rem; } }
        @media (max-width: 480px) { .insights-title { font-size: 1.6rem; } .insights-section { padding: 0 3%; } }
        `}} />
    </div>
  );
};

export default AboutUs;
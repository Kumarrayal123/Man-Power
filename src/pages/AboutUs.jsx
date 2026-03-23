import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Activity, Users, Eye, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/sectorPages.css';
import SEOHead from '../components/SEOHead';
import sectorInsight1Img from "../assest/manpower-supply-meadia/uae_about_insight_1.png";
import sectorInsight2Img from "../assest/manpower-supply-meadia/uae_about_insight_2.png";
import sectorInsight3Img from "../assest/manpower-supply-meadia/uae_about_insight_3.png";
import sectorInsight4Img from "../assest/manpower-supply-meadia/uae_about_insight_4.png";
import heroTeamImg from "../assest/manpower-supply-meadia/abouthero.png";
import journeyImg from "../assest/manpower-supply-meadia/about1.png";
import missionBg from "../assest/manpower-supply-meadia/hr_outsourcing_bts.jpg";
import visionBg from "../assest/manpower-supply-meadia/contract_staffing_bts.jpg";

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setHasAnimated(true);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, countRef };
};

const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const { count, countRef } = useCountUp(end, duration);
  return (
    <span ref={countRef} className="stats-num">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AboutUs = () => {
  const { t } = useLanguage();
  return (
    <div className="about-page">
      <SEOHead
        title={t.aboutSEOTitle}
        description={t.aboutSEODesc}
        keywords="about Smaar Elysium, manpower agency UAE, staffing company UAE, workforce solutions UAE, HR consultancy UAE, labour supply company, best manpower agency Dubai"
        canonical="https://www.smaarelysium.com/about"
      />

      {/* ── Hero Section ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">{t.aboutTitle}<br />{t.whoWeAre}</h1>
            <p className="home-hero__text">
              {t.aboutDesc}
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">{t.getInTouch}</Link>
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
              <h2 className="journey-page-heading">{t.ourJourney}</h2>
              <p className="journey-page-paragraph">
                {t.journeyP1}
              </p>
              <p className="journey-page-paragraph">
                {t.journeyP2}
              </p>
              <p className="journey-page-paragraph">
                {t.journeyP3}
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
              <Counter end={5} suffix="+" />
              <span className="stats-label">{t.yearsExp}</span>
            </div>
            <div className="stats-banner-item">
              <Counter end={1000} suffix="+" />
              <span className="stats-label">{t.profPlaced}</span>
            </div>
            <div className="stats-banner-item">
              <Counter end={100} suffix="+" />
              <span className="stats-label">{t.activeClients}</span>
            </div>
            <div className="stats-banner-item">
              <Counter end={15} suffix="+" />
              <span className="stats-label">{t.indServed}</span>
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
                <h2 className="mv-title">{t.ourMission}</h2>
                <p className="mv-text">
                  {t.missionDesc}
                </p>
              </div>
            </div>
            <div className="mv-box mv-box-right" style={{ backgroundImage: `url(${visionBg})` }}>
              <div className="mv-content">
                <h2 className="mv-title">{t.ourVision}</h2>
                <p className="mv-text">
                  {t.visionDesc}
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
            <span className="section-label">{t.whyChooseUs}</span>
            <h2 className="section-title">{t.coreValues}</h2>
            <p className="section-subtitle">
              {t.valuesSubtitle}
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Target /></div>
              <h3>{t.commitment}</h3>
              <p>{t.commitmentDesc}</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Activity /></div>
              <h3>{t.agility}</h3>
              <p>{t.agilityDesc}</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Users /></div>
              <h3>{t.partnership}</h3>
              <p>{t.partnershipDesc}</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Eye /></div>
              <h3>{t.transparency}</h3>
              <p>{t.transparencyDesc}</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><ShieldCheck /></div>
              <h3>{t.compliance}</h3>
              <p>{t.complianceDesc}</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Heart /></div>
              <h3>{t.peopleFirst}</h3>
              <p>{t.peopleFirstDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do Section ── */}
      <section className="what-we-do-section">
        <div className="container">
          <div className="wwd-header">
            <span className="section-label">{t.services}</span>
            <h2 className="wwd-title">{t.wwdSubtitle}</h2>
            <p className="wwd-desc">
              {t.wwdDesc}
            </p>
          </div>
          <div className="wwd-grid">
            <div className="wwd-card">
              <div className="wwd-number">01</div>
              <h3>{t.manpowerSupply}</h3>
              <p>{t.manpowerSupplyDesc}</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-number">02</div>
              <h3>{t.recruitmentTalent}</h3>
              <p>{t.recruitmentTalentDesc}</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-number">03</div>
              <h3>{t.contractStaffing}</h3>
              <p>{t.contractStaffingDesc}</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-number">04</div>
              <h3>{t.exSearch}</h3>
              <p>{t.exSearchDesc}</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-number">05</div>
              <h3>{t.hrOut}</h3>
              <p>{t.hrOutDesc}</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-number">06</div>
              <h3>{t.secStaffing}</h3>
              <p>{t.secStaffingDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Insights Section ── */}
      <div className="insights-section">
        <h2 className="insights-title">{t.insightsTitle}</h2>

        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={sectorInsight1Img} alt="UAEn Workforce Landscape" />
            </div>
            <div className="insight-content">
              <h3>{t.insight1Title}</h3>
              <p>{t.insight1Desc}</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={sectorInsight2Img} alt="Why Partner With a Staffing Agency" />
            </div>
            <div className="insight-content">
              <h3>{t.insight2Title}</h3>
              <p>{t.insight2Desc}</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={sectorInsight3Img} alt="UAEn Labour Law Compliance" />
            </div>
            <div className="insight-content">
              <h3>{t.insight3Title}</h3>
              <p>{t.insight3Desc}</p>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-image-wrap">
              <img src={sectorInsight4Img} alt="Building High Performance Teams" />
            </div>
            <div className="insight-content">
              <h3>{t.insight4Title}</h3>
              <p>{t.insight4Desc}</p>
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
        
        @media (max-width: 1024px) { 
            .home-hero { flex-direction: column; text-align: center; padding: 60px 50px 0; } 
            .home-hero__image { max-width: 350px; margin-top: 40px; margin-bottom: -12%; } 
        }
        @media (max-width: 576px) { 
            .home-hero { padding: 40px 25px 0; border-radius: 20px; } 
            .home-hero__image { max-width: 100%; margin-bottom: -12%; } 
        }

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
        @media (max-width: 600px) { .values-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; } .value-card { padding: 25px 15px; } .value-icon { width: 50px; height: 50px; } .value-card h3 { font-size: 1.1rem; } }

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
        @media (max-width: 600px) { .wwd-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; } .wwd-card { padding: 25px 20px; } .wwd-title { font-size: 1.9rem; } }
        `}} />
    </div>
  );
};

export default AboutUs;
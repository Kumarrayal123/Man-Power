import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import btsGroup7Img from "../assest/manpower-supply-meadia/projecthero.png";
import projectConstruction from "../assest/manpower-supply-meadia/project_construction.png";
import projectFacility from "../assest/manpower-supply-meadia/project_facility.png";
import projectIndustrial from "../assest/manpower-supply-meadia/project_industrial.png";

const Project = () => {
  return (
    <div className="project-page">
      <SEOHead
        title="Manpower Projects Portfolio | Staffing Case Studies in UAE | Smaar Elysium"
        description="Explore Smaar Elysium's successful manpower supply projects across UAE — from construction mega-projects in Dubai to facility management in Bengaluru and manufacturing plant staffing in Pune."
        keywords="manpower projects UAE, staffing case studies UAE, construction workforce projects, facility management staffing projects, manufacturing plant manpower, Smaar Elysium projects"
        canonical="https://www.smaarelysium.com/projects"
      />
      {/* ── Home Page Style Hero ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">Manpower<br />Projects</h1>
            <p className="home-hero__text">Explore our successful manpower supply and staffing deployments across UAE — powering industries with the right workforce at the right time.</p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">Get in Touch</Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img
              src={btsGroup7Img}
              alt="Manpower Projects Team"
              className="hero-workers-img"
              style={{ width: '100%', maxWidth: '550px', height: 'auto', display: 'block', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
            />
          </div>
        </section>
      </div>

      {/* ── Featured Projects Grid ── */}
      <section className="featured-projects-section">
        <div className="container">
          <div className="custom-projects-grid">

            <div className="custom-project-card">
              <div className="custom-project-image" style={{ backgroundImage: `url(${projectConstruction})` }}>
                <div className="custom-project-red-box">
                  <h3 className="custom-project-title">Dubai Global Gateway – Construction Manpower</h3>
                  <p className="custom-project-desc">
                    Supplied 350+ skilled civil workers, masons, electricians, and site supervisors for a landmark commercial high-rise project in Dubai's HITEC City corridor, completed on schedule...
                  </p>
                  <Link to="/contact" className="custom-project-link">
                    Get in Touch <ArrowRight size={20} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="custom-project-card">
              <div className="custom-project-image" style={{ backgroundImage: `url(${projectFacility})` }}>
                <div className="custom-project-red-box">
                  <h3 className="custom-project-title">Tech Connect IT Park – Facility & Security Staffing</h3>
                  <p className="custom-project-desc">
                    Deployed a dedicated team of 120+ facility management staff, housekeeping personnel, and licensed security officers across a 3-building IT campus in Bengaluru's Electronic City...
                  </p>
                  <Link to="/contact" className="custom-project-link">
                    Get in Touch <ArrowRight size={20} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="custom-project-card">
              <div className="custom-project-image" style={{ backgroundImage: `url(${projectIndustrial})` }}>
                <div className="custom-project-red-box">
                  <h3 className="custom-project-title">Pune Industrial Plant – Manufacturing Workforce</h3>
                  <p className="custom-project-desc">
                    Provided end-to-end contract staffing of 200+ semi-skilled and skilled production workers, quality control technicians, and equipment operators for a major auto-component plant in Pune's MIDC zone...
                  </p>
                  <Link to="/contact" className="custom-project-link">
                    Get in Touch <ArrowRight size={20} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── Our Clients Section (From Home Page) ── */}
      {/* <section className="clients-section">
        <div className="container">
          <div className="clients-header">
            <h2>What Our Clients Says</h2>
          </div>
          <br />
          <div className="clients-logos-header">
            <h2>Our Clients</h2>
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
        </div>
      </section> */}

      <style dangerouslySetInnerHTML={{
        __html: `
        /* Hero Styling */
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        .home-hero { 
            background: var(--color-primary); 
            border-radius: 40px; 
            color: white; 
            padding: 80px 100px; 
            display: flex; 
            align-items: center; 
            justify-content: space-between;
            position: relative;
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
            .home-hero { flex-direction: column; text-align: center; padding: 60px 50px; } 
            .home-hero__image { max-width: 350px; margin-top: 40px; } 
        }
        @media (max-width: 576px) { 
            .home-hero { padding: 40px 25px; border-radius: 20px; } 
            .home-hero__image { max-width: 100%; } 
        }

        /* Custom Featured Projects */
        .featured-projects-section { padding: 80px 0; background: #fff; }
        .custom-projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        .custom-project-card {
            background: #f0f0f0;
            border-radius: 20px;
            padding: 15px;
            height: 420px;
        }
        .custom-project-image {
            position: relative;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .custom-project-red-box {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 85%;
            background: #c8102e;
            padding: 30px;
            color: white;
            border-top-right-radius: 0; 
        }
        .custom-project-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #fff;
        }
        .custom-project-desc {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 25px;
            color: rgba(255, 255, 255, 0.95);
        }
        .custom-project-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #fff;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.95rem;
            transition: gap 0.3s ease;
        }
        .custom-project-link:hover {
            gap: 15px;
        }

        @media (max-width: 1024px) {
            .custom-projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
            .custom-projects-grid { grid-template-columns: 1fr; }
            .custom-project-card { height: 380px; }
            .custom-project-red-box { width: 95%; padding: 25px; }
        }

        /* ── Clients Section (From Home Page) ── */
        .clients-section { padding: 80px 0 100px; background: #fff; text-align: center; }
        .clients-header h2 { font-size: 2.8rem; font-weight: 500; color: #666; margin-bottom: 20px; }
        .clients-logos-header h2 { font-size: 2.8rem; font-weight: 500; color: #666; margin-bottom: 40px; }
        
        .marquee-container {
            overflow: hidden;
            position: relative;
            width: 100%;
            padding: 20px 0;
            display: flex;
        }
        
        .marquee-content.left-to-right {
            display: flex;
            white-space: nowrap;
            animation: scroll-left-to-right 25s linear infinite;
            gap: 60px;
        }
        
        .marquee-group {
            display: flex;
            flex-shrink: 0;
            gap: 60px;
            align-items: center;
            justify-content: space-around;
            min-width: 100%;
        }
        
        @keyframes scroll-left-to-right {
            0% { transform: translateX(calc(-100% - 60px)); }
            100% { transform: translateX(0); }
        }
        
        .client-logo-box img { 
            max-width: 180px; 
            max-height: 60px; 
            object-fit: contain;
            filter: grayscale(100%) opacity(0.6);
            transition: all 0.3s ease;
        }
        .client-logo-box:hover img {
            filter: grayscale(0%) opacity(1);
        }

      `}} />
    </div>
  );
};

export default Project;
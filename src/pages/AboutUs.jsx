import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Activity, Users, Eye, ShieldCheck, Heart, ChevronRight } from 'lucide-react';
import sectorInsight1Img from "../assest/manpower-supply-meadia/aboutus_insight_1.jpg";
import sectorInsight2Img from "../assest/manpower-supply-meadia/aboutus_insight_2.jpg";
import sectorInsight3Img from "../assest/manpower-supply-meadia/aboutus_insight_3.jpg";
import sectorInsight4Img from "../assest/manpower-supply-meadia/aboutus_insight_4.jpg";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* ── Home Page Style Hero ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">About Us<br />Who We Are</h1>
            <p className="home-hero__text">We are the leading manpower supply and recruitment agency in the UAE, dedicated to connecting exceptional talent with outstanding organizations.</p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">Get in Touch</Link>
            </div>
          </div>
          <div className="home-hero__image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
              alt="Manpower UAE Team"
              className="home-hero__image" style={{ borderRadius: '24px' }}
            />
          </div>
        </section>
      </div>

      {/* ── Our Journey Section (From Image) ── */}
      <section className="journey-page-section">
        <div className="container">
          <div className="journey-split-card">
            <div className="journey-image-container">
              <img
                src="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1000&auto=format&fit=crop"
                alt="Dubai Skyscrapers"
                className="journey-full-img"
              />
            </div>
            <div className="journey-text-container">
              <h2 className="journey-page-heading">Our Journey</h2>
              <p className="journey-page-paragraph">
                Smaar Elysium is an all-inclusive Manpower Supply Company in
                UAE providing the best manpower to any industries. We have
                transformed and curated our Manpower services to fit the volatile
                market of the region. After spending more than 15 years in this
                industry, we have got both- extensive experience and a special
                team, to help you out with your staffing requirements.
              </p>
              <p className="journey-page-paragraph">
                Our expert teams are dedicated towards helping you find the
                suitable staff members for your task. Whether you need to instantly
                hire an expert or need a whole group of Manpower for a project, we
                have the perfect solution for you. We are the go-to staffing provider,
                skilled and unskilled workers, for several of our happy clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision Section (From Image) ── */}
      <section className="mv-section">
        <div className="container">
          <div className="mv-wrapper">
            <div className="mv-box mv-box-left">
              <div className="mv-content">
                <h2 className="mv-title">Our Mission</h2>
                <p className="mv-text">
                  We envision emerging as a brand that is synonymous with manpower
                  and staffing service providing in the UAE. At Smaar Elysium, we
                  strive to be one-stop for all the manpower-related needs, be it
                  on-demand or contract staffing. Our team endeavors to offer skilled
                  and proficient Manpower for all the businesses requirements.
                </p>
              </div>
            </div>
            <div className="mv-box mv-box-right">
              <div className="mv-content">
                <h2 className="mv-title">Our Vision</h2>
                <p className="mv-text">
                  We aspire to become our client's go-to human resource supplier
                  for businesses irrespective of their size and nature. Our focus
                  is on making the best use of our expertise and knowledge to
                  deliver fitting staffing support.
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
            <span className="section-label">Why Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do at mankind's leading agency.</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Target /></div>
              <h3>Resolution</h3>
              <p>We are dedicated to solving challenges effectively and finding the absolute best outcomes for every staffing need.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Activity /></div>
              <h3>Versatility</h3>
              <p>We adapt swiftly to changing market dynamics, offering flexible solutions across various industries and roles.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Users /></div>
              <h3>Inclusiveness</h3>
              <p>We champion diversity and ensure equal opportunities, fostering environments where everyone can thrive.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Eye /></div>
              <h3>Transparency</h3>
              <p>We operate with complete openness, building lasting trust through honest and clear communication at all times.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><ShieldCheck /></div>
              <h3>Responsibility</h3>
              <p>We take full ownership of our commitments, ensuring ethical practices and strict compliance in all operations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Heart /></div>
              <h3>Nurturing</h3>
              <p>We care deeply about the continuous growth and well-being of both our candidates and our internal teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Clients Section (From Home Page) ── */}
      <section className="clients-section">
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
      </section>

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
              {/* <Link to="/insights" className="insight-btn">
                          Read More <ChevronRight size={18} />
                        </Link> */}
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
        .home-hero__title { font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.2rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        .hero-btn-main { background: #fff; color: #000; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image-wrapper { flex: 0 0 auto; }
        .home-hero__image { max-width: 450px; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        @media (max-width: 1024px) { .home-hero { flex-direction: column; text-align: center; padding: 60px 50px; } .home-hero__image { max-width: 350px; margin-top: 40px; } }
        @media (max-width: 576px) { .home-hero { padding: 40px 25px; border-radius: 20px; } .home-hero__image { max-width: 100%; } }

        /* General Section Styles */
        .section-label { color: #FE7622; font-size: 0.9rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 10px; }
        .section-title { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 20px; line-height: 1.2; }
        .section-subtitle { font-size: 1.1rem; color: #777; max-width: 600px; margin: 0 auto 50px; line-height: 1.6; }
        .text-center { text-align: center; }

        /* Our Story */
        .our-story-section { padding: 80px 0; background: #fff; }
        .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .story-text { font-size: 1.05rem; color: #555; line-height: 1.8; margin-bottom: 20px; }
        
        .story-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .stat-box { background: #f8f9fa; padding: 40px 30px; border-radius: 20px; text-align: center; border: 1px solid #eee; transition: 0.3s; }
        .stat-box:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .stat-box.highlight { background: #FE7622; color: white; border-color: #FE7622; }
        .stat-number { font-size: 3rem; font-weight: 900; margin-bottom: 10px; color: #111; }
        .stat-box.highlight .stat-number, .stat-box.highlight .stat-label { color: white; }
        .stat-label { font-size: 1rem; color: #666; font-weight: 500; }

        @media (max-width: 992px) { .story-grid { grid-template-columns: 1fr; } }
        @media (max-width: 500px) { .story-stats { grid-template-columns: 1fr; } }

        /* ── Our Journey Section ── */
        .journey-page-section { padding: 40px 0 80px; background: #fff; }
        .journey-split-card {
            display: flex;
            border-radius: 24px;
            overflow: hidden;
            background: #f5f5f5;
        }
        .journey-image-container {
            flex: 0 0 50%;
            position: relative;
            min-height: 400px;
        }
        .journey-full-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            inset: 0;
            display: block;
        }
        .journey-text-container {
            flex: 1;
            padding: 80px 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .journey-page-heading {
            font-size: 2.4rem;
            font-weight: 500;
            color: #111;
            margin-bottom: 25px;
            letter-spacing: -0.5px;
        }
        .journey-page-paragraph {
            font-size: 1rem;
            color: #888;
            line-height: 1.8;
            margin-bottom: 25px;
        }
        .journey-page-paragraph:last-child { margin-bottom: 0; }

        @media (max-width: 1024px) {
            .journey-split-card { flex-direction: column; }
            .journey-image-container { min-height: 350px; position: static; }
            .journey-full-img { position: static; }
            .journey-text-container { padding: 50px 40px; }
        }
        @media (max-width: 576px) {
            .journey-text-container { padding: 40px 25px; }
            .journey-page-heading { font-size: 2rem; }
        }

        /* ── Mission & Vision Section ── */
        .mv-section { padding: 40px 0 80px; background: #fff; }
        .mv-wrapper {
            display: flex;
            border-radius: 24px;
            overflow: hidden;
        }
        .mv-box {
            flex: 1;
            min-height: 450px;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            position: relative;
        }
        .mv-box::before {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.15); /* Slight overlay to make the red stand out */
        }
        .mv-box-left { background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop'); }
        .mv-box-right { background-image: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop'); }
        .mv-content {
            background: #fa3e52; /* Bright vibrant red matching image */
            color: white;
            padding: 50px 45px;
            width: 100%;
            max-width: 500px;
            position: relative;
            z-index: 2;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .mv-title {
            font-size: 2.2rem;
            font-weight: 500;
            margin-bottom: 20px;
        }
        .mv-text {
            font-size: 1rem;
            line-height: 1.8;
            opacity: 0.95;
        }

        @media (max-width: 900px) {
            .mv-wrapper { flex-direction: column; }
            .mv-box { min-height: 400px; padding: 30px 20px; }
            .mv-content { padding: 40px 30px; }
            .mv-title { font-size: 1.8rem; }
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

        /* Core Values */
        .values-section { padding: 80px 0 100px; background: #f8f9fa; }
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .value-card { background: #fff; padding: 40px 30px; border-radius: 20px; box-shadow: 0 5px 20px rgba(0,0,0,0.04); transition: 0.4s; text-align: center; border-bottom: 4px solid transparent; }
        .value-card:hover { transform: translateY(-10px); box-shadow: 0 15px 40px rgba(0,0,0,0.1); border-color: #FE7622; }
        .value-icon { width: 70px; height: 70px; background: #fff0f0; color: #FE7622; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; transition: 0.4s; }
        .value-card:hover .value-icon { background: #FE7622; color: white; }
        .value-card h3 { font-size: 1.25rem; font-weight: 700; color: #111; margin-bottom: 15px; }
        .value-card p { font-size: 0.95rem; color: #666; line-height: 1.6; }

        @media (max-width: 1200px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .values-grid { grid-template-columns: 1fr; } }

        /* Insights Section (Added by User) */
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

        /* Responsive Insights */
        @media (max-width: 1200px) {
            .insights-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
            .insights-grid { grid-template-columns: 1fr; }
            .insights-title { font-size: 2rem; }
        }
      `}} />
    </div >
  );
};

export default AboutUs;
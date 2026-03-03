import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import heroImage from "../assest/manpower-supply-meadia/recruitment-hero.png";
import btsImg from "../assest/manpower-supply-meadia/recruitment_bts.jpg";

const Recruitment = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "1. What makes your talent acquisition unique?",
      answer: "Our hiring approach is distinguished by a customized strategy that aligns the right professionals with your company’s specific goals and culture."
    },
    {
      question: "2. How thorough is your candidate screening process?",
      answer: "We follow a detailed evaluation process that includes skill assessments, background checks, and in-depth interviews to ensure only qualified candidates move forward."
    },
    {
      question: "3. What sets apart your recruitment strategies?",
      answer: "Our recruitment methods combine market insights, advanced sourcing techniques, and industry expertise to attract top-tier talent efficiently."
    },
    {
      question: "4. How do you ensure a match between candidates and our requirements?",
      answer: "We carefully analyze your job expectations and company culture to identify candidates whose skills, experience, and values align with your needs."
    },
    {
      question: "5. Can you elaborate on the concept of personalized recruitment?",
      answer: "Personalized recruitment means adapting our hiring solutions to suit your business objectives, ensuring a more accurate and long-term placement."
    },
    {
      question: "6. How do you handle the challenges in the recruitment process?",
      answer: "We proactively address recruitment challenges by maintaining clear communication, leveraging industry networks, and applying strategic problem-solving at every stage."
    }
  ];

  return (
    <div className="service-page recruitment-page">
      {/* Hero Section - Using Home Page Style */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">Recruiting<br />Solutions in UAE</h1>
            <p className="home-hero__text">Looking for expert recruitment services tailored to your business? manpower.ae provides top-tier talent acquisition for all industries.</p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">Book Now</Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img
              src={heroImage}
              alt="Recruitment Experts"
              className="hero-workers-img"
            />
          </div>
        </section>
      </div>

      {/* Main Content Section */}
      <div className="service-content-section">
        <div className="container">
          {/* Choose Best For You Banner */}
          <div className="choose-best-split">
            <div className="cbs-left">
              <h2>Choose the best for you</h2>
              <p>Step into the realm of our tailored recruitment services, where precision converges with excellence for an unparalleled experience. Our core features redefine manpower supply with a focus on tailored talent acquisition, meticulous candidate screening, and personalized recruitment strategies.</p>
              <p>In the ever-evolving business environment, effective management of your workforce is a key determinant of success.</p>
              <p>Our manpower supply services excel in delivering customized recruitment solutions crafted to suit the unique requirements of your organization. In this era of swift transformations, acquiring and retaining skilled talent holds greater significance than ever before.</p>
              <p>Recognizing the pivotal role a qualified workforce plays in fostering business expansion, our committed team comprehensively caters to your recruitment needs. We ensure your company gains access to a diverse pool of talented professionals who are aligned with your objectives.</p>
              <p>Allow us to serve as your strategic ally in constructing a proficient and motivated team, empowering your business to thrive amidst fierce competition in the market.</p>
            </div>

            <div className="cbs-right">
              <div className="cbs-logo">
                <span className="logo-main">manpower</span><span className="logo-sub">.ae</span><span>®</span>
                <span className="logo-slogan" style={{ display: 'block' }}>ANY WORK. OUR MANPOWER!</span>
              </div>
              <div className="cbs-overlay"></div>
              <div className="cbs-content">
                <div className="cbs-text-block">
                  <span className="cbs-go-beyond">GO BEYOND THE</span>
                  <span className="cbs-ordinary">ORDINARY</span>
                  <span className="cbs-find">FIND THE PRECISE</span>
                  <span className="cbs-executives">EXECUTIVES</span>
                </div>
              </div>
              <div className="cbs-footer">
                <div className="cbs-footer-pill">www.manpower.ae</div>
                <div className="cbs-footer-info">
                  <span><i className="fa-brands fa-whatsapp"></i> 0558777717</span>
                  <span className="cbs-divider">|</span>
                  <span>sales@manpower.ae</span>
                </div>
              </div>
            </div>
          </div>

          {/* Build Your Efficient Team Split Section - Simplified */}
          <div className="build-team-split">
            <div className="bts-left">
              <div className="bts-workers-container">
                <img
                  src="https://manpower.ae/wp-content/uploads/2024/12/group_7-e1734330734971-600x511.png"
                  alt="Team of Workers"
                  className="bts-workers-img"
                />
              </div>

              <div className="bts-web-pill">www.manpower.ae</div>

              <div className="bts-contact-footer">
                <div className="bts-contact-item">
                  <i className="fa-brands fa-whatsapp"></i> 0558777717
                </div>
                <div className="bts-contact-divider">|</div>
                <div className="bts-contact-item">
                  info@manpower.ae
                </div>
              </div>
            </div>

            <div className="bts-right">
              <h3>Build Your Efficient Team With Our Services</h3>
              <p>Unleash potential begins with our commitment to understanding your unique needs. Our tailored talent acquisition ensures a seamless match between your requirements and the exceptional individuals we source.</p>
              <p>Thorough candidate screening is the cornerstone of our process. We go beyond resumes, diving into the essence of each candidate. Our meticulous approach ensures that only the most qualified individuals make it to your shortlist.</p>
              <p>Experience recruitment services that elevate your workforce to new heights. Let us navigate the complexities, so you can focus on building success.</p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="why-choose-us-section">
            <h2 className="section-title">WHY CHOOSE US</h2>
            <p className="section-intro">Choose us for recruitment that goes beyond the conventional. Experience the difference of personalized talent acquisition, meticulous candidate screening, and recruitment strategies designed exclusively for your success.</p>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>Tailored Talent Acquisition</h3>
                <p>We don't believe in one-size-fits-all. Our approach is custom-fit, ensuring the candidates we bring match not just the job requirements but also your unique organizational culture.</p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>Thorough Candidate Screening</h3>
                <p>Our commitment to quality extends to our screening process. We delve deep to unearth not only skills but also the intangible qualities that make a candidate the right cultural fit for your team.</p>
              </div>

              <div className="benefit-card bg-red">
                <h3>Personalized Recruitment Strategies</h3>
                <p>Recognizing that every client is distinct, we craft recruitment strategies tailored to your specific needs. Whether it's volume hiring or niche roles, we adapt our approach to maximize efficiency.</p>
              </div>
            </div>
          </div>

          {/* Manpower Supply Insights Section */}
         
        </div>
      </div>

    

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-main-title">FAQ</h2>
          <p className="faq-subtitle">MOST ASKED QUESTIONS.</p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                <div
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                  <span className="faq-question-text">{faq.question}</span>
                </div>
                <div className="faq-answer-container" style={{ maxHeight: openFaq === index ? '300px' : '0' }}>
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



       <div className="insights-section">
            <h2 className="insights-title">Manpower Supply Insights</h2>

            <div className="insights-grid">
              <div className="insight-card">
                <div className="insight-image-wrap">
                  <img src="https://manpower.ae/wp-content/uploads/2024/12/group_5-e1734335548682.png" alt="Insight 1" />
                </div>
                <div className="insight-content">
                  <h3>Brief Introduction to Manpower Supply</h3>
                  <p>Manpower Supply is when businesses hire an agency to provide for a team of experts for...</p>
                  <Link to="/insights" className="insight-btn">
                    Read More <ChevronRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-image-wrap">
                  <img src="https://manpower.ae/wp-content/uploads/2024/12/group_4-e1734335583764.png" alt="Insight 2" />
                </div>
                <div className="insight-content">
                  <h3>Need of Manpower Supply</h3>
                  <p>Maintaining flawless production while keeping up with the schedule is very important. This makes.....</p>
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
                  <h3>Benefits of getting Manpower Supply</h3>
                  <p>There are tons of advantages to getting Manpower Supply from us. Some of these include:</p>
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
                  <h3>How can Manpower Supply work at Your Advantage?</h3>
                  <p>Staying ahead in the competitive race is important for every organization. And having a strong……</p>
                  <Link to="/insights" className="insight-btn">
                    Read More <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        /* Choose Best For You Split Design */
        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        .cbs-left {
            flex: 1;
            background: #f4f5f7;
            padding: 50px;
        }
        .cbs-left h2 {
            font-size: 2.2rem;
            margin-bottom: 25px;
            font-weight: 500;
            color: #000;
        }
        .cbs-left p {
            color: #888;
            margin-bottom: 15px;
            font-size: 1.05rem;
            line-height: 1.7;
        }
        .cbs-right {
            flex: 1;
            background: url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200') center/cover;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .cbs-logo {
            position: absolute;
            top: 25px;
            left: 25px;
            z-index: 3;
            color: #fff;
        }
        .cbs-logo .logo-main { font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-sub { color: #d11a2a; font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-slogan { font-size: 0.5rem; font-weight: 800; color: #d11a2a; letter-spacing: 0.5px; }
        .cbs-overlay {
            background: rgba(0,0,0,0.5);
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            z-index: 1;
        }
        .cbs-content {
            position: relative;
            z-index: 2;
            padding: 50px 40px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .cbs-text-block {
            text-align: right;
            transform: translateY(20px);
        }
        .cbs-go-beyond { font-size: 2.2rem; font-weight: 600; display: block; color: #fff; letter-spacing: 1px; }
        .cbs-ordinary { font-size: 3rem; font-weight: 900; display: block; margin-top: -10px; color: #fff; letter-spacing: 1px; }
        .cbs-find { font-size: 1.8rem; font-weight: 600; color: #3b82f6; display: block; margin-top: 5px; }
        .cbs-executives { font-size: 3rem; color: #3b82f6; font-weight: 900; display: block; margin-top: -10px; }

        .cbs-footer {
            position: relative;
            z-index: 2;
            background: #ac1420; /* Darker red */
            color: #fff;
            display: flex;
            justify-content: center;
            padding: 25px;
            align-items: center;
        }
        .cbs-footer-pill {
            background: #fff;
            color: #ac1420;
            padding: 6px 30px;
            border-radius: 20px;
            font-weight: 600;
            position: absolute;
            top: -17px;
            font-size: 1rem;
            letter-spacing: 3px;
        }
        .cbs-footer-info { 
            display: flex; 
            gap: 20px; 
            font-size: 1.1rem; 
            font-weight: 400; 
            margin-top: 10px;
            letter-spacing: 1px;
        }
        .cbs-divider { margin: 0 10px; opacity: 0.5; }

        @media (max-width: 1100px) {
            .choose-best-split { flex-direction: column; }
            .cbs-right { min-height: 400px; }
        }

        .service-page { padding-bottom: 0; }
        
        /* Hero Section (from Home) */
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        .home-hero { 
            background: #dc2626; 
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
        .home-hero__title { font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.2rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        
        .hero-btn-main { 
            background: #ffffff; color: #000; border: none; 
            padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem;
            display: inline-block; transition: 0.3s;
        }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        
        .home-hero__image { flex: 0.8; display: flex; justify-content: flex-end; align-items: flex-end; position: absolute; right: 40px; bottom: 0; }
        .hero-workers-img { width: 550px; max-width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }

        /* Content Section */
        .service-content-section {
            padding: 80px 0;
            background: #fff;
        }
        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        /* Build Your Efficient Team Split - Simplified & Smaller */
        .build-team-split {
            display: flex;
            border-radius: 40px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            background: #fff;
            position: relative;
            min-height: 450px; /* Reduced from 650px */
        }
        .bts-left {
            flex: 1;
            background: #f4f5f7 url('https://manpower.ae/wp-content/themes/manpower/assets/images/dots-pattern.png') center;
            padding: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .bts-workers-container {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 1;
        }
        .bts-workers-img {
            width: 100%;
            max-width: 450px;
            height: auto;
            display: block;
            filter: drop-shadow(0 15px 25px rgba(0,0,0,0.1));
        }

        .bts-web-pill {
            background: #fff;
            color: #333;
            padding: 6px 20px;
            border-radius: 50px;
            font-weight: 700;
            display: inline-block;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            z-index: 4;
            position: absolute;
            bottom: 60px; /* Adjusted */
            left: 40px;
            letter-spacing: 1px;
            font-size: 0.9rem;
        }

        .bts-contact-footer {
            background: #8b1520;
            color: #fff;
            padding: 15px 40px;
            display: flex;
            gap: 20px;
            font-weight: 600;
            font-size: 1rem;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 5;
        }
        .bts-contact-divider { opacity: 0.5; }

        .bts-right {
            flex: 1.2;
            background: #f23346;
            color: #fff;
            padding: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 2;
        }
        .bts-right h3 {
            font-size: 2.2rem;
            margin-bottom: 20px;
            font-weight: 700;
            line-height: 1.2;
            color: #fff;
        }
        .bts-right p {
            font-size: 1.05rem;
            line-height: 1.6;
            margin-bottom: 15px;
            color: rgba(255,255,255,0.95);
        }

        /* Responsive Design */
        @media (max-width: 992px) {
            .build-team-split { flex-direction: column; border-radius: 25px; min-height: auto; }
            .bts-left { min-height: 350px; padding: 40px; }
            .bts-right { padding: 40px; }
            .bts-right h3 { font-size: 1.8rem; }
            .bts-workers-img { max-width: 380px; }
            .bts-web-pill { left: 50%; transform: translateX(-50%); bottom: 50px; }
            .bts-contact-footer { padding: 12px 20px; justify-content: center; font-size: 0.85rem; }
        }

        @media (max-width: 576px) {
            .bts-right h3 { font-size: 1.6rem; }
            .bts-workers-img { max-width: 280px; }
            .bts-left { min-height: 300px; }
        }
        .why-choose-us-section {
            margin-top: 80px;
            margin-bottom: 80px;
        }
        .why-choose-us-section .section-title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 25px;
            color: #000;
            text-transform: uppercase;
        }
        .why-choose-us-section .section-intro {
            font-size: 1.1rem;
            color: #333;
            max-width: 100%;
            margin-bottom: 50px;
            line-height: 1.6;
        }
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
            border-radius: 0;
            overflow: hidden;
        }
        .benefit-card {
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 400px;
            text-align: center;
        }
        .benefit-card h3 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 25px;
            line-height: 1.2;
        }
        .benefit-card p {
            font-size: 1.05rem;
            line-height: 1.6;
        }
        .benefit-card.bg-red {
            background-color: #f23346;
            color: #fff;
        }
        .benefit-card.bg-gray {
            background-color: #e0e0e0;
            color: #333;
        }
        
        /* Responsive design for Why Choose Us */
        @media (max-width: 992px) {
            .benefits-grid {
                grid-template-columns: 1fr;
            }
            .benefit-card {
                min-height: auto;
                padding: 50px 30px;
            }
            .why-choose-us-section .section-title {
                font-size: 2.2rem;
            }
        }
        /* Manpower Supply Insights Styling */
        .insights-section {
            margin-top: 60px;
            margin-bottom: 100px;
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
            background: #8e2de2; /* fallback purple from image */
            background: linear-gradient(135deg, #8e2de2, #4a00e0);
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

        /* Responsive */
        @media (max-width: 1200px) {
            .insights-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
            .insights-grid { grid-template-columns: 1fr; }
            .insights-title { font-size: 2rem; }
        }
        
        /* FAQ Section styling mirrored from Home.jsx */
        .faq-section { padding: 60px 0 100px; background: #fff; }
        .faq-main-title { font-size: 3rem; font-weight: 400; color: #000; margin-bottom: 20px; text-transform: uppercase; }
        .faq-subtitle { font-size: 1.1rem; color: #333; margin-bottom: 40px; text-transform: uppercase; }
        
        .faq-list { max-width: 100%; border-top: 1px solid #f1f1f1; }
        .faq-item { border-bottom: 1px solid #f1f1f1; transition: 0.3s; }
        .faq-question-btn { 
            display: flex; 
            align-items: center; 
            width: 100%; 
            padding: 25px 20px; 
            background: none; 
            border: none; 
            cursor: pointer; 
            text-align: left;
            transition: 0.3s;
        }
        .faq-icon {
            font-size: 1.5rem;
            margin-right: 15px;
            color: #888;
            font-weight: 300;
            width: 20px;
            display: inline-block;
        }
        .faq-question-text {
            font-size: 1.45rem;
            color: #777;
            font-weight: 400;
            transition: 0.3s;
        }
        .faq-item.active .faq-icon, .faq-item.active .faq-question-text { color: #f23346; }
        
        .faq-answer-container {
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
            background: #fafafa;
        }
        .faq-answer-content { padding: 30px 40px; }
        .faq-answer-content p {
            color: #000; font-size: 0.95rem; line-height: 1.7; margin: 0; font-weight: 400; letter-spacing: 0.2px;
        }
        `}} />
    </div>
  );
};

export default Recruitment;
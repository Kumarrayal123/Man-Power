import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ContractStaffing = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "1. What makes your contract staffing unique?",
      answer: "Our approach is distinguished by a customized strategy that quickly aligns flexible professionals with your company’s immediate goals and culture."
    },
    {
      question: "2. How thorough is your temporary candidate screening process?",
      answer: "We follow a detailed evaluation process that includes skill assessments, background checks, and in-depth interviews to ensure only qualified temporary candidates move forward."
    },
    {
      question: "3. What sets apart your flexible workforce strategies?",
      answer: "Our contract staffing methods combine market insights, rapid sourcing techniques, and industry expertise to deploy top-tier talent efficiently."
    },
    {
      question: "4. How do you ensure a match for short-term projects?",
      answer: "We carefully analyze your project expectations and company culture to identify contractors whose skills and flexibility align with your immediate needs."
    },
    {
      question: "5. Can you elaborate on the concept of scalable staffing?",
      answer: "Scalable staffing means adapting our temporary hiring solutions to suit your fluctuating business objectives, ensuring cost-effective and timely placements."
    },
    {
      question: "6. How do you handle administrative challenges in contract staffing?",
      answer: "We proactively manage payroll, compliance, and HR challenges by maintaining clear communication and applying strategic problem-solving throughout the contract duration."
    }
  ];

  return (
    <div className="service-page recruitment-page">
      {/* Hero Section - Using Home Page Style */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">Contract Staffing<br />Solutions in UAE</h1>
            <p className="home-hero__text">Looking for flexible workforce solutions tailored to your project needs? manpower.ae provides top-tier contract staffing for all industries.</p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">Book Now</Link>
            </div>
          </div>
          <div className="home-hero__image-wrapper">
            <img
              src="https://manpower.ae/wp-content/uploads/2024/12/group_7-e1734330734971-600x511.png"
              alt="Contract Staffing Team"
              className="home-hero__image"
            />
          </div>
        </section>
      </div>

      <div className="container">
        {/* Main Content Area */}
        <div className="service-main-content">
          <div className="service-intro">
            <h2>CHOOSE THE BEST FOR YOU</h2>
            <p>Welcome to our Contract Staffing Services – where your business agility starts. Our team comprises industry experts who are well-versed with the intricacies of flexible workforce solutions.</p>
          </div>

          {/* Choose Best For You Banner */}
          <div className="choose-best-split">
            <div className="cbs-left">
              <h2>Choose the best for you</h2>
              <p>Step into the realm of our tailored contract staffing services, where speed converges with precision for an unparalleled workforce experience. Our core strengths redefine temporary staffing with a focus on agile deployment, meticulous candidate screening, and scalable contract strategies.</p>
              <p>In the ever-evolving business environment, effective management of your flexible workforce is a key determinant of success.</p>
              <p>Our contract staffing services excel in delivering customized temporary solutions crafted to suit the unique project requirements of your organization. In this era of swift transformations, accessing skilled contract talent holds greater significance than ever before.</p>
              <p>Recognizing the pivotal role a qualified flexible workforce plays in fostering business agility, our committed team comprehensively caters to your contract staffing needs. We ensure your company gains access to a diverse pool of talented professionals who are aligned with your project timelines.</p>
              <p>Allow us to serve as your strategic ally in constructing a proficient and motivated contract team, empowering your business to thrive amidst fierce competition in the market.</p>
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
                  <span className="cbs-executives">CONTRACTORS</span>
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
              <h3>Build Your Flexible Workforce With Our Services</h3>
              <p>Unleash your business potential with short-term, contract-based staffing solutions designed to scale with your project demands. Our contract staffing ensures you have the right talent exactly when you need it.</p>
              <p>Reduce overhead and minimize payroll complexities. We handle the administrative burden of contract employees so you can focus entirely on project execution and business growth.</p>
              <p>Experience staffing agility that adapts to market fluctuations. Let us seamlessly integrate contract professionals into your team, ensuring continuous excellence and operational efficiency.</p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="why-choose-us-section">
            <h2 className="section-title">WHY CHOOSE US</h2>
            <p className="section-intro">Choose us for contract staffing that goes beyond the conventional. Experience the difference of flexible talent acquisition, rapid onboarding, and workforce strategies designed exclusively for your project's success.</p>

            <div className="benefits-grid">
              <div className="benefit-card bg-red">
                <h3>Agile Talent Deployment</h3>
                <p>We don't believe in long delays. Our approach ensures rapid sourcing and onboarding of contract professionals to meet immediate project deadlines.</p>
              </div>

              <div className="benefit-card bg-gray">
                <h3>Comprehensive Payroll Management</h3>
                <p>Our commitment extends beyond sourcing. We handle all compliance, payroll, and HR administration for contract staff, reducing your operational burden.</p>
              </div>

              <div className="benefit-card bg-red">
                <h3>Scalable Staffing Strategies</h3>
                <p>Recognizing that project needs fluctuate, we craft scalable strategies. Whether it's a seasonal spike or a specific project phase, we adapt to maximize efficiency.</p>
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
            <h2 className="insights-title">Contract Staffing Insights</h2>

            <div className="insights-grid">
              <div className="insight-card">
                <div className="insight-image-wrap">
                  <img src="https://manpower.ae/wp-content/uploads/2024/12/group_5-e1734335548682.png" alt="Insight 1" />
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
                  <img src="https://manpower.ae/wp-content/uploads/2024/12/group_4-e1734335583764.png" alt="Insight 2" />
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
                  <img src="https://manpower.ae/wp-content/uploads/2024/12/group_1-e1734335607370.png" alt="Insight 3" />
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
                  <img src="https://manpower.ae/wp-content/uploads/2024/12/group_5-e1734335634676.png" alt="Insight 4" />
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
            font-weight: 700;
            margin-bottom: 30px;
            color: #333;
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
            background: #ac1420;
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
        .home-hero__image-wrapper {
            flex: 0 0 auto;
            position: relative;
            z-index: 2;
        }
        .home-hero__image { 
            max-width: 450px; 
            height: auto; 
            display: block; 
            filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3));
        }

        @media (max-width: 1024px) {
            .home-hero { flex-direction: column; text-align: center; padding: 60px 50px; }
            .home-hero__image { max-width: 300px; margin-top: 30px; }
        }
        @media (max-width: 576px) {
            .home-hero { padding: 40px 25px; border-radius: 20px; }
            .home-hero__image { max-width: 220px; }
        }

        .service-main-content { padding: 60px 0; }
        .service-intro { text-align: center; margin-bottom: 50px; }
        .service-intro h2 { font-size: 2.5rem; font-weight: 700; color: #333; }
        
        /* Build Team Split Section */
        .build-team-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 80px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            background: transparent;
            position: relative;
        }
        
        .bts-left {
            flex: 1;
            background-image: url('https://manpower.ae/wp-content/themes/manpower/assets/images/dots-pattern.png');
            background-color: #f8f9fa;
            background-size: cover;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end; /* Align image to bottom */
            min-height: 450px; /* Reduced overall height */
            padding: 0;
            overflow: hidden;
        }

        .bts-workers-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            position: relative;
            z-index: 2;
            padding-top: 40px; /* Space above image */
            margin-bottom: 40px; /* Space for the footer footer */
        }
        
        .bts-workers-img {
            max-width: 450px; /* Optimal image size */
            height: auto;
            object-fit: contain;
            display: block;
        }

        .bts-web-pill {
            position: absolute;
            bottom: 70px; /* Push above the contact strip */
            left: 50%;
            transform: translateX(-50%);
            background: #fff;
            padding: 10px 30px;
            border-radius: 100px;
            font-weight: 600;
            color: #333;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            z-index: 3;
            font-size: 1.1rem;
        }

        .bts-contact-footer {
            width: 100%;
            background: #87101c; /* Dark red matching the original image */
            color: #fff;
            padding: 15px 30px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 4;
            font-size: 1.1rem;
            font-weight: 500;
        }

        .bts-contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .bts-contact-divider {
            margin: 0 20px;
            opacity: 0.5;
        }
        
        .bts-right {
            flex: 1;
            background: #e31837; /* The signature red */
            color: #fff;
            padding: 60px 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .bts-right h3 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 30px;
            line-height: 1.2;
        }

        .bts-right p {
            font-size: 1.05rem;
            line-height: 1.7;
            margin-bottom: 20px;
            opacity: 0.95;
            font-weight: 400;
        }

        .bts-right p:last-child {
            margin-bottom: 0;
        }

        /* Responsive Fixes */
        @media (max-width: 992px) {
            .build-team-split {
                flex-direction: column;
            }
            .bts-right {
                padding: 40px 30px;
            }
            .bts-workers-img { max-width: 380px; }
            .bts-left { min-height: 400px; }
        }

        @media (max-width: 576px) {
            .bts-contact-footer {
                flex-direction: column;
                gap: 10px;
                padding: 15px;
                text-align: center;
            }
            .bts-contact-divider { display: none; }
            .bts-web-pill { bottom: 90px; padding: 8px 20px; font-size: 1rem; }
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

export default ContractStaffing;
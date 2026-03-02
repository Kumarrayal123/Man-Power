import React from 'react';
import { Link } from 'react-router-dom';

const OilAndGas = () => {
  return (
    <div className="oil-gas-page">
      {/* ── Home Page Style Hero ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">Oil & Gas<br />Sector</h1>
            <p className="home-hero__text">Expert manpower solutions powering the energy sector with specialized engineering, technical, and operational staff across the UAE.</p>
            <div className="home-hero__actions">
              <Link to="/contact" className="hero-btn-main">Get in Touch</Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img
              src="https://manpower.ae/wp-content/uploads/2024/12/group_7-e1734330734971-600x511.png"
              alt="Manpower Workers Staff"
              className="hero-workers-img"
              style={{ width: '100%', maxWidth: '550px', height: 'auto', display: 'block', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
            />
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
              <p>The Oil & Gas sector requires 100% precision, uncompromising safety, and deep technical expertise. At manpower.ae, we understand these critical demands and provide manpower solutions that power your operations without interruption.</p>
              <p>From extraction and drilling to refining and distribution, our staff is equipped to handle the complexities of the energy landscape.</p>
              <p>We provide certified professionals who aren't just workers, but experts in their respective fields, ensuring that your projects in the UAE stay on track and compliant with all international energy standards.</p>
            </div>

            <div className="cbs-right">
              <div className="cbs-logo">
                <span className="logo-main">manpower</span><span className="logo-sub">.ae</span><span>®</span>
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                alt="Oil & Gas Technical Staff"
                className="bts-workers-img"
              />
            </div>
            <div className="bts-right">
              <h3>Build Your Expert Oil & Gas Team</h3>
              <p>Whether you need a full crew for an offshore rig, specialized engineers for a refinery, or safety officers for a new project, we have the talent you need.</p>
              <p>Our rigorous vetting process ensures that every professional we provide is not only highly skilled but also deeply committed to safety and operational excellence.</p>
              <Link to="/contact" className="hero-btn-main" style={{ background: '#fff', color: '#1f2937' }}>Request Staff</Link>
            </div>
          </div>

          {/* ── Focus on Domains Section (From User Image) ── */}
          <div className="domains-container">
            <div className="domain-box" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop')" }}>
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Focus On Required Domains</h3>
                <p>When your company or business doesn't need to spend time and resources on unwanted processes, it can focus on the most crucial practices. Our Oil and Gas manpower supply services make sure that you don't get into the hassle of this domain.</p>
              </div>
            </div>
            <div className="domain-box" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1471623817296-aa07ae5c9ec4?q=80&w=800&auto=format&fit=crop')" }}>
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', fontWeight: '500' }}>
                  Manpower.ae has been providing its high-quality services in Oil and Gas industry for years. We hold the position of top manpower supply company in UAE. To know more about our services, contact us now!
                </p>
              </div>
            </div>

            {/* New Card 3 */}
            <div className="domain-box" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516246843873-9d12356b6fab?q=80&w=800&auto=format&fit=crop')" }}>
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Our Manpower Supply Services in Oil & Gas</h3>
                <p>We provide end-to-end staffing solutions covering drilling operations, technical maintenance, refinery processing, and pipeline engineering. Our specialized recruitment team ensures every technical role is filled with certified experts who understand the critical nuances of energy production in the UAE.</p>
              </div>
            </div>

            {/* New Card 4 */}
            <div className="domain-box" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop')" }}>
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Why Choose manpower.ae for Labor Supply?</h3>
                <p>With a robust track record in the energy sector, we offer unmatched speed of mobilization, strict HSE compliance, and a vast database of pre-vetted technical talent. Our focus is on reducing your operational downtime and maximizing on-site productivity through reliable workforce deployment.</p>
              </div>
            </div>

            {/* New Card 5 */}
            <div className="domain-box" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544216717-3bbf52512659?q=80&w=800&auto=format&fit=crop')" }}>
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Highly Skilled</h3>
                <p>We perform intense research and screening processes to find the right individuals. Our workforce recruitment process involves managing various aspects of the candidate together to find the right one. They are further trained and oriented to polish their skills according to the industry requirements. They are also experienced in working on different Oil and Gas projects.</p>
              </div>
            </div>

            {/* New Card 6 */}
            <div className="domain-box" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165833767-027eeed15b3b?q=80&w=800&auto=format&fit=crop')" }}>
              <div className="domain-overlay"></div>
              <div className="domain-content">
                <h3>Specialized in Oil and Gas Industry Support</h3>
                <p>Our workforce is specialized in working Oil and Gas industry. Manpower.ae has been providing manpower supply services in the oil and gas industry for years. Our quality workforce and high-grade focus on industry trends proffer one of the best manpower supply services. In addition, we have experience in the Oil and Gas industry, so you get an expert view of all your manpower supply services from our end.</p>
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

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        /* Hero Styling */
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
        .hero-btn-main { background: #fff; color: #000; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image-wrapper { flex: 0 0 auto; }
        .home-hero__image { max-width: 450px; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        @media (max-width: 1024px) { 
            .home-hero { flex-direction: column; text-align: center; padding: 60px 40px; } 
            .home-hero__image { max-width: 350px; margin-top: 40px; } 
            .home-hero__image-wrapper { flex: none; }
        }
        @media (max-width: 576px) { 
            .home-hero { padding: 40px 25px; border-radius: 20px; } 
            .home-hero__image { max-width: 100%; } 
        }

        /* ── Main Content CSS ── */
        .service-content-section { padding: 80px 0; background: #fff; }
        
        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        .cbs-left { flex: 1.2; padding: 60px; }
        .cbs-left h2 { font-size: 2.5rem; font-weight: 700; color: #111; margin-bottom: 25px; }
        .cbs-left p { font-size: 1.05rem; line-height: 1.8; color: #444; margin-bottom: 20px; }
        
        .cbs-right {
            flex: 0.8;
            background: #dc2626;
            padding: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #fff;
            position: relative;
            text-align: right;
        }
        .cbs-logo { margin-bottom: 40px; }
        .logo-main { font-size: 1.5rem; font-weight: 900; }
        .logo-sub { color: #fff; opacity: 0.8; }
        .logo-slogan { font-size: 0.8rem; letter-spacing: 2px; margin-top: 5px; opacity: 0.7; }
        
        .cbs-text-block span { display: block; line-height: 1.1; margin-bottom: 5px; }
        .cbs-go-beyond { font-size: 1.8rem; font-weight: 300; }
        .cbs-ordinary { font-size: 2.5rem; font-weight: 900; }
        .cbs-find { font-size: 1.4rem; color: #fff; opacity: 0.8; margin-top: 20px; }
        .cbs-executives { font-size: 2.2rem; font-weight: 800; font-style: italic; }

        @media (max-width: 992px) {
            .choose-best-split { flex-direction: column; }
            .cbs-left, .cbs-right { padding: 40px; text-align: left; }
        }

        /* Build Team Split */
        .build-team-split {
            display: flex;
            border-radius: 40px;
            overflow: hidden;
            margin-bottom: 80px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            background: #fff;
            min-height: 400px;
        }
        .bts-left { flex: 1; background: #f8f9fa; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .bts-workers-img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        .build-team-split:hover .bts-workers-img { transform: scale(1.05); }
        .bts-right { flex: 1; background: #1f2937; color: #fff; padding: 60px; display: flex; flex-direction: column; justify-content: center; }
        .bts-right h3 { font-size: 2.2rem; font-weight: 700; margin-bottom: 25px; line-height: 1.2; }
        .bts-right p { font-size: 1.1rem; line-height: 1.7; color: rgba(255,255,255,0.8); margin-bottom: 20px; }
        
        @media (max-width: 992px) {
            .build-team-split { flex-direction: column; }
            .bts-left { height: 350px; }
            .bts-right { padding: 40px 30px; }
        }

        /* Why Choose Us Section */
        .why-choose-us-section { margin-bottom: 100px; }
        .section-title { font-size: 2.8rem; font-weight: 800; color: #000; text-align: center; margin-bottom: 60px; position: relative; }
        .section-title::after { content: ''; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); width: 80px; height: 5px; background: #dc2626; border-radius: 5px; }
        
        .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-radius: 30px; overflow: hidden; }
        .benefit-card { padding: 70px 40px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 380px; }
        .benefit-card h3 { font-size: 1.8rem; font-weight: 700; margin-bottom: 25px; }
        .benefit-card p { font-size: 1.05rem; line-height: 1.7; opacity: 0.9; }
        .benefit-card.bg-red { background: #dc2626; color: #fff; }
        .benefit-card.bg-gray { background: #f3f4f6; color: #111; }
        
        @media (max-width: 992px) {
            .benefits-grid { grid-template-columns: 1fr; }
            .benefit-card { min-height: auto; padding: 60px 40px; }
        }

        /* FAQ Section */
        .faq-section { background: #f9fafb; padding: 100px 0; border-radius: 40px; }
        .faq-container { max-width: 900px; margin: 0 auto; }
        .faq-item { background: #fff; border-radius: 15px; margin-bottom: 15px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.02); transition: 0.3s; border: 1px solid #f3f4f6; }
        .faq-item.active { box-shadow: 0 10px 25px rgba(0,0,0,0.05); border-color: #dc2626; }
        .faq-question { padding: 25px 30px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
        .faq-question span { font-size: 1.2rem; font-weight: 600; color: #111; }
        .faq-icon { color: #9ca3af; transition: 0.3s; }
        .faq-item.active .faq-icon { transform: rotate(90deg); color: #dc2626; }
        .faq-answer { max-height: 0; overflow: hidden; transition: 0.5s ease; background: #fff; }
        .faq-item.active .faq-answer { max-height: 300px; }
        .faq-answer p { padding: 0 30px 30px; color: #4b5563; line-height: 1.7; font-size: 1.05rem; }

        /* ── Clients Marquee CSS ── */
        .clients-section { padding: 80px 0 100px; background: #fff; text-align: center; }
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

        /* ── Focus Domains CSS ── */
        .domains-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin-bottom: 80px;
        }
        .domain-box {
            flex: 1;
            position: relative;
            border-radius: 40px;
            overflow: hidden;
            padding: 60px;
            min-height: 480px;
            display: flex;
            align-items: center;
            background-size: cover;
            background-position: center;
            color: #fff;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .domain-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 1;
        }
        .domain-content {
            position: relative;
            z-index: 2;
        }
        .domain-content h3 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 25px;
            color: #fff;
        }
        .domain-content p {
            font-size: 1.15rem;
            line-height: 1.7;
            opacity: 0.95;
            color: #fff;
        }
        @media (max-width: 992px) {
            .domains-container { grid-template-columns: repeat(2, 1fr); gap: 20px; }
            .domain-box { min-height: auto; padding: 40px; border-radius: 25px; }
            .domain-content h3 { font-size: 1.8rem; }
            .domain-content p { font-size: 1.05rem; }
            .service-content-section { padding: 50px 0; }
            .section-header-mobile { font-size: 2rem !important; }
        }
        @media (max-width: 768px) {
            .domains-container { grid-template-columns: 1fr; }
        }
        @media (max-width: 576px) {
            .home-hero__title { font-size: 2.2rem; }
            .home-hero__text { font-size: 1rem; margin-bottom: 30px; }
            .section-header-mobile { font-size: 1.8rem !important; }
            .marquee-group { gap: 30px; padding: 0 20px; }
            .client-logo-box img { max-width: 100px; }
        }
        
        .section-header-mobile { font-size: 2.5rem; fontWeight: 500; color: #666; margin-bottom: 20px; transition: 0.3s; }


      `}} />
    </div>
  );
};

export default OilAndGas;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sectorPages.css';

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


    </div>
  );
};

export default OilAndGas;
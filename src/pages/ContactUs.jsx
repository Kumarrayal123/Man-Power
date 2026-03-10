import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import btsGroup7Img from "../assest/manpower-supply-meadia/contacthero.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <div className="contact-page">

      {/* ── Home Page Style Hero ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title">Contact Us<br />We're Here to Help</h1>
            <p className="home-hero__text">Have a question, a staffing requirement, or need a consultation? Our expert team at Smaar Elysium is ready to assist you with the right workforce solutions.</p>
            <div className="home-hero__actions">
              <a href="tel:8885072259" className="hero-btn-main">Call Us Now</a>
            </div>
          </div>
          <div className="home-hero__image-wrapper">
            <img
              src={btsGroup7Img}
              alt="Contact Manpower India"
              className="home-hero__image"
            />
          </div>
        </section>
      </div>

      {/* ── Full-Width Map ── */}
      {/* <div className="container map-wrapper">
        <div className="fullwidth-map-card">
          <iframe
            title="Manpower India Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3454!2d55.3764!3d25.2697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d68aaaaaa%3A0x0!2zMjXCsDE2JzEwLjkiTiA1NcKwMjInMzUuMCJF!5e0!3m2!1sen!2sae!4v1"
            width="100%"
            height="480"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div> */}

      {/* ── Location Detail: Hyderabad City Image + Contact Card ── */}
      <section className="location-detail-section">
        <div className="container">
          <div className="location-split-card">
            {/* Left: Hyderabad City Image */}
            <div className="location-image-side">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop"
                alt="Hyderabad India Skyline"
                className="location-city-img"
              />
              <div className="location-country-label">India</div>
            </div>

            {/* Right: Contact Details */}
            <div className="location-details-side">
              <p className="loc-line">Mobile: <strong>8885072259</strong></p>
              {/* <p className="loc-line">Mobile: <strong>+971 55 8777717</strong></p> */}
              <p className="loc-line">Email: <strong>info@smaarelysium.com</strong></p>

              <a href="https://smaarelysium.com" target="_blank" rel="noreferrer" className="loc-website">smaarelysium.com</a>

              <p className="loc-address">
                Hyderabad
              </p>

              <Link to="/contact" className="loc-book-btn">Book Manpower</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container map-wrapper">
        <div className="fullwidth-map-card">
          <iframe
            title="Hyderabad India Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.9040513437!2d78.24323080429685!3d17.412281024402787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710054000000!5m2!1sen!2sin"
            width="100%"
            height="480"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>


      <section className="quote-section">
        <div className="container">
          <div className="quote-wrapper">
            <div className="quote-image-side">
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000" alt="Hyderabad Architecture" />
            </div>
            <div className="quote-form-side">
              <span className="quote-label">Request a Quote</span>
              <h2 className="quote-title">Get a quick follow up!</h2>
              <p className="quote-desc">
                In case you have any queries or want to hire our adept manpower services, fill up this form, and our experts will get back to you!
              </p>

              <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <input type="text" placeholder="Enter Name" required />
                  <input type="email" placeholder="Enter Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Comments" rows="4"></textarea>
                </div>

                {/* Placeholder for reCAPTCHA as shown in screenshot */}
                <div className="recaptcha-placeholder">
                  <div className="recaptcha-box">
                    <input type="checkbox" id="robot" />
                    <label htmlFor="robot">I'm not a robot</label>
                    <div className="recaptcha-logo">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg" alt="reCAPTCHA" width="30" />
                    </div>
                  </div>
                </div>

                <button type="submit" className="quote-submit-btn">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        /* Hero */
        .hero-wrapper { padding-top: 20px; padding-bottom: 10px; }
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
        .home-hero__image { max-width: 450px; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3)); }
        @media (max-width: 1024px) { .home-hero { flex-direction: column; text-align: center; padding: 60px 50px; } .home-hero__image { max-width: 300px; margin-top: 30px; } }
        @media (max-width: 576px) { .home-hero { padding: 40px 25px; border-radius: 20px; } .home-hero__image { max-width: 220px; } }

        /* Full-Width Map */
        .map-wrapper { padding-top: 30px; padding-bottom: 10px; }
        .fullwidth-map-card {
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 6px 30px rgba(0,0,0,0.1);
            line-height: 0;
        }
        .fullwidth-map-card iframe { border-radius: 24px; }
        @media (max-width: 768px) { .fullwidth-map-card iframe { height: 320px; } }

        /* Location Detail Section */
        .location-detail-section { padding: 30px 0 80px; background: #fff; }
        .location-split-card {
            display: flex;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 6px 30px rgba(0,0,0,0.08);
            background: #f5f6f8;
        }
        .location-image-side {
            flex: 0 0 45%;
            position: relative;
            min-height: 320px;
            overflow: hidden;
        }
        .location-city-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .location-country-label {
            position: absolute;
            bottom: 25px;
            left: 30px;
            font-size: 2.5rem;
            font-weight: 900;
            color: #fff;
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
            letter-spacing: 2px;
        }
        .location-details-side {
            flex: 1;
            padding: 50px 55px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 8px;
        }
        .loc-line { font-size: 1rem; color: #555; margin: 0 0 6px; line-height: 1.5; }
        .loc-line strong { color: #222; }
        .loc-website { display: inline-block; color: #FE7622; font-weight: 700; font-size: 1rem; text-decoration: none; margin: 10px 0 6px; }
        .loc-website:hover { text-decoration: underline; }
        .loc-address { font-size: 0.95rem; color: #777; line-height: 1.7; margin: 0 0 28px; }
        .loc-book-btn {
            display: inline-block;
            background: #1b2a4a;
            color: #fff;
            padding: 14px 36px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1rem;
            text-decoration: none;
            transition: 0.3s;
            width: fit-content;
        }
        .loc-book-btn:hover { background: #FE7622; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }

        @media (max-width: 900px) {
            .location-split-card { flex-direction: column; }
            .location-image-side { min-height: 250px; flex: none; }
            .location-details-side { padding: 35px 30px; }
        }
        @media (max-width: 576px) {
            .location-details-side { padding: 25px 20px; }
            .location-country-label { font-size: 1.8rem; }
        }

        /* ── Request a Quote Section (Matching Home Page) ── */
        .quote-section { padding: 40px 0 100px; background: #fff; }
        .quote-wrapper {
            display: flex;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.1);
            min-height: 600px;
        }
        .quote-image-side {
            flex: 1;
            position: relative;
        }
        .quote-image-side img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            inset: 0;
        }
        .quote-form-side {
            flex: 1;
            background: linear-gradient(135deg, #1d152a 0%, #b11d2b 100%);
            padding: 60px 50px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .quote-label { font-size: 1rem; opacity: 0.9; margin-bottom: 5px; display: block; }
        .quote-title { font-size: 2.8rem; font-weight: 600; margin-bottom: 20px; }
        .quote-desc { font-size: 0.95rem; line-height: 1.6; opacity: 0.9; margin-bottom: 40px; max-width: 90%; }
        
        .quote-form input, .quote-form textarea {
            width: 100%;
            background: transparent;
            border: 1px solid rgba(255,255,255,0.2);
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-size: 0.95rem;
            outline: none;
            transition: 0.3s;
        }
        .quote-form input::placeholder, .quote-form textarea::placeholder { color: rgba(255,255,255,0.5); }
        .quote-form input:focus, .quote-form textarea:focus { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.05); }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .form-group { margin-bottom: 20px; }
        .quote-form textarea { resize: none; }
        
        .recaptcha-placeholder { margin-bottom: 30px; }
        .recaptcha-box { 
            background: #fff; border-radius: 4px; padding: 10px 15px; 
            display: inline-flex; align-items: center; gap: 15px;
            color: #333; font-size: 0.9rem; width: 260px; justify-content: space-between;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .recaptcha-box input[type="checkbox"] { width: 24px; height: 24px; cursor: pointer; border: 2px solid #ccc; flex-shrink: 0; }
        .recaptcha-box label { cursor: pointer; flex: 1; margin-top: 2px; }
        .recaptcha-logo { display:flex; flex-direction: column; align-items: center; font-size: 0.5rem; color: #999; }
        
        .quote-submit-btn {
            background: #fff; color: #333; border: none; padding: 15px 40px;
            border-radius: 100px; font-weight: 600; font-size: 1.1rem; cursor: pointer; transition: 0.3s;
        }
        .quote-submit-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

        @media (max-width: 900px) {
            .quote-wrapper { flex-direction: column; }
            .quote-image-side { min-height: 280px; flex: none; position: static; }
            .quote-image-side img { position: static; }
            .quote-form-side { padding: 40px 30px; }
            .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 576px) {
            .quote-form-side { padding: 30px 20px; }
            .quote-title { font-size: 2.2rem; }
        }

      `}} />

    </div>
  );
};

export default ContactUs;
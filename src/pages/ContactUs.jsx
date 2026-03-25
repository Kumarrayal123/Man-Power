import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import btsGroup7Img from "../assest/manpower-supply-meadia/contacthero.png";
import contactDubaiCity from "../assest/manpower-supply-meadia/contact_dubai_city.png";
import contactQuoteOffice from "../assest/manpower-supply-meadia/uae_contact_quote_office.png";
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';

const ContactUs = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <div className="contact-page">
      <SEOHead
        title={t.contactSEOTitle}
        description={t.contactSEODesc}
        keywords="contact Smaar Elysium, manpower agency contact UAE, staffing company Dubai, hire manpower UAE contact, workforce solutions contact, Smaar Elysium phone"
        canonical="https://www.smaarelysium.com/contact"
        faqSchema={[
          { question: t.cuFAQ1Q, answer: t.cuFAQ1A },
          { question: t.cuFAQ2Q, answer: t.cuFAQ2A },
          { question: t.cuFAQ3Q, answer: t.cuFAQ3A },
          { question: t.cuFAQ4Q, answer: t.cuFAQ4A }
        ]}
      />

      {/* ── Home Page Style Hero ── */}
      <div className="container hero-wrapper">
        <section className="home-hero">
          <div className="home-hero__content">
            <h1 className="home-hero__title" dangerouslySetInnerHTML={{ __html: t.cuHeroTitle + '<br />' + t.cuHeroSubtitle }}></h1>
            <p className="home-hero__text">{t.cuHeroText}</p>
            <div className="home-hero__actions">
              <a href="tel:8885072259" className="hero-btn-main">{t.cuCallNow}</a>
            </div>
          </div>
          <div className="home-hero__image-wrapper">
            <img
              src={btsGroup7Img}
              alt="Contact Manpower UAE"
              className="home-hero__image"
            />
          </div>
        </section>
      </div>

      {/* ── Location Detail: Dubai City Image + Contact Card ── */}
      <section className="location-detail-section">
        <div className="container">
          <div className="location-split-card">
            {/* Left: Dubai City Image */}
            <div className="location-image-side">
              <img
                src={contactDubaiCity}
                alt="Dubai UAE Skyline"
                className="location-city-img"
              />
              <div className="location-country-label">{t.uae}</div>
            </div>

            {/* Right: Contact Details */}
            <div className="location-details-side">
              <p className="loc-line">{t.cuMobile} <strong>{t.phone}</strong></p>
              {/* <p className="loc-line">Mobile: <strong>+971 55 8777717</strong></p> */}
              <p className="loc-line">{t.cuEmail} <strong>smaarelysium@gmail.com</strong></p>

              <a href={"https://" + t.cuWebsite} target="_blank" rel="noreferrer" className="loc-website">{t.cuWebsite}</a>

              <p className="loc-address">
                {t.cuAddress}
              </p>

              <a
                href="#contact-form"
                className="loc-book-btn"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >{t.cuBookBtn}</a>
            </div>
          </div>
        </div>
      </section>

      <div className="container map-wrapper">
        <div className="fullwidth-map-card">
          <iframe
            title="Dubai UAE Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.847844238!2d54.89781604758778!3d25.075707324317073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1710123456789!5m2!1sen!2sae"
            width="100%"
            height="480"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>


      <section id="contact-form" className="quote-section">
        <div className="container">
          <div className="quote-wrapper">
            <div className="quote-image-side">
              <img src={contactQuoteOffice} alt="Professional Emirati business meeting in Dubai" />
            </div>
            <div className="quote-form-side">
              <span className="quote-label">{t.cuQuoteLabel}</span>
              <h2 className="quote-title">{t.cuQuoteTitle}</h2>
              <p className="quote-desc">
                {t.cuQuoteDesc}
              </p>

              <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <input type="text" placeholder={t.enterName} required />
                  <input type="email" placeholder={t.enterEmail} required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder={t.phoneNum} required />
                </div>
                <div className="form-group">
                  <textarea placeholder={t.comments} rows="4"></textarea>
                </div>

                <button type="submit" className="quote-submit-btn">{t.bookNow}</button>
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
        @media (max-width: 1024px) { .home-hero { flex-direction: column; text-align: center; padding: 60px 30px 0; } .home-hero__image { max-width: 380px; margin-top: 30px; margin-bottom: -15%; } }
        @media (max-width: 576px) { .home-hero { padding: 40px 25px 0; border-radius: 20px; } .home-hero__image { max-width: 100%; margin-bottom: -12%; } }

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
            background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary) 100%);
            padding: 60px 50px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .quote-label { font-size: 1rem; opacity: 0.9; margin-bottom: 5px; display: block; }
        .quote-title { 
            font-size: 2.8rem; 
            font-weight: 600; 
            margin-bottom: 20px; 
            color: #ffffff;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .quote-title:hover {
            color: #FE7622;
            text-shadow: 0 0 15px rgba(254, 118, 34, 0.4);
            transform: translateX(10px);
        }
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
            transition: all 0.3s ease;
        }
        .quote-form input::placeholder, .quote-form textarea::placeholder { color: rgba(255,255,255,0.5); }
        
        .quote-form input:hover, .quote-form textarea:hover {
            border-color: var(--color-primary);
            box-shadow: 0 0 10px rgba(254, 118, 34, 0.3);
            background: rgba(255,255,255,0.05);
        }
        
        .quote-form input:focus, .quote-form textarea:focus { 
            border-color: var(--color-primary); 
            background: rgba(255,255,255,0.1); 
            box-shadow: 0 0 15px rgba(254, 118, 34, 0.5);
        }
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
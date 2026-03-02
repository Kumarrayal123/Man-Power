import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! Our team will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="contact-page">
            {/* Red Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-hero__title">Contact Us</h1>
                    <nav className="breadcrumb">
                        <span>Home</span> / <span>Contact</span>
                    </nav>
                </div>
            </section>

            <section className="contact-main">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <div className="contact-info-cards">
                            <div className="contact-card">
                                <div className="contact-card__icon"><MapPin /></div>
                                <div className="contact-card__text">
                                    <h3>Our Office</h3>
                                    <p>1st Floor, Office 103 & 104, Al Mozna Building, Dubai, UAE</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card__icon"><Phone /></div>
                                <div className="contact-card__text">
                                    <h3>Phone Number</h3>
                                    <p>+971 4 2632006</p>
                                    <p>055 - 8777717</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card__icon"><Mail /></div>
                                <div className="contact-card__text">
                                    <h3>Email Address</h3>
                                    <p>info@manpower.ae</p>
                                    <p>support@manpower.ae</p>
                                </div>
                            </div>

                            <div className="contact-map">
                                {/* Embed Placeholder */}
                                <div className="map-placeholder">
                                    <MapPin size={40} color="#ddd" />
                                    <span>Interactive Map View</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <div className="form-header">
                                <MessageSquare className="header-icon" />
                                <h2>Send Us a Message</h2>
                                <p>Have a question or need a quote? Fill out the form below and we'll get back to you within 24 hours.</p>
                            </div>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+971 50 123 4567"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Your Message</label>
                                    <textarea
                                        rows="6"
                                        placeholder="Tell us about your requirements..."
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary submit-btn">
                                    Send Message <Send size={16} style={{ marginLeft: '10px' }} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .page-hero { background: var(--color-primary); color: white; padding: 60px 0; text-align: center; }
        .page-hero__title { font-size: 2.5rem; color: white; margin-bottom: 10px; }
        .breadcrumb { font-size: 0.9rem; opacity: 0.8; }
        
        .contact-main { padding: 100px 0; background: var(--color-light-bg); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; }
        
        .contact-card { background: white; padding: 30px; border-radius: 12px; display: flex; gap: 20px; align-items: flex-start; margin-bottom: 20px; box-shadow: var(--shadow-card); }
        .contact-card__icon { width: 50px; height: 50px; background: #fff0f0; color: var(--color-primary); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .contact-card__text h3 { font-size: 1.1rem; margin-bottom: 8px; }
        .contact-card__text p { font-size: 0.95rem; color: var(--color-mid); line-height: 1.5; }
        
        .map-placeholder { width: 100%; height: 250px; background: #eee; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; color: #999; margin-top: 10px; border: 2px dashed #ddd; }
        
        .contact-form-wrapper { background: white; padding: 50px; border-radius: 15px; box-shadow: var(--shadow-card); }
        .form-header { margin-bottom: 40px; }
        .header-icon { color: var(--color-primary); margin-bottom: 15px; }
        .form-header h2 { font-size: 1.8rem; margin-bottom: 15px; }
        .form-header p { color: var(--color-mid); font-size: 1rem; }
        
        .form-group { margin-bottom: 25px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .contact-form label { display: block; font-weight: 700; font-size: 0.85rem; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
        .contact-form input, .contact-form textarea { width: 100%; padding: 15px; border: 1px solid var(--color-border); border-radius: 8px; font-family: inherit; font-size: 1rem; transition: 0.3s; }
        .contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 4px rgba(237, 28, 36, 0.1); }
        
        .submit-btn { width: 100%; padding: 16px; font-size: 1rem; }
        
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-form-wrapper { padding: 30px; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}} />
        </div>
    );
};

export default Contact;

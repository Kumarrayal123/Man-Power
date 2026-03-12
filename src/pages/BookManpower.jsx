import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, CheckCircle, Info, ArrowRight, ArrowLeft, User, Building, MapPin, Briefcase, Calendar, Clock, Send, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const tradesData = {
    Civil: [
        { id: 1, name: 'Mason', icon: '🧱' },
        { id: 2, name: 'Carpenter', icon: '🪚' },
        { id: 3, name: 'Steel Fixer', icon: '🏗️' },
        { id: 4, name: 'Painter', icon: '🎨' },
        { id: 5, name: 'Labor', icon: '👷' },
        { id: 6, name: 'Civil Foreman', icon: '📋' },
    ],
    MEP: [
        { id: 7, name: 'Electrician', icon: '⚡' },
        { id: 8, name: 'Plumber', icon: '🔧' },
        { id: 9, name: 'HVAC Technician', icon: '❄️' },
        { id: 10, name: 'Pipe Fitter', icon: '🔩' },
        { id: 11, name: 'Welder', icon: '🔥' },
        { id: 12, name: 'Duct Man', icon: '💨' },
    ],
    Infrastructure: [
        { id: 13, name: 'Heavy Driver', icon: '🚛' },
        { id: 14, name: 'Operator', icon: '🏗️' },
        { id: 15, name: 'Rigger', icon: '⛓️' },
        { id: 16, name: 'Flagman', icon: '🚩' },
        { id: 17, name: 'Surveyor', icon: '📐' },
    ],
    Others: [
        { id: 18, name: 'Security Guard', icon: '🛡️' },
        { id: 19, name: 'Warehouse Staff', icon: '📦' },
        { id: 20, name: 'Cleaning Staff', icon: '🧹' },
        { id: 21, name: 'Office Boy', icon: '☕' },
    ]
};

const BookManpower = () => {
    const [step, setStep] = useState(1);
    const [activeCategory, setActiveCategory] = useState('Civil');
    const [quantities, setQuantities] = useState({});
    const [bookingData, setBookingData] = useState({
        location: '',
        duration: '',
        startDate: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    const updateQuantity = (id, delta) => {
        setQuantities(prev => {
            const current = prev[id] || 0;
            const next = Math.max(0, current + delta);
            return { ...prev, [id]: next };
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({ ...prev, [name]: value }));
    };

    // Safe derivation of selected trades
    const selectedTrades = React.useMemo(() => {
        const flatTrades = Object.values(tradesData).flat();
        return Object.entries(quantities)
            .filter(([_, qty]) => qty > 0)
            .map(([id, qty]) => {
                const trade = flatTrades.find(t => t.id === parseInt(id));
                return trade ? { ...trade, qty } : { id: parseInt(id), name: 'Unknown', qty };
            });
    }, [quantities]);

    const totalPersonnel = selectedTrades.reduce((acc, curr) => acc + (curr.qty || 0), 0);

    const nextStep = () => {
        if (step === 1 && totalPersonnel === 0) {
            alert('Please select at least one manpower trade to proceed.');
            return;
        }
        if (step === 2 && (!bookingData.location || !bookingData.duration || !bookingData.startDate)) {
            alert('Please fill in all project details (Location, Duration, and Start Date) to proceed.');
            return;
        }
        setStep(prev => prev + 1);
    };

    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate email submission
        console.log('Sending booking request:', { ...bookingData, trades: selectedTrades });
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="booking-page">
                <section className="submission-success">
                    <div className="container">
                        <div className="success-card">
                            <div className="success-icon">
                                <CheckCircle size={80} color="#FE7622" />
                            </div>
                            <h2>Booking Request Sent!</h2>
                            <p>Thank you for choosing Smaar Elysium. Our experts will review your requirement and get back to you with a tailored quote within 24 hours.</p>
                            <div className="summary-preview">
                                <h3>Booking Summary</h3>
                                <ul>
                                    <li><strong>Total Personnel:</strong> {totalPersonnel}</li>
                                    <li><strong>Project Location:</strong> {bookingData.location}</li>
                                    <li><strong>Requested Start:</strong> {bookingData.startDate}</li>
                                </ul>
                            </div>
                            <Link to="/" className="btn btn-primary">Back to Home</Link>
                        </div>
                    </div>
                </section>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .submission-success { padding: 100px 0; background: #f8f9fa; min-height: 80vh; display: flex; align-items: center; }
                    .success-card { background: white; padding: 60px; border-radius: 24px; text-align: center; max-width: 600px; margin: 0 auto; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
                    .success-icon { margin-bottom: 30px; }
                    .success-card h2 { font-size: 2.5rem; margin-bottom: 20px; }
                    .success-card p { font-size: 1.1rem; color: #666; margin-bottom: 40px; }
                    .summary-preview { background: #fff8f4; padding: 25px; border-radius: 12px; margin-bottom: 40px; text-align: left; }
                    .summary-preview h3 { font-size: 1.2rem; margin-bottom: 15px; border-bottom: 1px solid #feeaea; padding-bottom: 10px; }
                    .summary-preview ul li { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.95rem; }
                `}} />
            </div>
        );
    }

    return (
        <div className="booking-page">
            <SEOHead
                title="Book Manpower Online | Request Skilled Workers in UAE | Smaar Elysium"
                description="Book your required manpower online with Smaar Elysium. Select trade categories, specify quantities, and submit your workforce request."
                keywords="book manpower UAE, hire workers online UAE, request skilled labour, manpower booking form"
                canonical="https://www.smaarelysium.com/book-manpower"
            />

            <section className="booking-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Hire the Best Talent</h1>
                        <p className="hero-subtitle">Streamlined manpower booking for your visionary projects across UAE.</p>
                        <div className="step-indicator">
                            <div className={`step-dot ${step >= 1 ? 'active' : ''}`}><span className="dot-num">1</span><span className="dot-label">Trades</span></div>
                            <div className="step-line"></div>
                            <div className={`step-dot ${step >= 2 ? 'active' : ''}`}><span className="dot-num">2</span><span className="dot-label">Project</span></div>
                            <div className="step-line"></div>
                            <div className={`step-dot ${step >= 3 ? 'active' : ''}`}><span className="dot-num">3</span><span className="dot-label">Contact</span></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="booking-body">
                <div className="container">
                    <div className="booking-grid">

                        <div className="main-booking-area">
                            {step === 1 && (
                                <div className="step-content animate-fade-in">
                                    <div className="step-header">
                                        <h2>Select Manpower Trades</h2>
                                        <p>Choose the categories and quantities of workers you need.</p>
                                    </div>

                                    <div className="category-nav">
                                        {Object.keys(tradesData).map(cat => (
                                            <button
                                                key={cat}
                                                className={`nav-item ${activeCategory === cat ? 'active' : ''}`}
                                                onClick={() => setActiveCategory(cat)}
                                                type="button"
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="trades-cards-grid">
                                        {tradesData[activeCategory].map(trade => (
                                            <div key={trade.id} className={`trade-item-card ${quantities[trade.id] > 0 ? 'selected' : ''}`}>
                                                <div className="item-icon">{trade.icon}</div>
                                                <div className="item-info">
                                                    <span className="item-name">{trade.name}</span>
                                                    <div className="item-controls">
                                                        <button onClick={() => updateQuantity(trade.id, -1)} className="qty-btn" type="button"><Minus size={14} /></button>
                                                        <span className="qty-val">{quantities[trade.id] || 0}</span>
                                                        <button onClick={() => updateQuantity(trade.id, 1)} className="qty-btn" type="button"><Plus size={14} /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="step-navigation">
                                        <button
                                            onClick={nextStep}
                                            className="nav-btn-next"
                                            type="button"
                                        >
                                            Next Step <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="step-content animate-fade-in">
                                    <div className="step-header">
                                        <h2>Project Details</h2>
                                        <p>Tell us more about where and when you need the manpower.</p>
                                    </div>

                                    <div className="booking-form-wrap">
                                        <div className="form-grid">
                                            <div className="form-field">
                                                <label><MapPin size={16} /> Location in UAE</label>
                                                <input type="text" name="location" placeholder="e.g. Dubai South, Abu Dhabi" value={bookingData.location} onChange={handleInputChange} required />
                                            </div>
                                            <div className="form-field">
                                                <label><Clock size={16} /> Expected Duration</label>
                                                <select name="duration" value={bookingData.duration} onChange={handleInputChange} required>
                                                    <option value="">Select Duration</option>
                                                    <option value="Short Term (< 1 month)">Short Term (&lt; 1 month)</option>
                                                    <option value="Medium Term (1-6 months)">Medium Term (1-6 months)</option>
                                                    <option value="Long Term (> 6 months)">Long Term (&gt; 6 months)</option>
                                                    <option value="Ongoing / Contractual">Ongoing / Contractual</option>
                                                </select>
                                            </div>
                                            <div className="form-field full-width">
                                                <label><Calendar size={16} /> Expected Start Date</label>
                                                <input type="date" name="startDate" value={bookingData.startDate} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="step-navigation">
                                        <button onClick={prevStep} className="nav-btn-prev" type="button">
                                            <ArrowLeft size={18} /> Back
                                        </button>
                                        <button
                                            onClick={nextStep}
                                            className="nav-btn-next"
                                            type="button"
                                        >
                                            Next Step <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="step-content animate-fade-in">
                                    <div className="step-header">
                                        <h2>Contact Information</h2>
                                        <p>How should our experts reach you to confirm the booking?</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="booking-form-wrap">
                                        <div className="form-grid">
                                            <div className="form-field">
                                                <label><User size={16} /> Full Name</label>
                                                <input type="text" name="name" placeholder="Enter your name" value={bookingData.name} onChange={handleInputChange} required />
                                            </div>
                                            <div className="form-field">
                                                <label><Building size={16} /> Company Name</label>
                                                <input type="text" name="company" placeholder="Enter company name" value={bookingData.company} onChange={handleInputChange} required />
                                            </div>
                                            <div className="form-field">
                                                <label><Mail size={16} /> Work Email</label>
                                                <input type="email" name="email" placeholder="email@company.com" value={bookingData.email} onChange={handleInputChange} required />
                                            </div>
                                            <div className="form-field">
                                                <label><Briefcase size={16} /> Phone Number</label>
                                                <input type="tel" name="phone" placeholder="+971 -- --- ----" value={bookingData.phone} onChange={handleInputChange} required />
                                            </div>
                                            <div className="form-field full-width">
                                                <label>Additional Requirements (Optional)</label>
                                                <textarea name="message" rows="4" placeholder="Mention any specific certifications or skills needed..." value={bookingData.message} onChange={handleInputChange}></textarea>
                                            </div>
                                        </div>

                                        <div className="step-navigation">
                                            <button onClick={prevStep} className="nav-btn-prev" type="button">
                                                <ArrowLeft size={18} /> Back
                                            </button>
                                            <button type="submit" className="complete-btn">
                                                <Send size={18} /> Complete Booking Request
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>

                        <aside className="booking-summary-sidebar">
                            <div className="summary-glass-card">
                                <div className="summary-title">
                                    <ShoppingCart size={20} />
                                    <h3>Order Summary</h3>
                                </div>
                                <div className="summary-items">
                                    {selectedTrades.length === 0 ? (
                                        <div className="empty-state">
                                            <div className="empty-icon"><Info size={24} /></div>
                                            <p>No trades selected. Start adding personnel to proceed.</p>
                                        </div>
                                    ) : (
                                        <div className="selected-items-list">
                                            {selectedTrades.map(trade => (
                                                <div key={trade.id} className="summary-item">
                                                    <div className="item-main">
                                                        <span className="item-icon-small">{trade.icon}</span>
                                                        <span className="item-label">{trade.name}</span>
                                                    </div>
                                                    <span className="item-qty">x {trade.qty}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="summary-total">
                                    <span>Total Manpower:</span>
                                    <span className="total-val">{totalPersonnel}</span>
                                </div>
                                <div className="summary-info-box">
                                    <p><Info size={14} /> Our team will provide a customized commercial proposal based on your selection.</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .booking-page { background: #fdfdfd; padding-bottom: 100px; }
                
                /* Hero Section */
                .booking-hero { background: linear-gradient(135deg, #121212 0%, #333 100%); padding: 80px 0 120px; color: white; border-radius: 0 0 60px 60px; text-align: center; }
                .hero-title { font-size: 3.5rem; font-weight: 800; margin-bottom: 15px; color: #fff; }
                .hero-subtitle { font-size: 1.2rem; opacity: 0.8; max-width: 600px; margin: 0 auto 50px; }
                
                /* Step Indicator */
                .step-indicator { display: flex; align-items: center; justify-content: center; max-width: 500px; margin: 0 auto; }
                .step-dot { display: flex; flex-direction: column; align-items: center; gap: 8px; position: relative; z-index: 2; transition: 0.3s; opacity: 0.4; }
                .step-dot.active { opacity: 1; }
                .dot-num { width: 36px; height: 36px; background: #fff; color: #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; border: 3px solid transparent; transition: 0.3s; }
                .step-dot.active .dot-num { background: var(--color-primary); color: #fff; box-shadow: 0 0 20px rgba(254, 118, 34, 0.4); }
                .dot-label { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #fff; }
                .step-line { flex: 1; height: 2px; background: rgba(255,255,255,0.1); margin: 0 -15px 23px; position: relative; z-index: 1; }
                
                /* Body */
                .booking-body { margin-top: -60px; }
                .booking-grid { display: grid; grid-template-columns: 1fr 360px; gap: 40px; }
                
                .main-booking-area { background: white; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.05); padding: 40px; min-height: 500px; }
                .step-header { margin-bottom: 40px; }
                .step-header h2 { font-size: 2rem; margin-bottom: 10px; }
                .step-header p { color: #888; }
                
                /* Category Nav */
                .category-nav { display: flex; gap: 10px; margin-bottom: 30px; border-bottom: 2px solid #f5f5f5; padding-bottom: 5px; overflow-x: auto; }
                .nav-item { padding: 12px 25px; border: none; background: none; font-weight: 700; color: #999; cursor: pointer; border-bottom: 3px solid transparent; transition: 0.3s; white-space: nowrap; }
                .nav-item:hover { color: #666; }
                .nav-item.active { color: var(--color-primary); border-bottom-color: var(--color-primary); }
                
                /* Trades Cards */
                .trades-cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
                .trade-item-card { background: #fcfcfc; border: 1px solid #f1f1f1; padding: 25px; border-radius: 16px; display: flex; gap: 20px; align-items: center; transition: 0.3s; }
                .trade-item-card:hover { border-color: #feeaea; background: #fffdfb; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.02); }
                .trade-item-card.selected { border-color: var(--color-primary); background: #fff8f4; }
                .item-icon { font-size: 2.5rem; }
                .item-info { flex: 1; }
                .item-name { display: block; font-weight: 700; margin-bottom: 12px; font-size: 1.1rem; }
                .item-controls { display: flex; align-items: center; background: white; border: 1px solid #eee; border-radius: 8px; width: fit-content; overflow: hidden; }
                .qty-btn { border: none; background: none; padding: 8px 12px; cursor: pointer; color: #555; transition: 0.2s; }
                .qty-btn:hover { background: #f5f5f5; color: var(--color-primary); }
                .qty-val { width: 35px; text-align: center; font-weight: 800; }
                
                /* Form */
                .booking-form-wrap { max-width: 800px; }
                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
                .form-field { display: flex; flex-direction: column; gap: 10px; }
                .form-field.full-width { grid-column: 1 / -1; }
                .form-field label { font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; gap: 8px; color: #555; }
                .form-field input, .form-field select, .form-field textarea { padding: 15px 20px; border: 1px solid #eee; border-radius: 12px; outline: none; transition: 0.3s; font-size: 0.95rem; }
                .form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: var(--color-primary); box-shadow: 0 0 15px rgba(254, 118, 34, 0.1); }
                .complete-btn { margin-top: 40px; background: var(--color-primary); color: white; border: none; padding: 18px 40px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: flex; align-items: center; gap: 12px; cursor: pointer; transition: 0.3s; }
                .complete-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(254, 118, 34, 0.4); }
                
                /* Navigation */
                .step-navigation { margin-top: 50px; padding-top: 30px; border-top: 1px solid #f5f5f5; display: flex; justify-content: space-between; }
                .nav-btn-prev { background: #f5f6f8; border: none; padding: 12px 30px; border-radius: 10px; font-weight: 700; display: flex; align-items: center; gap: 10px; cursor: pointer; transition: 0.3s; color: #666; }
                .nav-btn-prev:hover { background: #eee; }
                .nav-btn-next { background: #121212; color: white; border: none; padding: 12px 35px; border-radius: 10px; font-weight: 700; display: flex; align-items: center; gap: 10px; cursor: pointer; transition: 0.3s; margin-left: auto; }
                .nav-btn-next:hover { transform: translateX(5px); background: #000; }
                .nav-btn-next.disabled { opacity: 0.2; pointer-events: none; }
                
                /* Sidebar */
                .summary-glass-card { background: white; border-radius: 24px; padding: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.05); position: sticky; top: 120px; border: 1px solid #f9f9f9; }
                .summary-title { display: flex; align-items: center; gap: 12px; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #f5f5f5; color: #121212; }
                .summary-title h3 { font-size: 1.25rem; }
                
                .summary-items { min-height: 100px; max-height: 400px; overflow-y: auto; margin-bottom: 25px; }
                .empty-state { text-align: center; color: #bbb; padding: 40px 0; }
                .empty-icon { margin-bottom: 15px; color: #ddd; }
                .empty-state p { font-size: 0.9rem; line-height: 1.5; }
                
                .selected-items-list { display: flex; flex-direction: column; gap: 12px; }
                .summary-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #fcfcfc; border-radius: 10px; }
                .item-main { display: flex; align-items: center; gap: 10px; }
                .item-icon-small { font-size: 1.2rem; }
                .item-label { font-size: 0.9rem; font-weight: 600; }
                .item-qty { font-weight: 800; color: var(--color-primary); font-size: 0.9rem; }
                
                .summary-total { display: flex; justify-content: space-between; padding: 20px 0; border-top: 2px solid #f8f8f8; font-weight: 800; font-size: 1.1rem; margin-bottom: 20px; }
                .total-val { color: var(--color-primary); font-size: 1.4rem; }
                
                .summary-info-box { background: #fffbf0; border: 1px solid #fff2cc; padding: 15px; border-radius: 12px; display: flex; gap: 10px; font-size: 0.8rem; color: #9a803f; line-height: 1.5; }
                
                .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 992px) {
                    .booking-grid { grid-template-columns: 1fr; gap: 30px; }
                    .booking-summary-sidebar { order: 1; }
                    .summary-glass-card { position: static; }
                    .hero-title { font-size: 2.8rem; }
                    .hero-subtitle { font-size: 1.1rem; padding: 0 20px; }
                }

                @media (max-width: 768px) {
                    .booking-hero { padding: 60px 0 100px; border-radius: 0 0 40px 40px; }
                    .hero-title { font-size: 2.2rem; }
                    .step-indicator { max-width: 90%; }
                    .dot-label { font-size: 0.7rem; }
                    .step-line { margin: 0 -10px 18px; }
                    .dot-num { width: 30px; height: 30px; font-size: 0.9rem; }
                }

                @media (max-width: 576px) {
                    .main-booking-area { padding: 25px 20px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                    .step-header h2 { font-size: 1.6rem; }
                    .form-grid { grid-template-columns: 1fr; gap: 15px; }
                    .category-nav { gap: 5px; margin-bottom: 20px; }
                    .nav-item { padding: 10px 15px; font-size: 0.9rem; }
                    .trades-cards-grid { grid-template-columns: 1fr; gap: 12px; }
                    .trade-item-card { padding: 15px; gap: 15px; }
                    .item-icon { font-size: 2rem; }
                    .item-name { font-size: 1rem; margin-bottom: 8px; }
                    .nav-btn-next { width: 100%; justify-content: center; padding: 15px; margin-top: 10px; }
                    .nav-btn-prev { padding: 12px 20px; }
                    .step-navigation { flex-direction: column-reverse; gap: 15px; align-items: stretch; }
                    .summary-glass-card { padding: 20px; }
                    .total-val { font-size: 1.2rem; }
                }
            `}} />
        </div>
    );
};

export default BookManpower;


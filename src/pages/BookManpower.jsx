import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, CheckCircle, Info } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const tradesData = {
    Civil: [
        { id: 1, name: 'Mason' },
        { id: 2, name: 'Carpenter' },
        { id: 3, name: 'Steel Fixer' },
        { id: 4, name: 'Painter' },
        { id: 5, name: 'Labor' },
        { id: 6, name: 'Civil Foreman' },
    ],
    MEP: [
        { id: 7, name: 'Electrician' },
        { id: 8, name: 'Plumber' },
        { id: 9, name: 'HVAC Technician' },
        { id: 10, name: 'Pipe Fitter' },
        { id: 11, name: 'Welder' },
        { id: 12, name: 'Duct Man' },
    ],
    Infrastructure: [
        { id: 13, name: 'Heavy Driver' },
        { id: 14, name: 'Operator' },
        { id: 15, name: 'Rigger' },
        { id: 16, name: 'Flagman' },
        { id: 17, name: 'Surveyor' },
    ],
    Others: [
        { id: 18, name: 'Security Guard' },
        { id: 19, name: 'Warehouse Staff' },
        { id: 20, name: 'Cleaning Staff' },
        { id: 21, name: 'Office Boy' },
    ]
};

const BookManpower = () => {
    const [activeCategory, setActiveCategory] = useState('Civil');
    const [quantities, setQuantities] = useState({});

    const updateQuantity = (id, delta) => {
        setQuantities(prev => {
            const current = prev[id] || 0;
            const next = Math.max(0, current + delta);
            return { ...prev, [id]: next };
        });
    };

    const selectedTrades = Object.entries(quantities)
        .filter(([_, qty]) => qty > 0)
        .map(([id, qty]) => {
            // Find trade name from all categories
            const trade = Object.values(tradesData).flat().find(t => t.id === parseInt(id));
            return { ...trade, qty };
        });

    const totalPersonnel = selectedTrades.reduce((acc, curr) => acc + curr.qty, 0);

    return (
        <div className="booking-page">
            <SEOHead
                title="Book Manpower Online | Request Skilled Workers in India | Smaar Elysium"
                description="Book your required manpower online with Smaar Elysium. Select trade categories, specify quantities, and submit your workforce request. We supply civil workers, MEP technicians, drivers, security guards, and more across India."
                keywords="book manpower India, hire workers online India, request skilled labour, manpower booking form, civil workers booking, MEP technicians India, Smaar Elysium book"
                canonical="https://www.smaarelysium.com/book-manpower"
            />
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-hero__title">Book Manpower</h1>
                    <p>Select your required trades and quantity for your project.</p>
                </div>
            </section>

            <section className="booking-main">
                <div className="container">
                    <div className="booking-layout">
                        {/* Trades Selection Area */}
                        <div className="trades-selection">
                            {/* Category Tabs */}
                            <div className="category-tabs">
                                {Object.keys(tradesData).map(cat => (
                                    <button
                                        key={cat}
                                        className={`cat-tab ${activeCategory === cat ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(cat)}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Grid of Trades */}
                            <div className="trades-grid">
                                {tradesData[activeCategory].map(trade => (
                                    <div key={trade.id} className="trade-card">
                                        <span className="trade-name">{trade.name}</span>
                                        <div className="trade-controls">
                                            <button onClick={() => updateQuantity(trade.id, -1)} className="control-btn"><Minus size={14} /></button>
                                            <span className="qty-display">{quantities[trade.id] || 0}</span>
                                            <button onClick={() => updateQuantity(trade.id, 1)} className="control-btn"><Plus size={14} /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Selection Summary Sidebar */}
                        <aside className="booking-sidebar">
                            <div className="summary-card">
                                <div className="summary-header">
                                    <ShoppingCart size={20} />
                                    <h3>Your Selection</h3>
                                </div>

                                <div className="summary-list">
                                    {selectedTrades.length === 0 ? (
                                        <div className="empty-summary">
                                            <Info size={32} />
                                            <p>No trades selected yet. Use the grid to add personnel.</p>
                                        </div>
                                    ) : (
                                        <ul>
                                            {selectedTrades.map(t => (
                                                <li key={t.id}>
                                                    <span>{t.name}</span>
                                                    <strong>{t.qty}</strong>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className="summary-footer">
                                    <div className="total-row">
                                        <span>Total Personnel:</span>
                                        <strong>{totalPersonnel}</strong>
                                    </div>
                                    <button
                                        className={`btn btn-primary book-btn ${totalPersonnel === 0 ? 'disabled' : ''}`}
                                        disabled={totalPersonnel === 0}
                                        onClick={() => alert('Booking request sent successfully!')}
                                    >
                                        Complete Booking Request
                                    </button>
                                </div>
                            </div>

                            <div className="help-box">
                                <HelpCircle size={18} />
                                <p>Need specialized manpower not listed? <Link to="/contact">Contact us</Link> directly.</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .booking-page .page-hero { background: var(--color-primary); padding: 70px 0; color: white; text-align: center; }
        .booking-page .page-hero__title { font-size: 2.5rem; margin-bottom: 15px; color: white; }
        .booking-page .page-hero p { opacity: 0.8; font-size: 1.1rem; }
        
        .booking-main { padding: 80px 0; background: var(--color-light-bg); min-height: 600px; }
        .booking-layout { display: grid; grid-template-columns: 1fr 340px; gap: 40px; }
        
        .category-tabs { display: flex; gap: 10px; border-bottom: 2px solid var(--color-border); margin-bottom: 40px; overflow-x: auto; padding-bottom: 5px; }
        .cat-tab { 
          padding: 12px 30px; background: none; border: none; font-weight: 700; font-size: 0.9rem; 
          color: var(--color-mid); cursor: pointer; border-bottom: 3px solid transparent; 
          transition: 0.3s; white-space: nowrap;
        }
        .cat-tab:hover { color: var(--color-primary); }
        .cat-tab.active { color: var(--color-primary); border-bottom-color: var(--color-primary); }
        
        .trades-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 15px; }
        .trade-card { 
          background: white; padding: 20px; border-radius: 10px; display: flex; justify-content: space-between; 
          align-items: center; box-shadow: var(--shadow-card); transition: 0.3s;
        }
        .trade-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-hover); }
        .trade-name { font-weight: 600; font-size: 0.95rem; }
        
        .trade-controls { display: flex; align-items: center; background: #f8f9fa; border-radius: 6px; border: 1px solid #eee; overflow: hidden; }
        .control-btn { width: 32px; height: 32px; border: none; background: none; color: var(--color-dark); cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; }
        .control-btn:hover { background: #eee; color: var(--color-primary); }
        .qty-display { width: 30px; text-align: center; font-weight: 700; font-size: 0.9rem; }
        
        .summary-card { background: white; padding: 30px; border-radius: 15px; box-shadow: var(--shadow-hover); position: sticky; top: 100px; }
        .summary-header { display: flex; align-items: center; gap: 12px; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0; }
        .summary-header h3 { font-size: 1.25rem; }
        
        .summary-list { min-height: 200px; max-height: 350px; overflow-y: auto; margin-bottom: 25px; }
        .summary-list ul li { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #eee; font-size: 0.9rem; }
        .empty-summary { text-align: center; color: #bbb; padding-top: 40px; }
        .empty-summary p { font-size: 0.85rem; margin-top: 15px; }
        
        .total-row { display: flex; justify-content: space-between; padding: 20px 0; border-top: 2px solid #f0f0f0; margin-bottom: 20px; font-weight: 800; font-size: 1.1rem; }
        .total-row strong { color: var(--color-primary); }
        .book-btn { width: 100%; border-radius: 8px; }
        .book-btn.disabled { opacity: 0.5; pointer-events: none; background: #ccc; border-color: #ccc; }
        
        .help-box { margin-top: 20px; background: #fff8f8; padding: 15px; border-radius: 10px; border: 1px solid #feeaea; display: flex; gap: 10px; font-size: 0.85rem; color: #888; }
        .help-box a { color: var(--color-primary); font-weight: 700; text-decoration: underline; }
        
        @media (max-width: 992px) {
          .booking-layout { grid-template-columns: 1fr; }
          .summary-card { position: static; }
        }
        @media (max-width: 576px) {
          .booking-page .page-hero { padding: 50px 0; }
          .booking-page .page-hero__title { font-size: 1.8rem; }
          .booking-page .page-hero p { font-size: 0.95rem; }
          .category-tabs { gap: 6px; }
          .cat-tab { padding: 10px 18px; font-size: 0.82rem; }
          .trades-grid { grid-template-columns: 1fr; }
          .summary-card { padding: 20px; }
        }
      `}} />
        </div>
    );
};

const HelpCircle = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
);

export default BookManpower;

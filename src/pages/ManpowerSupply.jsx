import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const ManpowerSupply = () => {
    const supplyCategories = [
        {
            title: "Civil Manpower",
            description: "From laying the foundation to completing the finishing touches, civil manpower ensures that your construction projects are executed flawlessly.",
            roles: [
                "Civil Engineer", "Civil Supervisor", "Civil Foreman", "Chargehand",
                "Scaffolder Normal", "Certified Scaffolder", "Steel Fixer", "Shuttering Carpenter",
                "Gypsum Carpenter", "Finishing Carpenter", "Block Mason", "Plaster Mason",
                "Tile Mason", "Sand Blaster", "Wall Painter", "Spray Painter",
                "Wood Polisher", "Wood Painter", "Rigger", "Civil Helper", "Safety Officer"
            ]
        },
        {
            title: "Electrical Manpower",
            description: "No matter what industry or domain you work for, a secure electrical setup is the first layer of protection you can provide. To help you out, Smaar Elysium team provides experienced teams to work for you.",
            roles: [
                "Electrical Engineer", "Electrical Supervisor", "Electrical Foreman",
                "Electrical Chargehand", "Industrial Electrician", "Normal Electrician",
                "Electrical Helper"
            ]
        },
        {
            title: "Mechanical Manpower",
            description: "Working on a project with a deadline puts extra pressure on the existing team. Our Mechanical Manpower Supply will get you ready to deliver according to the due dates and achieve all your short term goals.",
            roles: [
                "Pipe Fabricator", "Steel Fabricator", "Aluminum Fabricator", "Aluminum Fitter",
                "3G Welder", "6G Welder", "MIG Welder", "ARC Welder", "TIG Welder",
                "Insulator", "Pipe Fitter"
            ]
        },
        {
            title: "Helper Manpower",
            description: "You can already understand it from the name, a Helper is someone who assists you in timely finishing the task at hand. Smaar Elysium has a wide network of reliable help, who can work on your terms and requirements.",
            roles: [
                "Mechanical Helper", "Civil Helper", "Electrical Helper",
                "General Helper", "Cleaner"
            ]
        }
    ];

    return (
        <div className="service-page manpower-supply-page">
            <SEOHead
                title="Manpower Supply Services in India – Civil, Electrical & Mechanical"
                description="Smaar Elysium is a top manpower supply company in India providing civil, electrical, mechanical, and helper manpower for construction and industrial projects. 15+ years of expertise."
                keywords="manpower supply India, civil manpower Hyderabad, electrical manpower India, mechanical manpower supply, helper manpower India"
                canonical="https://smaarelysium.com/services/manpower-supply"
            />
            {/* Hero Section */}
            <div className="service-hero">
                <div className="container">
                    <div className="service-hero-content text-center">
                        <h1 style={{ margin: '0 auto 20px', textAlign: 'center' }}>Manpower Supply Company in India</h1>
                        <p style={{ margin: '0 auto 30px', textAlign: 'center' }}>No. 1 Manpower Supply Company in India, offering quality Labour Supply Services on an Hourly Basis across all the emirates. 15 Years of Service.</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to="/book-manpower" className="hero-btn-main">Book Manpower Online</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="supply-content-section align-center">
                <div className="container">
                    <div className="supply-intro text-center">
                        <p style={{ maxWidth: '800px', margin: '0 auto 50px', fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
                            Our quick-evolving and agile market constantly demands employing more experts to deliver optimal results. We provide comprehensive manpower supply services across multiple domains.
                        </p>
                    </div>

                    {supplyCategories.map((category, index) => (
                        <div key={index} className="supply-category-block">
                            <div className="category-header">
                                <h2>{category.title}</h2>
                                <p>{category.description}</p>
                            </div>

                            <div className="roles-grid">
                                {category.roles.map((role, idx) => (
                                    <div key={idx} className="role-card">
                                        <div className="role-icon-box">
                                            <span className="role-bullet"></span>
                                        </div>
                                        <span className="role-name">{role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .manpower-supply-page .service-hero { 
            background: linear-gradient(135deg, #111 0%, #333 100%);
            padding: 100px 0; 
            color: #fff;
        }
        .text-center { text-align: center; }
        .manpower-supply-page .hero-btn-main {
            background: var(--color-primary);
            color: #fff;
            padding: 15px 40px;
            border-radius: 5px;
            font-weight: 700;
            font-size: 1.1rem;
            transition: 0.3s;
            text-transform: uppercase;
        }
        .manpower-supply-page .hero-btn-main:hover {
            background: #fff;
            color: var(--color-primary);
        }

        .supply-content-section {
            padding: 80px 0;
            background: #fdfdfd;
        }
        
        .supply-category-block {
            margin-bottom: 70px;
            background: #fff;
            border: 1px solid #eaeaea;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            border-left: 5px solid var(--color-primary);
        }
        
        .category-header {
            margin-bottom: 35px;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 25px;
        }
        .category-header h2 {
            font-size: 2rem;
            color: #222;
            margin-bottom: 15px;
        }
        .category-header p {
            font-size: 1.05rem;
            color: #666;
            line-height: 1.7;
            max-width: 900px;
        }

        .roles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }

        .role-card {
            display: flex;
            align-items: center;
            background: #f8f9fa;
            padding: 15px 20px;
            border-radius: 6px;
            transition: 0.3s;
            border: 1px solid #f0f0f0;
            cursor: pointer;
        }
        .role-card:hover {
            background: #fff;
            border-color: var(--color-primary);
            box-shadow: 0 4px 15px rgba(209, 26, 42, 0.1);
            transform: translateY(-2px);
        }

        .role-icon-box {
            margin-right: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .role-bullet {
            width: 10px;
            height: 10px;
            background: var(--color-primary);
            border-radius: 50%;
            display: inline-block;
        }

        .role-name {
            font-weight: 600;
            color: #444;
            font-size: 1.05rem;
        }
        .role-card:hover .role-name {
            color: var(--color-primary);
        }

        @media (max-width: 768px) {
            .supply-category-block { padding: 25px; }
            .roles-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
            .category-header h2 { font-size: 1.6rem; }
        }
        `}} />
        </div>
    );
};

export default ManpowerSupply;

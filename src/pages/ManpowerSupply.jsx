import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

const ManpowerSupply = () => {
    const { t } = useLanguage();
    const [openFaq, setOpenFaq] = React.useState(0);

    const faqs = [
        { question: t.msFaqQ1, answer: t.msFaqA1 },
        { question: t.msFaqQ2, answer: t.msFaqA2 },
        { question: t.msFaqQ3, answer: t.msFaqA3 },
        { question: t.msFaqQ4, answer: t.msFaqA4 },
        { question: t.msFaqQ5, answer: t.msFaqA5 },
        { question: t.msFaqQ6, answer: t.msFaqA6 }
    ];

    const supplyCategories = [
        {
            title: t.msCat1Title,
            description: t.msCat1Desc,
            roles: [
                t.msRoleCivilEngineer, t.msRoleCivilSupervisor, t.msRoleCivilForeman, t.msRoleChargehand,
                t.msRoleScaffolderNormal, t.msRoleCertifiedScaffolder, t.msRoleSteelFixer, t.msRoleShutteringCarpenter,
                t.msRoleGypsumCarpenter, t.msRoleFinishingCarpenter, t.msRoleBlockMason, t.msRolePlasterMason,
                t.msRoleTileMason, t.msRoleSandBlaster, t.msRoleWallPainter, t.msRoleSprayPainter,
                t.msRoleWoodPolisher, t.msRoleWoodPainter, t.msRoleRigger, t.msRoleCivilHelper, t.msRoleSafetyOfficer
            ]
        },
        {
            title: t.msCat2Title,
            description: t.msCat2Desc,
            roles: [
                t.msRoleElectricalEngineer, t.msRoleElectricalSupervisor, t.msRoleElectricalForeman,
                t.msRoleElectrician, t.msRoleAssistantElectrician, t.msRoleInstrumentTechnician,
                t.msRoleInstrumentFitter, t.msRoleLowVoltageTechnician, t.msRoleElectricalHelper
            ]
        },
        {
            title: t.msCat3Title,
            description: t.msCat3Desc,
            roles: [
                t.msRoleMechanicalEngineer, t.msRoleMechanicalSupervisor, t.msRoleMechanicalForeman,
                t.msRoleMillwrightFitter, t.msRolePipeFitter, t.msRolePipeFabricator,
                t.msRoleStructuralFabricator, t.msRolePlumber, t.msRole6GWelder,
                t.msRoleArcWelder, t.msRoleDuctFitter, t.msRoleDuctFabricator,
                t.msRoleInsulator, t.msRoleMechanicalHelper
            ]
        },
        {
            title: t.msCat4Title,
            description: t.msCat4Desc,
            roles: [
                t.msRoleGeneralHelper, t.msRoleLoadingUnloading, t.msRoleWarehouseHelper,
                t.msRolePackingHelper, t.msRoleKitchenHelper, t.msRoleCleaningHelper
            ]
        }
    ];

    return (
        <div className="service-page manpower-supply-page">
            <SEOHead
                title={t.msHeroTitle}
                description={t.msHeroText}
                keywords="manpower supply UAE, civil manpower Dubai, electrical manpower UAE, mechanical manpower supply, helper manpower UAE"
                canonical="https://smaarelysium.com/services/manpower-supply"
                faqSchema={faqs.map(f => ({
                    question: f.question,
                    answer: f.answer
                }))}
            />
            {/* Hero Section */}
            <div className="service-hero">
                <div className="container">
                    <div className="service-hero-content text-center">
                        <h1 style={{ margin: '0 auto 20px', textAlign: 'center' }}>{t.msHeroTitle}</h1>
                        <p style={{ margin: '0 auto 30px', textAlign: 'center' }}>{t.msHeroText}</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to="/contact" className="hero-btn-main">{t.msBtnBook}</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="supply-content-section align-center">
                <div className="container">
                    <div className="supply-intro text-center">
                        <p style={{ maxWidth: '800px', margin: '0 auto 50px', fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
                            {t.msIntroText}
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

                    {/* FAQ Section */}
                    <section className="faq-section" style={{ margin: '60px 0' }}>
                        <h2 className="faq-main-title">{t.commonFaqTitle || 'FAQ'}</h2>
                        <p className="faq-subtitle">{t.commonFaqSubtitle || 'MOST ASKED QUESTIONS.'}</p>

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
                    </section>

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
            .manpower-supply-page .service-hero { padding: 60px 0; }
        }
        @media (max-width: 576px) {
            .manpower-supply-page .service-hero { padding: 50px 0; }
            .manpower-supply-page .service-hero h1 { font-size: 1.8rem !important; }
            .manpower-supply-page .service-hero p { font-size: 0.95rem !important; }
            .supply-category-block { padding: 20px; }
            .roles-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
            .category-header h2 { font-size: 1.4rem; }
            .supply-content-section { padding: 50px 0; }
        }
        @media (max-width: 400px) {
            .roles-grid { grid-template-columns: 1fr; }
        }
        `}} />
        </div>
    );
};

export default ManpowerSupply;

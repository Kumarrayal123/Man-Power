import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
// import Contact from './pages/Contact';
import BookManpower from './pages/BookManpower';
import Recruitment from './pages/Recruitment';
import ManpowerSupply from './pages/ManpowerSupply';
// import Services from './pages/Services';
import ContractStaffing from './pages/ContractStaffing';
import ExecutiveSearch from './pages/ExecutiveSearch';
import HROutsourcing from './pages/HrOutsourcing';
import SecuritySolutions from './pages/SecuritySolutions';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Project from './pages/Project';
import OilAndGas from './pages/OilAndGas';
import CivilConstruction from './pages/CivilConstruction';
import FacilityManagement from './pages/FacilityManagement';
import Logistics from './pages/Logistics';
import Manufacture from './pages/Manufacture';
import Mep from './pages/Mep';
// Simple placeholder components for other routes
const Services = () => (
    <div style={{ padding: '100px 0', textAlign: 'center' }}>
        <h1>Manpower Services</h1>
        <p>Comprehensive staffing solutions for your business.</p>
    </div>
);

const Sectors = () => (
    <div style={{ padding: '100px 0', textAlign: 'center' }}>
        <h1>Sectors We Serve</h1>
        <p>Industry-specific expertise across the UAE.</p>
    </div>
);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="sectors" element={<Sectors />} />
                    {/* <Route path="projects" element={<Home />} /> */}
                    <Route path="clients" element={<Home />} />
                    <Route path="insights" element={<Services />} />
                    {/* <Route path="contact" element={<Contact />} /> */}
                    <Route path="book-manpower" element={<BookManpower />} />

                    <Route path="services/manpower-supply" element={<ManpowerSupply />} />
                    <Route path="services/:id" element={<Services />} />
                    <Route path="sectors/:id" element={<Sectors />} />
                    <Route path="/recruitment" element={<Recruitment />} />
                    <Route path="/contract-staffing" element={<ContractStaffing />} />
                    <Route path="/executive-search" element={<ExecutiveSearch />} />
                    <Route path="/hr-outsourcing" element={<HROutsourcing />} />
                    <Route path="/security-solutions" element={<SecuritySolutions />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/projects" element={<Project />} />
                    <Route path="/oil-gas" element={<OilAndGas />} />
                    <Route path="/civil-construction" element={<CivilConstruction />} />
                    <Route path="/facility-management" element={<FacilityManagement />} />
                    <Route path="/logistics" element={<Logistics />} />
                    <Route path="/manufacture" element={<Manufacture />} />
                    <Route path="/mep" element={<Mep />} />
                    {/* <Route path="/manpower-supply" element={<ManpowerSupply />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

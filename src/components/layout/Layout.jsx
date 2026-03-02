import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />

            <style dangerouslySetInnerHTML={{
                __html: `
        .app-wrapper { display: flex; flex-direction: column; min-height: 100vh; }
        .main-content { flex: 1; }
      `}} />
        </div>
    );
};

export default Layout;

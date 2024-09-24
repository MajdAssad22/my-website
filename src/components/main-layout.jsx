// React
import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Footer from './footer';
import Header from './header';

const MainLayout = () => {
  return (
    <div className="bg-background-100">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

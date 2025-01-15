// React
import React, { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Components
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="bg-background-100">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;

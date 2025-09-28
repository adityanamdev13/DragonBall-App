import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-comics bg-fixed pb-20 ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

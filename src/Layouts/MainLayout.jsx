import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[url(bg_comics.jpg)] bg-fixed pb-20 ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

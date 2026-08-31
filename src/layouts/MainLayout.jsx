import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Cursor from "../components/Cursor";

const MainLayout = () => {
  return (
    <div>
      <Cursor />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

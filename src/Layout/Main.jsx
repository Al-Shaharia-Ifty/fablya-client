import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shear/Navbar";
import Footer from "../Shear/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

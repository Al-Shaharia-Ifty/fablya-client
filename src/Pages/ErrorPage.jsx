import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <h2 className="text-4xl">404 pge not found</h2>
          <div className="flex justify-center items-center mt-5">
            <Link className="btn " to={"/"}>
              Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;

import React from "react";

const Trust = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 2xl:px-20 xl:px-10 px-5 py-10 mt-20 bg-slate-100">
        <div className="flex items-center px-4 xl:justify-center scaleHoverSection">
          <i className="fa-solid fa-truck-fast text-4xl scaleHoverObject duration-300"></i>
          <div className="ml-4">
            <h4 className="text-lg font-bold">Free Shipping</h4>
            <p className="text-gray-500 font-sans">From all orders over $100</p>
          </div>
        </div>
        <div className="flex items-center px-4 xl:justify-center scaleHoverSection">
          <i className="fa-solid fa-gift text-4xl scaleHoverObject duration-300"></i>
          <div className="ml-4">
            <h4 className="text-lg font-bold">Daily Surprise Offers</h4>
            <p className="text-gray-500 font-sans">Save up to 25% off</p>
          </div>
        </div>
        <div className="flex items-center px-4 xl:justify-center scaleHoverSection">
          <i className="fa-solid fa-headset text-4xl scaleHoverObject duration-300"></i>
          <div className="ml-4">
            <h4 className="text-lg font-bold">Support 24/7</h4>
            <p className="text-gray-500 font-sans">shop with an expert</p>
          </div>
        </div>
        <div className="flex items-center px-4 xl:justify-center scaleHoverSection">
          <i className="fa-regular fa-credit-card text-4xl scaleHoverObject duration-300"></i>
          <div className="ml-4">
            <h4 className="text-lg font-bold">Secure Payments</h4>
            <p className="text-gray-500 font-sans">100% Protected Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;

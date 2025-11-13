import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const DealsCoupon = ({ onClose,data }) => {
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <IoClose size={28} />
        </button>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Content Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-gray-600 text-lg mb-2">
              By signing in, you could have earned
            </h1>
            <h1 className="font-bold text-3xl md:text-4xl text-blue-600 mb-3">
              {data.offers}
            </h1>
            <h3 className="text-gray-500 text-lg mb-6">
              No Coupon Code Required
            </h3>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Deal Activated
            </button>
          </div>

          {/* Right Content Section */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center mb-4 shadow-md">
    <img
      src={data.logo}
      alt="logo"
      className="w-56 h-56 object-contain"
    />
  </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 mb-4">
              {[0, 1, 2].map((index) => (
                <GoDotFill
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeDot === index
                      ? "text-blue-500 scale-125"
                      : "text-gray-300 hover:text-gray-400"
                  }`}
                  size={16}
                />
              ))}
            </div>

            {/* Logo Placeholder */}
            <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs">Brand Logo</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            * Terms and conditions apply. Cashback credited within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealsCoupon;

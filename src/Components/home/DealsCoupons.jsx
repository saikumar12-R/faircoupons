import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import faircoupon1 from "../../assets/boy.png";
import faircoupon2 from "../../assets/coupon.png";
import faircoupon3 from "../../assets/discount.png";
import logo from "../../assets/pumpkin.jpg";

const DealsCoupon = ({ onClose }) => {
  const images = [faircoupon1, faircoupon2, faircoupon3];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="relative bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6 border-t-4 border-blue-500">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <IoMdClose size={24} />
        </button>

        {/* Popup Content */}
        <div className="text-center mb-6">
          <h1>By signing in, you could have earned</h1>
          <h1 className="font-bold text-3xl text-blue-600">upto 6.7% CD cashback</h1>
          <h3>No Coupon Code Required</h3>

          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600">
            Deal Activated
          </button>
        </div>

        {/* Image Carousel + Dots */}
        <div className="flex flex-col items-center space-y-3">
          <img
            src={images[activeIndex]}
            alt="Deal"
            className="w-72 h-48 object-cover rounded-md shadow-md"
          />

          {/* Dots */}
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <GoDotFill
                key={index}
                onClick={() => handleDotClick(index)}
                className={`cursor-pointer text-2xl ${
                  activeIndex === index ? "text-blue-600" : "text-gray-400"
                }`}
              />
            ))}
          </div>

          <img src={logo} alt="Logo" className="w-24 mt-4" />
        </div>
      </div>
    </div>
  );
};

export default DealsCoupon;

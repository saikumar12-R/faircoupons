import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Please enter your email address.");
      return;
    }
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-r from-blue-50 via-white to-pink-50 text-gray-800 pt-12 sm:pt-16 pb-8 sm:pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-400 to-pink-400 flex items-center justify-center shadow-md mb-4">
              <img src={logo} alt="FairCoupons Logo" className="w-16 h-16 object-contain" />
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
              Discover verified deals, exclusive coupons, and cashback offers — designed to save you more every day.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5">
              {[
                { icon: "fab fa-twitter", label: "Twitter" },
                { icon: "fab fa-facebook", label: "Facebook" },
                { icon: "fab fa-instagram", label: "Instagram" },
                { icon: "fab fa-linkedin", label: "LinkedIn" },
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={item.label}
                  className="p-2 bg-white hover:bg-blue-100 text-blue-600 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <i className={`${item.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold text-xl mb-4 border-l-4 border-blue-500 pl-3 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/deals"
                  className="text-gray-600 hover:text-blue-500 transition-all duration-300"
                >
                  Today's Deals
                </Link>
              </li>
              <li>
                <Link
                  to="/giftcards"
                  className="text-gray-600 hover:text-blue-500 transition-all duration-300"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-500 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/stores"
                  className="text-gray-600 hover:text-blue-500 transition-all duration-300"
                >
                  Stores
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold text-xl mb-4 border-l-4 border-blue-500 pl-3 text-gray-800">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <i className="fas fa-phone-alt text-blue-500"></i>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <i className="fas fa-envelope text-blue-500"></i>
                <span>support@faircoupons.com</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-3">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1"></i>
                <span>
                  FairCoupons Pvt. Ltd. <br />
                  2nd Floor, Tech Park Building, <br />
                  Hyderabad, Telangana, India - 500081
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold text-xl mb-4 border-l-4 border-blue-500 pl-3 text-gray-800">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-5 max-w-sm">
              Subscribe to receive the latest coupon updates and deal alerts in your inbox.
            </p>
            <div className="flex bg-white rounded-full overflow-hidden border border-gray-300 w-full max-w-sm shadow-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent text-gray-800 px-4 py-2 w-full focus:outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 transition-all duration-300"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Divider Section */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-blue-600 font-semibold">FairCoupons</span>. All rights reserved.
          </p>
          <div className="mt-3 space-x-4 text-sm">
            <a href="#" className="hover:text-blue-500 transition-all duration-300">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-blue-500 transition-all duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

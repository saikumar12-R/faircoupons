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
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-12 sm:pt-16 pb-8 sm:pb-10 overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-400 to-pink-500 flex items-center justify-center shadow-lg mb-4">
              <img src={logo} alt="Harbor Logo" className="w-20 h-20 object-contain" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Discover exclusive deals, verified coupons, and special cashback offers tailored for you.
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
                  className="p-2 bg-gray-800 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <i className={`${item.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-bold text-xl mb-4 border-l-4 border-blue-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/deals"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  Today's Deals
                </Link>
              </li>
              <li>
                <Link
                  to="/giftcards"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/stores"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-bold text-xl mb-4 border-l-4 border-blue-500 pl-3">
              Stay Connected
            </h3>
            <p className="text-gray-400 mb-5 max-w-sm">
              Subscribe to get the latest coupons and deal alerts directly to your inbox.
            </p>
            <div className="flex bg-gray-800 rounded-full overflow-hidden border border-gray-700 w-full max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent text-gray-200 px-4 py-2 w-full focus:outline-none"
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
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-blue-400 font-semibold">Harbor</span>. All rights reserved.
          </p>
          <div className="mt-3 space-x-4 text-sm">
            <a href="#" className="hover:text-blue-400 transition-all duration-300">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition-all duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-10 overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-500 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-5 space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-400 to-accent-500 flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold">H</span>
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Harbor
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Discover exclusive deals, verified coupons, and special cashback offers tailored for you.
            </p>

            <div className="flex space-x-5 mt-4">
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
                  className="p-2 bg-gray-800 hover:bg-primary-500 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <i className={`${item.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4 border-l-4 border-primary-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Today's Deals", "Popular Stores", "Categories", "Cashback Offers", "Gift Cards"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 border-l-4 border-primary-500 pl-3">
              Company
            </h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Press", "Blog", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-400 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-xl mb-4 border-l-4 border-primary-500 pl-3">
              Stay Connected
            </h3>
            <p className="text-gray-400 mb-5">
              Subscribe to get the latest coupons and deal alerts directly to your inbox.
            </p>
            <div className="flex bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent text-gray-200 px-4 py-2 w-full focus:outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="bg-primary-500 hover:bg-primary-600 text-white px-5 transition-all duration-300"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-primary-400 font-semibold">Harbor</span>. All rights reserved.
          </p>
          <div className="mt-3 space-x-4 text-sm">
            <a href="#" className="hover:text-primary-400 transition-all duration-300">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary-400 transition-all duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

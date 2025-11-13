import React from "react";
import faircoupon from "../assets/faircoupons-logo.png";
import CategoriesDropdown from "../Components/categories/Categories";
import TopStores from "./topstores/TopStores";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Announcement Bar - Modern Gradient */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white py-2.5 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 flex justify-center items-center relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-semibold">LIVE DEALS</span>
            </div>
            <span className="font-medium">
              Flash Sale: Extra{" "}
              <span className="font-bold text-yellow-300">15% OFF</span> with
              code{" "}
              <span className="font-bold bg-white/20 px-2 py-0.5 rounded">
                SAVE15
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar - Glass Morphism */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Row - Logo and Actions */}
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-24 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <img
                  src={faircoupon}
                  onClick={() => navigate("/")}
                  alt="FairCoupons Logo"
                  className="bg-slate-400"
                />
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent tracking-tight">
                  FairCoupons
                </h1>
                <p className="text-xs text-gray-500 -mt-1">
                  Save Big, Shop Smart
                </p>
              </div>
            </div>

            {/* Search Bar - Centered */}
            <div className="flex-1 max-w-2xl mx-8 hidden lg:block">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <i className="fas fa-search"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search for stores, brands, coupons..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50/50 shadow-sm transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-1.5 rounded-xl text-white font-medium text-sm transition-all hover:scale-105">
                  Search
                </button>
              </div>
            </div>

            {/* User Actions */}
           <div className="flex items-center justify-end gap-4">
  {/* Language & Currency */}
  <div className="hidden md:flex items-center gap-3 text-sm text-gray-600">
    <select className="bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer hover:text-blue-600 transition-colors">
      <option>🇺🇸 USD</option>
      <option>🇪🇺 EUR</option>
    </select>
    <div className="w-px h-4 bg-gray-300"></div>
    <select className="bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer hover:text-blue-600 transition-colors">
      <option>EN</option>
      <option>ES</option>
    </select>
  </div>

  {/* Action Buttons */}
  <div className="flex items-center gap-3">
    {/* Heart Icon */}
    <button
      className="p-2.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl 
                 transition-all duration-200 group shadow-sm hover:shadow-md"
    >
      <i className="far fa-heart text-lg group-hover:scale-110 transition-transform"></i>
    </button>

    {/* Notification Icon */}
    <button
      className="p-2.5 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-xl 
                 transition-all duration-200 group relative shadow-sm hover:shadow-md"
    >
      <i className="far fa-bell text-lg group-hover:scale-110 transition-transform"></i>
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>

    {/* Sign In Button */}
    <button
      onClick={() => navigate("/signup")}
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg 
                 transition-all hover:scale-105 flex items-center gap-2"
    >
      <i className="far fa-user"></i>
      Sign In
    </button>
  </div>

  {/* Mobile Menu */}
  <button
    className="lg:hidden p-2.5 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors 
               shadow-sm hover:shadow-md"
  >
    <i className="fas fa-bars text-xl"></i>
  </button>
</div>

          </div>

          {/* Bottom Row - Navigation */}
          <div className="flex items-center justify-between py-2 border-t border-gray-100">
            {/* Navigation Links */}
            <nav className="flex items-center gap-8 font-medium text-gray-700">
              <a
                href="/"
                className="relative group py-2 transition-all hover:text-blue-600"
              >
                <div className="flex items-center gap-2">
                  <i className="fas fa-home text-sm"></i>
                  Home
                </div>
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-300"></span>
              </a>

              {/* Categories Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 py-2 transition-all hover:text-blue-600 group">
                  <i className="fas fa-th-large text-sm"></i>
                  Categories
                  <i className="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                </button>
                <div className="absolute left-0 mt-1 ml-72 w-40 bg-white shadow-2xl rounded-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <CategoriesDropdown />
                </div>
              </div>

              {/* Top Stores Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 py-2 px-4 font-medium transition-all hover:text-blue-600 group">
                  <i className="fas fa-store text-sm"></i>
                  Top Stores
                  <i className="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 mt-4 ml-28 w-[900px] h-[400px] bg-white shadow-2xl rounded-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 border border-blue-100 p-3 py-2 overflow-y-auto border-t-0 ">
                  <TopStores />
                </div>
              </div>

              <a
                href="/deals"
                className="flex items-center gap-2 py-2 transition-all hover:text-blue-600 group relative"
              >
                <i className="fas fa-bolt text-sm text-yellow-500"></i>
                Today's Deals
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-300"></span>
              </a>

              <a
                href="/giftcards"
                className="flex items-center gap-2 py-2 transition-all hover:text-blue-600 group relative"
              >
                <i className="fas fa-gift text-sm text-purple-500"></i>
                Gift Cards
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-300"></span>
              </a>
            </nav>

            {/* Additional Links */}
            <div className="hidden xl:flex items-center gap-6 text-md text-black font-bold">
              <a href="/submitcoupon" className="hover:text-black transition-colors  border border-gray-600 rounded-lg p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">Submit Coupon</a>
              <a href="/requestcoupon" className="hover:text-black transition-colors border border-gray-600 rounded-lg p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">Request Coupon</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

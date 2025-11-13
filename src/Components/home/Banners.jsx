import React from "react";
import { FaBolt, FaTag, FaShoppingBag } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { BsStars } from "react-icons/bs";


const Banners = () => {
  return (
    <>
      {/* Modern Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 -z-10">
        {/* Floating gradient orbs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 space-y-10 p-6 max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl overflow-hidden">
          {/* Animated subtle pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.2)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
          </div>

          <div className="relative z-20 text-center">
            {/* Top badge */}
            <div className="inline-block bg-yellow-400 text-black font-extrabold px-6 py-2 rounded-full text-sm mb-6 shadow-lg animate-bounce">
              🔥 Flipkart Mega Sale Is Live!
            </div>

            {/* Heading */}
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight text-white drop-shadow-lg">
              Unbeatable <span className="text-yellow-300">Deals</span> Await!
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-8">
              Up to <span className="text-yellow-300 font-bold">70% OFF</span> on Top Brands ⚡
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl border-2 border-yellow-200 overflow-hidden">
                Shop Now 🚀
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white font-semibold text-lg px-10 py-4 rounded-2xl border-2 border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                View All Offers 💫
              </button>
            </div>

            {/* Countdown Timer */}
            <div className="flex justify-center space-x-5 mt-10">
              {[
                { label: "HOURS", value: "10" },
                { label: "MINUTES", value: "42" },
                { label: "SECONDS", value: "18" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/20 backdrop-blur-md rounded-lg p-4 text-center min-w-[80px] border border-white/40 shadow-md"
                >
                  <div className="text-3xl font-bold text-yellow-300">
                    {item.value}
                  </div>
                  <div className="text-xs opacity-80 font-semibold">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Deals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              name: "Electronics Bonanza",
              desc: "Top gadgets with up to 60% off 🎧",
              color: "from-blue-500 to-indigo-600",
              icon: <FaBolt className="text-5xl text-white" />,
              price: "₹4999",
              oldPrice: "₹9999",
              discount: "50%",
            },
            {
              name: "Fashion Fiesta",
              desc: "Trendy styles at jaw-dropping prices 👗",
              color: "from-pink-500 to-purple-600",
              icon: <FaTag className="text-5xl text-white" />,
              price: "₹799",
              oldPrice: "₹1599",
              discount: "50%",
            },
          ].map((deal, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-br ${deal.color} rounded-2xl p-8 text-white border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300`}
            >
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                🔥 {deal.discount} OFF
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-white/20 p-6 rounded-2xl">{deal.icon}</div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">{deal.name}</h3>
                  <p className="text-white/90 mb-4">{deal.desc}</p>
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <span className="text-3xl font-bold text-yellow-300">
                      {deal.price}
                    </span>
                    <span className="text-lg text-gray-200 line-through">
                      {deal.oldPrice}
                    </span>
                  </div>
                  <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                    Grab Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon Section */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-10 border border-white/20 shadow-2xl text-center relative overflow-hidden">
          <h2 className="text-4xl font-bold text-white mb-4">
            💳 Exclusive Coupons
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Use these special codes and save more on your favorite items 💥
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Amazon", discount: "55% OFF", code: "AMZ55" },
              { name: "Flipkart", discount: "60% OFF", code: "FLIP60" },
              { name: "Myntra", discount: "50% OFF", code: "MYN50" },
              { name: "Ajio", discount: "45% OFF", code: "AJ45" },
            ].map((store, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300 border border-white/20 shadow-lg"
              >
                <h4 className="text-xl font-bold mb-2">{store.name}</h4>
                <p className="text-2xl font-black text-yellow-300 mb-2">
                  {store.discount}
                </p>
                <p className="bg-yellow-300 text-black inline-block px-3 py-1 rounded-lg text-sm font-mono mb-3">
                  {store.code}
                </p>
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition">
                  Apply Coupon
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Save Big?</h2>
          <p className="text-lg text-gray-200 mb-6">
            Don’t miss out — Deals end soon! Shop smart, shop Flipkart 🛍️
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
            Start Shopping Now <GiShoppingCart className="inline ml-2" />
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
      
    </>
  );
};

export default Banners;

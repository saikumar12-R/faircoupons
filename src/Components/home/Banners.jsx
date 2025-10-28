import React from "react";
import { FaSpider } from "react-icons/fa";
import { GiPumpkinLantern } from "react-icons/gi";
import { FaGhost } from "react-icons/fa6";
import coupon from "../../assets/coupon.png"
import downbat from "../../assets/downbat.png"
import ghost from "../../assets/ghost.png"
import boy from "../../assets/boy.png"
import laptop from "../../assets/laptop.png"

const Banners = () => {
  return (
    <>
      {/* Flying Witch and Bat Background Elements - COVER ENTIRE PAGE */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        <img 
          src="https://files.resumeily.com/shopify/witch.gif" 
          alt="flying witch"
          className="absolute w-32 h-32 animate-fly-witch-full z-20"
        />
        <img 
          src="https://files.resumeily.com/shopify/bat.gif" 
          alt="flying bat"
          className="absolute w-24 h-24 animate-fly-bat-full z-20"
        />
        <img 
          src="https://files.resumeily.com/shopify/bat.gif" 
          alt="flying bat"
          className="absolute w-24 h-24 animate-fly-bat-2-full z-20"
        />
        {/* Additional flying elements for more coverage */}
        <img 
          src="https://files.resumeily.com/shopify/bat.gif" 
          alt="flying bat"
          className="absolute w-24 h-24 animate-fly-bat-3-full z-20"
        />
        <img 
          src="https://files.resumeily.com/shopify/witch.gif" 
          alt="flying witch"
          className="absolute w-24 h-24 animate-fly-witch-2-full z-20"
        />
      </div>

      {/* Main Content - LOWER Z-INDEX */}
      <div className="relative z-10 space-y-8 p-4">
        {/* Your existing banner content remains exactly the same */}
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-br from-purple-900 via-black to-orange-900 text-white py-20 px-6 rounded-3xl overflow-hidden shadow-2xl border border-orange-500/30 z-10">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-purple-500/10 animate-pulse z-0"></div>
          
          {/* Floating Icons */}
          <FaGhost className="absolute top-8 left-8 text-6xl text-white/20 animate-float-slow z-10" />
          <FaSpider className="absolute bottom-12 right-12 text-5xl text-white/30 animate-spin-slow z-10" />
          <GiPumpkinLantern className="absolute top-16 right-1/4 text-7xl text-orange-400/40 animate-pulse z-10" />
          <GiPumpkinLantern className="absolute bottom-8 left-1/3 text-5xl text-orange-300/30 animate-bounce z-10" />

          {/* Content */}
          <div className="relative z-20 text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-glow">
                HALLOWEEN
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-200 mb-8 leading-relaxed">
              Terrorific Deals That Will <span className="text-orange-400 font-semibold">Haunt Your Wallet</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50 border-2 border-orange-300/50 z-20 relative">
                🎃 Explore Spooky Offers
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white font-semibold text-lg px-10 py-4 rounded-2xl border-2 border-white/30 transition-all duration-300 hover:border-white/60 z-20 relative">
                👻 View All Deals
              </button>
            </div>
          </div>

          {/* Bottom Fog */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          <img src={downbat} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 animate-bounce z-10" alt="downbat"/>
        </div>

        {/* Featured Product Section */}
        <div className="relative bg-gradient-to-r from-gray-900 to-purple-900 rounded-2xl p-8 border border-purple-500/30 shadow-2xl z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Product Info */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse z-10 relative">
                🔥 LIMITED TIME OFFER
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Aurzen BOOM 3 Smart Projector
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                🎃 <span className="text-orange-400 font-bold">27% OFF</span> + Extra $20 OFF Every $200
                <br />
                <span className="text-lg text-gray-400">Discount auto-applied at checkout</span>
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 z-10 relative">
                Add to Cart - $299
              </button>
            </div>

            {/* Product Visual */}
            <div className="flex-1 relative">
              <div className="relative w-64 h-64 mx-auto">
                <img src={laptop} className="w-full h-full object-contain animate-float z-10 relative" alt="projector"/>
                <img src={ghost} className="absolute -top-4 -right-4 w-16 h-16 animate-float-slow z-20" alt="ghost"/>
                <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce z-20">
                  HOT DEAL!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coupon Section */}
        <div className="relative bg-gradient-to-br from-orange-900/80 to-purple-900/80 rounded-2xl p-8 border border-yellow-500/30 shadow-2xl z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                🎁 Exclusive Halloween Coupons
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                This Halloween, we're serving up spooktacular savings! 
                <span className="text-orange-300 font-semibold"> Scare away high prices </span>
                with our limited-time offers that are to die for!
              </p>
            </div>

            {/* Coupon Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src={coupon}
                  alt="coupon"
                  className="w-48 h-48 object-contain animate-pulse hover:scale-110 transition-transform duration-300 cursor-pointer z-10 relative"
                />
                <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl animate-ping z-0"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Coupon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10 relative">
          {[
            { name: "Flipkart", desc: "50% Off Sitewide" },
            { name: "Amazon", desc: "55% Off Electronics" },
            { name: "Myntra", desc: "60% Off Fashion" },
            { name: "Ajio", desc: "45% Off Everything" }
          ].map((store, index) => (
            <div 
              key={store.name}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-600 hover:border-orange-400 transition-all duration-300 hover:scale-105 shadow-lg group z-10 relative"
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img src={coupon} className="w-12 h-12 group-hover:scale-110 transition-transform duration-300 z-10" alt="coupon"/>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping z-20"></div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    {store.name} 
                    <span className="block text-orange-400 text-sm font-semibold">{store.desc}</span>
                  </h4>
                  <p className="text-gray-400 text-sm mt-2">
                    {store.name} has released terrifyingly good Halloween offers!
                  </p>
                  <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white text-xs px-4 py-2 rounded-lg transition-colors duration-300 z-10 relative">
                    Grab Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Decorative Elements
        <div className="text-center py-8 z-10 relative">
          <div className="inline-flex gap-4">
            <img src={pumpkin} className="w-12 h-12 animate-bounce z-10" alt="pumpkin"/>
            <img src={ghost} className="w-12 h-12 animate-float z-10" alt="ghost"/>
            <img src={boy} className="w-12 h-12 animate-bounce z-10" alt="boy"/>
          </div>
        </div> */}
      </div>

      {/* Custom CSS for FULL PAGE animations */}
      <style jsx>{`
        /* Full page flying animations that cover entire screen including navbar */
        @keyframes fly-witch-full {
          0% { transform: translateX(-100px) translateY(-50px) rotate(0deg); }
          25% { transform: translateX(110vw) translateY(100px) rotate(90deg); }
          50% { transform: translateX(50vw) translateY(110vh) rotate(180deg); }
          75% { transform: translateX(-50px) translateY(200px) rotate(270deg); }
          100% { transform: translateX(-100px) translateY(-50px) rotate(360deg); }
        }
        
        @keyframes fly-witch-2-full {
          0% { transform: translateX(110vw) translateY(200px) rotate(0deg) scaleX(-1); }
          33% { transform: translateX(-50px) translateY(110vh) rotate(120deg) scaleX(1); }
          66% { transform: translateX(90vw) translateY(-50px) rotate(240deg) scaleX(-1); }
          100% { transform: translateX(110vw) translateY(200px) rotate(360deg) scaleX(-1); }
        }
        
        @keyframes fly-bat-full {
          0% { transform: translateX(110vw) translateY(-30px) scaleX(-1); }
          50% { transform: translateX(-50px) translateY(110vh) scaleX(1); }
          100% { transform: translateX(110vw) translateY(-30px) scaleX(-1); }
        }
        
        @keyframes fly-bat-2-full {
          0% { transform: translateX(-50px) translateY(110vh); }
          50% { transform: translateX(110vw) translateY(-30px); }
          100% { transform: translateX(-50px) translateY(110vh); }
        }

        @keyframes fly-bat-3-full {
          0% { transform: translateX(50vw) translateY(-100px) rotate(0deg); }
          25% { transform: translateX(110vw) translateY(50vh) rotate(90deg); }
          50% { transform: translateX(-50px) translateY(110vh) rotate(180deg); }
          75% { transform: translateX(90vw) translateY(80vh) rotate(270deg); }
          100% { transform: translateX(50vw) translateY(-100px) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-5deg); }
        }
        
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(255, 165, 0, 0.8)); }
        }

        /* Full page flying animations */
        .animate-fly-witch-full {
          animation: fly-witch-full 25s linear infinite;
          z-index: 20;
        }
        
        .animate-fly-witch-2-full {
          animation: fly-witch-2-full 30s linear infinite;
          z-index: 20;
        }
        
        .animate-fly-bat-full {
          animation: fly-bat-full 18s linear infinite;
          z-index: 20;
        }
        
        .animate-fly-bat-2-full {
          animation: fly-bat-2-full 22s linear infinite;
          z-index: 20;
        }

        .animate-fly-bat-3-full {
          animation: fly-bat-3-full 20s linear infinite;
          z-index: 20;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        /* Ensure the flying container covers entire viewport */
        .fixed.inset-0 {
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      `}</style>
    </>
  );
};

export default Banners;
import React from "react";
import { FaGhost, FaSpider, FaSkullCrossbones } from "react-icons/fa";
import { GiPumpkinLantern, GiCrystalBall, GiBoneKnife } from "react-icons/gi";
import { RiGhostLine } from "react-icons/ri";

const Banners = () => {
  return (
    <>
      {/* Dark Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black z-0">
        {/* Animated floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.6 + 0.2
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Floating Ghosts */}
        <RiGhostLine className="absolute text-white/10 text-8xl animate-float-slow" style={{ top: '10%', left: '5%' }} />
        <RiGhostLine className="absolute text-purple-400/10 text-6xl animate-float" style={{ top: '60%', right: '10%' }} />
        
        {/* Spiders */}
        <FaSpider className="absolute text-gray-400/20 text-4xl animate-spin-slow" style={{ bottom: '20%', left: '15%' }} />
        <FaSpider className="absolute text-gray-400/20 text-3xl animate-spin-slow" style={{ top: '30%', right: '20%' }} />
        
        {/* Pumpkins */}
        <GiPumpkinLantern className="absolute text-orange-400/10 text-7xl animate-pulse" style={{ bottom: '10%', right: '5%' }} />
        <GiPumpkinLantern className="absolute text-yellow-400/10 text-5xl animate-bounce" style={{ top: '15%', left: '20%' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 space-y-8 p-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-800/90 to-purple-900/90 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30 shadow-2xl overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
          </div>
          
          <div className="relative z-20 text-center">
            <div className="inline-flex items-center gap-4 bg-black/50 px-6 py-3 rounded-full border border-orange-500/30 mb-8">
              <GiCrystalBall className="text-orange-400 text-xl animate-pulse" />
              <span className="text-orange-300 font-semibold">SPOOKY SEASON IS HERE</span>
              <GiCrystalBall className="text-orange-400 text-xl animate-pulse" />
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent animate-glow">
                HALLOWEEN
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unleash the <span className="text-orange-400 font-bold">terrorifying deals</span> that will 
              haunt your dreams and empty your wallet!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg px-12 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 border-2 border-orange-300/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                🎃 Explore Nightmarish Offers
              </button>
              
              <button className="bg-transparent hover:bg-white/10 text-white font-semibold text-lg px-12 py-4 rounded-2xl border-2 border-white/30 transition-all duration-300 hover:border-white/60 hover:scale-105 backdrop-blur-sm">
                👻 Browse All Deals
              </button>
            </div>
          </div>
        </div>

        {/* Featured Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Featured Product */}
          <div className="relative bg-gradient-to-br from-gray-800/80 to-orange-900/80 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30 shadow-2xl group hover:border-orange-400/60 transition-all duration-500">
            <div className="absolute -top-3 -right-3 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse z-20">
              🔥 FLASH SALE
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <GiBoneKnife className="text-white text-5xl" />
                </div>
                <FaGhost className="absolute -top-2 -right-2 text-white text-2xl animate-float" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Haunted Projector Pro</h3>
                <p className="text-gray-300 mb-4">Experience movies like never before with ghostly clarity</p>
                
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-orange-400">$299</span>
                  <span className="text-lg text-gray-400 line-through">$399</span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">Save 25%</span>
                </div>
                
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full md:w-auto">
                  Add to Cart - $299
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Product */}
          <div className="relative bg-gradient-to-br from-gray-800/80 to-purple-900/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 shadow-2xl group hover:border-purple-400/60 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <FaSkullCrossbones className="text-white text-5xl" />
                </div>
                <GiPumpkinLantern className="absolute -bottom-2 -left-2 text-orange-400 text-2xl animate-pulse" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Skull Audio System</h3>
                <p className="text-gray-300 mb-4">Bone-rattling sound quality that will scare your neighbors</p>
                
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <span className="text-3xl font-bold text-purple-400">$199</span>
                  <span className="text-lg text-gray-400 line-through">$249</span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">Save 20%</span>
                </div>
                
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full md:w-auto">
                  Add to Cart - $199
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Coupon Section */}
        <div className="relative bg-gradient-to-br from-gray-800/90 to-red-900/90 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/20 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              🎁 <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Terrifying Coupons</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              This Halloween, we're serving up deals so good, they're scary! 
              Don't let these offers haunt you forever...
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Amazon", discount: "55% OFF", color: "from-orange-500 to-yellow-500", code: "SCARE55" },
                { name: "Flipkart", discount: "50% OFF", color: "from-blue-500 to-cyan-500", code: "GHOST50" },
                { name: "Myntra", discount: "60% OFF", color: "from-pink-500 to-red-500", code: "SPOOKY60" },
                { name: "Ajio", discount: "45% OFF", color: "from-green-500 to-emerald-500", code: "HAUNT45" }
              ].map((store, index) => (
                <div 
                  key={store.name}
                  className={`bg-gradient-to-br ${store.color} rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-2">{store.name}</h4>
                    <p className="text-2xl font-black mb-3">{store.discount}</p>
                    <div className="bg-white/20 px-3 py-1 rounded-lg text-sm font-mono">
                      {store.code}
                    </div>
                    <button className="mt-4 bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 rounded-lg transition-colors duration-300 w-full">
                      Grab Offer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "1.2K+", label: "Spooky Products" },
            { number: "98%", label: "Satisfied Ghosts" },
            { number: "24/7", label: "Haunted Support" },
            { number: "50%+", label: "Average Savings" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 text-center border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-purple-900/80 to-orange-900/80 backdrop-blur-lg rounded-2xl p-12 text-center border border-white/20 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://files.resumeily.com/shopify/bat.gif')] bg-center opacity-10"></div>
          <div className="relative z-20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Spooked?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of happy ghosts and ghouls who've already taken advantage of our terrifying deals!
            </p>
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg px-12 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              🎃 Start Shopping Now
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(3deg); }
          66% { transform: translateY(10px) rotate(-3deg); }
        }
        
        @keyframes glow {
          0%, 100% { 
            filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.5));
          }
          50% { 
            filter: drop-shadow(0 0 20px rgba(255, 165, 0, 0.8)) 
                   drop-shadow(0 0 30px rgba(255, 69, 0, 0.4));
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1f2937;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f97316, #dc2626);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ea580c, #b91c1c);
        }
      `}</style>
    </>
  );
};

export default Banners;
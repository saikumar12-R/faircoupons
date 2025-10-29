import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Clock, Users, CheckCircle, Zap, Shield, Calendar } from "lucide-react";

const DetailsCoupon = () => {
  const { state } = useLocation();
  const { title: routeTitle } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const {
    title: stateTitle,
    logo,
    category,
    Coupons,
    code,
    verified,
    expiry,
    uses,
    discount,
    gradient = "from-blue-500 to-purple-600"
  } = state || {};

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Get ${discount} at ${stateTitle}`,
          text: `Use code ${code} to get ${discount} at ${stateTitle}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Sharing cancelled');
      }
    }
  };

  const features = [
    { icon: Shield, text: "100% Verified & Safe", color: "text-green-500" },
    { icon: Zap, text: "Instant Savings", color: "text-yellow-500" },
    { icon: Users, text: "Popular Choice", color: "text-blue-500" },
    { icon: Clock, text: "Limited Time", color: "text-orange-500" },
  ];

  const steps = [
    { number: 1, text: "Copy the coupon code" },
    { number: 2, text: "Visit the store website" },
    { number: 3, text: "Paste code at checkout" },
    { number: 4, text: "Enjoy your savings!" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Deals</span>
          </button>

          {/* Title (Centered on Desktop) */}
          <h1 className="hidden sm:block text-lg font-semibold text-gray-800">
            Best Offers & Coupons
          </h1>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-200"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>
    </header>
    
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Coupon Details */}
          <div className="lg:col-span-2">
            {/* Store Header */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center p-4">
                    <img
                      src={logo}
                      alt="Store Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {stateTitle || routeTitle || "Untitled Coupon"}
                    </h1>
                    <div className="flex items-center gap-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {category || "Uncategorized"}
                      </span>
                      {verified && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className={`bg-gradient-to-r ${gradient} text-white px-6 py-3 rounded-2xl font-bold text-xl shadow-lg`}>
                  {discount || "Special Offer"}
                </div>
              </div>

              <p className="text-xl text-gray-700 font-semibold mb-8">
                {Coupons || "Exclusive offer waiting for you!"}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Use */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Coupon</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    <span className="text-gray-700 font-medium">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Coupon Action */}
          <div className="space-y-8">
            {/* Coupon Code Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Your Coupon Code</h3>
                <div className="relative">
                  <code className="text-4xl font-black tracking-wider bg-white/10 px-6 py-4 rounded-2xl block">
                    {code || "N/A"}
                  </code>
                  <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyCode}
                className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-lg mb-4"
              >
                {copied ? "✓ Copied to Clipboard!" : "📋 Copy Code"}
              </button>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Popularity
                  </span>
                  <span className="font-semibold">{uses || "—"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Expires
                  </span>
                  <span className="font-semibold text-amber-300">{expiry || "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h4 className="font-bold text-gray-900 mb-4">💡 Tips for Best Results</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Apply code before completing payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Check minimum order value requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>One coupon per order usually applies</span>
                </li>
              </ul>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 text-white">
              <div className="text-center">
                <div className="text-2xl font-black mb-2">98%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "Is this coupon code free to use?",
                answer: "Yes, all our coupon codes are completely free with no hidden charges."
              },
              {
                question: "Can I use this coupon with other offers?",
                answer: "It depends on the store's policy. Some allow stacking, while others don't."
              },
              {
                question: "What if the coupon doesn't work?",
                answer: "Contact the store's support or try refreshing the page and applying again."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            onClick={() => navigate(-1)}
            className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            🔍 Explore More Deals
          </button>
          <p className="text-gray-500 text-sm mt-4">
            New coupons added daily • Verified every hour • Real user reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCoupon;
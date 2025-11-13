import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Share2,
  Clock,
  Users,
  CheckCircle,
  Zap,
  Shield,
  ChevronDown,
} from "lucide-react";

const DetailsCoupon = () => {
  const { state } = useLocation();
  const { title: routeTitle } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const {
    title: stateTitle,
    logo,
    category,
    Coupons,
    code,
    verified,
    discount,
    faqs,
    gradient = "from-indigo-600 via-purple-600 to-pink-600",
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
      } catch {
        console.log("Sharing cancelled");
      }
    }
  };

  const features = [
    { icon: Shield, text: "100% Verified & Safe", color: "text-green-500" },
    { icon: Zap, text: "Instant Savings", color: "text-yellow-500" },
    { icon: Users, text: "Popular Choice", color: "text-blue-500" },
    { icon: Clock, text: "Limited Time Offer", color: "text-orange-500" },
  ];

  const steps = [
    { number: 1, text: "Copy the coupon code" },
    { number: 2, text: "Visit the store website" },
    { number: 3, text: "Paste code at checkout" },
    { number: 4, text: "Enjoy your savings!" },
  ];

  const defaultFaqs = [
    {
      question: "Is this coupon free to use?",
      answer: "Yes, all our coupon codes are completely free and verified daily.",
    },
    {
      question: "Can I combine this coupon with others?",
      answer: "It depends on the store policy. Some allow stacking, others do not.",
    },
    {
      question: "What if my coupon doesn't work?",
      answer:
        "Try refreshing the page or check the expiry date. You can also browse similar active offers.",
    },
  ];

  const faqList = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  const [expandedItems, setExpandedItems] = useState({});

  const cashbackDetails = [
    {
      id: 1,
      heading: "Flat 30% Off Sitewide",
      offers: 'Get Upto 30% Off Across All Jewellery Categories',
      verified: 'Verified Today',
      used: '188 Used Today',
      deal: 'Get This Deal',
      details: "This coupon provides 30% discount on all products across the website. Minimum purchase of ₹5000 required. Valid until end of month."
    },
    {
      id: 2,
      heading: "Flat 15% Off Sitewide",
      offers: 'Get Upto 15% Off Across All Jewellery Categories',
      verified: 'Verified Today',
      used: '20 Used Today',
      deal: 'Show Code',
      code: "SBICODE50",
      details: "Use code SBICODE50 at checkout to get 15% off on all jewellery items. No minimum purchase required. Limited time offer."
    },
    {
      id: 3,
      heading: "Flat 80% Off Sitewide",
      offers: 'Get Upto 80% Off Across All Jewellery Categories',
      verified: 'Verified Today',
      used: '56 Used Today',
      deal: 'Get This Deal',
      details: "Massive 80% discount on selected premium jewellery collections. Limited stock available. Terms and conditions apply."
    },
    {
      id: 4,
      heading: "60% Off Sitewide",
      offers: 'Get Upto 60% Off Across All Jewellery Categories',
      verified: 'Verified Today',
      used: '56 Used Today',
      deal: 'Get This Deal',
      details: "Enjoy 60% discount on all diamond jewellery. Special offer for first-time customers. Valid for next 48 hours only."
    }
  ];

  // Handle coupon click
  const handleCouponClick = (item) => {
    if (item.deal.toLowerCase() === "show code") {
      setSelectedCoupon(item);
      setPopup(true);
    } else {
      // Navigate to deal or perform other action
      console.log("Deal clicked:", item);
    }
  };

  // Toggle details visibility
  const toggleDetails = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 font-inter">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <h1 className="text-lg font-semibold text-gray-800 hidden sm:block">
            Deal Details
          </h1>
          <button
            onClick={handleShare}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Share2 size={16} />
            <span>Share</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Coupon Info */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 relative overflow-hidden transition-transform hover:scale-[1.01]">
              <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-100 blur-3xl opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200 blur-3xl opacity-40"></div>

              <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center border shadow-sm">
                    {logo ? (
                      <img src={logo} alt="store" className="object-contain w-full h-full p-2" />
                    ) : (
                      <span className="text-gray-400 text-sm">No Logo</span>
                    )}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{stateTitle || routeTitle}</h1>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {category || "General"}
                      </span>
                      {verified && (
                        <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle size={14} />
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={`bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold text-xl shadow-md`}
                >
                  {discount || "Special Offer"}
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                {Coupons || "Enjoy exclusive savings with this verified offer."}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl p-3 flex items-center gap-3 hover:bg-gray-100 transition"
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-sm font-medium text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How to Use This Coupon
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
                  >
                    <div className="bg-indigo-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
                      {step.number}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Offers List */}
           <div className="grid gap-4 mb-8">
  {cashbackDetails.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-lg border border-gray-200 p-6"
    >
      {/* Main Offer */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-xl text-gray-900 mb-1">
            {item.heading}
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            {item.offers}
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="border px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              Code
            </span>
            <span className="border px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              Verified
            </span>
            <span className="border px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium">
              Exp. in 3 days
            </span>
          </div>
        </div>
        <button 
          onClick={() => handleCouponClick(item)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold text-sm transition-colors whitespace-nowrap ml-4"
        >
          {item.deal}
        </button>
      </div>

      {/* Separator */}
      <hr className="border-gray-200 my-3" />

      {/* Details Toggle */}
      <button 
        onClick={() => toggleDetails(item.id)}
        className="w-full text-left text-gray-700 text-sm font-medium mb-2"
      >
        {expandedItems[item.id] ? "Hide Details ▲" : "Show Details ▼"}
      </button>

      {/* Expanded Details */}
      {expandedItems[item.id] && (
        <div className="mt-2 text-gray-600 text-sm">
          <ul className="space-y-1">
            <li>• Enjoy {item.heading.toLowerCase()}.</li>
            <li>• Offer valid only on Tuesday.</li>
            <li>• Use the coupon code to avail the offer.</li>
          </ul>
        </div>
      )}

      {/* Success Rate */}
      <div className="flex items-center justify-end mt-3">
        <span className="text-blue-600 text-xs font-medium">100% Success</span>
      </div>
    </div>
  ))}
</div>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 text-white shadow-2xl border border-gray-700">
    <h3 className="text-gray-300 mb-4 text-center text-lg tracking-wide uppercase">
      Your Coupon Code
    </h3>

    <div className="relative bg-white/10 rounded-2xl py-6 px-4 text-center text-4xl font-extrabold tracking-widest mb-6 select-all">
      {code || "N/A"}
      <span className="absolute top-2 right-3 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
    </div>

    <button
      onClick={handleCopyCode}
      className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:bg-gray-200 transition-all duration-300 shadow-md"
    >
      {copied ? "✅ Copied!" : "📋 Copy Code"}
    </button>

    <p className="text-center text-gray-400 text-sm mt-4">
      Click the button to copy and use your code instantly.
    </p>
  </div>
</div>

        </div>

        {/* FAQ */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
  className={`w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 rounded-lg p-2 ${
    openFAQ === index ? "bg-black text-white" : "bg-white"
  }`}
>
  {faq.question}
  <ChevronDown
    className={`transition-transform ${
      openFAQ === index ? "rotate-180" : ""
    }`}
  />
</button>

                {openFAQ === index && (
                  <p className="mt-2 text-gray-600 animate-fadeIn">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="mt-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {stateTitle || routeTitle || "This Store"}
            </span>
          </h2>
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-lg border p-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
            <p className="relative text-gray-700 text-lg leading-relaxed mb-4 z-10">
              <span className="font-semibold text-indigo-600">
                {stateTitle || routeTitle || "This Store"}
              </span>{" "}
              brings unbeatable deals on fashion, electronics, and more.
              Whether you’re shopping for essentials or gifts, our coupons help
              you save instantly.
            </p>
            <p className="relative text-gray-700 text-lg leading-relaxed z-10">
              Stay tuned with{" "}
              <span className="font-semibold text-purple-600">MyFairCoupons</span>{" "}
              to access verified, real-time offers and cashback deals updated daily.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate(-1)}
            className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
          >
            🔍 Explore More Deals
          </button>
          <p className="text-gray-500 text-sm mt-3">
            New coupons added daily • Verified hourly • Trusted by shoppers
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCoupon;

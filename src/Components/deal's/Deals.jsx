import React, { useState } from "react";
import faircoupon from "../../assets/faircoupons-logo.png";
import { useNavigate } from "react-router-dom";

const Details = [
  {
    id: 1,
    logo: faircoupon,
    title: "FairCoupons",
    category: "All Categories",
    Coupons: "Extra 20% Off Sitewide",
    code: "SAVE20",
    verified: true,
    expiry: "Exp. in 3 days",
    uses: "12k uses today",
    discount: "20% OFF",
  },
  {
    id: 2,
    logo: faircoupon,
    title: "FairCoupons",
    category: "Fashion",
    Coupons: "Flat 30% Off on New Arrivals",
    code: "FASHION30",
    verified: true,
    expiry: "Exp. in 2 days",
    uses: "8k uses today",
    discount: "30% OFF",
  },
  {
    id: 3,
    logo: faircoupon,
    title: "FairCoupons",
    category: "Electronics",
    Coupons: "Get ₹500 Cashback on Mobiles",
    code: "CASH500",
    verified: true,
    expiry: "Exp. in 5 days",
    uses: "15k uses today",
    discount: "₹500 OFF",
  },
  {
    id: 4,
    logo: faircoupon,
    title: "FairCoupons",
    category: "Groceries",
    Coupons: "Buy 1 Get 1 Free on Essentials",
    code: "BOGO",
    verified: true,
    expiry: "Exp. in 4 days",
    uses: "10k uses today",
    discount: "BOGO",
  },
];

const Deals = () => {
  const [revealedCodes, setRevealedCodes] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  const handleRevealCode = (id) => {
    setRevealedCodes((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleCopyCode = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const filteredDetails = Details.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Coupons.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate=useNavigate();

  const handleCoupon = (item) => {
  navigate(`/detailscoupon/${item.title}`, {
    state: {
      title: item.title,
      logo: item.logo,
      faircoupon: item.faircoupon,
      category: item.category,
      Coupons: item.Coupons,
      code: item.code,
      verified: item.verified,
      expiry: item.expiry,
      uses: item.uses,
      discount: item.discount,
    },
  });
};


  return (
    <div className="px-6 py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-sm font-medium mb-4 shadow-md">
            <span>🔥</span> <span>Hot Deals of the Day</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Explore Exclusive Coupon Offers
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Get the best deals on your favorite brands. Verified, updated, and ready to save you money.
          </p>

          {/* Search */}
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="🔍 Search coupons, stores or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-5 py-2.5 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 cursor-pointer">
  {filteredDetails.map((item) => (
    <div
      key={item.id}
      onClick={() => handleCoupon(item)}
      className="group bg-white/70 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      {/* Top Badge */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-3 font-semibold text-lg">
        {item.discount}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Logo & Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <img
              src={item.logo}
              alt="store logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
        </div>

        {/* Offer Title */}
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          {item.Coupons}
        </h4>

        {/* Reveal Code */}
        <div className="mb-4">
          {revealedCodes[item.id] ? (
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border-2 border-dashed border-indigo-200">
              <code className="text-lg font-mono font-bold text-gray-900">
                {item.code}
              </code>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent card click from triggering
                  handleCopyCode(item.id, item.code);
                }}
                className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
              >
                {copiedId === item.id ? "Copied!" : "Copy"}
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent navigation
                handleRevealCode(item.id);
              }}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Show Code
            </button>
          )}
        </div>

        {/* Verified + Expiry */}
        <div className="flex flex-wrap gap-2 mb-3">
          {item.verified && (
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              ✅ Verified
            </span>
          )}
          <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
            {item.expiry}
          </span>
        </div>

        {/* Stats */}
        <div className="flex justify-between text-xs text-gray-500 border-t pt-2 mt-2">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            {item.uses}
          </span>
          <span className="text-purple-600 font-medium">🔥 Trending</span>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* Footer */}
        <div className="text-center mt-14">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
            View All Coupons
          </button>
          <p className="text-gray-500 text-sm mt-4">
            💡 New deals added hourly • 100% verified and tested codes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deals;

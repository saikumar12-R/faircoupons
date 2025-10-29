import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import boy from "../../assets/boy.png";

const HomeStores = () => {
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const location = useLocation();
  const { logo, name, rating } = location.state || {};

  const coupons = [
    {
      id: 1,
      title: "Extra 20% Off on Footwear",
      type: "Code",
      verified: "2h ago",
      worked: "94%",
      categories: ["Footwear", "Men", "Women"],
      code: "SAVE20",
    },
    {
      id: 2,
      title: "Free Shipping over $35",
      type: "Deal",
      verified: "1h ago",
      worked: "88%",
      categories: ["Skincare"],
      code: "FREESHIP",
    },
    {
      id: 3,
      title: "$50 OFF Laptops",
      type: "Code",
      verified: "1h ago",
      worked: "91%",
      categories: ["Electronics"],
      code: "SAVE50",
    },
    {
      id: 4,
      title: "$20 OFF Laptops",
      type: "Code",
      verified: "2h ago",
      worked: "50%",
      categories: ["HealthCare"],
      code: "SAVE50",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const numericRating = parseFloat(rating || 4.6);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-lg ${
            i <= numericRating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          {i <= numericRating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
  };
  const navigate=useNavigate();

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Breadcrumb */}
      <nav className="flex gap-2 text-gray-600 text-sm mb-6">
        <span className="cursor-pointer" onClick={()=>navigate('/')}>Home</span>
        <span>/</span>
        <span onClick={()=>navigate("/stores")} className="cursor-pointer">Stores</span>
        <span>/</span>
        <span className="text-black font-semibold">{name}</span>
      </nav>

      {/* Store Header */}
      <div className="bg-white shadow-lg rounded-3xl p-8 mb-10 border border-gray-100 flex flex-col lg:flex-row items-center lg:items-start gap-6">
        <img
          src={logo}
          alt={name}
          className="w-28 h-28 object-contain rounded-xl border shadow-sm"
        />
        <div>
          <h1 className="text-3xl flex items-center gap-2">
            {name || "Acme Sports"}
            <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded">
              ✅ Verified Store
            </span>
          </h1>
          <div className="flex items-center gap-2 mt-2">
            {renderStars(rating)}
            <span className="text-gray-600 text-sm font-medium">
              {rating || 4.6}/5
            </span>
          </div>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Discover the latest shoes, apparel, and accessories built for
            performance and comfort.
          </p>
        </div>
      </div>

      {/* Coupons Section */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        🎁 Available Offers
      </h2>
      <div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
    {coupons.map((item) => (
      <div
        key={item.id}
        className="bg-white p-4 h-[300px] w-[270px] rounded-2xl shadow-md border border-gray-200 
                   hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 
                   flex flex-col justify-between"
      >
        <div>
          <img
            src={boy}
            alt="coupon"
            className="w-full h-28 object-contain mb-3"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm mb-1 text-center">
            ⏱ Last Verified: {item.verified}
          </p>
          <p className="text-green-600 text-sm font-medium mb-3 text-center">
            👍 {item.worked} said it worked
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {item.categories.map((cat, idx) => (
              <span
                key={idx}
                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold"
              >
                #{cat}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setSelectedCoupon(item)}
            className="w-32 bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            {item.type === "Code" ? "Show Code" : "View Deal"}
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* About and Similar Stores */}
      <div className="mt-12 grid lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            🏬 About {name || "Acme Sports"}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            Acme Sports offers top-quality athletic wear and footwear designed
            for maximum performance. Combine codes with student deals and enjoy
            free shipping on orders over $50.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            🔄 Similar Stores
          </h3>
          <div className="flex gap-4 flex-wrap">
            {["FitPro", "RunClub", "Sporty"].map((store, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-gray-50 hover:bg-blue-50 transition"
              >
                <img
                  src={boy}
                  alt={store}
                  className="w-10 h-10 object-cover rounded-full border"
                />
                <h4 className="font-medium text-gray-700">{store}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coupon Popup Modal */}
      {selectedCoupon && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl relative animate-fadeIn scale-95">
            <button
              onClick={() => setSelectedCoupon(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold"
            >
              ×
            </button>

            <div className="text-center">
              <img
                src={boy}
                alt="coupon"
                className="w-24 h-24 mx-auto mb-4 object-contain"
              />
              <h2 className="text-xl font-bold mb-2">
                {selectedCoupon.title}
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Use this code at checkout to get your discount!
              </p>

              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="bg-gray-100 border border-dashed border-gray-400 px-5 py-2 font-mono rounded-lg text-lg">
                  {selectedCoupon.code}
                </span>
                <button
                  onClick={() => handleCopyCode(selectedCoupon.code)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                >
                  Copy
                </button>
              </div>

              <button className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition mb-5">
                Open Store
              </button>

              <div>
                <p className="text-gray-700 mb-3 font-medium">Did it work?</p>
                <div className="flex justify-center gap-5">
                  <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl hover:bg-green-200 transition">
                    👍 Worked
                  </button>
                  <button className="bg-red-100 text-red-700 px-4 py-2 rounded-xl hover:bg-red-200 transition">
                    👎 Didn’t
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fade In Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HomeStores;

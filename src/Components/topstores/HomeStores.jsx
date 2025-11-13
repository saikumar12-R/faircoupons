import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import boy from "../../assets/boy.png";

const HomeStores = () => {
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const location = useLocation();
  const { logo, name, rating } = location.state || {};
  const [codes,setCodes]=useState([]);
  console.log(logo,"logo is caming");

  const coupons = [
    {
      id: 1,
      title: "Extra 20% Off on Footwear",
      type: "Code",
      icons: "https://tse2.mm.bing.net/th/id/OIP.S-RWhnipYsHH4w3RuxtwzwHaHa?w=203&h=203&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      verified: "2h ago",
      worked: "94%",
      categories: ["Footwear", "Men", "Women"],
      code: "SAVE20",
    },
    {
      id: 2,
      title: "Free Shipping over $35",
      type: "Deal",
      icons:"data:image/webp;base64,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",
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
      icons:"https://tse2.mm.bing.net/th/id/OIP.QGHIhB-oqwKqSE2xz8uW8AHaG7?w=181&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      worked: "91%",
      categories: ["Electronics"],
      code: "SAVE50",
    },
    {
      id: 4,
      title: "$20 OFF Medical Supplies",
      type: "Code",
      verified: "2h ago",
      icons:"https://tse4.mm.bing.net/th/id/OIP.Lk0P0-5aCCkqirRFtHHfIwHaHa?w=191&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
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
    setCodes(codes.concat(code));
    setTimeout(() => {
      setCodes((prev) => prev.filter((c) => c !== code));
    }, 2000);
  };

  const navigate=useNavigate();

  const handleCouponCode=(item)=>{
      setSelectedCoupon(item);
      setCodes(codes.concat(item.code));
    }

    console.log(codes,"codes")


    const faqItems = [
    {
      question: `Where can I find the latest ${name} coupons?`,
      answer: `To find the latest ${name} coupons, visit our Cashback page regularly. We update our offers frequently to ensure you have access to the best deals available.`
    },
    {
      question: `How do I redeem ${name} coupons on MyFairCoupons?`,
      answer: `To redeem ${name} coupons on MyFairCoupons, simply click on the desired coupon offer. You will be redirected to the ${name} website where the coupon code will be automatically applied at checkout.`
    },
    {
      question: `Are ${name} coupons valid for all products?`,
      answer: `Most ${name} coupons are valid for a wide range of products, but some may have specific terms and conditions. Always check the coupon details for any restrictions or exclusions.`
    },
    {
      question: `Can I use multiple ${name} coupons at once?`,
      answer: `Typically, only one coupon can be used per transaction on ${name}. However, you can combine coupons with ongoing sales or promotions for additional savings.`
    },
    {
      question: `How often does ${name} release new coupons?`,
      answer: `${name} frequently releases new coupons, especially during festive seasons and special sales events. Stay updated by checking our Cashback page regularly.`
    }
  ];

  const discountCodes = [
    {
      title: "Avail Deal on RAD140 Magnus Pharmaceuticals at Just $65.00",
      description: "Grab a discount on RAD140 Magnus Pharmaceuticals with an available price of $65.00. No discount codes are necessary.",
      used: "Used 10 Times",
      price: "Just $65.00",
      type: "deal"
    },
    {
      title: "Save Up to 20% with Coupons on All Products",
      description: "Get massive discounts on all products with this exclusive coupon code",
      badges: ["Code Verified", "Used 57 Times", "Success Rate - 77%"],
      discount: "20% OFF",
      type: "coupon"
    },
    {
      title: "Save Up to 15% with Coupons on All Products",
      description: "Limited time offer for all customers",
      badges: ["Code Verified", "Used 86 Times", "Success Rate - 76%"],
      discount: "15% OFF",
      type: "coupon"
    }
  ];

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
              {rating || 4.6}
            </span>
          </div>
          <p className="text-gray-600 mt-3 text-md leading-relaxed">
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
            src={item.icons}
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
            // onClick={() => setSelectedCoupon(item)}
            onClick={()=>handleCouponCode(item)}
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
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">
            🏬 About {name || "Acme Sports"}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {name} offers top-quality athletic wear and footwear designed
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
                className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-gray-50 hover:bg-blue-50 transition text-md"
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
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
    <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-200 animate-fadeIn overflow-hidden">
      
      {/* Decorative Glows */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Close Button */}
      <button
        onClick={() => setSelectedCoupon(null)}
        className="absolute top-2 right-4 text-gray-600 hover:text-red-600 text-2xl font-bold transition-all duration-300"
      >
        ×
      </button>

      {/* Success Message */}
      {codes && codes.includes(selectedCoupon.code) && (
        <div className="bg-green-100 text-green-800 border border-green-300 px-3 py-1.5 rounded-lg text-center mb-4 font-medium animate-pulse shadow-sm text-sm">
          ✅ Coupon code copied successfully!
        </div>
      )}

      {/* Coupon Content */}
      <div className="relative text-center z-10 mt-2">
        <img
          src={boy}
          alt="coupon"
          className="w-20 h-20 mx-auto mb-4 object-contain drop-shadow-md transition-transform duration-300 hover:scale-110"
        />

        <h2 className="text-xl font-bold mb-1 text-gray-800 tracking-tight">
          {selectedCoupon.title}
        </h2>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          Use this code at checkout to enjoy your exclusive discount 🎉
        </p>

        {/* Coupon Code Section */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="bg-gray-100 border border-dashed border-gray-400 px-4 py-1.5 font-mono rounded-lg text-base text-gray-800 shadow-sm">
            {selectedCoupon.code}
          </span>
          <button
            onClick={() => handleCopyCode(selectedCoupon.code)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-md transition-all duration-300"
          >
            Copy
          </button>
        </div>

        {/* Open Store Button */}
        <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:scale-[1.02]">
          🛍️ Open Store
        </button>

        {/* Feedback + Save Store Section (Side by Side, Compact) */}
        <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
          
          {/* Feedback Section */}
          <div className="flex-1 bg-white/70 rounded-lg shadow-inner border border-gray-200 py-3 px-3 text-center">
            <h3 className="text-gray-800 font-semibold mb-2 text-sm">Did this code work?</h3>
            <div className="flex justify-center gap-2">
              <button className="bg-green-100 text-green-700 px-4 py-1.5 rounded-lg hover:bg-green-200 font-medium text-sm transition-all duration-300 shadow-sm">
                👍 Worked
              </button>
              <button className="bg-red-100 text-red-700 px-4 py-1.5 rounded-lg hover:bg-red-200 font-medium text-sm transition-all duration-300 shadow-sm">
                👎 Didn’t
              </button>
            </div>
          </div>

          {/* Save Store Section */}
          <div className="flex-1 bg-white/70 rounded-lg shadow-inner border border-gray-200 py-3 px-3 text-center">
            <h3 className="text-gray-800 font-semibold mb-2 text-sm">Remainder</h3>
            <button className="bg-blue-100 text-blue-700 px-5 py-1.5 rounded-lg hover:bg-blue-200 font-medium text-sm transition-all duration-300 shadow-sm">
              💾 Save Store
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Fade Animation */}
    <style>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.25s ease-in-out forwards;
      }
    `}</style>
  </div>
)}


  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left mt-20">
                FAQ: Everything You Need To Know To Save BIG
              </h2>
            <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8 w-auto">
              <div className="space-y-6">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* More Discount Codes */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left mt-12">
                More {name} Discount Codes
              </h2>
            <div className="bg-white rounded-2xl shadow-sm border p-8">
              <div className="grid gap-6">
                {discountCodes.map((code, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {code.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-xl">
                          {code.description}
                        </p>
                        {code.type === "deal" ? (
                          <div className="flex items-center space-x-3">
                            <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                              {code.used}
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {code.badges.map((badge, badgeIndex) => (
                              <span key={badgeIndex} className="bg-blue-100 text-blue-800 text-md font-semibold px-3 py-1 rounded-full">
                                {badge}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-4">
                        <div className="text-right">
                          {code.type === "deal" ? (
                            <span className="text-2xl font-bold text-green-600">
                              {code.price}
                            </span>
                          ) : (
                            <span className="text-2xl font-bold text-blue-600">
                              {code.discount}
                            </span>
                          )}
                        </div>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap">
                          {code.type === "deal" ? "Show Deal" : "SHOW CODE"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

    </div>
  );
};

export default HomeStores;

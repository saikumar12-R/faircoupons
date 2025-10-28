import React from "react";
import { useLocation, useParams } from "react-router-dom";

const DetailsCoupon = () => {
  const { state } = useLocation();
  const { title: routeTitle } = useParams();

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
  } = state || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight">
          Coupon Details
        </h1>

        {/* Main content container */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Card */}
          <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-gray-200 hover:shadow-gray-400 transition-all duration-300 md:w-1/2">
            <div className="flex flex-col items-center mb-8">
              {logo && (
                <img
                  src={logo}
                  alt="Store Logo"
                  className="w-32 h-32 object-contain rounded-xl border border-gray-200 shadow-md mb-4 p-3 bg-gray-50"
                />
              )}
              <h2 className="text-2xl font-semibold text-gray-800 text-center">
                {stateTitle || routeTitle || "Untitled Coupon"}
              </h2>
              <span className="text-sm text-gray-500">
                {category || "Uncategorized"}
              </span>
            </div>

            {/* Coupon Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <strong>Discount:</strong>
                <p className="text-lg font-medium text-green-600">{discount || "—"}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <strong>Code:</strong>
                <p className="text-lg font-semibold text-indigo-600">{code || "—"}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <strong>Verified:</strong>
                <p className="text-lg">{verified ? "✅ Yes" : "❌ No"}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <strong>Expiry:</strong>
                <p className="text-lg text-red-500">{expiry || "N/A"}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <strong>Uses:</strong>
                <p className="text-lg">{uses || "—"}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <strong>Coupon:</strong>
                <p className="text-lg">{Coupons || "—"}</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-10 border border-gray-200 hover:shadow-gray-400 transition-all duration-300 md:w-1/2 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">Saikumar</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover amazing discounts and verified coupons curated for you.
              Unlock your savings with just one click and make every purchase smarter.
            </p>

            <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCoupon;

import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Offers = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = [
    { id: 'ALL', label: 'ALL (109)', count: 109 },
    { id: 'COUPONS', label: 'Coupons (16)', count: 16 },
    { id: 'CASHBACK', label: 'Cashback (77)', count: 77 },
    { id: 'DEALS', label: 'Deals (93)', count: 93 }
  ];

 const location = useLocation();
  const { logo, store, active, rating, inactiveOffers } = location.state || {};


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <span className="text-gray-400">›</span>
            <span className="hover:text-blue-600 cursor-pointer">Appliances</span>
            <span className="text-gray-400">›</span>
            <span className="hover:text-blue-600 cursor-pointer">Kitchen Appliances</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">{store} Coupons</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Sidebar - Filters */}
          <div className="lg:w-1/4 space-y-6">
            {/* Store Info Card */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
  <img
    src={logo}
    alt="Store Logo"
    className="w-12 h-12 object-contain rounded-md"
  />
</div>

                <div>
                  <h2 className="font-semibold text-lg">{store}</h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center bg-green-100 px-2 py-1 rounded">
                      <span className="text-green-800 font-bold">{rating}★</span>
                    </div>
                    <span className="text-gray-600 text-sm">3385 ratings</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Active Voucher Rewards
              </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Filter</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Clear
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <input 
                  type="search" 
                  placeholder="Search offers..." 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* User Type */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">User Type</h4>
                <div className="space-y-2">
                  {['New Amazon User', 'Existing Amazon User'].map((type) => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Bank & Wallet Offers */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Bank & Wallet Offers</h4>
                <div className="space-y-2">
                  {['Amazon Pay', 'ICICI Bank', 'Axis Bank', 'SBI Bank', 'Bank offers', 'HDFC Bank'].map((bank) => (
                    <label key={bank} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                      <span className="text-gray-700">{bank}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  {[
                    'Mobiles & Tablets', 'Computer, Laptop', 'Beauty & Health', 
                    'Fashion', 'Tv, Audio/Video', 'Appliances', 
                    'Home Furnishing', 'Food & Dining'
                  ].map((category) => (
                    <label key={category} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Voucher Rewards */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Voucher Rewards Rates</h4>
              <div className="space-y-4">
                {[
                  { amount: '₹50', desc: 'Voucher Rewards for New Sign Ups on CouponDunia & Amazon (Lucky 100 Users) On their 1st Transaction' },
                  { amount: '6.5%', desc: 'Voucher Rewards for New Sign Ups on CouponDunia & Amazon (Lucky 100 Users) On their 1st Transaction' },
                  { amount: '5.0%', desc: 'Voucher Rewards for Luxury Beauty' },
                  { amount: '7.0%', desc: 'Voucher Rewards for Beauty' }
                ].map((reward, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-1">
                    <h5 className="font-bold text-gray-900">{reward.amount}</h5>
                    <p className="text-sm text-gray-600 mt-1">{reward.desc}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 font-medium hover:text-blue-800">
                View More
              </button>
            </div>

            {/* Cashback Stats */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Cashback Stats</h4>
              <div className="space-y-4">
                {[
                  { label: 'Estimated Payment Date', value: '31 Dec, 2025' },
                  { label: 'Tracking Speed', value: '24 hours' },
                  { label: 'Not Tracked Claims', value: 'Not Accepted' }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                    {index < 2 && <hr className="my-3 border-gray-200" />}
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 text-white mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-2">{store} Coupons</h1>
                  <p className="text-blue-100">
                    Save more on your shopping with verified 111 Amazon Coupons and promo codes for Oct 2025.
                  </p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 mt-4 md:mt-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Upto 6.5%</div>
                    <div className="text-sm">Voucher Rewards</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-6 text-sm">
                <span className="font-medium">Voucher Rewards Rates</span>
                <span className="text-white/60">|</span>
                <span className="hover:underline cursor-pointer">Terms & Conditions</span>
              </div>

              {/* Order Timeline */}
              <div className="flex items-center justify-between mt-6 bg-white/10 rounded-lg p-4">
                <div className="text-center">
                  <div className="font-semibold">Order</div>
                  <div className="text-blue-200 text-sm">Today</div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-white/40 mx-2"></div>
                  <div className="text-white/60">→</div>
                  <div className="w-8 h-0.5 bg-white/40 mx-2"></div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">Voucher Reward</div>
                  <div className="text-blue-200 text-sm">Tracks in 24 hours</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border mb-6">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Offers List */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                          verified today
                        </span>
                        <span className="text-gray-500 text-sm">188 People Used Today</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 mb-2">80% Off Sitewide</h3>
                        <p className="text-gray-600 mb-4">
                          Great Indian Festival Diwali Special: Get Upto 80% Off Across Categories
                        </p>
                        <button className="text-blue-600 font-medium hover:text-blue-800">
                          Show Details
                        </button>
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                        Get Deal
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Offers Banner */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Offers</h2>
              <div className="bg-gradient-to-r from-purple-800 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Bestselling Products at Unmatched Deals
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['CASHBACK', 'DISCOUNTS', 'SAVINGS'].map((tag) => (
                      <span key={tag} className="bg-yellow-400 text-purple-800 font-bold px-3 py-1 rounded-lg text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="relative z-10 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl hover:bg-red-600 transition-colors">
                  →
                </button>
                
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
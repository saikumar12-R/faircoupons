import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import friday from "../../assets/13.png" 

const Offers = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = [
    { id: 'ALL', label: 'ALL (109)', count: 109 },
    { id: 'COUPONS', label: 'Coupons (16)', count: 16 },
    { id: 'CASHBACK', label: 'Cashback (77)', count: 77 },
    { id: 'DEALS', label: 'Deals (93)', count: 93 }
  ];

 const location = useLocation();
  const { logo, store, active, rating, inactiveOffers,name } = location.state || {};

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

   const [expandedItems, setExpandedItems] = useState({});

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
            <span className="hover:text-blue-600 cursor-pointer">{store}</span>
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

             <section className="border rounded-lg shadow-sm p-6 bg-gradient-to-b from-blue-600 to-purple-700">
                               <div className="text-center">
                                <h1 className="font-bold text-2xl text-white">Shop with Coupons Code</h1>
                                <p className="text-white">Use the coupons code save your money with also a cashback offers using the faircoupons website</p>
                                </div>
                                <button className="mt-10 border border-red-500 p-2 rounded-md bg-red-500 text-white">Known More</button>
                              <div className="flex flex-col bg-red-500 mix-blend-multiply translate-x-0 inset-0 transform opacity-0"></div>
                                
                                <div className='mt-4'>
                                  <img src={friday} className=''/>
                                  </div> 
                              
                             
                        </section>
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

             {/* FAQ Section */}
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-left mt-20">
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
                              <span key={badgeIndex} className="bg-green-100 text-green-800 text-md font-semibold px-3 py-1 rounded-full">
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
        </div>
      </div>



       {/* About Section */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-start mt-16 mx-4 sm:mx-8 md:mx-16 lg:mx-32 tracking-tight">
  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
    {store || 'the Store'}
  </span>
</h2>

<div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-lg border border-gray-200 p-8 sm:p-10 mt-12 mb-16 mx-4 sm:mx-8 md:mx-16 lg:mx-32 overflow-hidden transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
  {/* Decorative Glow Effects */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

  <p className="relative text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 z-10">
    <span className="font-semibold text-indigo-600">{store || 'the store'}</span> is one of the most
    popular online destinations for shoppers looking for quality products at great prices.
    Whether you’re buying <span className="font-medium">electronics</span>, <span className="font-medium">fashion</span>,
    home appliances, or groceries, <span className="font-semibold text-purple-600">{store || 'the store'}</span> offers
    unbeatable deals and cashback opportunities to make your shopping experience more rewarding.
  </p>

  <p className="relative text-gray-700 text-lg sm:text-xl leading-relaxed z-10">
    Stay connected with <span className="font-semibold text-indigo-600">MyFairCoupons</span> to never
    miss the latest <span className="font-semibold text-purple-600">{store || 'the store'}</span> coupons,
    exclusive discounts, and seasonal offers. Our team ensures that every deal you see here is
    <span className="font-semibold text-green-600"> 100% verified</span> and up to date — so you can shop
    confidently and <span className="font-bold text-indigo-600">save big every time!</span>
  </p>
</div>



    </div>
  )
}

export default Offers
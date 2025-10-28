import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const CategoriesStores = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const tabs = [
    { id: "ALL", label: "ALL (109)", count: 109 },
    { id: "COUPONS", label: "Coupons (16)", count: 16 },
    { id: "CASHBACK", label: "Cashback (77)", count: 77 },
    { id: "DEALS", label: "Deals (93)", count: 93 },
  ];

  const location = useLocation();
  const { selectedItem, store, title } = location.state || {};

  const stores = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      paragraph: "Amazon | 12 Offers",
      offers: "Upto 3.3%",
    },
    {
      id: 2,
      logo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
      paragraph: "Flipkart | 5 Offers",
      offers: "Upto 4.5%",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Myntra_logo.png",
      paragraph: "Myntra | 2 Offers",
      offers: "Upto 1.2%",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
              <span className="hover:text-blue-600 cursor-pointer">Home</span>
              <span className="text-gray-400">›</span>
              <span className="hover:text-blue-600 cursor-pointer">Electronics</span>
              <span className="text-gray-400">›</span>
              <span className="hover:text-blue-600 cursor-pointer">{selectedItem}</span>
            </nav>
            <h1 className="text-3xl font-bold text-gray-900">{title || store} Coupons</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 space-y-6">
            <section className="bg-white border rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-lg">Filters</h3>
                <button className="text-blue-600 text-sm font-medium hover:underline">Clear</button>
              </div>
              <input
                type="search"
                placeholder="Search offers..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-5 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                aria-label="Search offers"
              />
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">User Type</h4>
                {["New User", "Existing User"].map((type) => (
                  <label key={type} className="flex items-center gap-3 mb-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      aria-checked="false"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
              <hr className="my-4" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Store</h4>
                {["Amazon", "Flipkart", "Myntra", "Boat", "Samsung", "Croma"].map((storeName) => (
                  <label key={storeName} className="flex items-center gap-3 mb-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span>{storeName}</span>
                  </label>
                ))}
              </div>
            </section>

            <section className="bg-white border rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Voucher Rewards</h4>
              {[
                { amount: "₹50", desc: "For new sign-ups (Lucky 100 users)" },
                { amount: "6.5%", desc: "On first transaction" },
                { amount: "5%", desc: "Luxury Beauty Offers" },
              ].map(({ amount, desc }, idx) => (
                <div key={idx} className="mb-3 border-l-4 border-blue-500 pl-3">
                  <h5 className="font-bold text-gray-800">{amount}</h5>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </section>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 space-y-6">
            {/* Partner Stores */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl p-5 shadow-md">
              <h2 className="font-bold text-lg mb-4">Top Partner Stores</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {stores.map(({ id, logo, paragraph, offers }) => (
                  <div
                    key={id}
                    className="bg-white/10 rounded-lg p-4 flex flex-col items-center text-center hover:bg-white/20 transition"
                  >
                    <img src={logo} alt={paragraph} className="w-20 h-10 mb-3 object-contain" />
                    <p className="text-white font-medium mb-1">{paragraph}</p>
                    <span className="text-yellow-300 font-semibold">{offers}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tabs */}
            <section className="bg-white shadow rounded-lg border">
              <div className="flex border-b overflow-x-auto">
                {tabs.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex-1 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                      activeTab === id
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    aria-selected={activeTab === id}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </section>

            {/* Offers List */}
            <section className="space-y-4" aria-label="Offers List">
              {[1, 2, 3, 4, 5].map((offer) => (
                <article
                  key={offer}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md p-6 transition"
                  tabIndex={0}
                >
                  <header className="flex justify-between items-center mb-3">
                    <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded font-medium">
                      Verified Today
                    </span>
                    <span className="text-gray-500 text-sm">188 people used today</span>
                  </header>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Flat 80% Off on All Products</h3>
                  <p className="text-gray-600 mb-4">
                    Great Indian Festival Offer: Massive discounts across all categories.
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="text-blue-600 font-medium hover:underline" aria-label="Show offer details">
                      Show Details
                    </button>
                    <button
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
                      aria-haspopup="dialog"
                      aria-controls="coupon-modal"
                    >
                      Get Deal
                    </button>
                  </div>
                </article>
              ))}
            </section>

            {/* Sales Info */}
            <section className="bg-white border rounded-xl shadow-md p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">🔥 Upcoming & Ongoing Sales</h2>
              <p className="text-gray-600 mb-4">
                Don’t miss out on these massive discounts and cashback offers happening across
                popular stores this season. Shop smart and save more!
              </p>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>
                  <strong>Amazon Great Indian Festival:</strong> Up to 80% off on electronics,
                  fashion, and more.
                </li>
                <li>
                  <strong>Flipkart Big Billion Days:</strong> Grab unbeatable deals and extra bank
                  offers.
                </li>
                <li>
                  <strong>Myntra End of Season Sale:</strong> Up to 70% off on top brands and styles.
                </li>
                <li>
                  <strong>Croma Festive Tech Deals:</strong> Cashback up to ₹10,000 on gadgets and
                  appliances.
                </li>
              </ul>
            </section>

            {/* FAQ Section */}
            <section className="p-6 mt-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">❓ Frequently Asked Questions</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="font-semibold text-gray-900">Q1. How can I use these coupon codes?</dt>
                  <dd className="text-gray-600">
                    Simply click on “Get Deal” or “Show Details,” copy the code, and apply it during
                    checkout on the respective store’s website.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Q2. Are the cashback offers available for all users?</dt>
                  <dd className="text-gray-600">
                    Some cashback offers are exclusive to new users, while others are valid for both
                    new and existing users. Please check the offer details carefully.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Q3. When will I receive my cashback?</dt>
                  <dd className="text-gray-600">
                    Cashback is usually credited within 48–72 hours after successful order
                    confirmation.
                  </dd>
                </div>
              </dl>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default CategoriesStores;

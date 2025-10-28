import React from "react";

const stores = [
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    cashback: "Upto $6.50",
    offers: "111 Offers",
  },
  {
    name: "Myntra",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Myntra_Logo.png",
    cashback: "Upto $6.70",
    offers: "78 Offers",
  },
  {
    name: "Jupiter Money",
    logo: "https://via.placeholder.com/60x30/3B82F6/FFFFFF?text=Jupiter",
    cashback: "$5 Cashback",
    offers: "5 Offers",
  },
  {
    name: "Croma",
    logo: "https://via.placeholder.com/60x30/EF4444/FFFFFF?text=Croma",
    cashback: "Upto $3.00",
    offers: "49 Offers",
  },
  {
    name: "Bookscape",
    logo: "https://via.placeholder.com/60x30/10B981/FFFFFF?text=Books",
    cashback: "Flat $15.00",
    offers: "7 Offers",
  },
  {
    name: "Flipkart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flipkart_logo.png",
    cashback: "Upto $7.00",
    offers: "60 Offers",
  },
  {
    name: "Dell India",
    logo: "https://via.placeholder.com/60x30/0076CC/FFFFFF?text=Dell",
    cashback: "Flat $4.50",
    offers: "11 Offers",
  },
  {
    name: "HP Official eStore",
    logo: "https://via.placeholder.com/60x30/0096D6/FFFFFF?text=HP",
    cashback: "Upto $5.60",
    offers: "10 Offers",
  },
  {
    name: "Cleartrip",
    logo: "https://via.placeholder.com/60x30/8B5CF6/FFFFFF?text=Trip",
    cashback: "Upto $2.85",
    offers: "36 Offers",
  },
  {
    name: "boAt",
    logo: "https://via.placeholder.com/60x30/000000/FFFFFF?text=boAt",
    cashback: "Flat $5.20",
    offers: "29 Offers",
  },
];

const TopStores = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto py-4 px-4 border-t-4 border-blue-500 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Top Stores</h2>
        <button className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center">
          View All Stores <span className="ml-1">&gt;</span>
        </button>
      </div>

{/* Stores List */}
<div className="grid grid-cols-3 gap-5">
  {stores.map((store, index) => (
    <React.Fragment key={index}>
      <div className="flex items-center bg-white rounded-2xl p-4 hover:shadow-lg transition-all duration-300">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gray-50 rounded-xl shadow-sm">
          <img
            src={store.logo}
            alt={store.name}
            className="max-w-[70%] max-h-[70%] object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="ml-4 flex flex-col justify-between">
          <h3 className="text-md font-semibold text-gray-800">{store.name}</h3>
          <p className="text-green-600 font-bold text-sm">{store.cashback}</p>
          <p className="text-gray-500 text-sm">{store.offers}</p>
        </div>
      </div>

      {/* Add a horizontal line after every 3 cards */}
      {(index + 1) % 3 === 0 && <hr className="col-span-3 border-t border-gray-300 my-4" />}
    </React.Fragment>
  ))}
</div>


    </div>
  );
};

export default TopStores;

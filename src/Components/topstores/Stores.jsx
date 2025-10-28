import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');
  const navigate = useNavigate();

  const data = [
    {
      id: '1',
      name: 'Flipkart',
      logo: '🛒',
      rate: '4.6',
      active: 'verified',
      paragraph: 'Just do it for the flipkart shoes',
      discount: 'Up to 70% OFF',
    },
    {
      id: '2',
      name: 'Amazon',
      logo: '📦',
      rate: '3.5',
      active: 'verified',
      paragraph: 'Just do it for the amazon wearing clothes',
      discount: 'Up to 60% OFF',
    },
    {
      id: '3',
      name: 'Walmart',
      logo: '🏪',
      rate: '4.0',
      active: 'verified',
      paragraph: 'Just do it for the walmart electronics materials',
      discount: 'Up to 50% OFF',
    },
    {
      id: '4',
      name: 'Ajio',
      logo: '👕',
      rate: '4.8',
      active: 'verified',
      paragraph: 'Shop stylish wear from Ajio',
      discount: 'Up to 80% OFF',
    },
  ];

  // ✅ Filter Logic (Search + Alphabet)
  const filteredData = data.filter((store) => {
    const matchesSearch = store.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLetter = selectedLetter
      ? store.name.toUpperCase().startsWith(selectedLetter)
      : true;
    return matchesSearch && matchesLetter;
  });

  // ✅ Rating Stars Renderer
  const renderStars = (rating) => {
    const stars = [];
    const numericRating = parseFloat(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-lg ${
            i <= numericRating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          {i <= numericRating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  // ✅ Navigate to Homestores with data
  const handleStore = (store) => {
    const storeData = {
      name: store.name,
      logo: store.logo,
      rate: store.rate,
      active: store.active,
      paragraph: store.paragraph,
      discount: store.discount,
    };
    navigate('/homestores', { state: storeData });
  };

  // ✅ Generate A–Z letters
  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  // ✅ Handle letter click
  const handleLetterClick = (letter) => {
    // toggle same letter (show all if clicked again)
    setSelectedLetter((prev) => (prev === letter ? '' : letter));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ul className="flex items-center space-x-2 text-sm text-gray-600">
          <li onClick={()=>navigate('/')} className="hover:text-gray-900 cursor-pointer transition-colors">
            Home
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-blue-600 font-medium">Stores</li>
        </ul>
      </nav>

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Stores</h1>
          <p className="text-gray-600">
            Browse verified coupons from top retailers worldwide
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full lg:w-auto">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              placeholder="Search stores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Alphabet Filter */}
      <div className="flex flex-wrap gap-3 p-4 justify-center">
        {alphabets.map((letter) => (
          <span
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className={`text-lg font-semibold px-3 py-1 rounded-lg cursor-pointer transition ${
              selectedLetter === letter
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
            }`}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Stores Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((store) => (
          <div
            key={store.id}
            onClick={() => handleStore(store)}
            className="cursor-pointer bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              {/* Store Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                    {store.logo}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-lg font-semibold text-gray-900 truncate">
                      {store.name}
                    </h2>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {store.active} ✓
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">{renderStars(store.rate)}</div>
                    <span className="text-sm text-gray-500">
                      ({store.rate})
                    </span>
                  </div>
                </div>
              </div>

              {/* Discount Badge */}
              <div className="mb-4">
                <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                  {store.discount}
                </span>
              </div>

              {/* Store Description */}
              <p className="text-gray-600 mb-6 line-clamp-2">
                {store.paragraph}
              </p>

              {/* Action Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Visit Store</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🏪</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No stores found
          </h3>
          <p className="text-gray-600">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
};

export default Stores;

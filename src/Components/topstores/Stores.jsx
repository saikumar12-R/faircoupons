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
      logo: 'data:image/webp;base64,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',
      rating: '4.6',
      active: 'verified',
      paragraph: 'Just do it for the Flipkart shoes',
      discount: 'Up to 70% OFF',
    },
    {
      id: '2',
      name: 'Amazon',
      logo: 'https://tse2.mm.bing.net/th/id/OIP.BHsDLmb5Z-pq2W2DwOaZCAHaGF?w=221&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
      rating: '3.5',
      active: 'verified',
      paragraph: 'Just do it for Amazon wearing clothes',
      discount: 'Up to 60% OFF',
    },
    {
      id: '3',
      name: 'Walmart',
      logo: 'data:image/webp;base64,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',
      rating: '4.0',
      active: 'verified',
      paragraph: 'Just do it for Walmart electronics materials',
      discount: 'Up to 50% OFF',
    },
    {
      id: '4',
      name: 'Ajio',
      logo: 'data:image/webp;base64,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',
      rating: '4.8',
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

  // ✅ Render Stars
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
      rating: store.rating,
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
    setSelectedLetter((prev) => (prev === letter ? '' : letter));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ul className="flex items-center space-x-2 text-sm text-gray-600">
          <li
            onClick={() => navigate('/')}
            className="hover:text-gray-900 cursor-pointer transition-colors"
          >
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
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-2xl font-semibold text-gray-900 truncate">
                      {store.name}
                    </h2>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {store.active} ✓
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">{renderStars(store.rating)}</div>
                    <span className="text-sm text-gray-500">
                      ({store.rating})
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

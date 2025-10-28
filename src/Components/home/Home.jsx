// pages/index.js (or components/HomePage.js)
import { act, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Popup from "./Popup";
import { IoIosShirt } from "react-icons/io";
import { LiaMobileSolid } from "react-icons/lia";
import { GiWashingMachine } from "react-icons/gi";
import { FaPlaneDeparture } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import faircoupon from "../../assets/faircoupons-logo.png";
import coupon from "../../assets/coupon.png";
import discount from "../../assets/discount.png"
import pumpkin from "../../assets/pumpkin.jpg"
import DealsCoupon from "./DealsCoupons";


export default function Home() {
  useEffect(() => {
    // Copy code buttons functionality
    const copyButtons = document.querySelectorAll("button");
    copyButtons.forEach((button) => {
      if (button.textContent.includes("Copy Code")) {
        button.addEventListener("click", function () {
          const codeElement =
            this.closest(".bg-gray-50").querySelector(".font-mono");
          const code = codeElement.textContent;

          // Create a temporary textarea to copy from
          const textarea = document.createElement("textarea");
          textarea.value = code;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);

          // Visual feedback
          const originalText = this.textContent;
          this.textContent = "Copied!";
          this.classList.remove("bg-primary-500");
          this.classList.add("bg-green-500");

          setTimeout(() => {
            this.textContent = originalText;
            this.classList.remove("bg-green-500");
            this.classList.add("bg-primary-500");
          }, 2000);
        });
      }
    });

    // Add floating animation to cards on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".deal-card, .category-card").forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(card);
    });
  }, []);

  const data = {
    Fashion: [
      {
        id: 1,
        title: "Fashion",
        offers: "Up to 70% off | Extra 10% off with HARBOR10",
        deals: "Get Deal",
        store: "Myntra Store",
        cashback: "5% Cashback",
        inactiveOffers: "15 offers available",
        logo: "https://img.icons8.com/ios-filled/50/000000/t-shirt--v1.png",
        active: "29 Offers",
        rating:'4.2'
      },
    ],
    "Mobiles & Tablets": [
      {
        id: 2,
        title: "Mobiles & Tablets",
        offers: "Up to 60% off | Extra 5% off with HARBOR5",
        deals: "Get Deal",
        store: "Flipkart Store",
        cashback: "5% Cashback",
        inactiveOffers: "10 offers available",
        logo: "https://img.icons8.com/ios-filled/50/000000/smartphone-tablet.png",
        active: "20 Offers",
        rating:'4.2'
      },
    ],
    Appliances: [
      {
        id: 3,
        title: "Appliances",
        offers: "Up to 50% off | Extra 8% off with HARBOR8",
        deals: "Get Deal",
        store: "Croma Store",
        cashback: "5% Cashback",
        inactiveOffers: "8 offers available",
        logo: "https://img.icons8.com/ios-filled/50/000000/washing-machine.png",
        active: "30 Offers",
      rating:'4.2'
      },
    ],
    Travel: [
      {
        id: 4,
        title: "Travel",
        offers: "Up to 40% off | Extra 12% off with HARBOR12",
        deals: "Get Deal",
        store: "MakeMyTrip Store",
        cashback: "5% Cashback",
        inactiveOffers: "5 offers available",
        logo: "https://img.icons8.com/ios-filled/50/000000/airport.png",
        active: "12 Offers",
        rating:'4.2'
      },
      {
        id: 5,
        title: "Travel",
        offers: "Up to 40% off | Extra 12% off with HARBOR12",
        deals: "Get Deal",
        store: "MakeMyTrip Store",
        cashback: "5% Cashback",
        inactiveOffers: "5 offers available",
        logo: "https://img.icons8.com/ios-filled/50/000000/airport.png",
        active: "12 Offers",
        rating:'4.2'
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("Fashion");

const navigate=useNavigate();

  const selectedData = data[selectedCategory];
  
  const handleClick=()=>{
    navigate('/stores')
  }

  const handleOffers = (item) => {
  const offerData = {
    logo: item.logo,
    store: item.store,
    active: item.active,
    rating: item.rating,
    inactiveOffers: item.inactiveOffers
  };

  navigate('/offers', { state: offerData });
  console.log(offerData, "navigated state");
};

  const handleStore = (storeData) => {
    navigate("/homestores", { state: storeData });
  };

  const handleBanners=()=>{
    navigate('/banners')
  }
  const [showPopup, setShowPopup]=useState(false);

  return (
    <>
      <Helmet>
        <title>Harbor — Deals, Reimagined</title>
        <meta
          name="description"
          content="Discover verified coupons, cashback offers, and exclusive deals from 30,000+ stores."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div
        className="min-h-screen bg-gray-50 text-gray-800"
        style={{
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <main>
          {/* Hero Section */}
          <section className="gradient-bg pt-12 pb-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 text-primary-700 text-sm font-medium mb-6 shadow-soft">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    Trusted by 2M+ shoppers worldwide
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                    Unlock{" "}
                    <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                      Exclusive Deals
                    </span>{" "}
                    & Save More
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 max-w-lg">
                    Discover verified coupons, cashback offers, and exclusive
                    deals from 30,000+ stores. Start saving today!
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center">
                      <i className="fas fa-bolt mr-2"></i>
                      Explore Top Deals
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-medium transition-colors border border-gray-300 flex items-center justify-center">
                      <i className="fas fa-play-circle mr-2"></i>
                      How It Works
                    </button>
                  </div>

                  <div className="mt-10 flex items-center space-x-6">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">500K+</p>
                      <p className="text-gray-600 text-sm">Active Coupons</p>
                    </div>
                    <div className="h-10 w-px bg-gray-300"></div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">30K+</p>
                      <p className="text-gray-600 text-sm">Stores</p>
                    </div>
                    <div className="h-10 w-px bg-gray-300"></div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">2M+</p>
                      <p className="text-gray-600 text-sm">Happy Users</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 relative">
                  <div className="relative z-10">
                    <div className="bg-white rounded-2xl p-6 shadow-soft max-w-md mx-auto floating">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                            <i className="fas fa-gem text-white text-lg"></i>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">
                              Member Exclusive
                            </h3>
                            <p className="text-sm text-gray-500">
                              Extra 15% off electronics
                            </p>
                          </div>
                        </div>
                        <span className="trending-badge px-2 py-1 rounded-full text-xs font-bold">
                          HOT
                        </span>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 mb-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-gray-500 text-sm">Use code</p>
                            <p className="font-mono font-bold text-lg">
                              HARBOR15
                            </p>
                          </div>
                          <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                            Copy Code
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <i className="far fa-clock mr-1"></i>
                        <span>Expires in 2 days</span>
                        <span className="mx-2">•</span>
                        <i className="far fa-check-circle mr-1 text-green-500"></i>
                        <span>Verified today</span>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-soft max-w-xs z-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                          <i className="fas fa-shipping-fast text-white"></i>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            Free Shipping
                          </p>
                          <p className="text-xs text-gray-500">
                            56 offers available
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-soft max-w-xs z-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                          <i className="fas fa-percentage text-white"></i>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Cashback</p>
                          <p className="text-xs text-gray-500">
                            Up to 10% back
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* login details */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Three Steps To Save With Coupons
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Save money effortlessly with our simple three-step process.
                  Start shopping and watch your cashback grow!
                </p>
              </div>

              {/* Steps Container */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting Line for Desktop */}
                <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-400 to-purple-400 z-0"></div>

                {/* Step 1 */}
                <div className="relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group hover:-translate-y-2">
                  {/* Step Number at Top-Right Corner */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>

                  {/* Icon Container */}
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/711/711769.png"
                      alt="Log In & Shop"
                      className="w-10 h-10"
                    />
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Log In & Shop
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Click your favourite store & start shopping effortlessly
                    with our seamless login experience.
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </div>

                {/* Step 2 */}
                <div className="relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group hover:-translate-y-2">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>

                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                      alt="Cashback Earned"
                      className="w-10 h-10"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Cashback Earned
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Watch your cashback grow instantly as it gets added directly
                    to your Coupon wallet.
                  </p>

                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                </div>

                {/* Step 3 */}
                <div className="relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group hover:-translate-y-2">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>

                  <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                      alt="Withdraw Cashback"
                      className="w-10 h-10"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Withdraw Cashback
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Transfer to your bank account or redeem as vouchers,
                    recharges, and gift cards.
                  </p>

                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Start Saving Now
                </button>
              </div>
            </div>
          </section>

{/* banners */}
        <section className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white py-10 relative overflow-hidden">
  {/* Floating Halloween Decorations */}
  
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/8/88/Halloween_spider_web_icon.svg"
    alt="Web"
    className="absolute bottom-8 left-10 w-16 h-16 opacity-50"
  />

  {/* Section Heading */}
  <div className="ml-7 font-extrabold text-4xl">
    <h1>🎃 Halloween Special Offers 👻</h1>
  </div>

  {/* Offer Cards */}
  <div className="flex flex-col lg:flex-row gap-6 p-8">
    {/* Left Banner */}
    <div className="relative flex-1 bg-gradient-to-r from-orange-700 to-orange-500 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-[0_0_20px_#ff7518]">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-purple-600 rounded-full mix-blend-multiply opacity-40 -translate-x-10 -translate-y-10 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600 rounded-full mix-blend-multiply opacity-40 translate-x-10 translate-y-10 blur-2xl"></div>

      <h2 className="text-3xl font-bold mb-2 text-black">
        🕸️ Spooky Rewards + Free Treats 🍬
      </h2>
      <p className="text-sm text-gray-100 mb-4">Oct 25th - Nov 1st</p>

      <div className="flex items-center space-x-4 bg-black/60 text-orange-400 rounded-xl p-2 text-sm w-max backdrop-blur-sm border border-orange-400">
        <span>Powered by:</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Dell_Logo.png"
          alt="Dell"
          className="h-5"
        />
        <span>Co-Powered by:</span>
        <img
          src="https://via.placeholder.com/50x20/ff7518/000000?text=Jupiter"
          alt="Jupiter"
          className="h-5"
        />
        <img
          src="https://via.placeholder.com/50x20/000000/ff7518?text=Klook"
          alt="Klook"
          className="h-5"
        />
      </div>

      <button className="absolute bottom-4 right-4 w-12 h-12 bg-black rounded-lg flex items-center justify-center text-orange-500 text-xl border-2 border-orange-500 hover:bg-orange-600 hover:text-black transition-all" onClick={handleBanners}>
        &rarr;
      </button>
    </div>

    {/* Right Banner */}
    <div className="relative flex-1 bg-gradient-to-r from-purple-900 to-black rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-[0_0_25px_#9333ea]">
      <h2 className="text-3xl font-bold mb-4 text-orange-400">
        👻 Frighteningly Good Deals Await!
      </h2>
      <div className="flex space-x-3">
        <div className="bg-orange-400 text-black font-bold px-4 py-2 rounded-lg shadow-md animate-pulse">
          TRICK
        </div>
        <div className="bg-orange-400 text-black font-bold px-4 py-2 rounded-lg shadow-md animate-pulse">
          TREAT
        </div>
        <div className="bg-orange-400 text-black font-bold px-4 py-2 rounded-lg shadow-md animate-pulse">
          SAVINGS
        </div>
      </div>

      <button className="absolute bottom-4 right-4 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-black text-xl hover:bg-orange-600 transition-all border border-orange-300" onClick={handleBanners}>
        &rarr;
      </button>
    </div>
  </div>
</section>


          {/* {categories} */}
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side - Categories */}
              <div className="lg:w-1/4 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                  Categories
                </h2>
                <div className="space-y-3">
                  {Object.keys(data).map((category) => (
                    <div
                      key={category}
                      className={`flex items-center space-x-4 cursor-pointer rounded-xl p-4 transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-l-4 border-blue-600 shadow-sm"
                          : "hover:bg-gray-50 text-gray-700 border-l-4 border-transparent"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <div
                        className={`p-3 rounded-lg ${
                          selectedCategory === category
                            ? "bg-blue-100"
                            : "bg-gray-100"
                        }`}
                      >
                        {category === "Fashion" && (
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        )}
                        {category === "Mobiles & Tablets" && (
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            ></path>
                          </svg>
                        )}
                        {category === "Appliances" && (
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                          </svg>
                        )}
                        {category === "Travel" && (
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            ></path>
                          </svg>
                        )}
                      </div>
                      <span className="font-semibold text-lg">{category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Offers & Stores */}
              <div className="lg:w-3/4 space-y-8">
                {/* Offers Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {selectedCategory} Offers
                      </h2>
                      <p className="text-gray-500 mt-1">
                        Exclusive deals just for you
                      </p>
                    </div>
                    <button className="mt-4 sm:mt-0 flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition-all duration-200 group">
                      Show More
                      <svg
                        className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedData.map((item) => (
                      <div
                        key={item.id}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 h-72 hover:-translate-y-1"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="relative">
                            <img
                              src={item.logo}
                              alt={item.title}
                              className="w-14 h-14 rounded-xl object-cover border border-gray-200"
                            />
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                          </div>
                          <div>
                            <h3 className="font-bold text-xl text-gray-800">
                              {item.title}
                            </h3>
                            <div className="flex items-center mt-1">
                              <svg
                                className="w-4 h-4 text-yellow-400 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <span className="text-sm text-gray-600">
                                4.5 • 2.1k reviews
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="text-gray-700 font-semibold mb-2">
                            {item.offers}
                          </p>
                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 text-green-600 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                              ></path>
                            </svg>
                            <p className="text-green-600 font-bold">
                              {item.cashback}
                            </p>
                          </div>
                        </div>
                        <button onClick={()=>setShowPopup(true)} className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center">
                          {item.deals}
                        </button>
                        {showPopup && <DealsCoupon onClose={()=>setShowPopup(false)}/>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stores Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {selectedCategory} Stores
                      </h2>
                      <p className="text-gray-500 mt-1">
                        Shop from trusted brands
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex space-x-2">
                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-all duration-200">
                        Filter
                      </button>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200">
                        View All
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedData.map((item) => (
                      <div
                        key={item.id}
                        className="relative bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50 rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1"
                        
                      >
                        {/* Active Badge */}
                        <span className="absolute top-3 right-3 text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                          {item.active}
                        </span>

                        {/* Store Content */}
                        <div className="flex items-center mb-4">
                          <img
                            src={item.logo}
                            alt={item.store}
                            className="w-12 h-12 rounded-xl object-cover border border-gray-200 mr-3"
                          />
                          <div>
                            <h3 className="font-bold text-lg text-gray-800">
                              {item.store}
                            </h3>
                            <div className="flex items-center mt-1">
                              <svg
                                className="w-4 h-4 text-yellow-400 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <span className="text-sm text-gray-600">{item.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center" onClick={()=>handleOffers(item)}>
                          <p className="text-gray-600">{item.inactiveOffers}</p>
                          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                            Visit
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Deals */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Today's Featured Deals
                  </h2>
                  <p className="text-gray-600">
                    Handpicked offers with the highest savings
                  </p>
                </div>
                <button className="hidden md:flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  View all deals
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Deal Card 1 */}
                <div className="deal-card bg-white rounded-2xl overflow-hidden shadow-card border border-gray-200">
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <i className="fas fa-store text-white"></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">TechWorld</h3>
                          <p className="text-sm text-gray-500">
                            Electronics Store
                          </p>
                        </div>
                      </div>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">
                        40% OFF
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      Extra 40% off select laptops & tablets
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Limited time offer on premium brands
                    </p>

                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-500 text-sm">Use code</p>
                          <p className="font-mono font-bold text-lg">TECH40</p>
                        </div>
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors pulse-soft">
                          Copy Code
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="far fa-clock mr-1"></i>
                        <span>5 days left</span>
                      </div>
                      <div className="flex items-center">
                        <i className="far fa-check-circle mr-1 text-green-500"></i>
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deal Card 2 */}
                <div className="deal-card bg-white rounded-2xl overflow-hidden shadow-card border border-gray-200">
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <i className="fas fa-shopping-bag text-white"></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">
                            FashionHub
                          </h3>
                          <p className="text-sm text-gray-500">
                            Clothing Store
                          </p>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                        FREE SHIP
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      Free shipping on all orders $50+
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      No code needed. Applies automatically.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-500 text-sm">
                            No code needed
                          </p>
                          <p className="font-bold text-lg text-gray-900">
                            Auto-applied
                          </p>
                        </div>
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                          Shop Now
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="far fa-clock mr-1"></i>
                        <span>Ongoing</span>
                      </div>
                      <div className="flex items-center">
                        <i className="far fa-check-circle mr-1 text-green-500"></i>
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deal Card 3 */}
                <div className="deal-card bg-white rounded-2xl overflow-hidden shadow-card border border-gray-200">
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                          <i className="fas fa-utensils text-white"></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">
                            FoodieDelight
                          </h3>
                          <p className="text-sm text-gray-500">Restaurant</p>
                        </div>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                        25% OFF
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      25% off your first order + free delivery
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      New customers only. Min. order $25.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-500 text-sm">Use code</p>
                          <p className="font-mono font-bold text-lg">FIRST25</p>
                        </div>
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                          Copy Code
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="far fa-clock mr-1"></i>
                        <span>14 days left</span>
                      </div>
                      <div className="flex items-center">
                        <i className="far fa-check-circle mr-1 text-green-500"></i>
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-10 md:hidden">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                  View all deals
                </button>
              </div>
            </div>
          </section>


          {/* Popular Stores */}
       <section className="py-16 bg-gradient-to-br from-violet-50 via-pink-50 to-yellow-50 rounded-3xl shadow-2xl mx-8">
  <div className="container mx-auto px-6">

    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-center mb-14">
      <h2 className="text-4xl sm:text-4xl font-extrabold text-gray-900 tracking-tight flex items-center gap-3">
        💎 Popular Stores
      </h2>
      <button
        onClick={() => navigate("/stores")}
        className="mt-5 sm:mt-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-7 py-3 rounded-full font-semibold hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-indigo-200"
      >
        View All →
      </button>
    </div>

    {/* Store Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-stretch">
      
      {/* Featured Main Store */}
      <div
        onClick={() => handleStore({
          name: "Amazon",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
          rewards: "Upto 6.5%",
          rating: "4.8"
        })}
        className="lg:col-span-1 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl shadow-xl p-10 text-center flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          className="w-40 h-20 object-contain mb-6"
        />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Amazon</h3>
        <p className="text-gray-600 text-sm mb-3">⭐ 4.8 Rating</p>
        <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md">
          Upto 6.5% Rewards
        </span>
      </div>

      {/* Other Stores */}
      <div className="lg:col-span-2 xl:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {[
          { name: "Flipkart", logo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png", rewards: "Upto 7%", rating: "4.6" },
          { name: "AJIO", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Ajio-Logo.png", rewards: "Upto 12.8%", rating: "4.7" },
          { name: "Myntra", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Myntra_logo.png", rewards: "Upto 6.7%", rating: "4.5" },
          { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg", rewards: "Flat 4.5%", rating: "4.4" },
          { name: "Klook", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Klook_Logo.png", rewards: "Upto 3.5%", rating: "4.3" },
          { name: "Jupiter", logo: "https://seeklogo.com/images/J/jupiter-money-logo-859E57D03B-seeklogo.com.png", rewards: "Upto 5.6%", rating: "4.6" },
          { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", rewards: "Upto 2.5%", rating: "4.5" },
          { name: "Croma", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Croma_logo.svg", rewards: "Upto 3%", rating: "4.2" },
        ].map((store, index) => (
          <div
            key={index}
            onClick={() => handleStore(store)}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer group border border-transparent hover:border-indigo-100"
          >
            <div className="bg-gradient-to-tr from-purple-100 via-pink-100 to-yellow-100 rounded-xl p-5 flex justify-center items-center mb-4 group-hover:scale-105 transition-transform duration-300">
              <img
                src={store.logo}
                alt={store.name}
                className="w-24 h-12 object-contain"
              />
            </div>
            <h3 className="text-lg text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
              {store.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">⭐ {store.rating} Rating</p>
            <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm inline-block group-hover:scale-110 transition-transform duration-300">
              {store.rewards}
            </span>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

{/* cashback */}
<section className=" mt-10 ml-9 mr-9 rounded-xl  relative py-16 bg-gradient-to-br from-gray-900 via-indigo-900 to-black overflow-hidden">
  <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.3),transparent),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.25),transparent)]"></div>

  <div className="max-w-7xl mx-auto px-2 text-white">

    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight flex items-center gap-3">
        💸 Hosting Partner Deals
      </h2>
      <button className="mt-6 sm:mt-0 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
        Explore All →
      </button>
    </div>

    {/* Card Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {[
        { name: "Hostinger", logo: "https://seeklogo.com/images/H/hostinger-logo-0F92E27926-seeklogo.com.png", cashback: "$45 Cashback", glow: "from-purple-500" },
        { name: "Bluehost", logo: "https://seeklogo.com/images/B/bluehost-logo-7B4D5F76D8-seeklogo.com.png", cashback: "$35 Cashback", glow: "from-blue-500" },
        { name: "SiteGround", logo: "https://seeklogo.com/images/S/siteground-logo-18BF6B58F4-seeklogo.com.png", cashback: "$25 Cashback", glow: "from-green-500" },
        { name: "A2 Hosting", logo: "https://seeklogo.com/images/A/a2-hosting-logo-FE240680C6-seeklogo.com.png", cashback: "$30 Cashback", glow: "from-emerald-500" },
        { name: "GoDaddy", logo: "https://seeklogo.com/images/G/godaddy-logo-A4098741E4-seeklogo.com.png", cashback: "$22 Cashback", glow: "from-yellow-400" },
      ].map((host, idx) => (
        <div
          key={idx}
          className={`relative bg-gradient-to-br ${host.glow} via-transparent to-gray-900/50 rounded-3xl p-1.5 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 cursor-pointer`}
        >
          <div className="bg-gray-900/80 backdrop-blur-2xl rounded-3xl p-6 text-center border border-gray-700 hover:border-indigo-500 transition">
            <img
              src={host.logo}
              alt={host.name}
              className="w-28 h-20 object-contain mx-auto mb-4 drop-shadow-lg group-hover:scale-105 transition-transform"
            />
            <h3 className="text-lg font-bold mb-1">{host.name}</h3>
            <p className="text-green-400 font-semibold mb-4">{host.cashback}</p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2.5 rounded-full font-semibold text-sm text-white hover:scale-105 transition-transform">
              Claim Offer
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Call to Action */}
    <div className="mt-24 text-center">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-10 py-12 rounded-3xl shadow-2xl inline-block max-w-3xl">
        <h3 className="text-3xl font-extrabold mb-3">Start Earning with Hosting Affiliates 🚀</h3>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Unlock the highest cashback rates and boost your affiliate income by promoting top hosting platforms today. 
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition shadow-md">
          Join Affiliate Program
        </button>
      </div>
    </div>

  </div>
</section>



 {/* Stats Section */}
          <section className="py-16 stats-gradient text-white mt-10 ml-9 mr-9 rounded-xl">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold mb-2">500K+</p>
                  <p className="opacity-90">Active Coupons</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">30K+</p>
                  <p className="opacity-90">Stores</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">$250M+</p>
                  <p className="opacity-90">Total Savings</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">2M+</p>
                  <p className="opacity-90">Happy Shoppers</p>
                </div>
              </div>
            </div>
          </section>


{/* subscribe */}
<section className=" mb-10 relative bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 py-24 px-6 md:px-16 rounded-3xl mx-4 md:mx-10 mt-10 overflow-hidden shadow-2xl">
  {/* Floating Blobs for Depth */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-pink-400 opacity-25 blur-3xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 opacity-20 blur-3xl rounded-full animate-pulse"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">

    {/* Left: CTA Content */}
    <div className="lg:w-1/2 text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
        Unlock The Best Hosting & Cashback Deals!
      </h1>
      <p className="text-lg text-gray-100 opacity-95 leading-relaxed mb-8">
        Subscribe to get early access to exclusive affiliate promotions, coupons, and limited-time hosting offers direct to your inbox.
      </p>

      {/* Email Input and Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="w-full sm:flex-grow">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3.5 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-4 focus:ring-pink-300 transition"
          />
        </div>
        <button className="px-8 py-3.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition">
          Subscribe Now
        </button>
      </div>

      {/* Trust Indicator */}
      <p className="text-sm text-gray-200 mt-5">
        🔒 We respect your privacy — unsubscribe anytime.
      </p>
    </div>

    {/* Right: Illustration */}
    <div className="lg:w-1/2 relative flex justify-center">
      <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/20 hover:scale-105 transition-transform">
        <img
          src={coupon}
          alt="Exclusive Deals"
          className="w-80 h-80 object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.3)]"
        />

        {/* Floating Discount Tag */}
        <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-5 py-3 rounded-full text-lg shadow-lg rotate-12">
          70% OFF
        </div>
      </div>
    </div>
  </div>
</section>



        </main>
      </div>

      {/* <Popup/> */}

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

        body {
          font-family: "Inter", sans-serif;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #f0f9ff 0%, #fce7ff 100%);
        }

        .deal-card {
          transition: all 0.3s ease;
        }

        .deal-card:hover {
          transform: translateY(-5px);
        }

        .category-icon {
          background: linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%);
        }

        .trending-badge {
          background: linear-gradient(90deg, #fef3c7, #fde68a);
          color: #92400e;
        }

        .stats-gradient {
          background: linear-gradient(135deg, #0ea5e9 0%, #7dd3fc 100%);
        }

        .floating {
          animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
          0% {
            transform: translate(0, 0px);
          }
          50% {
            transform: translate(0, 10px);
          }
          100% {
            transform: translate(0, -0px);
          }
        }

        .pulse-soft {
          animation: pulse-soft 2s infinite;
        }

        @keyframes pulse-soft {
          0% {
            box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.2);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(14, 165, 233, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(14, 165, 233, 0);
          }
        }
      `}</style>
    </>
  );
}

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
      offers: "Up to 80% off | Extra 15% off with FASHION15",
      deals: "Get Deal",
      store: "Myntra",
      cashback: "7% Cashback",
      inactiveOffers: "25 offers available",
      logo: "https://img.icons8.com/ios-filled/50/000000/t-shirt--v1.png",
      active: "30 Offers",
      rating: "4.6",
    },
    {
      id: 2,
      title: "Fashion",
      offers: "Flat 50% off | Extra ₹500 on orders above ₹2999",
      deals: "Get Deal",
      store: "Ajio",
      cashback: "10% Cashback",
      inactiveOffers: "20 offers available",
      logo: "https://img.icons8.com/ios-filled/50/000000/shirt.png",
      active: "18 Offers",
      rating: "4.4",
    },
    {
      id: 3,
      title: "Fashion",
      offers: "Buy 1 Get 1 Free | Exclusive on Footwear",
      deals: "Get Deal",
      store: "Puma",
      cashback: "6% Cashback",
      inactiveOffers: "10 offers available",
      logo: "https://img.icons8.com/ios-filled/50/000000/sneakers.png",
      active: "22 Offers",
      rating: "4.5",
    },
  ],

  "Mobiles & Tablets": [
    {
      id: 4,
      title: "Mobiles & Tablets",
      offers: "Up to ₹10,000 off on iPhones | No Cost EMI",
      deals: "Get Deal",
      store: "Apple Store",
      cashback: "5% Cashback",
      inactiveOffers: "12 offers available",
      logo: "https://img.icons8.com/ios-filled/50/000000/smartphone-tablet.png",
      active: "15 Offers",
      rating: "4.7",
    },
    {
      id: 5,
      title: "Mobiles & Tablets",
      offers: "Up to 60% off on Samsung Mobiles | Extra 5% with HDFC Cards",
      deals: "Get Deal",
      store: "Samsung Store",
      cashback: "8% Cashback",
      inactiveOffers: "18 offers available",
      logo: "https://img.icons8.com/ios-filled/50/000000/android.png",
      active: "25 Offers",
      rating: "4.3",
    },
  ],

  Electronics: [
    {
      id: 6,
      title: "Electronics",
      offers: "Up to 70% off on Laptops & Accessories",
      deals: "Get Deal",
      store: "Croma",
      cashback: "6% Cashback",
      inactiveOffers: "14 offers available",
      logo: "https://img.icons8.com/ios-filled/50/000000/laptop.png",
      active: "20 Offers",
      rating: "4.5",
    },
    {
      id: 7,
      title: "Electronics",
      offers: "Flat 25% off on Smart TVs | Free Installation",
      deals: "Get Deal",
      store: "Reliance Digital",
      cashback: "7% Cashback",
      inactiveOffers: "10 offers available",
      logo: "https://img.icons8.com/ios-filled/50/000000/tv.png",
      active: "17 Offers",
      rating: "4.4",
    },
  ],

  Travel: [
    {
      id: 8,
      title: "Travel",
      offers: "Up to 40% off on Flights | Extra ₹1200 Cashback",
      deals: "Get Deal",
      store: "MakeMyTrip",
      cashback: "5% Cashback",
      inactiveOffers: "8 offers available",
      logo: "https://img.icons8.com/ios-filled/50/000000/airport.png",
      active: "16 Offers",
      rating: "4.6",
    },
    {
      id: 9,
      title: "Travel",
      offers: "Up to 50% off on Hotel Bookings | Free Breakfast",
      deals: "Get Deal",
      store: "Booking.com",
      cashback: "6% Cashback",
      inactiveOffers: "9 offers available",
      logo: "https://img.icons8.com/ios-filled/50/000000/hotel-bed.png",
      active: "20 Offers",
      rating: "4.5",
    },
  ],

  Beauty: [
    {
      id: 10,
      title: "Beauty",
      offers: "Flat 30% off | Extra 10% with NYKAA10",
      deals: "Get Deal",
      store: "Nykaa",
      cashback: "5% Cashback",
      inactiveOffers: "15 offers available",
      logo: "https://img.icons8.com/ios-filled/50/000000/lipstick.png",
      active: "18 Offers",
      rating: "4.4",
    },
    {
      id: 11,
      title: "Beauty",
      offers: "Buy 2 Get 1 Free on Skincare Essentials",
      deals: "Get Deal",
      store: "Mamaearth",
      cashback: "8% Cashback",
      inactiveOffers: "10 offers available",
      logo: "https://img.icons8.com/ios-filled/50/000000/beauty-products.png",
      active: "14 Offers",
      rating: "4.3",
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
       <section className="relative bg-gradient-to-r from-primary-600 via-purple-600 to-accent-500 py-20 overflow-hidden">
  {/* Background Decorations */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-ping"></div>
  </div>

  {/* MAIN CONTENT */}
  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          Trusted by 2M+ smart shoppers
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Unlock <span className="text-yellow-300">Exclusive Deals</span> <br />
          & Save <span className="text-pink-300">More Every Day</span>
        </h1>

        <p className="text-lg text-gray-100 mb-8 max-w-xl mx-auto lg:mx-0">
          Find verified coupons, cashback offers, and trending discounts from
          over <span className="font-semibold text-white">30,000+ stores</span>.
          Shop smarter, save faster!
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold flex items-center justify-center shadow-md transition-all hover:scale-105">
            <i className="fas fa-fire mr-2 text-lg text-yellow-500"></i>
            Explore Top Deals
          </button>
          <button className="bg-transparent border border-white/70 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center hover:bg-white/10 transition-all">
            <i className="fas fa-play-circle mr-2"></i>
            Watch Demo
          </button>
        </div>

        {/* STATS */}
        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8 text-white/90">
          <div>
            <p className="text-3xl font-bold text-white">500K+</p>
            <p className="text-sm">Active Coupons</p>
          </div>
          <div className="h-12 w-px bg-white/40"></div>
          <div>
            <p className="text-3xl font-bold text-white">30K+</p>
            <p className="text-sm">Partner Stores</p>
          </div>
          <div className="h-12 w-px bg-white/40"></div>
          <div>
            <p className="text-3xl font-bold text-white">2M+</p>
            <p className="text-sm">Happy Shoppers</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE CARD */}
      <div className="lg:w-1/2 relative">
        {/* Main Coupon Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto transform hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                <i className="fas fa-gift text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Limited Time Offer
                </h3>
                <p className="text-gray-500 text-sm">
                  Extra 20% off on Electronics
                </p>
              </div>
            </div>
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 text-xs rounded-full font-semibold">
              HOT
            </span>
          </div>

          <div className="bg-gray-100 rounded-xl p-5 mb-5 flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Use code</p>
              <p className="font-mono text-xl font-bold text-gray-800">
                SAVE20
              </p>
            </div>
            <button className="bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-600 transition-all">
              Copy
            </button>
          </div>

          <div className="flex items-center text-gray-500 text-sm">
            <i className="far fa-clock mr-1"></i> Expires in
            <span className="font-semibold ml-1">1 day</span>
            <span className="mx-2">•</span>
            <i className="far fa-check-circle mr-1 text-green-500"></i> Verified
            just now
          </div>
        </div>

        {/* Floating Mini Cards */}
        <div className="absolute -top-8 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center space-x-3 animate-bounce">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
            <i className="fas fa-wallet text-white"></i>
          </div>
          <div>
            <p className="font-medium text-gray-800">Cashback</p>
            <p className="text-xs text-gray-500">Up to 10% back</p>
          </div>
        </div>

        <div className="absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center space-x-3 animate-float">
          <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
            <i className="fas fa-truck-fast text-white"></i>
          </div>
          <div>
            <p className="font-medium text-gray-800">Free Shipping</p>
            <p className="text-xs text-gray-500">On all orders</p>
          </div>
        </div>
      </div>
    </div>

    {/* ADDITIONAL FEATURED COUPONS SECTION */}
    <div className="mt-20">
      <h2 className="text-center text-3xl font-bold text-white mb-10">
        🔥 Featured Coupons & Trending Offers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { store: "Amazon", code: "AMZ15", offer: "15% off Fashion" },
          { store: "Flipkart", code: "FLIP10", offer: "Extra 10% off Electronics" },
          { store: "Myntra", code: "STYLE20", offer: "Flat 20% off Clothing" },
        ].map((coupon, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {coupon.store}
            </h3>
            <p className="text-gray-500 mb-3">{coupon.offer}</p>
            <div className="flex justify-between items-center">
              <span className="font-mono font-semibold text-gray-900">
                {coupon.code}
              </span>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded-lg text-sm">
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* TRUST BADGES */}
    <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
      <div className="flex items-center gap-2">
        <i className="fas fa-lock text-yellow-300"></i> Secure Payments
      </div>

      <div className="flex items-center gap-2">
        <i className="fas fa-headset text-pink-300"></i> 24/7 Support
      </div>
      <div className="flex items-center gap-2">
        <i className="fas fa-award text-blue-300"></i> Verified Sellers
      </div>
    </div>
  </div>
</section>


          {/* login details */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
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
                    <span className="text-white font-semibold text-lg">2</span>
                  </div>

                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                      alt="Cashback Earned"
                      className="w-10 h-10"
                    />
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
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

                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
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
       <section className="ml-9 mr-9 rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-8 relative overflow-hidden shadow-2xl">
  {/* Emergency/Sale Style Banner */}
  <div className="relative p-8">
    {/* Animated Border */}
    <div className="absolute inset-0 border-2 border-white/30 rounded-xl animate-pulse"></div>
    
    {/* Flashing Alert */}
    <div className="absolute -top-2 -left-2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-bounce">
      🔥 HOT DEAL
    </div>
    
    <div className="flex flex-col lg:flex-row items-center justify-between">
      {/* Main Offer */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-5xl font-black mb-4 drop-shadow-lg">
          FLASH SALE!
        </h1>
        <p className="text-2xl font-bold mb-2">
          Everything must go - Prices slashed!
        </p>
        <p className="text-lg opacity-90 mb-6">
          Don't miss out on these incredible limited-time offers
        </p>
        
        {/* Countdown Timer */}
        <div className="flex justify-center lg:justify-start space-x-4 mb-6">
          {[
            { label: 'HRS', value: '24' },
            { label: 'MIN', value: '59' },
            { label: 'SEC', value: '59' }
          ].map((item, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-3 text-center min-w-16">
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-xs opacity-80">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/40">
          <div className="text-4xl font-black text-yellow-300 mb-2 drop-shadow-lg">
            70% OFF
          </div>
          <div className="text-sm mb-4 font-medium">
            Use code: <span className="bg-white text-red-600 px-2 py-1 rounded font-bold">FLASH2024</span>
          </div>
          <button className="bg-white text-red-600 font-black py-4 px-12 rounded-xl text-lg hover:bg-yellow-100 transition-all duration-300 transform hover:scale-110 shadow-2xl border-2 border-yellow-300">
            SHOP NOW 🚀
          </button>
        </div>
      </div>
    </div>
  </div>
  
  {/* Scrolling Text */}
  <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-3 overflow-hidden shadow-md">
      <marquee 
        behavior="scroll"
    direction="left"
    scrollamount="6"
    className="text-white font-medium tracking-wide rounded-lg"
      >
          <span className="mx-8">⭐ Free shipping on all orders • ⭐ 30-day money-back guarantee • ⭐ 24/7 customer support • ⭐ Limited stock available • </span>
          <span className="mx-8">⭐ Free shipping on all orders • ⭐ 30-day money-back guarantee • ⭐ 24/7 customer support • ⭐ Limited stock available • </span>
      </marquee>
    </div>
</section>


          {/* {categories} */}
         <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Left Side - Categories */}
    <div className="lg:w-1/4 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-500">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800 flex items-center">
        <svg
          className="w-7 h-7 mr-3 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        Categories
      </h2>

      <div className="space-y-3">
        {Object.keys(data).map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center space-x-4 cursor-pointer rounded-xl p-4 transition-all duration-300 border-l-4 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-600 text-blue-700 shadow-sm"
                : "hover:bg-gray-100 border-transparent text-gray-700"
            }`}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
    <div className="lg:w-3/4 space-y-10">
      {/* Offers Section */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200 transition-all duration-500 hover:shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-blue-700">
               Offers
            </h2>
            <p className="text-gray-500 mt-1">
              Unlock the best deals curated for you
            </p>
          </div>
          <button className="mt-4 sm:mt-0 flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300 group">
            Show More
            <svg
              className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedData.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-72"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="w-14 h-14 rounded-xl object-cover border border-gray-200"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">
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
                    <span className="text-sm text-gray-600">
                      4.5 • 2.1k reviews
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 font-semibold mb-3">{item.offers}</p>
              <div className="flex items-center mb-4">
                <svg
                  className="w-5 h-5 text-green-600 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  ></path>
                </svg>
                <p className="text-green-600 font-bold">{item.cashback}</p>
              </div>

              <button
                onClick={() => setShowPopup(true)}
                className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:scale-105 transition duration-300 shadow-md"
              >
                {item.type === "Code" ? "Show Code" : "View Deal"}
              </button>
            </div>
          ))}
        </div>
        {showPopup && <DealsCoupon onClose={() => setShowPopup(false)} />}
      </div>

      {/* Stores Section */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-500">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-blue-500">
              Stores
            </h2>
            <p className="text-gray-500 mt-1">
              Discover popular and trusted stores
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-2">
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-all duration-200">
              Filter
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-md transition-all duration-200">
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOffers(item)}
              className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <span className="absolute top-3 right-3 text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                {item.active}
              </span>

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
              <div className="flex justify-between items-center">
                <p className="text-gray-600">{item.inactiveOffers}</p>
                <button className="text-blue-600 hover:text-indigo-700 font-medium text-sm flex items-center">
                  Visit
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
          { name: "AJIO", logo: "https://logores.yrucd.com/wp-content/uploads/2022/07/Ajio_logo_PNG5.png!a", rewards: "Upto 12.8%", rating: "4.7" },
          { name: "Myntra", logo: "data:image/webp;base64,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", rewards: "Upto 6.7%", rating: "4.5" },
          { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg", rewards: "Flat 4.5%", rating: "4.4" },
          { name: "Klook", logo: "data:image/webp;base64,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", rewards: "Upto 3.5%", rating: "4.3" },
          { name: "Jupiter", logo: "data:image/webp;base64,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", rewards: "Upto 5.6%", rating: "4.6" },
          { name: "Samsung", logo: "data:image/webp;base64,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", rewards: "Upto 2.5%", rating: "4.5" },
          { name: "Croma", logo: "https://tse4.mm.bing.net/th/id/OIP.P-wvsszNzy1HkOK6Bn24NAHaBp?w=349&h=78&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", rewards: "Upto 3%", rating: "4.2" },
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
<section className="w-full py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800">🌐 Web Hosting Offers</h2>
      <p className="text-gray-600 mt-2">
        Get exclusive cashback offers from trusted hosting partners.
      </p>
    </div>

    {/* Card Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
     {[
        { name: "Hostinger", logo: "data:image/webp;base64,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", cashback: "$45 Cashback", glow: "from-purple-500" },
        { name: "Bluehost", logo: "data:image/webp;base64,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", cashback: "$35 Cashback", glow: "from-blue-500" },
        { name: "SiteGround", logo: "data:image/webp;base64,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", cashback: "$25 Cashback", glow: "from-green-500" },
        { name: "A2 Hosting", logo: "data:image/webp;base64,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", cashback: "$30 Cashback", glow: "from-emerald-500" },
        // { name: "GoDaddy", logo: "data:image/webp;base64,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", cashback: "$22 Cashback", glow: "from-yellow-400" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 text-center"
        >
          <img
            src={item.logo}
            alt={item.name}
            className="h-14 mx-auto mb-4 object-contain"
          />
          <h3 className="font-semibold text-xl text-gray-800 mb-2">{item.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {item.cashback}
          </span>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        View All Offers →
      </button>
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
<section className="relative bg-gradient-to-br from-[#ffffff] via-[#f5f7fa] to-[#e6ebff] py-24 px-6 md:px-16 rounded-3xl mx-4 md:mx-10 mt-10 overflow-hidden shadow-xl mb-8">
  {/* Floating Background Glow Elements */}
  <div className="absolute -top-20 -left-24 w-80 h-80 bg-blue-300/40 blur-[120px] rounded-full animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-300/40 blur-[150px] rounded-full animate-pulse"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
    {/* Right Side: Image / Illustration */}
    <div className="lg:w-1/2 flex justify-center relative">
      <div className="relative bg-white border border-gray-100 rounded-3xl p-10 shadow-2xl backdrop-blur-lg hover:scale-105 transition-transform duration-500">
        <img
          src={coupon}
          alt="Exclusive Deals"
          className="w-72 h-72 object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
        />
        {/* Floating Offer Badge */}
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold px-5 py-2 rounded-full text-sm shadow-lg rotate-12">
          🔥 Save 70%
        </div>
      </div>
    </div>

    {/* Left Side: Text Content */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <h2 className="text-5xl md:text-6xl font-extrabold leading-snug mb-6 text-gray-900">
        Unlock{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400">
          Smarter Savings
        </span>{" "}
        with Every Purchase!
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Discover verified coupons, exclusive cashback rewards, and daily
        discounts from 30,000+ trusted brands. Join millions of smart shoppers
        saving big every day.
      </p>

      {/* Email Input + Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full sm:w-auto flex-1 px-5 py-3.5 rounded-xl text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
        />
        <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-indigo-400/40 transition">
          Get Started
        </button>
      </div>

      {/* Trust Line */}
      <div className="flex items-center justify-center lg:justify-start gap-3 mt-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
          alt="Verified"
          className="w-6 h-6"
        />
        <p className="text-sm text-gray-500">
          Trusted by 2M+ happy users • 100% secure and private
        </p>
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

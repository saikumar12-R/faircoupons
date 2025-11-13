// pages/index.js (or components/HomePage.js)
import { act, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import coupon from "../../assets/coupon.png";
import DealsCoupon from "./DealsCoupons";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";


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

  const navigate = useNavigate();

  const selectedData = data[selectedCategory];

  const handleClick = () => {
    navigate("/stores");
  };

  const handleOffers = (item) => {
    const offerData = {
      logo: item.logo,
      store: item.store,
      active: item.active,
      rating: item.rating,
      inactiveOffers: item.inactiveOffers,
    };

    navigate("/offers", { state: offerData });
    console.log(offerData, "navigated state");
  };

  const handleStore = (storeData) => {
    navigate("/homestores", { state: storeData });
  };

  const handleBanners = () => {
    navigate("/banners");
  };
  const [showPopup, setShowPopup] = useState(false);

  const handleCashback = (item) => {
    const Offers = {
      name: item.name,
      heading: item.heading,
      logo: item.logo,
      cashback: item.cashback,
    };

    navigate(`/cashback/${item.name}`, { state: Offers });
    console.log(Offers);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How do I create an account?",
      a: "Click on the Sign Up button, fill in your details, and verify your email to get started instantly.",
    },
    {
      q: "Can I change my registered email?",
      a: "Yes, you can update your email from the profile settings anytime after logging in.",
    },
    {
      q: "What if I forget my password?",
      a: "Use the 'Forgot Password' link on the login page to reset it through your registered email.",
    },
    {
      q: "Is my personal data secure?",
      a: "Absolutely! We use advanced encryption to ensure your data is completely protected.",
    },
    {
      q: "How can I contact support?",
      a: "You can reach our support team via the Contact Us page or email us directly.",
    },
    {
      q: "Do you offer refunds?",
      a: "Refunds are processed according to our policy, which can be viewed on our Terms & Conditions page.",
    },
  ];

  const [popup, setPopup] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [hidden, setHidden] = useState(true);
  const [copied, setCopied] = useState(false);

  const handlePopup = (couponCode) => {
    setSelectedCoupon(couponCode);
    setPopup(true);
   navigator.clipboard.writeText(couponCode);
  };

  // Copy code logic
  const handleCopy = () => {
    navigator.clipboard.writeText(selectedCoupon);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Toggle when clicking coupon text (optional)
  const handleHidden = () => {
    setHidden(!hidden);
  };

  const BannerOffers=()=>{
    navigate('/banners');
  }

  const [code,setCode]=useState(false);
  const handleCode=(coupon)=>{
    navigator.clipboard.writeText(coupon.code)
    setCode((prev)=>!prev);
  }

  const [dealsItem,setDealsItem]=useState(null);
  const handleDeals=(item)=>{
    setShowPopup(true);
    setDealsItem(item);
  }
  console.log(dealsItem,"deals item here");



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
                    Unlock{" "}
                    <span className="text-yellow-300">Exclusive Deals</span>{" "}
                    <br />& Save{" "}
                    <span className="text-pink-300">More Every Day</span>
                  </h1>

                  <p className="text-lg text-gray-100 mb-8 max-w-xl mx-auto lg:mx-0">
                    Find verified coupons, cashback offers, and trending
                    discounts from over{" "}
                    <span className="font-semibold text-white">
                      30,000+ stores
                    </span>
                    . Shop smarter, save faster!
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
                      <i className="far fa-check-circle mr-1 text-green-500"></i>{" "}
                      Verified just now
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
   <div className="relative w-full overflow-hidden py-16">
  <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-10 drop-shadow-lg">
    🔥 Featured Coupons & Hot Offers
  </h2>

  <div className="relative w-full overflow-hidden">
    {/* Auto-scroll container */}
    <div className="flex gap-8 animate-scroll px-6">
      {[
        { store: "Amazon", code: "AMZ15", offer: "15% off Fashion" },
        { store: "Flipkart", code: "FLIP10", offer: "Extra 10% off Electronics" },
        { store: "Myntra", code: "STYLE20", offer: "Flat 20% off Clothing" },
        { store: "Ajio", code: "AJIO25", offer: "25% off on Shoes" },
        { store: "Nykaa", code: "BEAUTY30", offer: "30% off Beauty Products" },
      ].map((coupon, i) => (
        <div
          key={i}
          className="bg-white/95 backdrop-blur-md border border-gray-200 min-w-[260px] rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex-shrink-0 relative overflow-hidden"
        >
          {/* Decorative gradient blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-100 to-transparent opacity-40"></div>

          {/* Store name & offer */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{coupon.store}</h3>
            <p className="text-gray-500 mb-4 text-sm">{coupon.offer}</p>

            {/* Coupon code box */}
            <div className="flex justify-between items-center bg-gray-100 border border-dashed border-gray-300 px-4 py-2 rounded-xl shadow-inner">
              <span className="font-mono font-semibold text-gray-900">{coupon.code}</span>
              <button
              onClick={()=>handleCode(coupon.code)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm"
              >
                {code ? "copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Scroll Animation */}
  <style>{`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      display: flex;
      width: max-content;
      animation: scroll 25s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused; /* pause on hover */
    }
  `}</style>
</div>


              {/* TRUST BADGES */}
              <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <i className="fas fa-lock text-yellow-300"></i> Secure
                  Payments
                </div>

                <div className="flex items-center gap-2">
                  <i className="fas fa-headset text-pink-300"></i> 24/7 Support
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-award text-blue-300"></i> Verified
                  Sellers
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
          <section className="mx-9 my-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-10 px-6 relative overflow-hidden shadow-2xl">
            {/* Floating Orbs for Effect */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left Section */}
              <div className="flex-1 text-center lg:text-left">
                {/* Hot Badge */}
                <div className="inline-block bg-yellow-400 text-black font-extrabold px-4 py-1 rounded-full text-sm mb-4 shadow-lg animate-bounce">
                  🔥 Limited Time Mega Offer
                </div>

                {/* Main Heading */}
                <h1 onClick={BannerOffers} className="cursor-pointer text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                  Flipkart <span className="text-yellow-300">Mega Sale</span> is
                  Live!
                </h1>

                {/* Subheading */}
                <p className="text-xl opacity-90 mb-6 font-medium">
                  Grab your favorites before they're gone. Discounts up to{" "}
                  <span className="font-bold text-yellow-300">70% OFF</span> 🎉
                </p>

                {/* Countdown Timer */}
                <div className="flex justify-center lg:justify-start space-x-5 mb-8">
                  {[
                    { label: "HOURS", value: "12" },
                    { label: "MINUTES", value: "47" },
                    { label: "SECONDS", value: "22" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/20 backdrop-blur-md rounded-lg p-4 text-center min-w-[80px] border border-white/40 shadow-md"
                    >
                      <div className="text-3xl font-bold text-yellow-300">
                        {item.value}
                      </div>
                      <div className="text-xs opacity-80 font-semibold">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="bg-yellow-400 text-black font-extrabold py-4 px-10 rounded-xl text-lg shadow-lg hover:scale-110 hover:bg-yellow-300 transition-transform duration-300">
                  Shop Now 🚀
                </button>
              </div>

              {/* Right Offer Section */}
              <div className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl border border-white/40 text-center shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-black text-yellow-300 drop-shadow-lg mb-4">
                  70% OFF
                </div>
                <p className="text-lg font-medium mb-4">
                  Use Code:
                  <span className="bg-white text-indigo-600 px-3 py-1 ml-2 rounded font-bold">
                    MEGA2025
                  </span>
                </p>
                <p className="text-sm opacity-90 italic">
                  Valid till midnight ⏰ — Don’t miss out!
                </p>
              </div>
            </div>

            {/* Scrolling Offers Text */}
            <div className="mt-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 py-3 overflow-hidden shadow-lg rounded-xl">
              <marquee
                behavior="scroll"
                direction="left"
                scrollamount="7"
                className="text-black font-semibold tracking-wide"
              >
                💥 Free Delivery on All Orders • ⚡ Extra 10% OFF with HDFC
                Cards • 🎁 Free Gift on Orders Above ₹999 • ⏰ Hurry — Limited
                Stock Only!
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
              <div className="lg:w-3/4 space-y-10 ">
                {/* Offers Section */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200 transition-all duration-500 hover:shadow-2xl border-t-red-600 pt-10 border-t-4">
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
                        className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-72 hover:bg-blue-100"
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

                        <p className="text-gray-700 font-semibold mb-3">
                          {item.offers}
                        </p>
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
                          <p className="text-green-600 font-bold">
                            {item.cashback}
                          </p>
                        </div>

                        <button
                          // onClick={() => setShowPopup(true)}
                          onClick={()=>handleDeals(item)}
                          className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:scale-105 transition duration-300 shadow-md"
                        >
                          {item.type === "Code" ? "Show Code" : "View Deal"}
                        </button>
                      </div>
                    ))}
                  </div>
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
                        className="relative group bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:bg-blue-900 hover:text-white"
                      >
                        <span className="absolute top-3 right-3 text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full flex items-center group-hover:bg-green-700 group-hover:text-white transition-all">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1 group-hover:bg-white"></span>
                          {item.active}
                        </span>

                        <div className="flex items-center mb-4">
                          <img
                            src={item.logo}
                            alt={item.store}
                            className="w-12 h-12 rounded-xl object-cover border border-gray-200 mr-3 group-hover:border-white"
                          />
                          <div>
                            <h3 className="font-bold text-lg text-gray-800 group-hover:text-white transition-all">
                              {item.store}
                            </h3>
                            <div className="flex items-center mt-1">
                              <svg
                                className="w-4 h-4 text-yellow-400 mr-1 group-hover:text-yellow-300 transition-all"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <span className="text-sm text-gray-600 group-hover:text-white transition-all">
                                {item.rating}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <p className="text-gray-600 group-hover:text-white transition-all">
                            {item.inactiveOffers}
                          </p>
                          <button className="text-blue-600 hover:text-blue-300 font-medium text-sm flex items-center transition-all group-hover:text-white">
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

           {showPopup && (
                    <DealsCoupon onClose={() => setShowPopup(false)} data={dealsItem}/>
                  )}

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
                          <p
                            className="font-mono font-bold text-lg cursor-pointer"
                            onClick={handleHidden}
                          >
                            {hidden ? "XXXXXX" : "Flip2130"}
                          </p>
                        </div>
                        <button
                          onClick={() => handlePopup("Flip2130")}
                          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors pulse-soft"
                        >
                          Show Code
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <MdPeopleAlt />
                        <span>Total View</span>
                      </div>
                      <div className="flex items-center">
                        <i className="far fa-clock mr-1"></i>
                        <span>Last Used</span>
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
                          <p className="text-gray-500 text-sm">Use code</p>
                          <p
                            className="font-mono font-bold text-lg cursor-pointer"
                            onClick={handleHidden}
                          >
                            {hidden ? "XXXXXX" : "World123"}
                          </p>
                        </div>
                        <button
                          onClick={() => handlePopup("World123")}
                          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors pulse-soft"
                        >
                          Show Code
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <MdPeopleAlt />
                        <span>Total View</span>
                      </div>
                      <div className="flex items-center">
                        <i className="far fa-clock mr-1"></i>
                        <span>Last Used</span>
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
                          <p
                            className="font-mono font-bold text-lg cursor-pointer"
                            onClick={handleHidden}
                          >
                            {hidden ? "XXXXXX" : "Amaz120"}
                          </p>
                        </div>
                        <button
                          onClick={() => handlePopup("Amaz120")}
                          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors pulse-soft"
                        >
                          Show Code
                        </button>
                      </div>
                    </div>

                   <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <MdPeopleAlt />
                        <span>Total View</span>
                      </div>
                      <div className="flex items-center">
                        <i className="far fa-clock mr-1"></i>
                        <span>Last Used</span>
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
                  onClick={() =>
                    handleStore({
                      name: "Amazon",
                      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                      rewards: "Upto 6.5%",
                      rating: "4.8",
                    })
                  }
                  className="lg:col-span-1 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl shadow-xl p-10 text-center flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon"
                    className="w-40 h-20 object-contain mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Amazon
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">⭐ 4.8 Rating</p>
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md">
                    Upto 6.5% Rewards
                  </span>
                </div>

                {/* Other Stores */}
                <div className="lg:col-span-2 xl:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                  {[
                    {
                      name: "Flipkart",
                      logo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
                      rewards: "Upto 7%",
                      rating: "4.6",
                    },
                    {
                      name: "AJIO",
                      logo: "https://logores.yrucd.com/wp-content/uploads/2022/07/Ajio_logo_PNG5.png!a",
                      rewards: "Upto 12.8%",
                      rating: "4.7",
                    },
                    {
                      name: "Myntra",
                      logo: "data:image/webp;base64,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",
                      rewards: "Upto 6.7%",
                      rating: "4.5",
                    },
                    {
                      name: "Dell",
                      logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
                      rewards: "Flat 4.5%",
                      rating: "4.4",
                    },
                    {
                      name: "Klook",
                      logo: "data:image/webp;base64,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",
                      rewards: "Upto 3.5%",
                      rating: "4.3",
                    },
                    {
                      name: "Jupiter",
                      logo: "data:image/webp;base64,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",
                      rewards: "Upto 5.6%",
                      rating: "4.6",
                    },
                    {
                      name: "Samsung",
                      logo: "data:image/webp;base64,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",
                      rewards: "Upto 2.5%",
                      rating: "4.5",
                    },
                    {
                      name: "Croma",
                      logo: "https://tse4.mm.bing.net/th/id/OIP.P-wvsszNzy1HkOK6Bn24NAHaBp?w=349&h=78&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
                      rewards: "Upto 3%",
                      rating: "4.2",
                    },
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
                      <p className="text-sm text-gray-500 mb-2">
                        ⭐ {store.rating} Rating
                      </p>
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
          <section className="w-full py-20 bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 relative overflow-hidden mt-10 rounded-xl shadow-xl -mr-4">
            {/* Background decorative blur elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

            <div className="relative container mx-auto px-6">
              {/* Heading Section */}
              <div className="text-center mb-14">
                <h2 className="text-5xl font-extrabold text-white drop-shadow-md tracking-wide">
                  💫 Exclusive Web Hosting Deals
                </h2>
                <p className="text-gray-200 mt-4 text-lg">
                  Unlock premium cashback offers from trusted hosting partners
                  worldwide.
                </p>
              </div>

              {/* Offers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {[
                  {
                    name: "DELL Technologies",
                    heading: "Dell India",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
                    cashback: "Flat 4.8% Cashback",
                    glow: "shadow-blue-500/50",
                  },
                  {
                    name: "Malaysia Airlines",
                    heading: "Malaysia Airlines",
                    logo: "https://upload.wikimedia.org/wikipedia/en/8/89/Malaysia_Airlines_Logo.svg",
                    cashback: "Flat 1.4% Cashback",
                    glow: "shadow-indigo-500/50",
                  },
                  {
                    name: "PNG Jewellers",
                    heading: "PNG Jewellers",
                    logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/PNG_Jewellers_Logo.png",
                    cashback: "Flat 3.2% Cashback",
                    glow: "shadow-yellow-500/50",
                  },
                  {
                    name: "Hostinger",
                    heading: "Hostinger India",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Hostinger_logo.svg",
                    cashback: "Flat 5.5% Cashback",
                    glow: "shadow-pink-500/50",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg hover:${item.glow} hover:scale-105 transform transition-all duration-300 text-center`}
                    onClick={() => handleCashback(item)}
                  >
                    <div className="flex justify-center mb-5">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-24 h-24 object-contain rounded-full bg-white/80 p-3 shadow-md"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-1 drop-shadow-sm">
                      {item.heading}
                    </h3>
                    <p className="text-gray-300 mb-3">{item.name}</p>
                    <p className="text-yellow-300 font-medium text-lg">
                      {item.cashback}
                    </p>
                  </div>
                ))}
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
                  Discover verified coupons, exclusive cashback rewards, and
                  daily discounts from 30,000+ trusted brands. Join millions of
                  smart shoppers saving big every day.
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


          {/* questions */}
         <section className="w-full py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
          💬 Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
                openIndex === index ? "bg-blue-50 border-blue-300" : "bg-white"
              }`}
            >
              {/* Question Row */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center px-6 py-4 cursor-pointer"
              >
                <h4
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index ? "text-blue-800" : "text-gray-800"
                  }`}
                >
                  Q) {item.q}
                </h4>
                <div className="text-blue-600">
                  {openIndex === index ? (
                    <FaMinus className="transition-transform transform rotate-180" />
                  ) : (
                    <FaPlus className="transition-transform" />
                  )}
                </div>
              </div>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 px-6 pb-4"
                    : "max-h-0 opacity-0 px-6"
                } overflow-hidden`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
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

      {popup && selectedCoupon && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="relative bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-3xl w-[90%] max-w-lg p-8 animate-fadeIn">
            <button
              onClick={() => setPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition text-2xl font-bold"
            >
              ×
            </button>
        {selectedCoupon && (
<div className="bg-green-100 text-green-800 border border-green-300 px-3 py-1.5 rounded-lg text-center mb-4 font-medium animate-pulse shadow-sm text-sm">
          ✅ Coupon code copied successfully!
        </div>
        )}
            

            <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl border border-blue-200 shadow-inner mb-6">
              <span className="text-xl font-extrabold text-blue-700 tracking-wider">
                {selectedCoupon}
              </span>
              <button
                onClick={handleCopy}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
         <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:scale-[1.02]">
          🛍️ Open Store
        </button>

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
      )}

    </>
  );
}

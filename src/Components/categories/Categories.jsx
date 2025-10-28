import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Mobile & Tablets",
      color: "text-red-600",
      items: ["Mobile", "Tablet", "Accessories"],
    },
    {
      title: "Fashion",
      color: "text-red-600",
      items: ["Clothing", "Footwear", "Bags & Accessories"],
    },
    {
      title: "Food",
      color: "text-red-600",
      items: ["Pizza", "Food Delivery", "Grocery"],
    },
    {
      title: "Travel",
      color: "text-red-600",
      items: ["Bus", "Flight", "Train", "Cabs", "Hotel"],
    },
    {
      title: "Other Popular",
      color: "text-black font-semibold",
      items: ["Mobile Recharge", "Movie Tickets", "Nutrition"],
    },
    {
      title: "Other Categories",
      color: "text-black font-semibold",
      items: [
        "TV, Audio/Video & Movies",
        "Beauty & Health",
        "Miscellaneous",
        "Computers, Laptops & Gaming",
        "Appliances",
        "Home Furnishing & Decor",
        "Flowers, Gifts & Jewellery",
        "Books & Stationery",
        "Kids, Babies & Toys",
        "Cameras & Accessories",
        "Sports & Fitness",
      ],
    },
  ];

  const handleCategories = (category, item = null) => {
    const data = { title: category.title, selectedItem: item || null };
    navigate("/categoriesstores", { state: data });
    console.log(data, "data is coming");
  };


  return (
    <div className="absolute top-full left-0 mt-2 w-[950px] bg-white shadow-2xl border-t-4 border-blue-500 rounded-lg z-50 p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8" >
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3
              className={`text-lg mb-3 cursor-pointer font-semibold ${cat.color} hover:underline`}
              onClick={() => handleCategories(cat)}
            >
              {cat.title}
            </h3>
            <ul className="space-y-1 pl-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-gray-700 hover:text-blue-600 text-sm cursor-pointer transition-colors"
                  onClick={() => handleCategories(cat, item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-6 pt-3 text-right">
        <button className="text-blue-600 text-sm font-medium hover:underline flex items-center justify-end gap-1 w-full">
          View all Categories <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default Categories;

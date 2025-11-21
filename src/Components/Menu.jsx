
import React, { useState } from "react";

// Mock menu data (you can replace this with API fetch later)
const menuData = {
  Coffee: [
    { id: 1, name: "Espresso", desc: "Rich and bold espresso shot", price: 99, img: "☕", inStock: true },
    { id: 2, name: "Cappuccino", desc: "Creamy cappuccino with foam", price: 128, img: "☕", inStock: true },
    { id: 3, name: "Latte", desc: "Smooth latte with steamed milk", price: 145, img: "☕", inStock: true },
    { id: 4, name: "Mocha", desc: "Chocolate-infused coffee delight", price: 168, img: "☕", inStock: false },
  ],
  Tea: [
    { id: 5, name: "Green Tea", desc: "Fresh organic green tea leaves", price: 25, img: "🍵", inStock: true },
    { id: 6, name: "Chai Latte", desc: "Spiced tea with steamed milk", price: 45, img: "🍵", inStock: true },
  ],
  Pastries: [
    { id: 7, name: "Croissant", desc: "Buttery, flaky French pastry", price: 89, img: "🥐", inStock: true },
    { id: 8, name: "Bagel", desc: "Fresh baked daily bagels", price: 79, img: "🥯", inStock: true },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Coffee");

  return (
    <section className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-amber-900 mb-12 text-center">Our Menu</h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? "bg-amber-900 text-white shadow-lg"
                  : "bg-white text-amber-900 hover:bg-amber-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[activeTab].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow relative"
            >
              {/* Out of stock badge */}
              {!item.inStock && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Out of Stock
                </span>
              )}

              {/* Item icon / image */}
              <div className="w-20 h-20 bg-amber-100 rounded-xl flex items-center justify-center text-4xl mb-4">
                {item.img}
              </div>

              {/* Item details */}
              <h3 className="text-2xl font-semibold text-amber-900 mb-2">{item.name}</h3>
              <p className="text-stone-600 mb-4">{item.desc}</p>

              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-amber-900">{item.price.toFixed(2)}</p>
                <button
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    item.inStock
                      ? "bg-amber-700 text-white hover:bg-amber-800"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                  disabled={!item.inStock}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

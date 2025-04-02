import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Harmony Dining Table",
    category: "dining",
    image: "/sofa.jpg",
    price: "$1,299",
    description: "Elegant dining set for modern homes.",
  },
  {
    id: 2,
    name: "Modern Dining Chairs",
    category: "dining",
    image: "/sofa1.jpg",
    price: "$499",
    description: "Set of 4 contemporary chairs.",
  },
  {
    id: 3,
    name: "ElegantErgo Sofa",
    category: "living",
    image: "/sofa2.jpg",
    price: "$1,599",
    description: "Contemporary living room essential.",
  },
  {
    id: 4,
    name: "Designer Coffee Table",
    category: "living",
    image: "/sofa3.jpg",
    price: "$799",
    description: "Statement piece for your lounge.",
  },
  {
    id: 5,
    name: "ClassicCraft Bedframe",
    category: "bedroom",
    image: "/sofa4.jpg",
    price: "$899",
    description: "Timeless bedroom centerpiece.",
  },
  {
    id: 6,
    name: "Luxury Nightstand",
    category: "bedroom",
    image: "/sofa5.jpg",
    price: "$349",
    description: "Elegant bedroom companion.",
  },
];

const categoryDescriptions = {
  all: "From sleek, modern designs that exude contemporary elegance to timeless classics that evoke warmth and nostalgia, our curated selection has something for every taste and lifestyle.",
  dining:
    "Discover our exquisite dining collection featuring handcrafted tables and chairs designed to elevate your dining experience with perfect harmony of form and function.",
  living:
    "Explore our living room essentials that combine comfort and style, creating inviting spaces for relaxation and entertainment with premium materials and craftsmanship.",
  bedroom:
    "Transform your bedroom into a sanctuary with our carefully curated collection of beds, nightstands, and dressers designed for restful sleep and elegant storage.",
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[80%] mx-auto px-4 py-20"
    >
      {/* Top Section */}
      <div className="grid grid-cols-1  mt-10 md:grid-cols-2 gap-8 md:gap-16 mb-16">
        {/* Left Column */}
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Store
          </motion.h1>

          <div className="space-y-4">
            {["all", "dining", "living", "bedroom"].map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                onClick={() => setSelectedCategory(category)}
                className={`block text-2xl text-left ${
                  selectedCategory === category
                    ? "font-bold underline text-black"
                    : "font-medium text-gray-600"
                } transition-all duration-300 hover:text-black`}
              >
                {category === "all"
                  ? "All Products"
                  : category === "dining"
                  ? "Dining"
                  : category === "living"
                  ? "Living"
                  : "Bedroom"}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-base text-gray-600 leading-relaxed"
        >
          <p>{categoryDescriptions[selectedCategory]}</p>
        </motion.div>
      </div>

      {/* Product Grid */}
      <AnimatePresence>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              layout
              className="group"
            >
              <Link
                to={`/product/${product.id}`}
                className="block border border-gray-200 p-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-500 mb-2">
                    {product.category.charAt(0).toUpperCase() +
                      product.category.slice(1)}
                  </p>
                  <p className="text-lg font-medium">{product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Shop;

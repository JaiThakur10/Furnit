import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const products = [
    {
      name: "Harmony Dining Table Set",
      category: "Dining Room",
      image: "/sofa5.jpg",
      price: "$1,299",
      id: "harmony-dining-table",
    },
    {
      name: "ClassicCraft Bedframe",
      category: "Bedroom",
      image: "/sofa2.jpg",
      price: "$899",
      id: "classiccraft-bedframe",
    },
    {
      name: "ElegantErgo Sofa",
      category: "Living Room",
      image: "/sofa4.jpg",
      price: "$1,599",
      id: "elegantergo-sofa",
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Top Section with Heading and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
          {/* Left Column - Heading and Button */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="block">Our</span>
                <span className="block">products</span>
              </h2>
            </motion.div>

            {/* Separator line with animation */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-20 h-px bg-black  left-0"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group inline-block"
            >
              <Link
                to="/shop"
                className="inline-flex items-center overflow-hidden  py-3  text-black font-medium text-lg  transition-colors duration-300"
              >
                <span className="relative z-10">Store</span>
                {/* Arrow circle */}
                <span className="w-8 h-8 rounded-full bg-white border border-black flex items-center justify-center ml-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transform rotate-[-60deg] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            <p>
              From sleek, modern designs that exude contemporary elegance to
              timeless classics that evoke warmth and nostalgia, our curated
              selection has something for every taste and lifestyle. Each piece
              is crafted with precision and care, ensuring both quality and
              durability.
            </p>
          </motion.div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-black"
            >
              <Link to={`/product/${product.id}`} className="block h-full">
                <div className="aspect-[4/3] overflow-hidden mb-3 p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 space-y-2">
                  <h3 className="text-lg font-bold line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-base font-medium">{product.price}</p>
                  <button className="w-full py-2 text-sm bg-white hover:bg-black text-black hover:text-white  transition-colors duration-300 border border-black">
                    View Product
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

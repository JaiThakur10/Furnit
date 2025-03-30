import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const products = [
    {
      name: "Harmony Dining Table Set",
      category: "Dining Room",
      image: "/sofa3.jpg",
      price: "$1,299",
      id: "harmony-dining-table",
    },
    {
      name: "ClassicCraft Bedframe",
      category: "Bedroom",
      image: "/sofa3.jpg",
      price: "$899",
      id: "classiccraft-bedframe",
    },
    {
      name: "ElegantErgo Sofa",
      category: "Living Room",
      image: "/sofa3.jpg",
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Our products
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to="/shop"
                className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Shop All
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="aspect-[3/4] overflow-hidden mb-4 p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-3/4 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                  <p className="text-gray-500 mb-2">{product.category}</p>
                  <p className="text-lg font-medium mb-4">{product.price}</p>
                  <button className="w-full py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-300 border border-black">
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

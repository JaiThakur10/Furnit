import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaTruck, FaBoxOpen, FaUndo } from "react-icons/fa"; // Import icons

const products = [
  {
    id: 1,
    name: "Harmony Dining Table",
    category: "Dining",
    image: "/sofa.jpg",
    price: 80000,
    description: "A luxurious Dining Table.",
    info: "Material: Wood | Weight: 50Kg | Origin: Italy",
  },
  {
    id: 2,
    name: "Modern Dining Chairs",
    category: "Dining",
    image: "/sofa1.jpg",
    price: 9999,
    description: "A sleek and stylish dining chair.",
    info: "Material: Wood | Weight: 4Kg | Origin: USA",
  },
  {
    id: 3,
    name: "ElegantEgro Sofa",
    category: "Living",
    image: "/sofa2.jpg",
    price: 29999,
    description: "A sparkling beautiful Sofa.",
    info: "Material: Wood Foam | Leather: TU | Origin: Belgium",
  },
  {
    id: 4,
    name: "Designer Coffee Table",
    category: "Living",
    image: "/sofa3.jpg",
    price: 39999,
    description: "A classic Coffee Table.",
    info: "Material: Epoxy | Length: 18 inches | Origin: Japan",
  },
  {
    id: 5,
    name: "Classic Craft BedFrame",
    category: "Bedroom",
    image: "/sofa4.jpg",
    price: 14999,
    description: "Sleep like never before.",
    info: "Material: Platinum | Stones: Cubic Zirconia | Origin: France",
  },
  {
    id: 6,
    name: "Luxry NightStand",
    category: "Bedroom",
    image: "/sofa5.jpg",
    price: 199999,
    description: "A luxurious Bed T.",
    info: "Material: Wood | Weight: 50Kg | Origin: Italy",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  // State to track if item is added to cart
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Reset after 2 seconds
  };

  if (!product) {
    return <h2 className="text-center text-3xl mt-12">Product not found!</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-lg mx-auto rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-6xl font-light">{product.name}</h1>
          <p className="text-gray-500 text-lg mt-2">
            {product.category.toUpperCase()}
          </p>
          <p className="text-3xl font-light text-black mt-4">
            ${product.price}
          </p>
          <p className="text-gray-600 mt-6">{product.description}</p>

          {/* Icons Section */}
          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-2">
              <FaTruck className="text-xl text-black" />
              <span className="text-gray-700">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBoxOpen className="text-xl text-black" />
              <span className="text-gray-700">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-xl text-black" />
              <span className="text-gray-700">Free Return</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`mt-6 px-6 py-3 rounded-md transition ${
              added
                ? "bg-blue-400 text-white cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
            disabled={added}
          >
            {added ? "Added!" : "Add to Cart"}
          </button>

          {/* Product Info Section */}
          <div className="mt-6 p-4 border rounded-md">
            <h3 className="text-lg font-semibold text-gray-800">
              Product Information
            </h3>
            <p className="text-gray-700 mt-2">{product.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

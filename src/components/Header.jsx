import { useState, useContext, useRef, useEffect } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartSidebar from "./CartSidebar";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Gold Ring",
    category: "rings",
    image: "/images/ring1.jpg",
    price: "$199",
  },
  {
    id: 2,
    name: "Silver Ring",
    category: "rings",
    image: "/images/ring2.jpg",
    price: "$99",
  },
  {
    id: 3,
    name: "Diamond Pendant",
    category: "pendants",
    image: "/images/pendant1.jpg",
    price: "$299",
  },
  {
    id: 4,
    name: "Pearl Necklace",
    category: "necklaces",
    image: "/necklace.jpg",
    price: "$399",
  },
  {
    id: 5,
    name: "Stud Earrings",
    category: "earrings",
    image: "/images/earring1.jpg",
    price: "$149",
  },
];

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false);
  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // Show navbar after hero section animation completes
  useEffect(() => {
    const timer = setTimeout(() => setShowNavbar(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Handle clicks outside search and menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredProducts(
      value === ""
        ? []
        : products.filter((p) => p.name.toLowerCase().includes(value))
    );
  };

  const handleSearchSelect = (productId) => {
    navigate(`/product/${productId}`);
    setSearchTerm("");
    setSearchOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] md:w-[70vw] bg-[rgba(200,201,201,0.7)]  border border-black"
          >
            <div className="flex items-center justify-between h-12 px-4 md:px-6 mx-auto">
              {/* Mobile Menu Button - Left side */}
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Navigation - Left side */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/shop"
                  className="text-lg font-medium hover:text-gray-700 transition-colors"
                >
                  Store
                </Link>
                <Link
                  to="/aboutus"
                  className="text-lg font-medium hover:text-gray-700 transition-colors"
                >
                  About Us
                </Link>
              </div>

              {/* Center Brand Name */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link
                  to="/"
                  className="text-2xl font-bold tracking-tight hover:text-gray-700 transition-colors"
                >
                  Urban
                </Link>
              </div>

              {/* Right Section - Icons */}
              <div className="flex items-center space-x-4 md:space-x-6">
                {/* Search - Hidden on mobile */}
                <div ref={searchRef} className="hidden md:block relative">
                  <Search
                    className="cursor-pointer hover:text-gray-700 transition-colors"
                    onClick={() => setSearchOpen(!searchOpen)}
                    size={22}
                  />
                  {searchOpen && (
                    <div className="absolute top-10 right-0 w-60 bg-white border border-gray-300 rounded-lg shadow-lg p-3">
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        autoFocus
                      />
                      {searchTerm && (
                        <ul className="mt-2 max-h-60 overflow-auto">
                          {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                              <li
                                key={product.id}
                                className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                onClick={() => handleSearchSelect(product.id)}
                              >
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-10 h-10 mr-3 object-cover rounded"
                                />
                                <div>
                                  <p className="font-medium">{product.name}</p>
                                  <p className="text-sm text-gray-600">
                                    {product.price}
                                  </p>
                                </div>
                              </li>
                            ))
                          ) : (
                            <li className="p-2 text-gray-500">
                              No products found
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                {/* Cart Icon */}
                <div className="relative">
                  <ShoppingCart
                    className="cursor-pointer hover:text-gray-700 fill-black transition-colors"
                    onClick={() => setCartOpen(true)}
                    size={22}
                  />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cart.length}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  ref={menuRef}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="flex flex-col space-y-4 p-4 bg-white bg-opacity-90 rounded-b-lg">
                    <Link
                      to="/shop"
                      className="text-lg font-medium hover:text-gray-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Store
                    </Link>
                    <Link
                      to="/aboutus"
                      className="text-lg font-medium hover:text-gray-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    {/* Mobile Search */}
                    <div className="relative pt-2">
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                      {searchTerm && (
                        <ul className="mt-2 max-h-60 overflow-auto">
                          {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                              <li
                                key={product.id}
                                className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                onClick={() => handleSearchSelect(product.id)}
                              >
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-10 h-10 mr-3 object-cover rounded"
                                />
                                <div>
                                  <p className="font-medium">{product.name}</p>
                                  <p className="text-sm text-gray-600">
                                    {product.price}
                                  </p>
                                </div>
                              </li>
                            ))
                          ) : (
                            <li className="p-2 text-gray-500">
                              No products found
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <CartSidebar cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
};

export default Header;

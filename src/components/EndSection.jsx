import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EndSection = () => {
  return (
    <section className="relative bg-gray-900 min-h-[400px] sm:min-h-[500px] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/sofa.jpg')] bg-cover bg-center opacity-70"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto lg:mx-36">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="block">Join</span>
              <span className="block">Our Furniture</span>
              <span className="block">Family</span>
            </h2>

            {/* Separator line with animation */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-20 h-px bg-white mt-4 mb-6"
            />

            <div className=" text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                Welcome to Urban Woodworks, where craftsmanship meets design.
              </p>
              <p>
                Since 2000, we've been dedicated to creating handcrafted
                furniture that elevates living spaces.
              </p>
              <p>Our commitment to quality and sustainability sets us apart.</p>
              <p>
                Explore our collection to find pieces that blend style, comfort,
                and elegance.
              </p>
              <p>Thank you for considering us to furnish your home.</p>
            </div>

            <motion.div
              className="mt-8 sm:mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/shop"
                className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-white text-black font-medium text-base sm:text-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Visit Our Store
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EndSection;

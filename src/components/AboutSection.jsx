import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-black text-white relative">
      {/* Top border line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-white"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center h-full">
        {/* Left Column - Heading and Button */}
        <div className="flex flex-col items-start space-y-12 h-full justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-2"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Where
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Furniture
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Meets
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Imagination
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Link
              to="/about"
              className="relative px-8 py-4 bg-white text-black rounded-full overflow-hidden font-medium text-lg flex items-center gap-3"
            >
              <span className="relative z-10">About</span>

              {/* Arrow circle */}
              <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center ml-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transform rotate-[60deg] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Description */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-300 leading-relaxed"
        >
          <p>
            Welcome to Urban Woolworks, where craftsmanship meets design. Since
            2000, we've been dedicated to creating handcrafted furniture that
            elevates living spaces. Our commitment to quality and sustainability
            sets us apart. Explore our collection to find pieces that blend
            style, comfort, and elegance. Thank you for considering us to
            furnish your home with lasting beauty.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

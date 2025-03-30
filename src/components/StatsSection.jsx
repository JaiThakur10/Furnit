import { motion } from "framer-motion";
import sofaImage from "/bgless.png"; // Update this path

const StatsSection = () => {
  return (
    <section className="bg-black py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-white"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="block">Crafting</span>
                <span className="block">Your Ideal</span>
                <span className="block">Space</span>
              </h2>
            </motion.div>

            {/* Separator line with animation */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-20 h-px bg-white  left-0"
            />

            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className=" pt-4"
              >
                <p className="text-4xl md:text-5xl font-bold text-white">10+</p>
                <p className="text-sm md:text-base mt-2 text-gray-300">
                  Satisfied Customers
                </p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className=" pt-4"
              >
                <p className="text-4xl md:text-5xl font-bold text-white">10</p>
                <p className="text-sm md:text-base mt-2 text-gray-300">
                  Years of Experience
                </p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className=" pt-4 col-span-2 sm:col-span-1"
              >
                <p className="text-4xl md:text-5xl font-bold text-white">20</p>
                <p className="text-sm md:text-base mt-2 text-gray-300">
                  Industry Partnerships
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={sofaImage}
              alt="Modern sofa in living space"
              className="w-full max-w-lg rounded-lg object-cover "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

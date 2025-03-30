import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [stage, setStage] = useState(0); // 0=initial, 1=rising, 2=hero-bg, 3=hero-text

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1500); // Start rise after 1.5s
    const timer2 = setTimeout(() => setStage(2), 3000); // Show hero bg after 3s
    const timer3 = setTimeout(() => setStage(3), 3500); // Show text after 3.5s
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Permanent white background */}
      <div className="absolute inset-0 bg-white" />

      {/* Black screen with Urban text that rises */}
      <AnimatePresence>
        {(stage === 0 || stage === 1) && (
          <motion.div
            key="black-screen"
            initial={{ y: 0 }}
            animate={{
              y: stage === 1 ? "-110%" : 0,
              transition: {
                duration: 1.3,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="absolute inset-0 bg-black flex items-center justify-center z-50 shadow-2xl"
          >
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: "backOut",
                },
              }}
              className="text-white text-6xl font-bold tracking-tight"
            >
              Furnit
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero content */}
      <AnimatePresence>
        {stage >= 2 && (
          <motion.div
            key="hero-content"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.9,
                ease: [0.32, 0, 0.67, 0],
              },
            }}
            className="relative h-full w-full"
          >
            {/* Video background with tint */}
            <div className="absolute inset-0 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/urban-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0  bg-opacity-40" />
            </div>

            {/* Hero text content - appears after background */}
            {stage === 3 && (
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.8,
                      ease: [0.34, 1.56, 0.64, 1],
                    },
                  }}
                  className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                >
                  Discover Urban Living
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 80 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.7,
                      ease: [0.34, 1.56, 0.64, 1],
                    },
                  }}
                  className="text-white text-xl md:text-2xl max-w-2xl mb-10"
                >
                  Experience the perfect blend of style and comfort
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.8,
                      duration: 0.6,
                      ease: [0.34, 1.56, 0.64, 1],
                    },
                  }}
                  className="absolute bottom-20"
                >
                  <button className="bg-black hover:bg-white  hover:text-black text-white px-8 py-3 text-lg font-medium border border-black hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:scale-105 transform">
                    Shop Now
                  </button>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;

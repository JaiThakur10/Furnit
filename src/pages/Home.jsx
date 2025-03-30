import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductSection";
import StatsSection from "../components/StatsSection";
import EndSection from "../components/EndSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <StatsSection />
      <EndSection />
    </>
  );
}

export default Home;

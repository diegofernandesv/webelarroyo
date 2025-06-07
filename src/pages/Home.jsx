import React from "react";
import HeroSection from "../components/HeroSection";
import LocationSection from "../components/LocationSection";
import RoomsSection from "../components/RoomsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LocationSection />
      <RoomsSection />
      <TestimonialsSection />
      <ServicesSection />
      <CTASection />
    </>
  );
};

export default Home;

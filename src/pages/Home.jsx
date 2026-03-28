import HeroSection from "../components/HeroSection";
import LocationSection from "../components/LocationSection";
import RoomsSection from "../components/RoomsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ServicesSection from "../components/ServicesSection";
import ServiceCardsSection from "../components/ServiceCardsSection";
import ServicesListSection from "../components/ServicesListSection";
import RingCTASection from "../components/RingCTASection";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LocationSection />
      <RoomsSection />
      <ServicesListSection />
      <TestimonialsSection />
      <RingCTASection />
    </>
  );
};

export default Home;

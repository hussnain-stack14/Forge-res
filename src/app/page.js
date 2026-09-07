import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MenuSection from "@/components/MenuSection";
import ComboBanner from "@/components/ComboBanner";
import AboutSection from "@/components/AboutSection";
import DeliverySection from "@/components/DeliverySection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingOrderButton from "@/components/FloatingOrderButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#F5EFE5] selection:bg-[#E33B20] selection:text-white relative overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features / Trust Strip */}
      <Features />

      {/* Menu Section with 4 Burger Cards */}
      <MenuSection />

      {/* Combo Promotion Banner */}
      <ComboBanner />

      {/* About / Craftsmanship Section */}
      <AboutSection />

      {/* Delivery Section */}
      <DeliverySection />

      {/* Location, Contact & Hours Section */}
      <LocationSection />

      {/* Minimal Dark Footer */}
      <Footer />

      {/* Fixed WhatsApp CTA Floating Button */}
      <FloatingOrderButton />
    </main>
  );
}

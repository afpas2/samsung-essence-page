import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TVHighlightSection from "@/components/TVHighlightSection";
import BespokeAISection from "@/components/BespokeAISection";
import SchedulingSection from "@/components/SchedulingSection";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <TVHighlightSection />
        <BespokeAISection />
        <SchedulingSection />
        <ChatbotSection />
      </main>
      <Footer />
      {/* Retell AI widget is now embedded via script tag in index.html */}
    </div>
  );
};

export default Index;
import HeroSection from "@/components/HeroSection";
import CourseDetailsSection from "@/components/CourseDetailsSection";
import WhyThisKitSection from "@/components/WhyThisKitSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import AboutAuthorSection from "@/components/AboutAuthorSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CourseDetailsSection />
      <WhyThisKitSection />
      <TestimonialsSection />
      <PricingSection />
      <AboutAuthorSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;

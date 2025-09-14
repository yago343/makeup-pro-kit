import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-elegant-black leading-tight">
              Turn Your Makeup Knowledge Into 
              <span className="text-warm-brown"> Professional Courses</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl">
              A complete personalized booklet kit designed for makeup artists starting to teach — 
              editable, stylish, and ready to impress your students.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6 h-auto">
              Get My Personalized Kit Now
            </Button>
            <p className="text-sm text-foreground/60">100% Digital • Instant Access • 7-Day Guarantee</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10">
            <img 
              src={heroMockup} 
              alt="Professional Makeup Artist Booklet Kit mockup showing personalized booklets, certificates, and digital devices" 
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-card rounded-2xl blur-3xl opacity-50 scale-110"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
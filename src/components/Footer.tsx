import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-elegant-black text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Professional Makeup Artist Booklet Kit
            </div>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Transform your makeup knowledge into professional courses with confidence and style.
            </p>
          </div>

          <div className="space-y-4">
            <Button variant="outline" className="border-rose-blush text-rose-blush hover:bg-rose-blush hover:text-elegant-black">
              Need Help? Contact Us
            </Button>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20 space-y-4">
            <p className="text-primary-foreground/60">
              © 2024 Professional Makeup Artist Booklet Kit. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-primary-foreground/50">
              <a href="#" className="hover:text-rose-blush transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rose-blush transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-rose-blush transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-elegant-black">
            Professional Results for a Small Investment
          </h2>
          <p className="text-xl text-foreground/70">
            Everything you need to elevate your makeup courses to professional standards
          </p>
        </div>

        <Card className="bg-gradient-card border-2 border-rose-blush shadow-elegant relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-rose-blush text-warm-brown px-4 py-2 rounded-bl-lg">
            <Badge variant="secondary" className="bg-transparent border-0 text-warm-brown font-semibold">
              BEST VALUE
            </Badge>
          </div>
          
          <CardHeader className="text-center space-y-6 pt-12">
            <div>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-6xl font-bold text-warm-brown">$47</span>
              </div>
              <p className="text-xl text-foreground/70">or 6x $8.82</p>
            </div>
          </CardHeader>

          <CardContent className="space-y-8 pb-12">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-rose-blush" />
                <span className="text-lg">100% Digital - Instant Access</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-rose-blush" />
                <span className="text-lg">7-Day Money-Back Guarantee</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button variant="cta" size="lg" className="text-xl px-12 py-8 h-auto w-full md:w-auto">
                Elevate My Courses Today
              </Button>
              <p className="text-sm text-foreground/60">
                Join 200+ makeup artists who transformed their teaching game
              </p>
            </div>

            <div className="bg-soft-pink rounded-lg p-6 border border-rose-blush/20">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Shield className="w-6 h-6 text-warm-brown" />
                <h3 className="text-lg font-semibold text-warm-brown">100% Satisfaction Guarantee</h3>
              </div>
              <p className="text-foreground/70">
                Try the kit risk-free for 7 days. If you're not completely satisfied, 
                we'll refund every penny. No questions asked.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
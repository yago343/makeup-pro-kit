import { Card, CardContent } from "@/components/ui/card";

const WhyThisKitSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-elegant-black">
            Because Your Students Deserve More
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-xl text-foreground/80 leading-relaxed">
              Stop wasting time with generic or unprofessional materials. With this personalized 
              booklet kit, you'll stand out as a professional, organized, and inspiring instructor.
            </p>
            
            <div className="grid gap-6">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-warm-brown mb-2">Professional First Impression</h3>
                  <p className="text-foreground/70">
                    Custom-branded materials that showcase your expertise and attention to detail.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-warm-brown mb-2">Save Time & Energy</h3>
                  <p className="text-foreground/70">
                    Pre-designed templates that you can customize quickly instead of starting from scratch.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-warm-brown mb-2">Increase Student Confidence</h3>
                  <p className="text-foreground/70">
                    Well-structured materials help students follow along and retain information better.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 shadow-elegant">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <p className="text-lg font-medium text-foreground/60">Before: Generic Materials</p>
                  <div className="h-20 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Basic, unpersonalized content</p>
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-warm-brown">VS</div>
                
                <div className="space-y-2">
                  <p className="text-lg font-medium text-elegant-black">After: Professional Kit</p>
                  <div className="h-20 bg-gradient-card rounded-lg flex items-center justify-center border-2 border-rose-blush">
                    <p className="text-warm-brown font-semibold">Branded, professional materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisKitSection;
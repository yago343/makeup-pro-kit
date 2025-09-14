import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const CourseDetailsSection = () => {
  const features = [
    "Editable personalized student booklet",
    "Professional certificates (3 modern styles)",
    "Course proposal template to present your services",
    "Student record sheet for organization",
    "Self-makeup theoretical eBook",
    "Bonus video: \"How to Teach Your First Makeup Class\""
  ];

  return (
    <section className="py-20 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-elegant-black">
            What's Included in Your Kit
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Everything you need to start teaching professional makeup courses with confidence and style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-rose-blush rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-warm-brown" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{feature}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" className="text-lg px-8 py-6 h-auto">
            Unlock My Kit for $47
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsSection;
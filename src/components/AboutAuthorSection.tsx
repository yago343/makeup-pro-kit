import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen } from "lucide-react";

const AboutAuthorSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-elegant-black">
            Created by a Makeup Artist, for Makeup Artists
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop&crop=face" 
                alt="Caroline Lopes - Professional Makeup Artist and Educator"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-warm-brown mb-2">Caroline Lopes</h3>
              <p className="text-xl text-foreground/70 mb-6">Award-Winning Makeup Artist & Educator</p>
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Award-winning makeup artist who has trained over 200 students and delivered 40+ courses. 
                Caroline designed this kit so new makeup artists can start teaching with confidence, 
                organization, and professionalism.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rose-blush rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-warm-brown" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-brown">200+ Students Trained</h4>
                    <p className="text-foreground/70">Across Brazil and internationally</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rose-blush rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-warm-brown" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-brown">40+ Courses Delivered</h4>
                    <p className="text-foreground/70">Both online and in-person formats</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rose-blush rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-warm-brown" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-brown">Industry Recognition</h4>
                    <p className="text-foreground/70">Featured in beauty publications</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthorSection;
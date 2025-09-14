import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Makeup Artist & Educator",
      quote: "This kit transformed how I present my courses. My students are more engaged and I feel so much more professional!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Rodriguez",
      role: "Beauty Academy Owner",
      quote: "The personalized booklets gave my academy the professional edge we needed. Students love the organized structure!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Julia Fernandes",
      role: "Freelance Makeup Artist",
      quote: "I went from struggling with basic handouts to having a complete professional teaching system. Game changer!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carla Silva",
      role: "Bridal Makeup Specialist",
      quote: "The course proposal template alone helped me book 3 new clients this month. Worth every penny!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-elegant-black">
            Trusted by Over 200 Students
          </h2>
          <p className="text-xl text-foreground/70">
            See what makeup artists are saying about their transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-rose-blush text-rose-blush" />
                  ))}
                </div>
                
                <p className="text-foreground/80 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} - Makeup Artist`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-warm-brown">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
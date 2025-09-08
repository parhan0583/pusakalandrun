import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "Marathon Finisher 2024",
      image: "👩‍🦰",
      rating: 5,
      text: "Pusakaland Run was an incredible experience! The route through Magetan's landmarks was breathtaking, and the organization was flawless. Can't wait for 2025!"
    },
    {
      name: "Ahmad Rahman",
      role: "10K Participant",
      image: "👨‍💼",
      rating: 5,
      text: "Perfect event for getting back into running. Great atmosphere, friendly volunteers, and amazing post-race celebrations. Highly recommended for all fitness levels!"
    },
    {
      name: "Lisa Chen",
      role: "5K Fun Run",
      image: "👩‍💻",
      rating: 5,
      text: "As a beginner runner, I was nervous about my first race. The support throughout the course was amazing, and crossing the finish line felt incredible!"
    },
    {
      name: "Roberto Silva",
      role: "International Runner",
      image: "👨‍🔬",
      rating: 5,
      text: "Traveled from Brazil for this event and it exceeded all expectations. Magetan's beauty combined with excellent race management made this unforgettable."
    },
    {
      name: "Dewi Sartika",
      role: "Veteran Runner",
      image: "👩‍🏫",
      rating: 5,
      text: "I've participated in many marathons across Indonesia, and Pusakaland Run stands out for its exceptional organization and community spirit."
    },
    {
      name: "Michael Johnson",
      role: "First-time Marathoner",
      image: "👨‍⚕️",
      rating: 5,
      text: "Completing my first marathon at Pusakaland Run 2024 was a dream come true. The training program and race day support were outstanding!"
    }
  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Would Recommend" },
    { number: "3,500+", label: "Happy Participants" },
    { number: "95%", label: "Finish Rate" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6">Runner Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our amazing community of runners who made Pusakaland Run 2024 unforgettable
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-athletic hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-1" />
                  <p className="text-muted-foreground italic pl-4">{testimonial.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Quote */}
        <div className="bg-gradient-hero rounded-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <Quote className="w-16 h-16 text-white/20 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              "Pusakaland Run isn't just a race - it's a celebration of community, perseverance, and the beautiful spirit of Magetan"
            </blockquote>
            <cite className="text-xl font-semibold text-white/90">
              - Maria Stephanie, Race Director
            </cite>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
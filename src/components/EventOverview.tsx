import { Clock, MapPin, Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EventOverview = () => {
  const categories = [
    {
      name: "5K Fun Run",
      distance: "5 Kilometers",
      time: "7:00 AM",
      price: "IDR 150,000",
      description: "Perfect for beginners and families",
      icon: Users,
      color: "from-green-400 to-green-600"
    },
    {
      name: "10K Challenge",
      distance: "10 Kilometers", 
      time: "7:30 AM",
      price: "IDR 250,000",
      description: "Intermediate level for fitness enthusiasts",
      icon: Clock,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Full Marathon",
      distance: "42.2 Kilometers",
      time: "6:00 AM",
      price: "IDR 450,000",
      description: "Ultimate challenge for serious runners",
      icon: Trophy,
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6">Race Categories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your challenge level and join thousands of runners in this amazing event
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="card-athletic hover-lift group overflow-hidden">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{category.distance}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Start: {category.time}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-3xl font-bold text-primary mb-2">{category.price}</div>
                    <button className="btn-register w-full">Register Now</button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Event Details */}
        <div className="bg-card rounded-2xl p-8 shadow-card-athletic">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Oct 15</div>
              <div className="text-muted-foreground">2025</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Expected Runners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">42.2K</div>
              <div className="text-muted-foreground">Maximum Distance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Partner Sponsors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
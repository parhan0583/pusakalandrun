import { MapPin, Navigation, Route } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RaceRoute = () => {
  const routePoints = [
    {
      name: "Start Line",
      location: "Masjid Agung (Alun-Alun Magetan)",
      time: "6:00 AM",
      description: "Grand opening ceremony and race start",
      distance: "0 km"
    },
    {
      name: "Stadion magetan",
      location: "Jl. Yosonegoro ",
      time: "6:15 AM",
      description: "First major checkpoint with refreshments",
      distance: "1,5 km"
    },
    {
      name: "Jembatan Gandong 3",
      location: "Jl. Yos Sudarso",
      time: "6:45 AM", 
      description: "Sports complex with medical station",
      distance: "2,3 km"
    },
    {
      name: "Perum. Bukit Royal",
      location: "Jl. kawi",
      time: "7:30 AM",
      description: "Historic district with cultural performances",
      distance: "3,5 km"
    },
    {
      name: "SD Muhammadiyah 1 Magetan",
      location: "Jl. Thamrin",
      time: "8:15 AM",
      description: "Scenic coastal views and photo opportunities",
      distance: "4,5 km"
    },
    {
      name: "Finish Line",
      location: "Masjid Agung (Alun-Alun Magetan)",
      time: "9:00 AM",
      description: "Victory celebration and medal ceremony",
      distance: "5 km"
    }
  ];

  const routeFeatures = [
    {
      icon: Route,
      title: "Scenic Route",
      description: "Experience Magetan's most iconic landmarks and beautiful cityscape views"
    },
    {
      icon: MapPin,
      title: "Strategic Checkpoints",
      description: "Multiple aid stations with water, sports drinks, and medical support"
    },
    {
      icon: Navigation,
      title: "GPS Tracking",
      description: "Real-time tracking for family and friends to follow your progress"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6">Race Route</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Run through Magetan's most beautiful and iconic locations
          </p>
        </div>

        {/* Route Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {routeFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Route Map Placeholder */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-16">
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Interactive Route Map</h3>
              <p className="text-muted-foreground">Detailed route map coming soon</p>
            </div>
          </div>
        </div>

        {/* Route Timeline */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-center mb-12">Route Timeline</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
            
            <div className="space-y-8">
              {routePoints.map((point, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <Card className="card-athletic flex-1">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{point.name}</CardTitle>
                          <p className="text-muted-foreground">{point.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">{point.distance}</div>
                          <div className="text-sm text-muted-foreground">{point.time}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{point.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaceRoute;
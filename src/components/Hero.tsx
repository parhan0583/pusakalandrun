import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-running.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Event Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-semibold">
            <Calendar className="w-4 h-4" />
            Oct 15, 2025
          </div>
          
          {/* Main Title */}
          <h1 className="text-hero text-white font-black leading-none">
            Pusakaland
            <span className="block gradient-text">RUN 2025</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
            Join thousands of runners in the most spectacular marathon event of the year
          </p>
          
          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Magetan, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">5K • 10K • Marathon</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="btn-hero text-lg h-14 px-8">
              Register Now
            </Button>
            <Button variant="outline" className="btn-outline-athletic text-lg h-14 px-8 ">
              Learn More
            </Button>
          </div>
          
          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Event Countdown</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">127</div>
                <div className="text-sm text-white/70">Days</div>
              </div>
              <div>
                <div className="text-2xl font-bold">14</div>
                <div className="text-sm text-white/70">Hours</div>
              </div>
              <div>
                <div className="text-2xl font-bold">23</div>
                <div className="text-sm text-white/70">Min</div>
              </div>
              <div>
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm text-white/70">Sec</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
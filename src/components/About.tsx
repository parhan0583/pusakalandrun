import { Award, Heart, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community Spirit",
      description: "Building connections and fostering a supportive running community that celebrates every achievement."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering world-class racing experiences with attention to every detail and continuous improvement."
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Welcoming runners of all levels, backgrounds, and abilities to participate and achieve their personal goals."
    },
    {
      icon: Award,
      title: "Achievement",
      description: "Celebrating personal victories and milestones while promoting health, fitness, and active lifestyles."
    }
  ];

  const team = [
    {
      name: "Maria Stephanie",
      role: "Race Director",
      image: "👩‍💼",
      description: "10+ years organizing international marathons"
    },
    {
      name: "David Chen",
      role: "Operations Manager",
      image: "👨‍💻",
      description: "Expert in large-scale event logistics"
    },
    {
      name: "Sarah Abdullah",
      role: "Community Coordinator",
      image: "👩‍🎓",
      description: "Passionate about runner engagement"
    },
    {
      name: "Ahmad Rizki",
      role: "Safety Director",
      image: "👨‍⚕️",
      description: "Former paramedic with sports medicine expertise"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6">About the Organizer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Magetan Running Foundation - Dedicated to promoting active lifestyles and building stronger communities through running
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed text-white/90">
              To inspire and empower individuals through the transformative power of running, while showcasing Magetan's beauty and building a stronger, healthier community that celebrates diversity, perseverance, and personal achievement.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-athletic hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organization History */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2019, the Magetan Running Foundation emerged from a simple vision: to create Indonesia's premier running event that celebrates both athletic achievement and community spirit.
              </p>
              <p>
                What started as a small 5K community race has grown into one of Southeast Asia's most anticipated marathon events, attracting thousands of participants from around the world.
              </p>
              <p>
                Our commitment to excellence, safety, and inclusivity has earned recognition from the International Association of Athletics Federations (IAAF) and made Pusakaland Run a qualifying event for major international marathons.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15K+</div>
              <div className="text-muted-foreground">Total Participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-athletic hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-accent/30 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
          <p className="text-xl text-muted-foreground mb-6">
            Follow us for training tips, event updates, and inspiring runner stories
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-outline-athletic">
              Follow on Instagram
            </button>
            <button className="btn-outline-athletic">
              Join Facebook Group
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
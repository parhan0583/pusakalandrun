import { Award, Heart, Star } from "lucide-react";

const Sponsors = () => {
  const titleSponsors = [
    { name: "Playon Magetan", logo: "🏃", level: "Title Sponsor" },
    { name: "SportTech Indonesia", logo: "⚡", level: "Presenting Partner" }
  ];

  const goldSponsors = [
    { name: "Nike Indonesia", logo: "👟" },
    { name: "Pocari Sweat", logo: "💧" },
    { name: "Garmin", logo: "⌚" },
    { name: "Bank Mandiri", logo: "🏦" }
  ];

  const silverSponsors = [
    { name: "Aqua", logo: "💧" },
    { name: "New Balance", logo: "👟" },
    { name: "Olahraga.com", logo: "📱" },
    { name: "Magetan Tourism", logo: "🏙️" },
    { name: "Indomie", logo: "🍜" },
    { name: "Mizone", logo: "🥤" }
  ];

  const supportingPartners = [
    { name: "Magetan Hospital", logo: "🏥" },
    { name: "Red Cross Indonesia", logo: "❤️" },
    { name: "Magetan Police", logo: "👮" },
    { name: "Trans Magetan", logo: "🚌" },
    { name: "Grab Indonesia", logo: "🚗" },
    { name: "Gojek", logo: "🛵" },
    { name: "Magetan Post", logo: "📰" },
    { name: "MetroTV", logo: "📺" }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6">Our Partners</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proud to be supported by leading brands and organizations
          </p>
        </div>

        {/* Title Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Title Sponsors</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {titleSponsors.map((sponsor, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card-athletic text-center hover-lift">
                <div className="text-6xl mb-4">{sponsor.logo}</div>
                <h4 className="text-2xl font-bold mb-2">{sponsor.name}</h4>
                <p className="text-primary font-semibold">{sponsor.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="w-6 h-6 text-yellow-500" />
            <h3 className="text-2xl font-bold">Gold Sponsors</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card-athletic text-center hover-lift group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{sponsor.logo}</div>
                <h4 className="font-bold">{sponsor.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-6 h-6 bg-gray-400 rounded-full" />
            <h3 className="text-2xl font-bold">Silver Sponsors</h3>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {silverSponsors.map((sponsor, index) => (
              <div key={index} className="bg-card rounded-lg p-4 shadow-card-athletic text-center hover-lift group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{sponsor.logo}</div>
                <h4 className="text-sm font-semibold">{sponsor.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Partners */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-red-500" />
            <h3 className="text-2xl font-bold">Supporting Partners</h3>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {supportingPartners.map((partner, index) => (
              <div key={index} className="bg-card rounded-lg p-3 shadow-card-athletic text-center hover-lift group">
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{partner.logo}</div>
                <h4 className="text-xs font-medium mt-1">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
          <p className="text-xl mb-6 text-white/90">
            Join us in supporting Indonesia's premier running event
          </p>
          <button className="btn-outline-athletic border-white text-white hover:bg-white hover:text-primary">
            Partnership Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
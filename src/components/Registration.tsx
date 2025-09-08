import { Calendar, Clock, CreditCard, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Registration = () => {
  const pricingTiers = [
    {
      phase: "Early Bird",
      period: "Until January 15, 2025",
      discount: "30% OFF",
      prices: {
        "5K": "IDR 105,000",
        "10K": "IDR 175,000", 
        "Marathon": "IDR 315,000"
      },
      original: {
        "5K": "IDR 150,000",
        "10K": "IDR 250,000",
        "Marathon": "IDR 450,000"
      },
      status: "active"
    },
    {
      phase: "Regular",
      period: "January 16 - February 28, 2025",
      discount: "15% OFF",
      prices: {
        "5K": "IDR 127,500",
        "10K": "IDR 212,500",
        "Marathon": "IDR 382,500"
      },
      original: {
        "5K": "IDR 150,000",
        "10K": "IDR 250,000",
        "Marathon": "IDR 450,000"
      },
      status: "upcoming"
    },
    {
      phase: "Final",
      period: "March 1 - March 10, 2025",
      discount: "No Discount",
      prices: {
        "5K": "IDR 150,000",
        "10K": "IDR 250,000",
        "Marathon": "IDR 450,000"
      },
      original: {
        "5K": "IDR 150,000",
        "10K": "IDR 250,000",
        "Marathon": "IDR 450,000"
      },
      status: "final"
    }
  ];

  const benefits = [
    "Official race bib and timing chip",
    "Technical running shirt",
    "Finisher medal for all participants",
    "Post-race refreshments",
    "Professional race photography",
    "Digital certificate of completion",
    "Access to training programs",
    "Event insurance coverage"
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6">Registration & Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure your spot now and take advantage of early bird pricing
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`card-athletic ${tier.status === 'active' ? 'ring-2 ring-primary shadow-athletic' : ''} ${tier.status === 'final' ? 'opacity-60' : ''}`}>
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <CardTitle className="text-2xl">{tier.phase}</CardTitle>
                </div>
                <p className="text-muted-foreground">{tier.period}</p>
                {tier.status === 'active' && (
                  <div className="bg-success text-success-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {tier.discount}
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(tier.prices).map(([category, price]) => (
                  <div key={category} className="flex justify-between items-center">
                    <span className="font-medium">{category}</span>
                    <div className="text-right">
                      <div className="font-bold text-primary">{price}</div>
                      {tier.status === 'active' && tier.original[category as keyof typeof tier.original] !== price && (
                        <div className="text-sm text-muted-foreground line-through">
                          {tier.original[category as keyof typeof tier.original]}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <Button 
                  className={`w-full mt-6 ${tier.status === 'active' ? 'btn-register' : 'btn-outline-athletic'}`}
                  disabled={tier.status === 'final'}
                >
                  {tier.status === 'active' ? 'Register Now' : tier.status === 'upcoming' ? 'Coming Soon' : 'Registration Closed'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Registration Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">What's Included</h3>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card-athletic">
            <div className="text-center mb-6">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Register Now!</h3>
              <p className="text-muted-foreground">Early bird pricing ends soon</p>
            </div>
            
            <div className="space-y-4">
              <Button className="btn-hero w-full text-lg h-14">
                <CreditCard className="w-5 h-5 mr-2" />
                Start Registration
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                Secure payment • Instant confirmation • Full refund policy
              </div>
              
              <div className="bg-accent/50 rounded-lg p-4 text-center">
                <div className="font-semibold text-primary">Limited Time Offer</div>
                <div className="text-sm">Save up to 30% with early bird pricing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
import Hero from "@/components/Hero";
import EventOverview from "@/components/EventOverview";
import Registration from "@/components/Registration";
import RaceRoute from "@/components/RaceRoute";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventOverview />
      <Registration />
      <RaceRoute />
      <Sponsors />
      <Testimonials />
      <ContactForm />
      <About />
    </main>
  );
};

export default Index;

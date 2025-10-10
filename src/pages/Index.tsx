import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SummerSchool from "@/components/SummerSchool";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <SummerSchool />
      
      {/* Placeholder sections for future pages */}
      <section id="speakers" className="py-20 bg-muted/30">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Speakers</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>

      <section id="program" className="py-20">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Program</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>

      <section id="registration" className="py-20 bg-muted/30">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Registration</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>

      <section id="venue" className="py-20">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Venue</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>

      <section id="organizers" className="py-20 bg-muted/30">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Organizers</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

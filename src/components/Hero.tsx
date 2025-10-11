import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI Conference"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            1st African Winter School on Software Engineering & AI
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-white/95">
            ASEAI 2025
          </p>

          {/* Date and Location */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              <span>November 24-26, 2025</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              <span>Novation City, Sousse, Tunisia (Hybrid)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              onClick={() =>
                document
                  .querySelector("#registration")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              onClick={() =>
                document
                  .querySelector("#program")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Program
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

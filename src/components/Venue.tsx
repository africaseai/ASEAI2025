import { MapPin } from "lucide-react";

const Venue = () => {
  return (
    <section id="venue" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Venue</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>Tunis, Tunisia</span>
          </div>
          <div className="pt-8">
            <p className="text-muted-foreground">More details coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;

import { MapPin, Train, Car, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sousseCity from "@/assets/sousse-city.jpg";

const Venue = () => {
  return (
    <section id="venue" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Venue</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Venue Info */}
          <Card className="border-0 shadow-lg overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="relative h-64 md:h-80">
              <img
                src={sousseCity}
                alt="Sousse, Tunisia cityscape showing historic architecture and Mediterranean coastline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
            <CardHeader className="-mt-16 relative z-10">
              <CardTitle className="text-2xl">Novation City</CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Sousse, Tunisia</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  Novation City is an innovative technology and business hub located 
                  in Sousse, Tunisia. As a hybrid event, participants can join us either 
                  in person at this state-of-the-art facility or remotely from anywhere 
                  in the world.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The venue offers modern facilities and is designed to foster 
                  collaboration and innovation, making it the perfect setting for 
                  the African Winter School on Software Engineering & AI.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a
                    href="https://maps.app.goo.gl/b1nvvHCXS1D7DYPy9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MapPin className="h-4 w-4" />
                    Open Map
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Transportation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">How to Reach the Venue</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* By Train */}
              <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Train className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">By Train</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p className="text-foreground/80">
                      Take a train from Tunis to Sousse (approximately 2 hours).
                    </p>
                    <p className="font-medium text-primary">
                      Fare: ~10-15 TND (~3-5 USD)
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Trains run regularly throughout the day
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* By Taxi */}
              <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Car className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">By Taxi</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p className="text-foreground/80">
                      Take a taxi within Sousse to reach Novation City.
                    </p>
                    <p className="font-medium text-primary">
                      From Sousse center: ~10-15 TND (~3-5 USD)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* By Car Sharing */}
              <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">By Car-Sharing</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p className="text-foreground/80">
                      Rent a car or minibus with a chauffeur.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a
                        href="https://coccinelle.tn/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Coccinelle
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;

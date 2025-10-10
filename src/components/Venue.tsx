import { MapPin, Train, Car, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
          <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Institut des Hautes Études Commerciales</CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Rue Victor Hugo 2016, Carthage-Présidence, Tunis</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  The Institut des Hautes Etudes Commerciales of Carthage (IHEC), is
                  the first business school in Tunisia, overlooking the hill of
                  Carthage, where it was established in 1942. IHEC Carthage is one of
                  the most recognized business schools in Africa due to the value of
                  its degree and its reputation.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  IHEC Carthage is situated in a prime location on the Carthage coast,
                  near the ancient Roman city founded around 814 BC by Elissa.
                  Overlooking the Mediterranean, the school offers views of the Gulf
                  of Tunis and Boukornine Mountain to the right, and the picturesque
                  village of Sidi Bou Saïd famous for its blue-and-white architecture
                  and cobbled streets to the left.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a
                    href="https://maps.google.com/"
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
              {/* By TGM */}
              <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Train className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">By TGM</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p className="text-foreground/80">
                      Take the TGM from Tunis Marine Station (downtown) to Sidibousaid.
                    </p>
                    <p className="font-medium text-primary">
                      Fare: ~1 TND (~0.33 USD)
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Purchase tickets with cash at Tunis Marine Station
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
                      Take a taxi from anywhere to reach IHEC.
                    </p>
                    <p className="font-medium text-primary">
                      From city center: ~30 TND (~10 USD)
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

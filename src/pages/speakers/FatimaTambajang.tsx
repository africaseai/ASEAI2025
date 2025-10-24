import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import fatimaTambajang from "@/assets/fatima-tambajang.jpg";

const FatimaTambajang = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 py-4">
          <Button variant="ghost" asChild>
            <Link to="/#speakers" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Speakers
            </Link>
          </Button>
        </div>
      </nav>

      {/* Content */}
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Speaker Profile */}
          <Card className="mb-12 overflow-hidden border-0 shadow-xl">
            <div className="grid md:grid-cols-[300px_1fr] gap-0">
              <div className="aspect-square md:aspect-auto overflow-hidden">
                <img
                  src={fatimaTambajang}
                  alt="Fatima Tambajang"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center bg-gradient-to-br from-card to-muted/20">
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Ms. Fatima Tambajang
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  NVIDIA, USA
                </p>
                <Button variant="outline" size="lg" asChild className="w-fit">
                  <a
                    href="https://www.nvidia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Talk Details */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Kickstart Your AI Journey with NVIDIA's Free Learning Resources
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      Biography
                    </h3>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed">
                        Fatima Tambajang leads Developer Relations, Startups, and Venture Capital for Emerging Markets at NVIDIA, where she drives meaningful engagement with developer communities and startup ecosystems across the region. She focuses on empowering innovators through tools, training, and partnerships that enable the creation of impactful AI solutions.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        Her insights on AI, innovation, and ecosystem development have been featured on leading platforms including TIME Magazine, BBC, Forbes, and Copenhagen Fintech Week.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Back Button */}
            <div className="flex justify-center pt-8">
              <Button size="lg" asChild>
                <Link to="/#speakers" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to All Speakers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FatimaTambajang;

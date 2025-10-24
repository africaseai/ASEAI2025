import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import fatimaTambajang from "@/assets/fatima-tambajang.jpg";

const FatimaTambajang = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 py-12">
        <Button variant="ghost" className="mb-8" onClick={handleBackClick}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Speakers
        </Button>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="grid md:grid-cols-[300px,1fr] gap-8 p-8">
              <div className="space-y-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={fatimaTambajang}
                    alt="Ms. Fatima Tambajang"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">Ms. Fatima Tambajang</h1>
                  <p className="text-muted-foreground">
                    NVIDIA, USA
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://blogs.nvidia.com/blog/author/ftambajang/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <CardContent className="p-0 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Kickstart Your AI Journey with NVIDIA's Free Learning Resources
                  </h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Biography</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                    <p>
                      Fatima Tambajang leads Developer Relations, Startups, and Venture Capital for Emerging Markets at NVIDIA, where she drives meaningful engagement with developer communities and startup ecosystems across the region. She focuses on empowering innovators through tools, training, and partnerships that enable the creation of impactful AI solutions.
                    </p>
                    <p>
                      Her insights on AI, innovation, and ecosystem development have been featured on leading platforms including TIME Magazine, BBC, Forbes, and Copenhagen Fintech Week.
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FatimaTambajang;

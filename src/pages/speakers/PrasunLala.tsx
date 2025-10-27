import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import prasunLala from "@/assets/prasun-lala.jpg";

const PrasunLala = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Back Button */}
            <Button variant="ghost" className="gap-2" onClick={handleBackClick}>
              <ArrowLeft className="h-4 w-4" />
              Back to Speakers
            </Button>

            {/* Speaker Header */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-[300px,1fr] gap-6">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={prasunLala}
                    alt="Mr. Prasun Lala"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Mr. Prasun Lala
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      ÉTS Montréal, Université du Québec, Canada
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.etsmtl.ca/en/auteur/prasun-lala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit"
                    >
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Talk 1 Details */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk 1: 11 steps to structuring a manuscript</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Abstract coming soon.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Talk 2 Details */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk 2: Think like a reviewer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Abstract coming soon.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Biography */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Prasun Lala is a member of SARA's team at the École de technologie supérieure (ÉTS), in Montréal, where he focuses on helping engineering graduate students learn skills related to scientific communication, through group activities involving writing and reviewing their own scientific work. He holds a M.Sc. in Neurophysiology from the Aerospace Medical Research Unit (AMRU) at McGill University and is part of the research support staff in Electrical and Computer Engineering at the Centre for Intelligent Machines (CIM) at McGill.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrasunLala;

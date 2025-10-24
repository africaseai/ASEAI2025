import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hafedhMili from "@/assets/hafedh-mili.jpg";

const HafedhMili = () => {
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
                    src={hafedhMili}
                    alt="Pr. Hafedh Mili"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">Pr. Hafedh Mili</h1>
                  <p className="text-muted-foreground">
                    Université du Québec à Montréal, Canada
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://professeurs.uqam.ca/professeur/mili.hafedh/"
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
                    Towards a framework for the development of SPAs (smart process applications)
                  </h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Abstract</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                    <p>
                      Smart Process Applications are applications that implement non-traditional processes that rely on the IoT for context-awareness, cloud computing for ubiquity, and AI for intelligent and adaptable decisions. Their development raises a number of challenges that span their lifecycle. This talk will explore some of the specificities of such applications, and how they can leveraged to facilitate their development.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Biography</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                    <p>
                      Hafedh Mili is a graduate of the Lycée Mixte de Jemmal (1979), received an engineering degree from Ecole Centrale de Paris (1984) and the PhD degree in computer science (artificial intelligence) from George Washington University, in 1988. He has been a professor of computer science with the Université du Québec à Montréal since 1988.
                    </p>
                    <p>
                      His research interests cover many areas of software engineering, from the early phases of software development (business modelling, representation and classification of business processes, generation of software models from business models) to the reengineering of legacy applications to adapt them to modern deployment architectures.
                    </p>
                    <p>
                      He has consulted widely on business rules and co-authored Reuse-Based Software Engineering, with A. Mili, S. Yacoub, and E. Addy (Wiley, 2001), and Agile Business Rule Development with J. Boyer (Springer, 2011).
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

export default HafedhMili;

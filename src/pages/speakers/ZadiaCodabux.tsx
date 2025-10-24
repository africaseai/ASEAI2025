import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import zadiaCodabux from "@/assets/zadia-codabux.png";

const ZadiaCodabux = () => {
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
                    src={zadiaCodabux}
                    alt="Dr. Zadia Codabux"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">Dr. Zadia Codabux</h1>
                  <p className="text-muted-foreground">
                    University of Saskatchewan, Canada
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://www.cs.usask.ca/faculty/zadiacodabux/"
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
                    Phinally Done: Life Beyond the Ivory Tower
                  </h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Abstract</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                    <p>
                      After countless (caffeine-fueled) late nights and endless paper revisions, the PhD journey finally comes to an end. After years in academia, many graduates wonder, "What's next? What career paths are out there?"
                    </p>
                    <p>
                      This talk explores the transition from doctoral studies to life beyond academia. While a tenure-track professorship is often seen as the ultimate goal, many PhD holders nowadays are embracing careers outside academia. I will provide an overview of the wide range of often-overlooked opportunities that PhD holders can pursue.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Biography</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                    <p>
                      Zadia Codabux is an Associate Professor in the Department of Computer Science at the University of Saskatchewan, Canada, where she leads the Software Engineering Analytics ResearCH (SEARCH) lab. Her research focuses on software quality, maintainability, and technical debt, leveraging empirical software engineering and software analytics to improve the sustainability and reliability of software systems.
                    </p>
                    <p>
                      She is passionate about equality, diversity, and inclusion initiatives in computing. She is a regular attendee, speaker, and reviewer for the Computing Research Association's Committee on Widening Participation in Computing Research (CRA-WP), the Grace Hopper Celebration of Women in Computing (GHC), and the National Center for Women & Information Technology (NCWIT).
                    </p>
                    <p>
                      She has served on the organizing and program committees of top-ranked conferences and as a reviewer and guest editor for leading journals in software engineering.
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

export default ZadiaCodabux;

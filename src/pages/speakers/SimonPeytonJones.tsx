import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import simonPeytonJones from "@/assets/simon-peyton-jones-alt.png";

const SimonPeytonJones = () => {
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
                    src={simonPeytonJones}
                    alt="Dr. Simon Peyton Jones"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Dr. Simon Peyton Jones
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Microsoft Research Cambridge, UK
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Talk Details */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk Title</h2>
                  <p className="text-lg">
                    How to write a great research paper
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Abstract</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Writing papers is a core research skill for any researcher, but they aren't easy. Writing is not just a way to report on great research; it's a way to do great research. Yet many papers are so badly written that, even if they describe excellent work, the work has much less impact than it should. In this talk I'll give you seven simple, actionable guidelines that will, I hope, help you to write better papers, and have more fun at the same time. I don't have all the answers—far from it—and I hope that the presentation will evolve into a discussion in which you share your own insights, rather than a lecture.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Simon Peyton Jones, FRS, graduated from Trinity College Cambridge in 1980. After two years in industry, he spent seven years as a lecturer at University College London, and nine years as a professor at Glasgow University, before joining Microsoft Research (Cambridge) in 1998. He moved to Epic Games as an Engineering Fellow in 2022.
                    </p>
                    <p>
                      Simon's main research interest is in functional programming languages, their implementation, and their application. He was a key contributor to the design of the now-standard functional language Haskell, and is the lead designer of the widely-used Glasgow Haskell Compiler (GHC). He has written two textbooks about the implementation of functional languages. He is particularly motivated by direct application of principled theory to practical language design and implementation — that is one reason he loves functional programming so much.
                    </p>
                    <p>
                      Simon is chair of Computing at School, the grass-roots organisation that was at the epicentre of the 2014 reform of the English computing curriculum.
                    </p>
                  </div>
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

export default SimonPeytonJones;

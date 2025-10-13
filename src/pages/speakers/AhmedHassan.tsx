import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ahmedHassan from "@/assets/ahmed-hassan-alt.png";

const AhmedHassan = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Back Button */}
            <Link to="/#speakers">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Speakers
              </Button>
            </Link>

            {/* Speaker Header */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-[300px,1fr] gap-6">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={ahmedHassan}
                    alt="Professor Ahmed E. Hassan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Pr. Ahmed E. Hassan
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Queen's University, Canada
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
                    The AIware Revolution: Forging the Future of Agentic Software Engineering
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Abstract</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Forget everything you thought you knew about writing software and Software Engineering. We're not witnessing the end of programming; we're at the very beginning of a paradigm-shattering revolution. Are you ready to be a part of it?
                    </p>
                    <p>
                      This isn't just another talk about AI. This is your entry into the world of AIware and Agentic Software Engineering, where the rules are being completely rewritten. We'll explore a future where you are no longer just a coder, but a visionary architect, a collaborator, and a mentor to intelligent AI agents. We're moving beyond simple "copilots" into an era of true, synergistic human-AI teaming.
                    </p>
                    <p>
                      Join me to discover how we can build systems of unprecedented complexity, not by writing endless lines of code, but through conversation, intent, and creative partnership with AI. This is your chance to get ahead of the curve and become a pioneer in the next great technological leap. Step into the future and learn to build the impossible.
                    </p>
                    <p>
                      For those eager to get a sneak peek into the foundational pillars of this new era, you can explore the concepts we'll be discussing in{" "}
                      <a
                        href="https://arxiv.org/pdf/2509.06216"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        this paper
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ahmed E. Hassan is a Mustafa Prize Laureate - an honor widely equated to a Nobel-level recognition – and a Fellow of ACM, IEEE, and AAIA, as well as an NSERC Steacie Fellow, Canada's most prestigious mid-career research award across all fields of science and engineering. He holds the Canada Research Chair and the NSERC/BlackBerry Industrial Research Chair in Software Engineering at Queen's University and is among the world's most cited Software Engineering (SE) researchers. He is the only individual to receive both the ACM SIGSOFT Influential Educator Award (2019) and the IEEE TCSE Distinguished Educator Award (2020), the highest honors for SE educators from the world's two largest professional societies. As the founder of the AI-Augmented SE, MSR and AIware communities and a member of the Royal Society of Canada, his career spans over three decades, including leadership roles in both industrial research (e.g., IBM Almaden, BlackBerry) and academia.
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

export default AhmedHassan;

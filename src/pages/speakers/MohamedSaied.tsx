import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import mohamedSaied from "@/assets/mohamed-saied.png";

const MohamedSaied = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 py-12">
        <Link to="/#speakers">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Speakers
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="grid md:grid-cols-[300px,1fr] gap-8 p-8">
              <div className="space-y-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={mohamedSaied}
                    alt="Dr. Mohamed Aymen Saied"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">Dr. Mohamed Aymen Saied</h1>
                  <p className="text-muted-foreground">
                    Université Laval, Canada
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://www.ulaval.ca/"
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
                    From Monolith to Microservices — A Journey Powered by LLMs and the Open Challenges Ahead
                  </h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Abstract</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                    <p>
                      The rapid evolution of the IT industry and the explosive growth of polyglot, containerized, and microservices-based systems have placed increasing pressure on software engineering practices to fully exploit this paradigm shift. This transition, motivated by the pursuit of enhanced scalability, resilience, and maintainability, remains constrained by a critical automation gap, particularly in the phases of monolith decomposition and refactoring.
                    </p>
                    <p>
                      In this talk, I will trace the evolution of automated migration from monolithic to microservice architectures, highlighting the shift from heuristic-based approaches to advanced learning-driven strategies. I will discuss how techniques such as contrastive learning, fine-tuning of Large Language Models (LLMs), and agentic workflows address key practical limitations, intelligently explore the solution space, and enable iterative refinement toward fully automated and effective migration pipelines.
                    </p>
                    <p>
                      The talk will conclude with perspectives on future directions, focusing on how agentic pipelines can be extended to incorporate post-deployment concerns such as fault tolerance, scalability, and security, thereby enhancing the orchestration and reliability of microservice ecosystems.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Biography</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                    <p>
                      Mohamed Aymen Saied is an Associate Professor in the Department of Computer Science and Software Engineering at Université Laval, Canada. He is a member of both the Big Data Research Center and the Institute Intelligence and Data at Université Laval. He obtained his Ph.D. in Computer Science from the Université de Montréal in 2016, followed by a two-year postdoctoral fellowship at Concordia University, Canada.
                    </p>
                    <p>
                      His research focuses on leveraging artificial intelligence techniques to tackle challenges at the intersection of software engineering, cybersecurity, and system resilience. He works in close collaboration with major industrial partners driving research and innovation across Quebec and Canada, including Ericsson, Hydro-Québec, and the Defence Research and Development Canada (DRDC) – Valcartier Research Centre.
                    </p>
                    <p>
                      His work has received several Distinguished and Best Paper Awards at top-tier conferences and has resulted in multiple patents.
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

export default MohamedSaied;

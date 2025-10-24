import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import moatazChouchen from "@/assets/moataz-chouchen.jpg";

const MoatazChouchen = () => {
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
                    src={moatazChouchen}
                    alt="Dr. Moataz Chouchen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Dr. Moataz Chouchen
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Concordia University, Canada
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
                    Automating Code Review: From Heuristics to Agentic AI
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Abstract</h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>
                      Over the years, the practice of code review has been continuously transformed—from simple heuristic-based mechanisms designed to detect style violations or code duplication, to data-driven models capable of predicting review effort, outcomes, and reviewer expertise. In recent years, this evolution has accelerated with the introduction of Large Language Models (LLMs) and agentic AI systems, which are enabling a new generation of intelligent assistants for software quality assurance.
                    </p>
                    <p>
                      In this talk, the evolution of automated code review will be presented, highlighting the shift from handcrafted rules to learning-based and agentic approaches. Emphasis will be placed on how machine learning, explainable AI, and multi-objective optimization have contributed to improving automation, interpretability, and fairness in modern review pipelines. Recent advances in LLM-based reasoning and autonomous decision-making agents will also be discussed, illustrating how these systems can augment human reviewers by analyzing context, justifying recommendations, and interacting in natural language. The talk will conclude with a discussion on the remaining challenges related to trust, fairness, and evaluation, as software engineering enters the era of truly intelligent and collaborative AI agents.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Moataz Chouchen is an Assistant Professor in the Department of Electrical and Computer Engineering at Concordia University, Canada. His research lies at the intersection of Artificial Intelligence and Software Engineering, with a focus on automated code review, explainable machine learning, and multi-objective optimization. He has received multiple international distinctions, including the PhD Excellence Award from ÉTS Montréal and Best Paper Awards at the ACM ICGSE and IEEE/ACM MSR conferences. His recent work explores how Large Language Models (LLMs) and evolutionary algorithms can be combined to develop intelligent and fair agentic systems that enhance software quality and developer productivity.
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

export default MoatazChouchen;

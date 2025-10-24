import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import fatemehFard from "@/assets/fatemeh-fard.jpg";

const FatemehFard = () => {
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
                    src={fatemehFard}
                    alt="Dr. Fatemeh Hendijani Fard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Dr. Fatemeh Fard
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      University of British Columbia, Canada
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
                    LLM-Based Agents for Software Engineering: Benefits and Drawbacks
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Abstract</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Code Large language models (Code-LLMs) have made significant strides in supporting code intelligence tasks such as code generation and program repair. Despite these advances, a substantial gap remains between the capabilities of Code-LLMs and the expertise of top-tier software engineers. Agentic AI, which enables iterative reasoning and communication among agents, offers a promising avenue by allowing multiple rounds of generation and refinement. However, the foundational Code-LLMs still fall short in terms of reasoning and engineering acumen.
                    </p>
                    <p>
                      In this talk, I will discuss the current limitations of Code-LLMs (even when used in an agentic framework), with a focus on gaps in reasoning and communication. I will then present our recent work on clarifying and enhancing these aspects within both the agentic framework and the underlying models. The talk will conclude with insights and future directions for strengthening the agentic pipeline to better support code generation tasks.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Fatemeh Hendijani Fard is an Assistant Professor at The University of British Columbia, Canada, where she leads the Foundational AIware Research and Development (FARD) lab. Her research interests are at the intersection of Natural Language Processing and Software Engineering, focusing on different aspects of AI including AI Safety, reasoning and explainability, computational efficiency and knowledge transfer for low-resource and domain-specific domains, with limited available data. She collaborates closely with industry, advises some AI startup companies in NLP area, and has served as a program committee member and reviewer in several journals and conferences, including TSE, TOSEM, EMSE, FSE, and ASE. Dr. Fard is an ACM and senior IEEE member. She gets back to the community by mentoring females interested in AI.
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

export default FatemehFard;

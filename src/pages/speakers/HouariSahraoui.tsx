import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import houariSahraoui from "@/assets/houari-sahraoui.jpg";

const HouariSahraoui = () => {
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
                    src={houariSahraoui}
                    alt="Professor Houari Sahraoui"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Pr. Houari Sahraoui
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Université de Montréal, Canada
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
                    No Size Fits All: Goal-Driven Alignment of LLMs for Software Engineering Tasks
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Abstract</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Large Language Models (LLMs) have shown remarkable capabilities in software engineering tasks ranging from modeling assistance to code generation. Yet, their effectiveness depends critically on alignment, ensuring that model outputs meet the objectives, constraints, and preferences of developers and organizations. This keynote will explore the challenges of aligning LLMs for software engineering, focusing on the tension between pretraining objectives and downstream alignment goals.
                    </p>
                    <p>
                      I will discuss different strategies for alignment, including fine-tuning approaches and advanced prompting techniques, and highlight their strengths and limitations in practice. Through concrete examples such as preference-based code generation and domain-modeling assistance with LLMs, the talk will illustrate how alignment can improve relevance, usability, and trustworthiness of AI-powered software engineering tools. Finally, I will outline open research questions and opportunities for building next-generation aligned models that better serve the needs of software engineers and the broader software ecosystem.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Houari Sahraoui is a Professor at the GEODES software engineering lab within the Department of Computer Science and Operations Research at the Université de Montréal. He is also a Vice-Dean at the Faculty of Arts and Sciences. He earned his Ph.D. in Computer Science from Pierre & Marie Curie University (LIP6) in 1995, specializing in Artificial Intelligence. His research focuses on AI for Software Engineering, including software automation, model-driven engineering, digital twins, and generative AI for code and modeling tasks.
                    </p>
                    <p>
                      He has published over 200 papers in top venues, earning multiple Best Paper and ACM SIGSOFT Distinguished Paper Awards as well as the IEEE TCSE 10-Year Most Influential Paper Award. He has held several leadership roles in the software engineering community, serving as General Chair of ASE, MODELS, and VISSOFT, Program Chair of VISSOFT and MODELS, and Program Committee member for numerous top-ranked IEEE and ACM conferences. He has also served as Associate Editor for three journals including Springer Software and System Modeling, and is a founding member of CS-Can | Info-Can, the Canadian society of computer science.
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

export default HouariSahraoui;

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import katsuroInoue from "@/assets/katsuro-inoue.jpg";

const KatsuroInoue = () => {
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
                    src={katsuroInoue}
                    alt="Professor Katsuro Inoue"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Pr. Katsuro Inoue
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Ritsumeikan University, Japan
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
                    Code Clones and Beyond: My Reflections on Software Engineering Research
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Abstract</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      In this talk, I will share my journey in software engineering research, using code clone research as a central case study. A code clone is a snippet of code that is identical or highly similar to another snippet within or across files. Our work on code clones began with an industry-driven need to efficiently manage duplication in large software systems. Initially focused on detection techniques, the field has since expanded to cover less-similar clone detection, clone management, genealogical analysis, and diverse applications in real-world projects.
                    </p>
                    <p>
                      Throughout this evolution, industry collaboration has played a crucial role—software engineering research often grows at the intersection of academic curiosity and industrial needs. I will also reflect on how research topics in software engineering evolve over time, and how researchers must adapt to shifting contexts. In today's AI era, research needs can emerge and vanish quickly, yet the fundamental questions of software engineering remain vital. By tracing the evolution of code clone research and the lessons it offers, I hope to encourage young researchers to pursue research directions that are impactful, adaptable, and sustainable.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Katsuro Inoue is a Professor in the College of Information Science and Engineering at Ritsumeikan University, Japan. He has been conducting research in software engineering for more than three decades, with a primary focus on code clone detection and analysis, software repository mining, and software supply chain compliance. He is one of the original developers of CCFinder, a pioneering code clone detection tool that has been widely adopted in both academia and industry. His work has significantly influenced the field of software maintenance, quality assurance, and program analysis. Beyond research, he has served the international software engineering community through leadership roles, mentoring, and active involvement in conferences such as ICSE (International Conference on Software Engineering), MSR (International Conference on Mining Software Repositories), and IWSC (International Workshop on Software Clones).
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

export default KatsuroInoue;

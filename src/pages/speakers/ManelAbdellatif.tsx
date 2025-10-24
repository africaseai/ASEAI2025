import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import manelAbdellatif from "@/assets/manel-abdellatif.png";

const ManelAbdellatif = () => {
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
                    src={manelAbdellatif}
                    alt="Dr. Manel Abdellatif"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">Dr. Manel Abdellatif</h1>
                  <p className="text-muted-foreground">
                    ÉTS Montreal, Canada
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://www.etsmtl.ca/"
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
                    Ensuring Trust: Testing and Safety Monitoring of Deep Learning-based Systems
                  </h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Abstract</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                    <p>
                      Recent advances in Deep Learning (DL) techniques, such as Deep Neural Networks (DNNs) and Deep Reinforcement Learning (DRL), have enabled the development of highly autonomous AI applications. However, ensuring the correctness and safety of these systems remains a major challenge. The vast state space, probabilistic behavior, and lack of explicit specifications in DL models limit the applicability of traditional software testing methods. Moreover, the opaque nature of DNNs and the non-deterministic behavior of DRL agents make it difficult to establish confidence in their decisions.
                    </p>
                    <p>
                      In this talk, we will discuss recent progress in testing and safety monitoring of DL-based systems, focusing on two main aspects. First, we will present techniques for DNN test selection and test generation, which aim to efficiently identify critical test cases that expose potential faults and improve coverage of learned behaviors. Second, we will explore runtime safety monitoring approaches that continuously assess the system's behavior to detect anomalies and mitigate unsafe decisions in real time.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Biography</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                    <p>
                      Dr. Manel Abdellatif is a professor in the Department of Software Engineering and Information Technology at the École de Technologie Supérieure (ÉTS), Canada. She holds a Ph.D. in Computer Science from Polytechnique Montréal and a Master's degree in Information Technology from ÉTS.
                    </p>
                    <p>
                      Before her appointment as a professor, she worked as an institutional researcher at ÉTS and completed a postdoctoral fellowship at the University of Ottawa in collaboration with General Motors.
                    </p>
                    <p>
                      Her research interests focus primarily on trustworthy AI, software engineering for AI systems, software migration, and software quality.
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

export default ManelAbdellatif;

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import michelChaudron from "@/assets/michel-chaudron.png";

const MichelChaudron = () => {
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
                    src={michelChaudron}
                    alt="Professor Michel Chaudron"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Pr. Michel Chaudron
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Eindhoven University of Technology, Netherlands
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
                  <p className="text-lg">On Software Architecture</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Abstract</h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p className="font-semibold text-foreground">
                      Outline of Talk by Prof. Michel Chaudron
                    </p>
                    
                    <div>
                      <p className="font-semibold text-foreground mb-2">
                        Introduction of the notion of software architecture
                      </p>
                      <p>What is it and how can it be of use.</p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">
                        On Modeling and Designing of software architecture
                      </p>
                      <p>
                        I will explain my meanings of these terms in order to have clear discussions.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">
                        On the uses of software architecture
                      </p>
                      <p>
                        How can software architecture be used and how do we find it is used in practice.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">
                        Reverse Engineering and Visualisation of Software Architecture
                      </p>
                      <p>
                        Sometimes no clear architecture is available and we need to reconstruct it from what is available – mostly the implementation.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">
                        Software Architecture in the age of AI
                      </p>
                      <p>
                        How may AI change the ways in which we make and use software architectures?
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground">
                        Automated Developer Documentation on Demand
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Michel R. V. Chaudron is a Full Professor of the Software Engineering group within the Department of Mathematics and Computer Science at Eindhoven University of Technology (The Netherlands).
                    </p>
                    <p>
                      With over two decades of academic experience, Professor Chaudron has previously held positions at the University of Gothenburg/Chalmers University of Technology (Sweden), Leiden University and in industry at CMG (now CGI).
                    </p>
                    <p>
                      His research interests encompass software architecture, software design, software modelling, and empirical studies in industrial software engineering practice. Recently, he has focused on the architecting of digital twins (of the human body) and on integrating AI in software development processes.
                    </p>
                    <p>
                      He also works towards increasing inclusiveness of academics from the 'Global South' in the software engineering community. He was co-PI for a 5-year capacity building project on Software and Informatics in Uganda (called 'BRIGHT'). He has organized several workshops co-located with earlier editions of ICSE on this topic, as well as co-organized an African Conference on Software Engineering.
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

export default MichelChaudron;

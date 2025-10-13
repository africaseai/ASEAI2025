import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import lionelBriand from "@/assets/lionel-briand.png";

const LionelBriand = () => {
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
                    src={lionelBriand}
                    alt="Professor Lionel Briand"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Pr. Lionel Briand
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      University of Ottawa, Canada, Lero, Ireland
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Talk 1 */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk 1</h2>
                  <p className="text-lg font-semibold">
                    Why and How to get a PhD?
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Talk 2 */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk 2</h2>
                  <p className="text-lg font-semibold mb-4">
                    Automated Testing and Safety Analysis of Deep Learning Systems
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Abstract</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Software engineering has long sought ways to enhance software testing to ensure that critical software is reliable before deployment. The advent of deep learning (DL) software has disrupted traditional testing and analysis practices, prompting the creation of specialized methods and techniques to address the unique challenges posed by DL. This is particularly crucial in critical systems with safety implications for users and the environment. This presentation will share findings from several years of research on the automation and practical testing of DL models and DL-enabled systems. It will also discuss testing-based safety analysis as an important application of testing.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Biography */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Lionel C. Briand is a professor of software engineering with joint positions at (1) the University of Ottawa, in Canada, and (2) the Lero Centre—the Research Ireland national software research center—hosted by the University of Limerick. Over more than 30 years, in collaboration with colleagues, he has led numerous collaborative research projects with companies in the automotive, satellite, aerospace, energy, finance, and legal sectors. Lionel has held different positions as an engineer, academic, and leader in seven countries. He is currently Canada Research Chair (Tier 1) and director of Lero.
                    </p>
                    <p>
                      Lionel was elevated to Fellow of the IEEE and the ACM for his contributions to software testing and verification. He also received the IEEE Computer Society's Harlan Mills Award, the ACM SIGSOFT Outstanding Research Award, and the IEEE Reliability Society's Engineer of the Year Award. He is a Fellow of the Royal Society of Canada and a member of Academia Europaea, the European Academy of Science. His research interests include trustworthy AI, software testing and verification (including security aspects), and requirements engineering.
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

export default LionelBriand;

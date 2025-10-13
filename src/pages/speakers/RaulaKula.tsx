import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import raulaKula from "@/assets/raula-kula.png";

const RaulaKula = () => {
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
                    src={raulaKula}
                    alt="Professor Raula Gaikovina Kula"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Pr. Raula Gaikovina Kula
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Osaka University, Japan
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
                    Collaborations Result in Diverse Thinking, Novelty and Different Perspectives
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Abstract</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In this talk, I talk about the lessons learnt from different perspectives and collaborations over the years. I also give from a software engineering perspective and how the landscape has shifted since 2010. Parts of this talk was given at the New Faculty Symposium at ICSE2025.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Raula Gaikovina Kula is a professor at the Graduate School of Information Science and Technology, Osaka University. He is also a designated professor at the Osaka University Institute for Advanced Co-Creation Studies. He received his Ph.D. from Nara Institute of Science and Technology (NAIST) in 2013, later joining as a Specially-Appointed Assistant Professor from (2013-2016) at Osaka University. He then continued as a Specially-Appointed Assistant Professor from (2017), later becoming an Assistant Professor (2017-2023), and an Associate Professor (2023-2024) at NAIST. Kula has published over 150 publications in top Software Engineering venues, collaborating with several researchers from across the globe, and is a member of both Editorial and Steering Committees.
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

export default RaulaKula;

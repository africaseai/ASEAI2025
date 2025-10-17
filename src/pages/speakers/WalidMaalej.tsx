import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import walidMaalej from "@/assets/walid-maalej.png";

const WalidMaalej = () => {
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
                    src={walidMaalej}
                    alt="Professor Walid Maalej"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Pr. Walid Maalej
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      University of Hamburg, Germany
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Talk 1 */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk 1: On Hard and Soft Skills for Surviving Your PhD Journey</h2>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Abstract</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In this talk I will reflect on the importance of two types of improvable skills for mastering the difficult challenge of a doctoral thesis, particularly in a field like software engineering or AI. Hard skills mainly cover the ability to overview and master technology as well as to efficiently combine scientific methods. Soft skills mainly include strategic communication, (self-)motivation and dedication, as well as trust in yourself and your advisors.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Talk 2 */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk 2: Generative Requirements Engineering and Design</h2>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Abstract</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Software development projects often fail not due to technical issues, but rather because of misunderstood user needs and missing requirements. As the Turing Award Winner Fred Brooks famously said, "the hardest single part of building a software system is deciding precisely what to build."
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    In this talk, I will reflect on how, in my research journey, I tried to tackle this hard challenge by leveraging data science and machine learning to make users and their feedback a first-order concern in software engineering. I will also discuss how Generative AI, which is currently reshaping software engineering, can be tightened to effectively address the requirements and design challenge, and conclude by highlighting pitfalls and new emerging issues.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Biography */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Walid Maalej is an award-winning software researcher, passionate mentor, and world citizen. As Professor of Informatics at the University of Hamburg, he teaches software development to up to 700 students in a single room, combining fun activities (such as paper planes and finger flicking) with pair-programming. His research interests include AI for Software Engineering, Software Engineering for AI, Requirements Engineering, Human Aspects, and Tech Transfer. His work has received four Most Influential Paper Awards, has been cited, a.o., by the UK and US Governments, and has been adopted by multiple large companies, including Siemens and SAP. He once learned, as head of department, how to "navigate a big ship through turbulent waters," including pandemic management and an exceptional budget cut.
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

export default WalidMaalej;

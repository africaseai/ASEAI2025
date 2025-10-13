import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import bruceMaxim from "@/assets/bruce-maxim.jpg";

const BruceMaxim = () => {
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
                    src={bruceMaxim}
                    alt="Professor Bruce R. Maxim"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Pr. Bruce R. Maxim
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      University of Michigan-Dearborn, USA
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
                    Human in the Loop: Responsible Use of Generative AI Tools in Software Engineering Practice
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Abstract</h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>
                      The rapid rise of GenAI is transforming engineering practice, by providing developers with tools that improve their efficiency. GenAI can generate code from specific requirements. However, this code is often insecure and of low quality. Students are tempted to use AI-generated code without understanding its weaknesses, leading many instructors to consider prohibiting the use of GenAI tools. GenAI use in commercial software development is inevitable. GenAI can help resolve issues caused by technical debt. Students need opportunities to experiment with these tools to complete various software engineering tasks, but with a human in the loop to evaluate the correctness and validity of any proposed AI solution.
                    </p>
                    <p>
                      Research shows reflective writing benefits problem-solving experiences. Promoting reflective thinking helps learners develop strategies for unpredictable real-world software development situations. Students should be encouraged to use reflective writing to assess ChatGPT's recommendations and their own prompt quality, training them to become critical assessors of AI output. This approach embeds responsible AI literacy into the curriculum, preparing students for a GenAI-augmented industry. Active learning and reflective writing have been shown to deepen understanding and metacognitive skills. This framework ensures that GenAI serves as a tool for active inquiry rather than passive automation, fostering the critical awareness essential for modern software engineering practice.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Bruce R. Maxim is Professor of Computer and Information Science and the Narasimhamurthi "Nattu" Natarajan Collegiate Professor of Engineering at the University of Michigan - Dearborn. His research interests include software engineering, user experience design, serious game development, virtual reality, social media, artificial intelligence, and engineering education. He has published papers on the animation of computer algorithms, software quality assurance, game development, and educational computing applications. He is co-author of a best-selling introductory computer science text and the world's most popular software engineering text. He has served as co-editor of three collections of software engineering research papers. Prior to coming to the University of Michigan - Dearborn, Dr. Maxim's professional experience included managing research information systems at a medical school, directing instructional computing activities for a medical campus, and working as a statistical programmer in a department of epidemiology. He has served as the chief technology officer for a game development company.
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

export default BruceMaxim;

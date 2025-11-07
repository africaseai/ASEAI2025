import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import prasunLala from "@/assets/prasun-lala.jpg";

const PrasunLala = () => {
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
                    src={prasunLala}
                    alt="Mr. Prasun Lala"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Mr. Prasun Lala
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      ÉTS Montréal, Université du Québec, Canada
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.etsmtl.ca/en/auteur/prasun-lala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit"
                    >
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Talk 1 Details */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk 1: 11 steps to structuring a manuscript</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      This flash workshop, based on resources from Elsevier, will provide researchers with a step-by-step guide for organizing and writing scientific manuscripts. The best writing strategy often reverses the final published IMRAD format (Introduction, Methods, Results, and Discussion), by first preparing figures and tables, and then writing the Methods and Results before tackling the crucial Discussion section. The Discussion is arguably the most important section, presenting the chance to "sell your data" and confront existing work, rather than ignoring contradictory findings.
                    </p>
                    <p>
                      Editorial acceptance often requires that the Methods section allows for experimental reproducibility through precise nomenclature and control descriptions, and that the Results section tells a clear story. Participants will learn the value of writing a compelling Introduction that moves from a global view to clearly stating the hypothesis and objectives at the end. Finally, we will cover crafting an Abstract and a concise Title, which together serve as the article's "calling card" to attract readers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talk 2 Details */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk 2: Think like a reviewer</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      This flash workshop will offer a structured approach for researchers seeking to improve their proficiency in the peer review process. Reviewing constitutes a crucial collective effort that helps preserve the general quality of published articles. The function of a review is twofold: ensuring quality control for the targeted journal or conference, and providing constructive criticism to authors to help them improve their work.
                    </p>
                    <p>
                      Committing to a review includes verifying sufficient competence in the manuscript's topic, respecting deadlines, maintaining confidentiality, and avoiding conflicts of interest. The evaluation process emphasizes careful, repeated reading to identify the paper's main contributions and evaluate their originality. We will discuss how to scrutinize the research, focusing on the quality of the methodological contents (checking assumptions and reproducibility) and the experimental methodology. Furthermore, attendees will learn the importance of assessing the results, including the use of statistical details and fair comparisons to the state-of-the-art.
                    </p>
                    <p>
                      The second half focuses on report writing. A quality report should systematically include a neutral factual summary to demonstrate comprehension, a critical summary outlining global strengths and weaknesses, and a detailed, numbered list of comments that reference specific sections and suggest corrective measures. The final recommendation (kept confidential from the authors) allows the reviewer to justify their decision and indicate their confidence level.
                    </p>
                  </div>
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
                      Prasun Lala is a Research Officer at the library of the École de Technologie Supérieure (ÉTS) in Montréal where he guides researchers and graduate students in scientific communication, research data management, AI, and other research-related topics. He holds an M.Sc. in Neurophysiology from the Aerospace Medical Research Unit (AMRU) at McGill University and was previously a doctoral candidate in Electrical and Computer Engineering at the Centre for Intelligent Machines (CIM) at McGill.
                    </p>
                    <p>
                      His technical experience includes serving as a Research Associate on the Enhanced and Synthetic Vision System (ESVS) technology demonstrator project for Canadian Forces Search and Rescue at CIM, and acting as Director of Technology managing R&D processes for a New York-based firm. He has been an official reviewer for eleven conferences in computer vision and related fields. He believes that the effective communication of scientific ideas is as important as their discovery and strives to ensure all articles possess a clear narrative. He has lectured and taught courses at McGill University, École Polytechnique Montréal, Université de Montréal, and ÉTS, and has presented numerous workshops and moderated events at international scientific conferences.
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

export default PrasunLala;

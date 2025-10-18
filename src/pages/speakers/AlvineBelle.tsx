import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import alvineBelle from "@/assets/alvine-belle.jpg";

const AlvineBelle = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <Link to="/#speakers">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Speakers
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Speaker Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <img
                src={alvineBelle}
                alt="Pr. Alvine Boaye Belle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">Pr. Alvine Boaye Belle</h1>
                <p className="text-xl text-muted-foreground">
                  York University, Canada
                </p>
              </div>
              <Button variant="outline" asChild>
                <a
                  href="https://lassonde.yorku.ca/users/alvinebelle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Talk Details */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk Title</h2>
                  <p className="text-lg">
                    System assurance in the era of Large Language Models
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Abstract</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Justifying the correct implementation of the non-functional requirements (e.g., safety, security, reliability) of mission-critical systems is crucial to prevent system failure. The latter could have severe consequences such as the death of people, financial losses, and environmental damage. Assurance cases (e.g., safety cases, security cases) can be used to prevent system failure. They are structured sets of arguments supported by evidence and aiming at demonstrating that a system's non-functional requirements have been correctly implemented. However, although the availability of complete assurance cases is crucial to allow the research community to contribute to the system assurance field, it remains very challenging to access complete assurance cases due to several concerns such as confidentiality issues. Furthermore, assurance cases are usually very large documents. Still, their creation remains a manual, labor-intensive, and error-prone process that heavily relies on domain expertise. Therefore, relying on (semi-)automated techniques such as those supported by generative AI through LLMs (Large Language Models) could alleviate the task of assurance case developers by facilitating the execution of all activities related to the assurance case lifecycle. In this keynote, I will discuss current solutions on LLM-based system assurance to inform future research on this topic. I will illustrate these solutions with various case studies spanning several application domains (e.g., healthcare, automotive, and nuclear).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Alvine B. Belle is an Assistant Professor at the Department of Electrical Engineering and Computer Science at York University, Toronto, Canada. Her work focuses on generative AI, safety assurance, autonomous systems and EDI in computing. She started university the year she turned sixteen. She holds a Ph.D. in software engineering from the University of Quebec (Ecole de Technologie Supérieure), Montreal, Canada. She worked for two years as a postdoctoral researcher at the University of Ottawa, Ottawa, Canada. She has recently completed a three-year graduate diploma in public administration and governance at McGill University, Montreal, Canada. She has authored several papers in top-tier venues such as Information and Software Technology, ACM Computing Surveys, Journal of Systems and Software, AIware, ICSA (formerly ECSA), and ACM Transactions on Computing Education.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlvineBelle;

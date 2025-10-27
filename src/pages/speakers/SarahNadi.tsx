import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import sarahNadi from "@/assets/sarah-nadi.jpg";

const SarahNadi = () => {
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
                    src={sarahNadi}
                    alt="Professor Sarah Nadi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Dr. Sarah Nadi
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      New York University Abu Dhabi, UAE
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Talk 1 */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk 1 - Student Mentoring</h2>
                  <p className="text-lg font-semibold mb-4">
                    Navigating Graduate School and Beyond
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Abstract</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In this talk, I'll share my experience as a graduate student as well as a post-doctoral researcher along with the lessons learned in the process. I will talk about the key aspects that I think are essential for a successful PhD. The talk will leave plenty of time for questions and discussion.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Talk 2 */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Talk 2 - Faculty Mentoring</h2>
                  <p className="text-lg font-semibold mb-4">
                    The Chronicles of a Professor
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Abstract</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In this talk, I'll reflect on the life of a professor, mainly focusing on recruiting and supervising graduate students, teaching, applying for (industry) funding, and getting tenure. The talk will mainly summarize my own experiences and leave time for questions and discussion.
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
                      Sarah Nadi is an Associate Professor in the Computer Science Program at New York University Abu Dhabi (NYUAD). Before joining NYUAD, she spent almost eight years at the University of Alberta in Canada where she held a Tier II Canada Research Chair in Software reuse and lead the Software Maintenance and Reuse (SMR) lab. Sarah obtained her Master's (2010) and PhD (2014) degrees from the University of Waterloo in Canada and spent approximately two years as a post-doctoral researcher at the Technische Universität Darmstadt in Germany.
                    </p>
                    <p>
                      At NYUAD, Sarah co-directs the SANAD lab whose goal is to enhance how software engineers develop and maintain software systems by providing them with the tools and insights that they need. Sarah's research expertise lies in empirical software engineering and software analytics. She has worked on a wide range of software engineering problems including finding bugs and inconsistencies in software product line, detecting insecure API usage, and leveraging LLMs for various development and maintenance tasks. Her recent work focuses on supporting developers as they use software libraries, including the initial selection process, correctly using the library's API, and potential migration to newer versions or alternative libraries.
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

export default SarahNadi;

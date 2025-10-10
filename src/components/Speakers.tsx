import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Speakers = () => {
  const plenarySpeakers = [
    {
      name: "Pr. Ali Ouni",
      title: "Full Professor, Computer Science and Software Engineering",
      image: "https://ci4se.github.io/AISE2025/images/Ali.jpg",
      website: "https://ouniali.github.io/",
    },
    {
      name: "Dr. Makram Soui",
      title: "Assistant Professor of Computer Science, College of Innovation and Technology, The University of Michigan-Flint",
      image: "https://ci4se.github.io/AISE2025/images/Makram.jpg",
      website: "https://directory.umflint.edu/computer-science-engineering-and-physics/msoui",
    },
    {
      name: "Dr. Moataz Chouchen",
      title: "Assistant Professor of Electrical and Computer Engineering, Concordia University, Canada",
      image: "https://ci4se.github.io/AISE2025/images/moataz.jpg",
      website: "https://www.concordia.ca/faculty/moataz-chouchen.html",
    },
  ];

  const lecturers = [
    {
      name: "Pr. Latifa Ben Arfa Rabai",
      title: "Full Professor, Higher Institute of Management of Tunis, Tunisia",
      image: "https://ci4se.github.io/AISE2025/images/Latifa.jpg",
      website: "https://orcid.org/0000-0002-5657-4682",
    },
    {
      name: "Dr. Mariem Zhioua",
      title: "VERMEG Tunisia",
      image: "https://ci4se.github.io/AISE2025/images/Zhioua.jpg",
      website: "https://tn.linkedin.com/in/meriem-zhioua-a0312645",
    },
    {
      name: "Dr. Mohamed Wiem Mkaouer",
      title: "Associate Professor, Graduate Program Director of Artificial Intelligence and Software Engineering, University of Michigan-Flint",
      image: "https://ci4se.github.io/AISE2025/images/Wiem2.jpg",
      website: "https://directory.umflint.edu/computer-science-engineering-and-physics/mmkaouer",
    },
    {
      name: "Dr. Montassar Ben Messaoud",
      title: "Assistant Professor, Tunis Business School, Tunisia",
      image: "https://ci4se.github.io/AISE2025/images/montassar.png",
      website: "https://tunis-business-school.tn/member/montassar-ben-messaoud/",
    },
    {
      name: "Eng. Mohamed Tounsi",
      title: "REGNOLOGY Tunisia",
      image: "https://ci4se.github.io/AISE2025/images/tounsi.jpg",
      website: "https://tn.linkedin.com/in/mohamed-tounsi-b7a938278",
    },
  ];

  return (
    <section id="speakers" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Meet Our Plenary Speakers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Plenary Speakers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plenarySpeakers.map((speaker, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground min-h-[60px]">
                    {speaker.title}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={speaker.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Lecturers Section */}
          <div className="text-center space-y-4 pt-8">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Lecturers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {lecturers.map((lecturer, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={lecturer.image}
                    alt={lecturer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="text-lg font-bold">{lecturer.name}</h3>
                  <p className="text-xs text-muted-foreground min-h-[40px]">
                    {lecturer.title}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={lecturer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;

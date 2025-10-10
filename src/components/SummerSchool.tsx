import { GraduationCap, Target, Users2, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SummerSchool = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Provide senior undergraduate, M.Sc., and PhD students with hands-on knowledge and expert views on the future of AI and software engineering.",
    },
    {
      icon: GraduationCap,
      title: "What You'll Learn",
      description:
        "Design AI-enabled software systems, their evolution, debugging, and practical implementation through real-world applications.",
    },
    {
      icon: Users2,
      title: "World-Class Speakers",
      description:
        "Learn from plenary speakers who are active researchers in North American and international institutes.",
    },
    {
      icon: Building2,
      title: "Industry & Academia",
      description:
        "Lectures by local researchers from both academia and industry, bringing diverse perspectives to students.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              IEEE CIS Summer School 2025
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supporting the cause of AI education and innovation in Africa
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              As part of supporting this cause, it is our pleasure to call for the initiation of the 2025 IEEE CIS
              Summer School on Computational Intelligence for Software Engineering.
              The main goal of the summer school is to provide senior undergraduate
              students, M.Sc. or PhD students and other potential audience with
              hands-on knowledge and expert views on the future development at the
              intersection between AI and software engineering.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Topics include how to design AI-enabled software systems, their
              evolution and debugging. The Talks will be given by Plenary Speakers
              that are active researchers in North American and international
              institutes. Lecturers will be given by local researchers from both
              Academia and Industry, to bring both perspectives for the students.
              The first edition of the summer school will be located in Tunisia,
              co-sponsored by the LARODEC Laboratory and the Institute of Data
              Engineering, Analytics, and Science at the University of Michigan-Flint.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sponsors */}
          <div className="pt-8 text-center">
            <p className="text-lg text-muted-foreground">
              Co-sponsored by the{" "}
              <span className="font-semibold text-foreground">LARODEC Laboratory</span>{" "}
              and the{" "}
              <span className="font-semibold text-foreground">
                Institute of Data Engineering, Analytics, and Science
              </span>{" "}
              at the{" "}
              <span className="font-semibold text-foreground">
                University of Michigan-Flint
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerSchool;

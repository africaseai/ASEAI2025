import { GraduationCap, Target, Users2, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SummerSchool = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Research Talks",
      description:
        "Emerging topics in Software Engineering and AI presented by world-class researchers and practitioners.",
    },
    {
      icon: Users2,
      title: "Research Student Mentoring",
      description:
        "Direct mentoring opportunities with leading researchers to guide your research journey.",
    },
    {
      icon: Target,
      title: "New Faculty Mentoring",
      description:
        "Support and guidance for new faculty members entering the field of AI and Software Engineering.",
    },
    {
      icon: Building2,
      title: "AI Certifications",
      description:
        "Earn certifications with NVIDIA to validate your skills in AI and computational intelligence.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Topics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The winter school is built around four main pillars
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

        </div>
      </div>
    </section>
  );
};

export default SummerSchool;

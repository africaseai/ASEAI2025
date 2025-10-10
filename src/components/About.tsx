import { TrendingUp, Users, Globe, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "2,400+",
      label: "AI Companies in Africa",
    },
    {
      icon: TrendingUp,
      value: "$8.75B",
      label: "Expected Market by 2028",
    },
    {
      icon: Globe,
      value: "30+",
      label: "AI Communities",
    },
    {
      icon: Sparkles,
      value: "3 Days",
      label: "Intensive Learning",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-4 text-primary" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Shaping Africa's AI Future
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              A dynamic AI landscape is emerging throughout Africa, poised to have a
              transformative impact. In Africa alone, over 2,400 companies are
              reportedly involved in AI.
            </p>

            <p>
              According to Statista, the generative AI market in Africa is expected
              to expand from $0.89 billion in 2024 to $8.75 billion by 2028. More
              than 30 AI communities, from developing regions such as Sudan and Mali
              to well-established centers like South Africa and Tunisia, are leading
              this movement.
            </p>

            <p>
              Therefore, universities critically need to support this growth by
              providing AI-focused software engineering skills and specializations,
              to develop and sustain the next generation of AI-software
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

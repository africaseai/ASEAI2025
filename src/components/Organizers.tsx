import { Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Organizers = () => {
  const organizers = [
    {
      name: "LARODEC Laboratory",
      role: "Co-sponsor",
    },
    {
      name: "Institute of Data Engineering, Analytics, and Science",
      institution: "University of Michigan-Flint",
      role: "Co-sponsor",
    },
  ];

  return (
    <section id="organizers" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Organizers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {organizers.map((org, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <CardContent className="p-8 text-center space-y-3">
                  <Building2 className="h-12 w-12 mx-auto text-primary" />
                  <h3 className="text-xl font-semibold">{org.name}</h3>
                  {org.institution && (
                    <p className="text-muted-foreground">{org.institution}</p>
                  )}
                  <p className="text-sm text-primary font-medium">{org.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;

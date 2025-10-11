import { Mail, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Organizers = () => {
  const mainOrganizers = [
    {
      name: "Pr. Ali Ouni",
      title: "ÉTS Montreal, University of Quebec, Canada",
      image: "https://via.placeholder.com/400x400?text=Ali+Ouni",
      email: "ali.ouni@etsmtl.ca",
      website: "https://ouniali.github.io/",
    },
    {
      name: "Dr. Med Wiem Mkaouer",
      title: "University of Michigan-Flint, USA",
      image: "https://via.placeholder.com/400x400?text=Wiem+Mkaouer",
      email: "mmkaouer@umich.edu",
      website: "https://directory.umflint.edu/computer-science-engineering-and-physics/mmkaouer",
    },
    {
      name: "Dr. Maha Khemdja",
      title: "ISSAF Sousse, Tunisia",
      image: "https://via.placeholder.com/400x400?text=Maha+Khemdja",
      email: "maha.khemdja@issatso.u-sousse.tn",
      website: "https://www.issatso.rnu.tn/",
    },
    {
      name: "Dr. Montassar Ben Messaoud",
      title: "TBS, Tunisia",
      image: "https://via.placeholder.com/400x400?text=Montassar+Ben+Messaoud",
      email: "montassar.benmessaoud@tbs.u-tunis.tn",
      website: "https://tunis-business-school.tn/member/montassar-ben-messaoud/",
    },
  ];


  return (
    <section id="organizers" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Organizing Committee</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Main Organizers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainOrganizers.map((organizer, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="text-lg font-bold">{organizer.name}</h3>
                  <p className="text-xs text-muted-foreground min-h-[40px]">
                    {organizer.title}
                  </p>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a
                        href={`mailto:${organizer.email}`}
                        className="flex items-center justify-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a
                        href={organizer.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Website
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
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

export default Organizers;

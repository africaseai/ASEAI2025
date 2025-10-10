import { Mail, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Organizers = () => {
  const mainOrganizers = [
    {
      name: "Dr. Mohamed Wiem Mkaouer",
      title: "Associate Professor, Graduate Program Director of Artificial Intelligence and Software Engineering, University of Michigan-Flint",
      image: "https://ci4se.github.io/AISE2025/images/Wiem2.jpg",
      email: "mmkaouer@umich.edu",
      website: "https://directory.umflint.edu/computer-science-engineering-and-physics/mmkaouer",
    },
    {
      name: "Dr. Montassar Ben Messaoud",
      title: "Assistant Professor, Tunis Business School, Tunisia",
      image: "https://ci4se.github.io/AISE2025/images/montassar.png",
      email: "montassar.benmessaoud@tbs.u-tunis.tn",
      website: "https://tunis-business-school.tn/member/montassar-ben-messaoud/",
    },
  ];

  const localOrganizers = [
    {
      name: "Dr. Rihab Bouslama",
      title: "Assistant Professor, Tunis Business School, Tunisia",
      image: "https://ci4se.github.io/AISE2025/images/Rihab.png",
      email: "rihab.bouslama@tbs.u-tunis.tn",
      website: "https://tunis-business-school.tn/member/rihab-bouslama/",
    },
    {
      name: "Dr. Mehdi Khouja",
      title: "Assistant Professor, Tunis Business School, Tunisia",
      image: "https://ci4se.github.io/AISE2025/images/Mehdi.jpg",
      email: "mehdi.khouja@tunis-business-school.tn",
      website: "https://tunis-business-school.tn/member/mehdi-khouja/",
    },
    {
      name: "Dr. Chaima Chaieb",
      title: "Lecturer of Business Computing, Tunis Business School, Tunisia",
      image: "https://ci4se.github.io/AISE2025/images/Chaima.jpg",
      email: "chaima.chaieb@tbs.u-tunis",
      website: "https://tunis-business-school.tn/member/chaima-chaieb/",
    },
  ];

  return (
    <section id="organizers" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Main Organizers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Main Organizers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{organizer.name}</h3>
                  <p className="text-sm text-muted-foreground min-h-[60px]">
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

          {/* Local Organizers */}
          <div className="text-center space-y-4 pt-8">
            <h2 className="text-3xl md:text-4xl font-bold">Local Organizers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {localOrganizers.map((organizer, index) => (
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

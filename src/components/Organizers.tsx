import { Mail, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aliOuni from "@/assets/ali-ouni.png";
import wiemMkaouer from "@/assets/wiem-mkaouer.jpg";
import mahaKhemdja from "@/assets/maha-khemdja.png";
import montassarBenMessaoud from "@/assets/montassar-ben-messaoud.jpg";
import dalelKanzari from "@/assets/dalel-kanzari.png";
import besmaYounes from "@/assets/besma-younes.jpg";
import hichemTurki from "@/assets/hichem-turki.jpg";

const Organizers = () => {
  const mainOrganizers = [
    {
      name: "Pr. Ali Ouni",
      title: "ÉTS Montreal, University of Quebec, Canada",
      image: aliOuni,
      email: "ali.ouni@etsmtl.ca",
      website: "https://ouniali.github.io/",
    },
    {
      name: "Dr. Med Wiem Mkaouer",
      title: "University of Michigan-Flint, USA",
      image: wiemMkaouer,
      email: "mmkaouer@umich.edu",
      website: "https://directory.umflint.edu/computer-science-engineering-and-physics/mmkaouer",
    },
    {
      name: "Dr. Maha Khemdja",
      title: "ISSAT Sousse, Tunisia",
      image: mahaKhemdja,
      email: "maha.khemdja@issatso.u-sousse.tn",
      website: "https://www.issatso.rnu.tn/",
    },
    {
      name: "Dr. Montassar Ben Messaoud",
      title: "TBS, Tunisia",
      image: montassarBenMessaoud,
      email: "montassar.benmessaoud@tbs.u-tunis.tn",
      website: "https://tunis-business-school.tn/member/montassar-ben-messaoud/",
    },
  ];

  const localOrganizers = [
    {
      name: "Dr. Dalel Kanzari",
      title: "ISSAT, Tunisia",
      image: dalelKanzari,
    },
    {
      name: "Mrs. Besma Younes",
      title: "Novation City, Tunisia",
      image: besmaYounes,
    },
    {
      name: "Mr. Hichem Turki",
      title: "Novation City, Tunisia",
      image: hichemTurki,
    },
  ];

  const additionalRoles = [
    {
      role: "Web Chair",
      people: [
        { name: "Jasem Khelifi", affiliation: "ÉTS Montreal, Canada" }
      ]
    },
    {
      role: "Publicity Chairs",
      people: [
        { name: "Zaki Brahmi", affiliation: "ETS Montreal, Canada" },
        { name: "Issam Oukhay", affiliation: "ETS Montreal, Canada" },
        { name: "Mayssa Ben Kahla", affiliation: "Université de Sousse, Tunisia" },
        { name: "Sami Achour", affiliation: "Université de Sousse, Tunisia" }
      ]
    }
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

          {/* Local Organizers */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">Local Organizers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                  <CardContent className="p-4 space-y-2">
                    <h4 className="text-base font-bold">{organizer.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {organizer.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Roles */}
          <div className="space-y-8">
            {additionalRoles.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-4 text-center">{section.role}</h3>
                <div className={`flex flex-wrap gap-4 ${section.people.length === 1 ? 'justify-center' : 'justify-center md:justify-start'}`}>
                  {section.people.map((person, personIdx) => (
                    <Card
                      key={personIdx}
                      className="border-0 shadow-lg w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
                      style={{ boxShadow: "var(--card-shadow)" }}
                    >
                      <CardContent className="p-4 text-center">
                        <h4 className="font-semibold text-base">{person.name}</h4>
                        <p className="text-sm text-muted-foreground mt-2">{person.affiliation}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;

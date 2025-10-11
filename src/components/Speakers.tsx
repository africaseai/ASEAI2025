import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ahmedHassan from "@/assets/ahmed-hassan.jpg";
import lionelBriand from "@/assets/lionel-briand.png";

const Speakers = () => {
  const plenarySpeakers = [
    {
      name: "Pr. Ahmed E. Hassan",
      title: "Queen's University, Canada",
      image: ahmedHassan,
      website: "https://research.cs.queensu.ca/home/ahmed/",
    },
    {
      name: "Pr. Lionel Briand",
      title: "University of Ottawa, Canada, Lero, Ireland",
      image: lionelBriand,
      website: "https://www.lero.ie/people/lionel-briand",
    },
    {
      name: "Pr. Katsuro Inoue",
      title: "Nanzan University, Japan",
      image: "https://via.placeholder.com/400x400?text=Katsuro+Inoue",
      website: "https://www.nanzan-u.ac.jp/English/",
    },
    {
      name: "Pr. Houari Sahraoui",
      title: "Université de Montréal, Canada",
      image: "https://via.placeholder.com/400x400?text=Houari+Sahraoui",
      website: "https://diro.umontreal.ca/repertoire-departement/professeurs/professeur/in/in14695/sg/Houari%20Sahraoui/",
    },
    {
      name: "Pr. Yann-Gaël Guéhéneuc",
      title: "Concordia University, Canada",
      image: "https://via.placeholder.com/400x400?text=Yann+Gael+Gueheneuc",
      website: "https://www.concordia.ca/faculty/yann-gael-gueheneuc.html",
    },
    {
      name: "Pr. Walid Maalej",
      title: "University of Hamburg, Germany",
      image: "https://via.placeholder.com/400x400?text=Walid+Maalej",
      website: "https://www.inf.uni-hamburg.de/en/inst/ab/se/people/maalej.html",
    },
    {
      name: "Dr. Simon Peyton Jones",
      title: "Microsoft Research Cambridge, UK",
      image: "https://via.placeholder.com/400x400?text=Simon+Peyton+Jones",
      website: "https://www.microsoft.com/en-us/research/people/simonpj/",
    },
    {
      name: "Pr. Michel Chaudron",
      title: "Eindhoven University of Technology, Netherlands",
      image: "https://via.placeholder.com/400x400?text=Michel+Chaudron",
      website: "https://research.tue.nl/en/persons/michel-chaudron",
    },
    {
      name: "Pr. Hafedh Mili",
      title: "Université du Québec à Montréal, Canada",
      image: "https://via.placeholder.com/400x400?text=Hafedh+Mili",
      website: "https://professeurs.uqam.ca/professeur/mili.hafedh/",
    },
    {
      name: "Pr. Raula Gaikovina Kula",
      title: "Osaka University, Japan",
      image: "https://via.placeholder.com/400x400?text=Raula+Kula",
      website: "https://raux.github.io/",
    },
    {
      name: "Pr. Bruce R. Maxim",
      title: "University of Michigan-Dearborn, USA",
      image: "https://via.placeholder.com/400x400?text=Bruce+Maxim",
      website: "https://umdearborn.edu/users/bmaxim",
    },
    {
      name: "Pr. Tegawendé F. Bissyandé",
      title: "SnT, University of Luxembourg",
      image: "https://via.placeholder.com/400x400?text=Tegawende+Bissyande",
      website: "https://bissyande.github.io/",
    },
    {
      name: "Dr. Fatemeh Fard",
      title: "University of British Columbia, Canada",
      image: "https://via.placeholder.com/400x400?text=Fatemeh+Fard",
      website: "https://fard.people.ubc.ca/",
    },
    {
      name: "Dr. Manel Abelllatif",
      title: "ÉTS Montreal, Canada",
      image: "https://via.placeholder.com/400x400?text=Manel+Abelllatif",
      website: "https://www.etsmtl.ca/",
    },
    {
      name: "Dr. Moataz Chouchen",
      title: "Concordia University, Canada",
      image: "https://via.placeholder.com/400x400?text=Moataz+Chouchen",
      website: "https://www.concordia.ca/faculty/moataz-chouchen.html",
    },
    {
      name: "Dr. Mohamed Aymen Saied",
      title: "Université Laval, Canada",
      image: "https://via.placeholder.com/400x400?text=Mohamed+Saied",
      website: "https://www.ulaval.ca/",
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                <CardContent className="p-4 space-y-3">
                  <h3 className="text-lg font-bold">{speaker.name}</h3>
                  <p className="text-xs text-muted-foreground min-h-[40px]">
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
        </div>
      </div>
    </section>
  );
};

export default Speakers;

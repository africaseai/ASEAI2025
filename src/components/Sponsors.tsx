import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import atpuLogo from "@/assets/atpu.png";
import africaTechLogo from "@/assets/africa-tech.png";
import issatLogo from "@/assets/issat.png";
import nvidiaLogo from "@/assets/nvidia.png";
import larodecLogo from "@/assets/larodec.png";
import acmLogo from "@/assets/acm.png";
import etsLogo from "@/assets/ets.png";
import novationCityLogo from "@/assets/novation-city.png";
import universityOfSousseLogo from "@/assets/university-of-sousse.png";
import sigsoftLogo from "@/assets/sigsoft.png";
import medtechLogo from "@/assets/medtech.png";

const Sponsors = () => {
  const sponsors = [
    { name: "ATPU", logo: atpuLogo },
    { name: "Africa Tech Institute", logo: africaTechLogo },
    { name: "ISSAT Sousse", logo: issatLogo },
    { name: "NVIDIA", logo: nvidiaLogo },
    { name: "LARODEC", logo: larodecLogo },
    { name: "ACM", logo: acmLogo },
    { name: "ÉTS Montreal", logo: etsLogo },
    { name: "Novation City", logo: novationCityLogo },
    { name: "University of Sousse", logo: universityOfSousseLogo },
    { name: "SIGSOFT", logo: sigsoftLogo },
    { name: "MedTech", logo: medtechLogo },
  ];

  return (
    <section id="sponsors" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Sponsors & Partners</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We are grateful for the support of our sponsors and partners who make this event possible.
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {sponsors.map((sponsor, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-background rounded-lg p-8 h-40 flex items-center justify-center border shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Sponsors;

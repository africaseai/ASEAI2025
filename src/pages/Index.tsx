import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SummerSchool from "@/components/SummerSchool";
import Speakers from "@/components/Speakers";
import Program from "@/components/Program";
import Registration from "@/components/Registration";
import Venue from "@/components/Venue";
import Organizers from "@/components/Organizers";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <SummerSchool />
      <Speakers />
      <Program />
      <Sponsors />
      <Registration />
      <Venue />
      <Organizers />
      <Footer />
    </div>
  );
};

export default Index;

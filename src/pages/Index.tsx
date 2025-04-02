
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rules from "@/components/Rules";
import Location from "@/components/Location";
import Prizes from "@/components/Prizes";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-quiz-dark text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Rules />
      <Location />
      <Prizes />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;

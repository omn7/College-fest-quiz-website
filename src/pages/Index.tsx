import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Rules from "@/components/Rules";
import Location from "../components/Location";
import Prize from "../components/Prize";
import Footer from "../components/Footer";
import Theme from "../components/Theme";
import Countdown from "../components/Countdown";

const Index = () => {
  return (
    <div className="min-h-screen bg-quiz-background">
      <Navigation />
      <div className="mb-8">
        <Hero />
      </div>
      <Countdown />
      <div className="mb-16 md:mb-24">
        <Theme />
      </div>
      <div className="mt-8 md:mt-16">
        <About />
      </div>
      <Rules />
      <Location />
      <Prize />
      <Footer />
    </div>
  );
};

export default Index;

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Rules from "@/components/Rules";
import Location from "../components/Location";
import Prize from "../components/Prize";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import Theme from "../components/Theme";

const Index = () => {
  return (
    <div className="min-h-screen bg-quiz-background">
      <Navigation />
      <Hero />
      <Posts />
      <Theme />
      <About />
      <Rules />
      <Location />
      <Prize />
      <Footer />
    </div>
  );
};

export default Index;

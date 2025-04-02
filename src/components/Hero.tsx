
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const handleDownloadRules = () => {
    // In a real implementation, this would be a link to your PDF file
    toast({
      title: "Downloading Rule Book",
      description: "Your download will begin shortly",
    });
    
    // Simulate download (in real app, replace with actual file URL)
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#'; // Replace with actual PDF URL
      link.download = 'quiz_rulebook.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-block bg-quiz-accent/20 px-4 py-1.5 rounded-full">
              <span className="text-sm font-medium text-quiz-accent">
                October 15-16, 2023
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              COLLEGE <span className="gradient-text">QUIZ</span> CHAMPIONSHIP
            </h1>
            <p className="text-lg text-gray-300 max-w-md mx-auto md:mx-0">
              Test your knowledge, compete with the brightest minds, and win amazing prizes at our annual quiz competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="quiz-button group" asChild>
                <a href="#registration">
                  Register Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button className="quiz-button-outline flex items-center" onClick={handleDownloadRules}>
                <Download className="mr-2 h-4 w-4" /> Rule Book
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-quiz-accent to-quiz-highlight rounded-lg opacity-75 animate-pulse-glow blur-lg"></div>
              <div className="relative bg-quiz-background border border-quiz-accent rounded-lg p-6">
                <div className="text-3xl font-display font-bold mb-4 gradient-text">TIMELINE</div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-quiz-accent flex items-center justify-center mt-1">
                      <span className="text-xs text-white">1</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Registration Deadline</p>
                      <p className="text-sm text-gray-400">October 10, 2023</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-quiz-accent flex items-center justify-center mt-1">
                      <span className="text-xs text-white">2</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Preliminary Round</p>
                      <p className="text-sm text-gray-400">October 15, 2023</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-quiz-accent flex items-center justify-center mt-1">
                      <span className="text-xs text-white">3</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Final Round & Prize Distribution</p>
                      <p className="text-sm text-gray-400">October 16, 2023</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

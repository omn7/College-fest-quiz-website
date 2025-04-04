import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const handleDownloadRules = () => {
    toast({
      title: "Downloading Rule Book",
      description: "Your download will begin shortly",
    });
    
    // Create a link to the PDF file in the public folder
    const link = document.createElement('a');
    link.href = '/QUIZZERS rule book..2-3.pdf'; // Path to the PDF in public folder
    link.download = 'BVCOEL_QUIZ_RULEBOOK.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="pt-16 pb-8 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
            <div className="inline-block bg-quiz-accent/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full">
              <span className="text-xs md:text-sm font-medium text-quiz-accent">
                Date 24/4/25
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              BVCOEL <span className="gradient-text">QUIZ</span> CHAMPIONSHIP
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
                 Warning: May cause excessive fun and knowledge gain. Proceed with curiosity 🚀
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              <Button className="quiz-button group w-full sm:w-auto text-sm md:text-base" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd32-IJxwFMsc0ZwwH5fwUKMsJueRMos-j5UZJaiPsikwTAqw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                  Register Now <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button className="quiz-button-outline flex items-center w-full sm:w-auto text-sm md:text-base" onClick={handleDownloadRules}>
                <Download className="mr-2 h-3 w-3 md:h-4 md:w-4" /> Rule Book
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-quiz-accent to-quiz-highlight rounded-lg opacity-75 animate-pulse-glow blur-lg"></div>
              <div className="relative bg-quiz-background border border-quiz-accent rounded-lg p-3 sm:p-4 md:p-6">
                <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4 gradient-text">TIMELINE</div>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-quiz-accent flex items-center justify-center mt-1">
                      <span className="text-xs text-white">1</span>
                    </div>
                    <div className="ml-2 md:ml-3">
                      <p className="font-medium text-sm md:text-base">Registration Deadline</p>
                      <p className="text-xs md:text-sm text-gray-400">April 16, 2024</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-quiz-accent flex items-center justify-center mt-1">
                      <span className="text-xs text-white">2</span>
                    </div>
                    <div className="ml-2 md:ml-3">
                      <p className="font-medium text-sm md:text-base">Quiz Date</p>
                      <p className="text-xs md:text-sm text-gray-400">Coming soon..</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-quiz-accent flex items-center justify-center mt-1">
                      <span className="text-xs text-white">3</span>
                    </div>
                    <div className="ml-2 md:ml-3">
                      <p className="font-medium text-sm md:text-base">Prize Distribution</p>
                      <p className="text-xs md:text-sm text-gray-400">Coming soon...</p>
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

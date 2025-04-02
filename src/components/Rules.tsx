
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Rules = () => {
  const handleDownloadRules = () => {
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

  const rulesList = [
    "Each team must consist of 3-4 members from the same college.",
    "Participants must carry valid college ID cards on the day of the event.",
    "The quiz will have multiple rounds including written preliminaries and stage finals.",
    "Use of electronic devices during the competition is strictly prohibited.",
    "The quizmaster's decision will be final and binding in case of any disputes.",
    "Registration fee is ₹500 per team (non-refundable).",
    "Late registrations may be considered subject to availability.",
    "All teams must report 30 minutes before the scheduled time."
  ];

  return (
    <section id="rules" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">COMPETITION <span className="gradient-text">RULES</span></h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Familiarize yourself with the rules and regulations to ensure fair play and smooth proceedings.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <div className="quiz-card">
              <h3 className="text-2xl font-bold mb-6">Key Guidelines</h3>
              <ul className="space-y-4">
                {rulesList.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-quiz-accent/20 text-quiz-accent text-sm mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button className="quiz-button-outline flex items-center" onClick={handleDownloadRules}>
                  <Download className="mr-2 h-4 w-4" /> Download Complete Rule Book
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="quiz-card">
              <h3 className="text-2xl font-bold mb-6">Round Format</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-quiz-accent pl-4 py-2">
                  <h4 className="text-lg font-bold text-quiz-accent">Preliminary Round</h4>
                  <p className="text-gray-400 mt-1">Written quiz featuring 30 multiple-choice questions. Top 6 teams advance to the finals.</p>
                </div>
                
                <div className="border-l-4 border-quiz-accent pl-4 py-2">
                  <h4 className="text-lg font-bold text-quiz-accent">Rapid Fire Round</h4>
                  <p className="text-gray-400 mt-1">Quick-fire questions with 10 seconds per answer. Each correct answer earns 10 points.</p>
                </div>
                
                <div className="border-l-4 border-quiz-accent pl-4 py-2">
                  <h4 className="text-lg font-bold text-quiz-accent">Audio-Visual Round</h4>
                  <p className="text-gray-400 mt-1">Identify images, audio clips, and video snippets for 15 points per correct answer.</p>
                </div>
                
                <div className="border-l-4 border-quiz-accent pl-4 py-2">
                  <h4 className="text-lg font-bold text-quiz-accent">Buzzer Round</h4>
                  <p className="text-gray-400 mt-1">First team to hit the buzzer gets to answer. +20 points for correct answers, -10 for incorrect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;

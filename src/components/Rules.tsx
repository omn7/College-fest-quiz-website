
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
      link.href = '../public/Rulebook.pdf'; // Replace with actual PDF URL
      link.download = 'RuleBook.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  const rulesList = [
    "Each team must consist of 1-2 members from the same college.",
    "Participants must carry valid college ID cards on the day of the event.",
    "The quiz will have multiple rounds including written preliminaries and stage finals.",
    "Use of electronic devices during the competition is strictly prohibited.",
    "The quizmaster's decision will be final and binding in case of any disputes.",
    "Registration fee is ₹50 per team (non-refundable).",
    "Late registrations may be considered subject to availability.",
    "All teams must report 10 minutes before the scheduled time."
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
              <h3 className="text-2xl font-bold mb-6">FAQS</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-quiz-accent pl-4 py-2">
                  <h4 className="text-lg font-bold text-quiz-accent">Who can participate? </h4>
                  <p className="text-gray-400 mt-1">Any one can participate with from any college.</p>
                </div>
                
                <div className="border-l-4 border-quiz-accent pl-4 py-2">
                  <h4 className="text-lg font-bold text-quiz-accent">Size of Team Member? </h4>
                  <p className="text-gray-400 mt-1">The size of the team can be of one member or two depends on you.</p>
                </div>
                
                <div className="border-l-4 border-quiz-accent pl-4 py-2">
                  <h4 className="text-lg font-bold text-quiz-accent">Is the Quiz online?</h4>
                  <p className="text-gray-400 mt-1">No, The quiz is offline in college (Bharati Vidyapeeth's College of Engineering Lavale Pune)</p>
                </div>
                
                <div className="border-l-4 border-quiz-accent pl-4 py-2">
                  <h4 className="text-lg font-bold text-quiz-accent">I have a question that isn't answered here. How can I contact you?</h4>
                  <p className="text-gray-400 mt-1">Please visit our "Contact Us" page, where you will find our contact form or email address. Feel free to reach out to us with any further questions you may have.</p>
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

import { Trophy, Medal, Award } from "lucide-react";

const Prize = () => {
  return (
    <section id="prize" className="py-16 md:py-24 bg-quiz-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">PRIZES & <span className="gradient-text">REWARDS</span></h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Exciting prizes await the winners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* First Prize */}
          <div className="quiz-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-quiz-accent/5 to-quiz-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 text-center">
              <div className="bg-quiz-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-quiz-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1st Place</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Trophy</li>
                <li>Certificate of Excellence</li>
                <li>Medal</li>
                <li>Exciting prizes</li>
             
              </ul>
            </div>
          </div>

          {/* Second Prize */}
          <div className="quiz-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-quiz-accent/5 to-quiz-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 text-center">
              <div className="bg-quiz-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Medal className="h-8 w-8 text-quiz-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2nd Place</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Trophy</li>
                <li>Certificate of Achievement</li>
                <li>Medal</li>
                <li>Exciting prizes</li>
                
              </ul>
            </div>
          </div>

          {/* Third Prize */}
          <div className="quiz-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-quiz-accent/5 to-quiz-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 text-center">
              <div className="bg-quiz-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-quiz-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3rd Place</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Trophy</li>
                <li>Certificate of Merit</li>
                <li>Medal</li>
                <li>Exciting prizes</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prize; 
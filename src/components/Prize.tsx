import { Trophy } from "lucide-react";

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

        <div className="max-w-2xl mx-auto">
          <div className="quiz-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-quiz-accent/5 to-quiz-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-12 text-center">
              <div className="bg-quiz-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Trophy className="h-10 w-10 text-quiz-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Coming Soon</h3>
              <p className="text-xl text-gray-400">Stay tuned for exciting prizes and rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prize; 

import { DollarSign, Award, Medal, Trophy } from "lucide-react";

const Prizes = () => {
  return (
    <section id="prizes" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">PRIZES & <span className="gradient-text">REWARDS</span></h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Compete for glory, recognition, and substantial cash prizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="quiz-card text-center relative overflow-hidden group h-full">
            <div className="absolute -top-6 -right-6 bg-quiz-accent/20 h-24 w-24 rounded-full"></div>
            <div className="relative z-10">
              <div className="inline-block p-4 bg-quiz-accent/10 rounded-full mb-6">
                <Medal className="h-8 w-8 text-quiz-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">2nd Runner-up</h3>
              <div className="text-4xl font-display font-bold mb-4 text-gray-300">₹5,000</div>
              <ul className="text-sm text-gray-400 space-y-2 mb-4">
                <li>Bronze Trophies</li>
                <li>Merit Certificates</li>
                <li>Sponsor Gift Hampers</li>
              </ul>
            </div>
          </div>

          <div className="quiz-card text-center border-quiz-accent bg-gradient-to-b from-quiz-background to-quiz-accent/10 relative overflow-hidden group transform md:-translate-y-6">
            <div className="absolute -top-10 -left-10 bg-quiz-accent/30 h-32 w-32 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 bg-quiz-highlight/20 h-24 w-24 rounded-full"></div>
            <div className="relative z-10">
              <div className="inline-block p-4 bg-quiz-accent/20 rounded-full mb-6">
                <Trophy className="h-10 w-10 text-quiz-highlight" />
              </div>
              <div className="text-sm font-semibold bg-quiz-accent text-white px-3 py-1 rounded-full mb-2 inline-block">
                GRAND PRIZE
              </div>
              <h3 className="text-2xl font-bold mb-2">Winner</h3>
              <div className="text-5xl font-display font-bold mb-4 gradient-text">₹15,000</div>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li>Gold Trophies</li>
                <li>Winner Certificates</li>
                <li>Exclusive Sponsor Gifts</li>
                <li>Featured in College Magazine</li>
              </ul>
            </div>
          </div>

          <div className="quiz-card text-center relative overflow-hidden group h-full">
            <div className="absolute -bottom-6 -left-6 bg-quiz-accent/20 h-24 w-24 rounded-full"></div>
            <div className="relative z-10">
              <div className="inline-block p-4 bg-quiz-accent/10 rounded-full mb-6">
                <Award className="h-8 w-8 text-quiz-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1st Runner-up</h3>
              <div className="text-4xl font-display font-bold mb-4 text-gray-300">₹10,000</div>
              <ul className="text-sm text-gray-400 space-y-2 mb-4">
                <li>Silver Trophies</li>
                <li>Merit Certificates</li>
                <li>Sponsor Merchandise</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="quiz-card">
          <div className="flex items-start mb-6">
            <div className="bg-quiz-accent/10 p-3 rounded-full mr-4">
              <DollarSign className="h-6 w-6 text-quiz-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Total Prize Pool: ₹25,000</h3>
              <p className="text-gray-400">In addition to cash prizes, winners receive trophies, certificates, and sponsor gifts.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-quiz-muted rounded-lg p-4">
              <h4 className="font-bold mb-2">Special Recognition Awards</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Best Team Name: ₹1,000</li>
                <li>• Most Entertaining Team: ₹1,000</li>
                <li>• Best College Representation: ₹1,000</li>
              </ul>
            </div>
            <div className="border border-quiz-muted rounded-lg p-4">
              <h4 className="font-bold mb-2">Participation Benefits</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Digital Participation Certificates</li>
                <li>• Event Merchandise</li>
                <li>• Networking Opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;

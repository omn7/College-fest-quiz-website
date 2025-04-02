
import { Award, Brain, Trophy, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-quiz-accent" />,
      title: "Mind-Bending Questions",
      description: "Carefully crafted questions across various categories to challenge your intellect."
    },
    {
      icon: <Users className="h-8 w-8 text-quiz-accent" />,
      title: "Team Participation",
      description: "Form teams of 3-4 members and collaborate to solve complex problems."
    },
    {
      icon: <Trophy className="h-8 w-8 text-quiz-accent" />,
      title: "Compete for Glory",
      description: "Prove your team's superiority against the brightest minds in the college."
    },
    {
      icon: <Award className="h-8 w-8 text-quiz-accent" />,
      title: "Valuable Prizes",
      description: "Win certificates, trophies, and exciting cash prizes worth ₹25,000."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-quiz-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">ABOUT THE <span className="gradient-text">COMPETITION</span></h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Our annual quiz competition brings together the most knowledgeable students for an intellectual showdown.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="quiz-card flex flex-col items-center text-center"
            >
              <div className="mb-6 p-3 bg-quiz-accent/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

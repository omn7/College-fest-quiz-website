import { Globe, Microscope, Trophy, Users, Film } from "lucide-react";
import { useState } from "react";

const Theme = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics = [
    {
      id: "gk",
      title: "General Knowledge",
      icon: <Globe className="h-6 w-6 md:h-8 md:w-8" />,
      gradient: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      description: "Test your general knowledge",
      subtopics: [
        { title: "Capitals and countries" },
        { title: "National Symbols" },
        { title: "Famous monuments and places" }
      ]
    },
    {
      id: "aptitude",
      title: "Aptitude",
      icon: <Microscope className="h-6 w-6 md:h-8 md:w-8" />,
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      description: "Explore Aptitude",
      subtopics: [
        { title: "Analytical & Critical Thinking" },
        { title: "Bonus Fun Aptitude Topics" }
      ]
    },
    {
      id: "sports",
      title: "Sports",
      icon: <Trophy className="h-6 w-6 md:h-8 md:w-8" />,
      gradient: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30",
      description: "Sports knowledge quiz",
      subtopics: [
        { title: "Popular games (Cricket, Football, Olympics)" },
        { title: "Famous sportspersons" }
      ]
    },
    {
      id: "personalities",
      title: "Famous Personalities",
      icon: <Users className="h-6 w-6 md:h-8 md:w-8" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      description: "Know about famous people",
      subtopics: [
        { title: "Presidents & Prime Ministers (India & World)" },
        { title: "Founder of Company" },
        { title: "Popular celebrities" }
      ]
    },
    {
      id: "entertainment",
      title: "Entertainment",
      icon: <Film className="h-6 w-6 md:h-8 md:w-8" />,
      gradient: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30",
      description: "Entertainment quiz",
      subtopics: [
        { title: "Bollywood movies and actors" },
        { title: "Famous songs and singers" }
      ]
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  return (
    <section id="theme" className="py-12 md:py-24 bg-quiz-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-quiz-accent/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4">QUIZ <span className="gradient-text">THEMES</span></h2>
          <p className="text-sm md:text-lg text-gray-300 max-w-xl mx-auto">
            Choose a topic and explore its subtopics to test your knowledge!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-7xl mx-auto">
          {topics.map((topic) => (
            <div key={topic.id} className="space-y-3 md:space-y-4">
              {/* Main Topic Card */}
              <div 
                className="group relative cursor-pointer"
                onClick={() => handleTopicClick(topic.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                     style={{ background: `linear-gradient(to bottom right, ${topic.gradient})` }}
                />
                
                <div className="relative bg-quiz-dark/50 backdrop-blur-sm border rounded-2xl p-3 md:p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center min-h-[150px] md:min-h-[180px]"
                     style={{ borderColor: topic.borderColor }}
                >
                  <div className="mb-2 md:mb-3 p-2 rounded-xl bg-gradient-to-br"
                       style={{ background: `linear-gradient(to bottom right, ${topic.gradient})` }}
                  >
                    <div className="text-quiz-accent">
                      {topic.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-quiz-accent transition-colors duration-300 mb-1 text-center">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-gray-400 text-center">
                    {topic.description}
                  </p>
                </div>
              </div>

              {/* Subtopics */}
              {selectedTopic === topic.id && (
                <div className="space-y-2">
                  {topic.subtopics.map((subtopic, index) => (
                    <div 
                      key={index}
                      className="bg-quiz-dark/30 border border-quiz-accent/20 rounded-lg p-2 md:p-3 hover:bg-quiz-dark/50 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white text-xs md:text-sm font-medium group-hover:text-quiz-accent transition-colors duration-300">
                            {subtopic.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Theme; 
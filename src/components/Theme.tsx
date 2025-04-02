import { Cpu, Atom } from "lucide-react";

const Theme = () => {
  const themes = [
    {
      icon: <Cpu className="h-8 w-8" />,
      gradient: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Atom className="h-8 w-8" />,
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <section id="theme" className="py-16 md:py-24 bg-quiz-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-quiz-accent/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">QUIZ <span className="gradient-text">THEMES</span></h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Get ready for an exciting journey through technology and science!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {themes.map((theme, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to bottom right, ${theme.gradient})` }}
              />
              
              {/* Card Content */}
              <div className="relative bg-quiz-dark/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center min-h-[200px]"
                   style={{ borderColor: theme.borderColor }}
              >
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br"
                     style={{ background: `linear-gradient(to bottom right, ${theme.gradient})` }}
                >
                  <div className="text-quiz-accent">
                    {theme.icon}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white group-hover:text-quiz-accent transition-colors duration-300">
                  Coming Soon
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Theme; 
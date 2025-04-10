import { Award, Brain, Trophy, Users } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-quiz-accent" />,
      title: "Mind-Bending Questions",
      description: "Carefully crafted questions across various categories to challenge your intellect."
    },
    {
      icon: <Users className="h-8 w-8 text-quiz-accent" />,
      title: "Team Participation",
      description: "Form teams of 1-2 members and collaborate to solve complex problems."
    },
    {
      icon: <Trophy className="h-8 w-8 text-quiz-accent" />,
      title: "Compete for Glory",
      description: "Prove your team's superiority against the brightest minds in the college."
    },
    {
      icon: <Award className="h-8 w-8 text-quiz-accent" />,
      title: "Valuable Prizes",
      description: "Win certificates, trophies, and exciting prizes"
    }
  ];

  const posts = [
    {
      id: 1,
      title: "Quiz Championship Registration Announced",
      image: "/b1.jpeg"
    },
    {
      id: 2,
      title: "Register",
      image: "/b2.png"
    },
    {
      id: 3,
      title: "Official Poster",
      image: "/b3.jpeg"
    },
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-quiz-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">ABOUT THE <span className="gradient-text">COMPETITION</span></h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Our annual Saptarang Quiz competition brings together the most knowledgeable students for an intellectual showdown.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Posts Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">QUIZ <span className="gradient-text">Updates</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Latest announcements and updates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <div 
                key={post.id} 
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openImage(index)}
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-300">Click to view full post</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeImage}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img 
                src={posts[selectedImage].image} 
                alt={posts[selectedImage].title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <button 
                onClick={closeImage}
                className="absolute -top-12 right-0 text-white hover:text-quiz-accent transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;

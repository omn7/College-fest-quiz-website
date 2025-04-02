
import { useState } from "react";

// Sample post data - in a real app, this would come from an API
const posts = [
  {
    id: 1,
    title: "Quiz Championship Finals Announced",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Preparation Tips from Last Year's Winners",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Special Round: Pop Culture Quiz",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  },
];

const Posts = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="posts" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">QUIZ <span className="gradient-text">Post</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Social Media Post</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 h-64"
              onClick={() => openImage(index)}
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{post.title}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={closeImage}>
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img 
                src={posts[selectedImage].image} 
                alt={posts[selectedImage].title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <button 
                onClick={closeImage}
                className="absolute -top-10 right-0 text-white hover:text-quiz-accent"
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

export default Posts;

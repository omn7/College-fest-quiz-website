import { useState } from "react";
import Navigation from "../components/Navigation";

const Posts = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      title: "Quiz Championship Registration Announced",
      date: "April 5, 2025",
      image: "../public/b2.png",
      content: "We are excited to announce the opening of registration for the annual Quiz Championship. Teams of 1-2 members can now register for this prestigious competition. Don't miss out on this opportunity to showcase your knowledge and win amazing prizes!"
    },
    // {
    //   id: 2,
    //   title: "Special Round: Pop Culture Quiz",
    //   date: "March 5, 2024",
    //   image: "/posts/post2.jpg",
    //   content: "Get ready for an exciting special round focused on pop culture! This round will test your knowledge of movies, music, TV shows, and current trends. Make sure to brush up on your pop culture knowledge before the competition."
    // },
    // {
    //   id: 3,
    //   title: "Previous Winners Share Their Experience",
    //   date: "March 10, 2024",
    //   image: "/posts/post3.jpg",
    //   content: "Hear from last year's winners as they share their journey, preparation strategies, and tips for success in the quiz competition. Their insights will help you prepare better for this year's championship."
    // }
  ];

  return (
    <div className="min-h-screen bg-quiz-dark">
      <Navigation />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Latest <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Stay informed about the latest news and announcements
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-quiz-dark/50 border border-quiz-accent/20 rounded-lg overflow-hidden hover:border-quiz-accent/40 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold">{post.title}</h2>
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.content}</p>
                    <button
                      onClick={() => setSelectedPost(post.id)}
                      className="text-quiz-accent hover:text-quiz-highlight transition-colors"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Post Modal */}
      {selectedPost !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div className="relative max-w-4xl w-full bg-quiz-dark rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img
              src={posts.find(p => p.id === selectedPost)?.image}
              alt={posts.find(p => p.id === selectedPost)?.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{posts.find(p => p.id === selectedPost)?.title}</h2>
                <span className="text-sm text-gray-400">{posts.find(p => p.id === selectedPost)?.date}</span>
              </div>
              <p className="text-gray-300">{posts.find(p => p.id === selectedPost)?.content}</p>
            </div>
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-white hover:text-quiz-accent transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts; 
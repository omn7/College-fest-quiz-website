
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MessageSquare, User } from "lucide-react";

// Sample post data - in a real app, this would come from an API
const posts = [
  {
    id: 1,
    title: "Quiz Championship Finals Announced",
    excerpt: "The finals of our annual quiz championship will be held on October 16th at the Main Auditorium. Get ready for an intellectual showdown!",
    author: "Quiz Committee",
    date: "September 25, 2023",
    comments: 12,
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Preparation Tips from Last Year's Winners",
    excerpt: "Learn how the previous champions prepared for the competition and what strategies helped them clinch the victory.",
    author: "Team Quizzards",
    date: "September 20, 2023",
    comments: 8,
    category: "Tips",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Special Round: Pop Culture Quiz",
    excerpt: "This year features a special round dedicated to pop culture. Test your knowledge of movies, music, and trends!",
    author: "Entertainment Team",
    date: "September 15, 2023",
    comments: 5,
    category: "Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  },
];

const Posts = () => {
  return (
    <section id="posts" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">LATEST <span className="gradient-text">UPDATES</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Stay informed with the latest news, tips, and announcements about the quiz championship.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="bg-quiz-dark border-quiz-muted hover:border-quiz-accent transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-quiz-accent hover:bg-quiz-highlight">{post.category}</Badge>
                  <div className="flex items-center text-sm text-gray-400">
                    <CalendarDays className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-xl font-display tracking-wide">{post.title}</CardTitle>
                <CardDescription className="text-gray-300">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between text-sm text-gray-400 pt-4 border-t border-quiz-muted">
                <div className="flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  {post.comments} comments
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;

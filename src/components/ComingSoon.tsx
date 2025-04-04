import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
}

const ComingSoon = ({ title, description }: ComingSoonProps) => {
  return (
    <div className="min-h-screen bg-quiz-dark flex items-center justify-center py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {title} <span className="gradient-text">Coming Soon</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            {description}
          </p>
          <div className="flex justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-quiz-accent hover:text-quiz-highlight transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 
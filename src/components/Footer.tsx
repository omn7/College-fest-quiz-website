
import { Button } from "@/components/ui/button";
import { GitHub, Instagram, Twitter, Facebook, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const handleDownloadRules = () => {
    toast({
      title: "Downloading Rule Book",
      description: "Your download will begin shortly",
    });
    
    // Simulate download (in real app, replace with actual file URL)
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#'; // Replace with actual PDF URL
      link.download = 'quiz_rulebook.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  return (
    <footer className="bg-quiz-dark border-t border-quiz-muted pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-display font-bold mb-4 gradient-text">QUIZ MASTERS</h3>
            <p className="text-gray-400 mb-4">
              The ultimate test of knowledge, strategy, and quick thinking for college students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-quiz-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-quiz-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-quiz-accent">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-quiz-accent">
                <GitHub className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-quiz-accent">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-quiz-accent">About</a>
              </li>
              <li>
                <a href="#rules" className="text-gray-400 hover:text-quiz-accent">Rules</a>
              </li>
              <li>
                <a href="#prizes" className="text-gray-400 hover:text-quiz-accent">Prizes</a>
              </li>
              <li>
                <a href="#registration" className="text-gray-400 hover:text-quiz-accent">Registration</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="text-gray-400 hover:text-quiz-accent p-0 h-auto flex items-center" onClick={handleDownloadRules}>
                  <Download className="h-4 w-4 mr-2" />
                  Rule Book
                </Button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-quiz-accent">Past Winners</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-quiz-accent">Photo Gallery</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-quiz-accent">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p>Main College Auditorium</p>
              <p>123 College Street</p>
              <p>Your City, State 12345</p>
              <p className="mt-2">Email: quiz@college.edu</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-quiz-muted pt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Quiz Masters Competition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

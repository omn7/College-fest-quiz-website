import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useToast } from "@/components/ui/use-toast";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery", comingSoon: true },
    { name: "Posts", href: "/posts", comingSoon: true },
    { name: "Contact", href: "/contact", comingSoon: true }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.comingSoon) {
      toast({
        title: "Coming Soon!",
        description: `${item.name} page is under development. Check back later!`,
        className: "animate-fade-in",
      });
      return;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-quiz-dark/40 backdrop-blur-md border-b border-quiz-muted/50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-display font-bold gradient-text">QUIZZERS</h1>
            </Link>
            {/* Mobile College Logo */}
            <img 
              src="https://bvcoe.bharatividyapeeth.edu/media/images/bvcoe_logo_3.png" 
              alt="BVCOE Logo" 
              className="h-10 w-auto object-contain md:hidden"
            />
          </div>

          {/* Middle - Navigation Links and College Logo */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <img 
              src="https://bvcoe.bharatividyapeeth.edu/media/images/bvcoe_logo_3.png" 
              alt="BVCOE Logo" 
              className="h-12 w-auto object-contain mr-8"
            />
            <div className="flex items-center space-x-3 lg:space-x-6">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href}
                  className={`text-gray-300 hover:text-quiz-accent transition-colors text-sm lg:text-base ${item.comingSoon ? 'cursor-pointer' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Theme Toggle */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-quiz-accent transition-colors py-2"
                onClick={() => handleNavClick(item)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

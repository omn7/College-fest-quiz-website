import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Posts", href: "#posts" },
    { name: "About", href: "#about" },
    { name: "Rules", href: "#rules" },
    { name: "Location", href: "#location" },
    { name: "Prizes", href: "#prizes" },
  ];

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
              className="h-8 w-auto object-contain md:hidden"
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
                <a 
                  key={item.name} 
                  href={item.href}
                  className="text-gray-300 hover:text-quiz-accent transition-colors text-sm lg:text-base"
                >
                  {item.name}
                </a>
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
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-quiz-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

const Footer = () => {
  return (
    <footer className="bg-quiz-dark/80 backdrop-blur-sm border-t border-quiz-muted py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <p className="text-base md:text-sm text-gray-300 mb-3">
          © {new Date().getFullYear()} Quizzers BVCOEL. All rights reserved.
          </p>
          <p className="text-sm md:text-base text-gray-400">
           
            Designed and Developed by <a href="https://www.linkedin.com/in/omnarkhede/" target="_blank" rel="noopener noreferrer" className="text-quiz-accent hover:text-quiz-highlight transition-colors duration-300 font-medium">Om Narkhede</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

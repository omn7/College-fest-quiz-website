
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-quiz-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">EVENT <span className="gradient-text">LOCATION</span></h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            The quiz competition will be held at our college main auditorium.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {/* This is a placeholder for a map - in a real implementation, use Google Maps or similar */}
            <div className="w-full h-96 bg-quiz-dark border border-quiz-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-quiz-accent mx-auto mb-4" />
                  <p className="text-lg font-medium">Main College Auditorium</p>
                  <p className="text-sm text-gray-400">123 College Street, Your City</p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-quiz-accent hover:text-quiz-highlight"
                >
                  <Navigation className="h-4 w-4 mr-1" />
                  Get Directions
                </a>
              </div>
              {/* Animated pin/marker effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-6 w-6 bg-quiz-accent rounded-full opacity-25 animate-ping"></div>
                <div className="h-6 w-6 bg-quiz-accent rounded-full absolute top-0"></div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="quiz-card h-full">
              <h3 className="text-2xl font-bold mb-6">Venue Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-quiz-accent/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-quiz-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-400">Main College Auditorium</p>
                    <p className="text-gray-400">123 College Street</p>
                    <p className="text-gray-400">Your City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-quiz-accent/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-quiz-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold">Timings</h4>
                    <p className="text-gray-400">October 15: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-400">October 16: 10:00 AM - 3:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-quiz-accent/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-quiz-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold">Contact</h4>
                    <p className="text-gray-400">Event Coordinator: John Smith</p>
                    <p className="text-gray-400">Phone: (123) 456-7890</p>
                    <p className="text-gray-400">Email: quiz@college.edu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

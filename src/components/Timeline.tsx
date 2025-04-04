import { Calendar, Clock, MapPin } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      date: "March 15, 2024",
      title: "Registration Opens",
      description: "Early bird registration begins for all participants",
      icon: <Calendar className="h-6 w-6 text-quiz-accent" />
    },
    {
      date: "April 1, 2024",
      title: "Registration Closes",
      description: "Last day to register for the competition",
      icon: <Clock className="h-6 w-6 text-quiz-accent" />
    },
    {
      date: "April 15, 2024",
      title: "Preliminary Round",
      description: "Online qualifying round for all registered teams",
      icon: <MapPin className="h-6 w-6 text-quiz-accent" />
    },
    {
      date: "April 24, 2024",
      title: "Final Competition",
      description: "Grand finale with the top qualifying teams",
      icon: <Calendar className="h-6 w-6 text-quiz-accent" />
    }
  ];

  return (
    <section id="timeline" className="py-16 md:py-24 bg-quiz-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Competition <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Mark your calendars for these important dates in the quiz competition
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-quiz-accent/20"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {events.map((event, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Event content */}
                    <div className="w-full md:w-1/2 p-4">
                      <div className="bg-quiz-dark/50 border border-quiz-accent/20 rounded-lg p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          {event.icon}
                          <h3 className="text-xl font-bold">{event.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-2">{event.description}</p>
                        <p className="text-quiz-accent">{event.date}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:block w-4 h-4 bg-quiz-accent rounded-full absolute left-1/2 transform -translate-x-1/2"></div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 
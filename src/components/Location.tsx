import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <>
      <section id="location" className="py-16 md:py-24 bg-quiz-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">EVENT <span className="gradient-text">LOCATION</span></h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              The quiz competition will be held at BVCOE's main auditorium, Lavale, Pune.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="w-full h-96 bg-quiz-dark border border-quiz-muted rounded-lg overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2547158275186!2d73.7004978!3d18.5250051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bcf87efb6943%3A0xe49d83f0b95324b4!2sBharati%20Vidyapeeth%20College%20Of%20Engineering%20Lavale%20Pune!5e0!3m2!1sen!2sin!4v1709912345678!5m2!1sen!2sin&t=k&z=19&center=18.5250051,73.7004978"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                <div className="absolute bottom-4 right-4">
                  <a 
                    href="https://maps.app.goo.gl/G9X4DGa4BaJAWmQc8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-quiz-accent hover:text-quiz-highlight bg-quiz-dark/80 px-3 py-2 rounded-lg"
                  >
                    <Navigation className="h-4 w-4 mr-1" />
                    Get Directions
                  </a>
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
                      <p className="text-gray-400">Bharati Vidyapeeth's College of Engineering Lavale Pune</p>
                      <p className="text-gray-400">Tal. Mulshi, Raut Wadi, Lavale, Maharashtra 412115</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-quiz-accent/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-quiz-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold">Timings</h4>
                      <p className="text-gray-400">Registration: Started</p>
                      <p className="text-gray-400">Event Start: soon</p>
                      <p className="text-gray-400">Event End: soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-16 bg-quiz-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">CONTACT <span className="gradient-text">DETAILS</span></h2>
            <p className="text-base text-gray-300 max-w-xl mx-auto">
              Get in touch with us for any queries or support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="quiz-card p-4">
              <div className="flex items-start">
                <div className="bg-quiz-accent/10 p-2 rounded-full mr-3">
                  <Phone className="h-5 w-5 text-quiz-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Event Coordinator</h4>
                  <p className="text-sm text-gray-400">Saanidhya Vyas</p>
                  <p className="text-sm text-gray-400">+91 9256319788</p>
                  <p className="text-sm text-gray-400">sannidhya06vyas@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="quiz-card p-4">
              <div className="flex items-start">
                <div className="bg-quiz-accent/10 p-2 rounded-full mr-3">
                  <Phone className="h-5 w-5 text-quiz-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Technical Support</h4>
                  <p className="text-sm text-gray-400">Om Narkhede</p>
                  <p className="text-sm text-gray-400">+91 8625055880</p>
                  <p className="text-sm text-gray-400">dev.om@outlook.com</p>
                </div>
              </div>
            </div>

            <div className="quiz-card p-4">
              <div className="flex items-start">
                <div className="bg-quiz-accent/10 p-2 rounded-full mr-3">
                  <Phone className="h-5 w-5 text-quiz-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Registration Help</h4>
                  <p className="text-sm text-gray-400">Swayam Polakhare</p>
                  <p className="text-sm text-gray-400">+91 8767113994</p>
                  <p className="text-sm text-gray-400">dev.swayam1@outlook.com</p>
                </div>
              </div>
            </div>

            <div className="quiz-card p-4">
              <div className="flex items-start">
                <div className="bg-quiz-accent/10 p-2 rounded-full mr-3">
                  <Phone className="h-5 w-5 text-quiz-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">General Enquiry</h4>
                  <p className="text-sm text-gray-400">Shivam Murkute</p>
                  <p className="text-sm text-gray-400">+91 9421608447</p>
                  <p className="text-sm text-gray-400">shivammurkute20@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

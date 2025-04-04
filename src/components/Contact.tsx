import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-quiz-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about the quiz competition? We're here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-quiz-dark/50 border border-quiz-accent/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-quiz-accent">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-gray-300">quiz@bvcoel.ac.in</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-quiz-accent">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Location</h4>
                      <p className="text-gray-300">BVCOEL Campus, Pune</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-quiz-accent">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Working Hours</h4>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-quiz-dark/50 border border-quiz-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-quiz-dark border border-quiz-accent/20 rounded-lg focus:outline-none focus:border-quiz-accent text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-quiz-dark border border-quiz-accent/20 rounded-lg focus:outline-none focus:border-quiz-accent text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-quiz-dark border border-quiz-accent/20 rounded-lg focus:outline-none focus:border-quiz-accent text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-quiz-dark border border-quiz-accent/20 rounded-lg focus:outline-none focus:border-quiz-accent text-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-quiz-accent hover:bg-quiz-highlight text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
import { useState } from "react";
import Navigation from "../components/Navigation";
import { Phone } from "lucide-react";

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

  // Team contact information
  const teamContacts = [
    {
      role: "Event Coordinator",
      name: "Saanidhya Vyas",
      phone: "+91 9256319788",
      email: "sannidhya06vyas@gmail.com"
    },
    {
      role: "Technical Support",
      name: "Om Narkhede",
      phone: "+91 8625055880",
      email: "dev.om@outlook.com"
    },
    {
      role: "Registration Help",
      name: "Swayam Polakhare",
      phone: "+91 8767113994",
      email: "dev.swayam1@outlook.com"
    },
    {
      role: "General Enquiry",
      name: "Shivam Murkute",
      phone: "+91 9421608447",
      email: "shivammurkute20@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen bg-quiz-dark">
      <Navigation />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions about the quiz competition? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-quiz-dark/50 border border-quiz-accent/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Team Contacts</h3>
                <div className="space-y-6">
                  {teamContacts.map((contact, index) => (
                    <div key={index} className="quiz-card p-4">
                      <div className="flex items-start">
                        <div className="bg-quiz-accent/10 p-2 rounded-full mr-3">
                          <Phone className="h-5 w-5 text-quiz-accent" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-2">{contact.role}</h4>
                          <p className="text-sm text-gray-400">{contact.name}</p>
                          <p className="text-sm text-gray-400">{contact.phone}</p>
                          <p className="text-sm text-gray-400">{contact.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
      </main>
    </div>
  );
};

export default Contact; 
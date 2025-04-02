
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { User, Mail, Users, School, Phone } from "lucide-react";

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    college: "",
    members: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you'd send this data to your backend
    toast({
      title: "Registration Submitted",
      description: "We've received your registration details.",
    });
    
    // Reset form
    setFormData({
      teamName: "",
      leaderName: "",
      leaderEmail: "",
      leaderPhone: "",
      college: "",
      members: "",
    });
  };

  return (
    <section id="registration" className="py-16 md:py-24 bg-quiz-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">REGISTER <span className="gradient-text">NOW</span></h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Secure your spot in the competition by filling out the registration form below.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="quiz-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="teamName" className="block text-sm font-medium">
                    Team Name
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input 
                      id="teamName"
                      name="teamName"
                      placeholder="Enter your team name"
                      value={formData.teamName}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-quiz-dark border-quiz-muted focus:border-quiz-accent focus:ring-quiz-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="leaderName" className="block text-sm font-medium">
                    Team Leader Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input 
                      id="leaderName"
                      name="leaderName"
                      placeholder="Enter team leader's full name"
                      value={formData.leaderName}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-quiz-dark border-quiz-muted focus:border-quiz-accent focus:ring-quiz-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="leaderEmail" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input 
                      id="leaderEmail"
                      name="leaderEmail"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.leaderEmail}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-quiz-dark border-quiz-muted focus:border-quiz-accent focus:ring-quiz-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="leaderPhone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input 
                      id="leaderPhone"
                      name="leaderPhone"
                      placeholder="Enter your phone number"
                      value={formData.leaderPhone}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-quiz-dark border-quiz-muted focus:border-quiz-accent focus:ring-quiz-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="college" className="block text-sm font-medium">
                    College/Institution
                  </label>
                  <div className="relative">
                    <School className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input 
                      id="college"
                      name="college"
                      placeholder="Enter your college name"
                      value={formData.college}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-quiz-dark border-quiz-muted focus:border-quiz-accent focus:ring-quiz-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="members" className="block text-sm font-medium">
                    Team Members (comma separated)
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input 
                      id="members"
                      name="members"
                      placeholder="e.g., John, Jane, Alex"
                      value={formData.members}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-quiz-dark border-quiz-muted focus:border-quiz-accent focus:ring-quiz-accent"
                    />
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                <p>Registration fee: ₹500 per team</p>
                <p>Payment details will be shared after form submission</p>
              </div>

              <div className="text-center">
                <Button type="submit" className="quiz-button px-10">
                  Submit Registration
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;

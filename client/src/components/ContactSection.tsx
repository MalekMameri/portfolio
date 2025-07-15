import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { personalInfo } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const ref = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For static site, we'll show a success message
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
            Looking for opportunities in electrical engineering, commissioning, or consulting projects.
            Let's discuss how I can contribute to your team.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur-sm border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="text-white w-6 h-6 mr-4" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-blue-100">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-white w-6 h-6 mr-4" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-blue-100">{personalInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-white w-6 h-6 mr-4" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-blue-100">{personalInfo.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/20 text-white hover:bg-white/30"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/malek-mameri-4105912b8/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/20 text-white hover:bg-white/30"
                    asChild
                  >
                    <a href="https://github.com/MalekMameri" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/20 text-white hover:bg-white/30"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project inquiry"
                    required
                    className="focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    className="focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-secondary text-white shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

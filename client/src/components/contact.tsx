import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Users } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    message: ""
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Direct",
      detail: "0121 454 0910",
      description: "Speak to a specialist consultant immediately",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@pioneering.co.uk", 
      description: "We respond to all enquiries within 2 hours",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      detail: "+44 7860 123 456",
      description: "Quick questions and instant responses",
      action: "Message Us"
    },
    {
      icon: Calendar,
      title: "Book Meeting",
      detail: "30-minute consultation",
      description: "Schedule a focused discussion about your needs",
      action: "Book Now"
    }
  ];

  const quickRequests = [
    {
      title: "Urgent Role",
      description: "Need someone to start within 2 weeks",
      icon: Clock,
      action: () => setFormData({...formData, message: "I have an urgent recruitment need - candidate required to start within 2 weeks. Please call me to discuss."})
    },
    {
      title: "Senior Executive",
      description: "MD, Operations Director, or C-Suite",
      icon: Users,
      action: () => setFormData({...formData, message: "I'm looking to recruit for a senior executive position (MD/Operations Director/C-Suite). Please arrange a confidential discussion."})
    },
    {
      title: "Multiple Roles",
      description: "Several positions across different levels",
      icon: Users,
      action: () => setFormData({...formData, message: "I have multiple recruitment requirements across different levels. Please call to discuss our ongoing needs."})
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold text-sm mb-6">
            <Phone className="w-4 h-4 mr-2" />
            Ready to Start?
          </div>
          <h2 className="text-4xl font-bold text-dark-gray mb-4">
            Let's Discuss Your <span className="gradient-text">Recruitment Needs</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Whether you need one exceptional candidate or want to discuss your long-term talent strategy, 
            we're here to help. Initial consultations are always complimentary.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact methods */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-dark-gray mb-6">Get In Touch</h3>
            
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div 
                    key={index}
                    className="p-4 bg-white rounded-xl shadow-lg hover:shadow-premium-hover transition-all duration-300 border-l-4 border-l-brand-orange cursor-pointer group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-white h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-dark-gray group-hover:text-brand-orange transition-colors duration-300">{method.title}</h4>
                        <p className="text-brand-orange font-semibold">{method.detail}</p>
                        <p className="text-sm text-brand-gray">{method.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Office info */}
            <Card className="bg-dark-gray text-white border-none">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-brand-orange" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Located in the heart of the Midlands, perfectly positioned to serve merchants across the UK
                </p>
                <address className="text-gray-300 not-italic">
                  Pioneering Recruitment Ltd<br />
                  Birmingham Business Park<br />
                  Birmingham, B37 7YE<br />
                  United Kingdom
                </address>
                <div className="mt-4 pt-4 border-t border-gray-600">
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Emergency recruitment needs: Available weekends by arrangement
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="shadow-premium">
              <CardHeader>
                <CardTitle className="text-2xl text-dark-gray">Send Us a Message</CardTitle>
                <p className="text-brand-gray">We'll respond within 2 hours during business hours</p>
              </CardHeader>
              <CardContent>
                
                {/* Quick request buttons */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dark-gray mb-3">Quick Requests:</h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    {quickRequests.map((request, index) => {
                      const IconComponent = request.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          onClick={request.action}
                          className="p-4 h-auto text-left border-2 hover:border-brand-orange hover:bg-brand-orange/5 transition-all duration-300"
                        >
                          <div className="flex items-start space-x-3">
                            <IconComponent className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                            <div>
                              <div className="font-semibold text-sm text-dark-gray">{request.title}</div>
                              <div className="text-xs text-brand-gray mt-1">{request.description}</div>
                            </div>
                          </div>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark-gray mb-2">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="focus-ring"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-gray mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        required
                        className="focus-ring"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark-gray mb-2">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="focus-ring"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-gray mb-2">Phone</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your contact number"
                        className="focus-ring"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-gray mb-2">Your Role</label>
                    <Input
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="e.g. Managing Director, HR Manager, Operations Director"
                      className="focus-ring"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-gray mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your recruitment needs, the role you're looking to fill, or any specific requirements..."
                      rows={5}
                      required
                      className="focus-ring"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 btn-premium shadow-premium hover:shadow-premium-hover transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Confidential Discussions:</strong> All conversations are strictly confidential. 
                    We understand the sensitive nature of recruitment and maintain complete discretion.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="bg-brand-orange rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prefer to Talk Directly?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Sometimes it's easier to discuss your needs over the phone. Our consultants are available for immediate discussions about your recruitment challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-brand-orange font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 0121 454 0910
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-orange font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book 30-Min Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
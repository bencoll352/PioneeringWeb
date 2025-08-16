import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const services = [
    "Executive Search",
    "Management Recruitment",
    "Sales & Business Development",
    "Operations & Logistics",
    "Temporary & Contract",
  ];

  const quickLinks = [
    { label: "Home", section: "home" },
    { label: "About Us", section: "about" },
    { label: "Current Jobs", section: "jobs" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/attached_assets/Outlook-ltwenky2_1753120682002.png" 
                alt="Pioneering Recruitment Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <h1 className="text-xl font-bold">Pioneering Recruitment</h1>
                <p className="text-sm text-gray-300">OUR TALENT IS YOUR FUTURE</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The UK's premier headhunters for the builders merchant industry. 
              15+ years of exclusive expertise connecting merchants with exceptional talent. From independent yards to national chains, we're the industry insiders who deliver results.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-brand-orange hover:bg-red-600 rounded-lg"
                asChild
              >
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="text-white h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-brand-orange hover:bg-red-600 rounded-lg"
                asChild
              >
                <a href="#" aria-label="Twitter">
                  <Twitter className="text-white h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-brand-orange transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Pioneering Recruitment. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-4 md:mt-0">
            Registered in England & Wales. Company No: 12345678
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  const NavLinks = ({ mobile = false }) => (
    <div className={`${mobile ? "flex flex-col space-y-6 pt-8" : "hidden lg:flex items-center space-x-8"}`}>
      <button
        onClick={() => scrollToSection("home")}
        className="text-dark-gray hover:text-brand-orange transition-all duration-300 font-semibold text-base relative group"
      >
        Home
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
      </button>
      <button
        onClick={() => scrollToSection("services")}
        className="text-brand-gray hover:text-brand-orange transition-all duration-300 font-semibold text-base relative group"
      >
        Services
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className="text-brand-gray hover:text-brand-orange transition-all duration-300 font-semibold text-base relative group"
      >
        About
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
      </button>
      <button
        onClick={() => scrollToSection("expertise")}
        className="text-brand-gray hover:text-brand-orange transition-all duration-300 font-semibold text-base relative group"
      >
        Expertise
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="text-brand-gray hover:text-brand-orange transition-all duration-300 font-semibold text-base relative group"
      >
        Contact
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
      </button>
    </div>
  );

  const ContactInfo = ({ mobile = false }) => (
    <div className={`${mobile ? "flex flex-col space-y-4 border-t pt-6 mt-6" : "hidden xl:flex items-center space-x-6"}`}>
      <div className="flex items-center space-x-2 text-brand-gray">
        <Phone className="h-4 w-4" />
        <span className="text-sm font-medium">0121 454 0910</span>
      </div>
      <div className="flex items-center space-x-2 text-brand-gray">
        <Mail className="h-4 w-4" />
        <span className="text-sm font-medium">hello@pioneering.co.uk</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Top contact bar - hidden on mobile */}
      <div className="bg-dark-gray text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>0121 454 0910</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@pioneering.co.uk</span>
              </div>
            </div>
            <div className="text-brand-orange font-medium">
              The UK's Premier Builders Merchant Recruitment Specialists
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4 animate-fadeInLeft">
              <img 
                src="/attached_assets/pioneering-logo.png" 
                alt="Pioneering Recruitment Logo" 
                className="h-14 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-dark-gray">Pioneering Recruitment</h1>
                <p className="text-sm text-brand-orange font-semibold tracking-wider">OUR TALENT IS YOUR FUTURE</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              <NavLinks />
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 btn-premium shadow-premium hover:shadow-premium-hover transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                    <Menu className="h-6 w-6 text-dark-gray" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-3 pb-6 border-b">
                      <img 
                        src="/pioneering-logo.png" 
                        alt="Pioneering Recruitment Logo" 
                        className="h-10 w-auto"
                      />
                      <div>
                        <h2 className="text-lg font-bold text-dark-gray">Pioneering</h2>
                        <p className="text-xs text-brand-orange font-medium">RECRUITMENT</p>
                      </div>
                    </div>
                    
                    <NavLinks mobile />
                    <ContactInfo mobile />

                    <div className="mt-auto pt-6 border-t">
                      <Button
                        onClick={() => scrollToSection("contact")}
                        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 btn-premium"
                      >
                        Get In Touch
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
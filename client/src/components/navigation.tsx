import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
    <div className={`${mobile ? "flex flex-col space-y-4" : "hidden md:flex items-center space-x-8"}`}>
      <button
        onClick={() => scrollToSection("home")}
        className="text-dark-gray hover:text-brand-orange transition-colors font-medium"
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection("services")}
        className="text-brand-gray hover:text-brand-orange transition-colors font-medium"
      >
        Services
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className="text-brand-gray hover:text-brand-orange transition-colors font-medium"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("jobs")}
        className="text-brand-gray hover:text-brand-orange transition-colors font-medium"
      >
        Jobs
      </button>
      <Button
        onClick={() => scrollToSection("contact")}
        className="bg-brand-orange hover:bg-red-600 text-white font-medium"
      >
        Contact Us
      </Button>
    </div>
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/attached_assets/Outlook-ltwenky2_1753120682002.png" 
              alt="Pioneering Recruitment Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-dark-gray">Pioneering Recruitment</h1>
              <p className="text-xs text-brand-gray">OUR TALENT IS YOUR FUTURE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-brand-gray" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-8">
                  <NavLinks mobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

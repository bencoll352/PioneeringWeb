import { Button } from "@/components/ui/button";
import { Handshake, Search } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-dark-gray to-gray-800 text-white py-20">
      {/* Background overlay */}
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="absolute inset-0">
        <img
          src="/attached_assets/52688847696_8cae922e3e_b-3644822355_1753121139008.jpg"
          alt="Authentic UK builders merchant yard with stacked bricks, blocks and building materials from Marshalls"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The UK's Premier <span className="brand-orange">Builders Merchant</span> Headhunters
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          <strong>15+ years of exclusive headhunting expertise</strong> in builders merchant recruitment. From independent merchants to national chains, we're the industry insiders who headhunt the best talent for your business.{" "}
          <strong className="brand-orange">We find talent others can't.</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-brand-orange hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold"
            size="lg"
          >
            <Handshake className="mr-2 h-5 w-5" />
            Partner With Us
          </Button>
          <Button
            onClick={() => scrollToSection("jobs")}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-dark-gray"
            size="lg"
          >
            <Search className="mr-2 h-5 w-5" />
            View Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}

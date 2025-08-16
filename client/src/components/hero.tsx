import { Button } from "@/components/ui/button";
import { Handshake, Search, Award, TrendingUp, Shield } from "lucide-react";

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
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-dark-gray via-gray-800 to-gray-700">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="absolute inset-0">
        <img
          src="/attached_assets/52688847696_8cae922e3e_b-3644822355_1753121139008.jpg"
          alt="Authentic UK builders merchant yard with premium building materials - representing the quality partnerships Pioneering Recruitment creates"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 opacity-10">
        <Award className="w-24 h-24 text-white animate-pulse" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-10">
        <TrendingUp className="w-20 h-20 text-white animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Main content */}
          <div className="text-center lg:text-left">
            {/* Premium badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange font-semibold text-sm mb-8 animate-fadeInUp backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2" />
              #1 Builders Merchant Recruitment Specialists
            </div>

            <h1 className="text-responsive-xl font-extrabold mb-6 animate-fadeInUp animate-delay-200">
              <span className="text-white">The UK's Premier</span>{" "}
              <span className="gradient-text">Builders Merchant</span>{" "}
              <span className="text-white">Headhunters</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl animate-fadeInUp animate-delay-300 leading-relaxed">
              <strong className="text-white">15+ years of exclusive headhunting expertise</strong> in UK builders merchant recruitment. We're not just recruiters – we're{" "}
              <strong className="text-brand-orange">industry insiders who became recruitment experts.</strong>
            </p>

            <div className="mb-12 animate-fadeInUp animate-delay-400">
              <p className="text-lg text-gray-300 mb-4">
                <strong className="text-brand-orange">"We find talent others can't reach"</strong>
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="expertise-badge bg-white/10 text-white border-white/20">Former Merchant Professionals</span>
                <span className="expertise-badge bg-white/10 text-white border-white/20">96% Success Rate</span>
                <span className="expertise-badge bg-white/10 text-white border-white/20">3-Week Average Placement</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fadeInUp animate-delay-500">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 text-lg font-bold btn-premium shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:scale-105"
              >
                <Handshake className="mr-3 h-6 w-6" />
                Start Your Search Today
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                size="lg"
                className="border-2 border-white/80 text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-dark-gray backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <Search className="mr-3 h-6 w-6" />
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Right side - Stats showcase */}
          <div className="lg:block animate-fadeInRight animate-delay-300">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-premium">
              <h3 className="text-2xl font-bold text-dark-gray mb-6 text-center">
                Why We're The Industry Leaders
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold brand-orange mb-2 stats-number">15+</div>
                  <p className="text-brand-gray font-medium text-sm">Years Exclusive Focus</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold brand-orange mb-2 stats-number">2,500+</div>
                  <p className="text-brand-gray font-medium text-sm">Successful Placements</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold brand-orange mb-2 stats-number">150+</div>
                  <p className="text-brand-gray font-medium text-sm">Merchant Partners</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold brand-orange mb-2 stats-number">96%</div>
                  <p className="text-brand-gray font-medium text-sm">Success Rate</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <p className="text-center text-brand-gray font-medium mb-4">
                  <strong className="text-dark-gray">Trusted by:</strong>
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Independent Merchants</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Regional Chains</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">National Groups</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom call-to-action banner */}
        <div className="mt-16 text-center animate-fadeInUp animate-delay-600">
          <div className="bg-brand-orange/90 backdrop-blur-lg rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-white text-lg font-semibold">
              <strong>Ready to find your next top performer?</strong> We have candidates actively looking right now.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="mt-4 border-white text-white hover:bg-white hover:text-brand-orange font-semibold"
            >
              Speak to a Specialist Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
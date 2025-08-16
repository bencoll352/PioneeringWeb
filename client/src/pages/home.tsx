import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import CoreServices from "@/components/core-services";
import Values from "@/components/values";
import Expertise from "@/components/expertise";
import TrainingCoaching from "@/components/training-coaching";
import MarketIntelligence from "@/components/market-intelligence";
import Partnership from "@/components/partnership";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";
import Guarantee from "@/components/guarantee";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Stats />
      <Values />
      <Services />
      <CoreServices />
      <Expertise />
      <TrainingCoaching />
      <MarketIntelligence />
      <Partnership />
      <Testimonials />
      <About />
      <Guarantee />
      <Contact />
      <Footer />
    </div>
  );
}

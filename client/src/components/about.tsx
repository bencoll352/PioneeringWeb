import { CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    "Former builders merchant professionals turned headhunting experts",
    "Exclusive focus on builders merchant headhunting only",
    "Real-time market intelligence from 150+ UK merchant partners",
    "Proven 3-week average headhunting success with 96% retention rate",
  ];

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-dark-gray mb-6">The Builders Merchant Recruitment Specialists</h2>
            <p className="text-xl text-brand-gray mb-6">
              <strong>We're not just recruiters who work in construction - we're builders merchant professionals who became headhunting experts.</strong> For over 15 years, we've been the exclusive headhunting partner for merchants across the UK.
            </p>
            <p className="text-brand-gray mb-8">
              Our founders started their careers managing branches, buying stock, and serving trade customers before founding Pioneering Recruitment. This isn't theoretical knowledge - we've lived the seasonal cash flow challenges, managed difficult customer accounts, and built teams that deliver results across the UK. When we headhunt candidates, we know exactly what works in your environment because we've been there ourselves.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-brand-orange h-5 w-5 flex-shrink-0" />
                  <span className="text-brand-gray font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <img
            src="/attached_assets/OIP (1)_1753124523579.jpeg"
            alt="Builders merchant trade counter professional - representing the quality of talent we headhunt"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

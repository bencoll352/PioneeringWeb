import { Building2, Network, Handshake } from "lucide-react";

export default function Expertise() {
  const expertisePoints = [
    {
      icon: Building2,
      title: "100% Builders Merchant Focus",
      description: "While other recruiters dabble in construction, we live and breathe builders merchants. From yard operations to boardroom strategy, we specialise in every facet of your business across the UK.",
    },
    {
      icon: Network,
      title: "The Industry's Premier Network",
      description: "Our exclusive network includes managing directors from national chains, independent merchant owners, and high-performing professionals ready for their next challenge.",
    },
    {
      icon: Handshake,
      title: "Proven Industry Leadership",
      description: "15+ years placing everyone from yard operatives to CEOs. Our clients include Jewson, Travis Perkins, Buildbase, plus 150+ independent merchants who trust us as their recruitment partner.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Unmatched Builders Merchant Expertise</h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            We don't just headhunt for builders merchants - we ARE builders merchants. Our team's industry heritage gives us headhunting insights that generic recruiters simply cannot match across the UK market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/attached_assets/OIP_1753124515996.jpeg"
            alt="Professional builders merchant manager - the calibre of talent we headhunt for senior positions"
            className="rounded-xl shadow-lg w-full h-auto"
          />

          <div>
            <h3 className="text-3xl font-bold text-dark-gray mb-6">
              Why We're The UK's #1 Builders Merchant Headhunters
            </h3>
            <div className="space-y-6">
              {expertisePoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="text-white h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dark-gray mb-2">{point.title}</h4>
                      <p className="text-brand-gray">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

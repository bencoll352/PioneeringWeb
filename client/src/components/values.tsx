import { Target, Shield, Users, Zap } from "lucide-react";

export default function Values() {
  const values = [
    {
      icon: Target,
      title: "Industry Focus",
      description: "We only headhunt for builders merchants across the UK. This singular focus means we specialise in your challenges, seasonal patterns, and what makes headhunted candidates successful in your environment.",
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "15+ years of exclusive builders merchant recruitment. From Jewson to independent merchants, we've placed everyone from yard operatives to managing directors.",
    },
    {
      icon: Users,
      title: "Insider Knowledge",
      description: "Our consultants come from the UK builders merchant industry. We specialise in timber grading, plumbing specifications, and the difference between a good branch manager and a great one.",
    },
    {
      icon: Zap,
      title: "Speed & Quality",
      description: "Average placement time: 3 weeks across the UK. We maintain quality candidate pools who are ready to move, reducing your time-to-hire without compromising on quality.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Why We're The Builders Merchant Experts</h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Our values and expertise make us the go-to recruitment partner for the UK's builders merchant industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-4">{value.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-gray-50 p-8 rounded-xl">
          <h3 className="text-3xl font-bold text-dark-gray mb-6">What Makes Us Different</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-bold text-dark-gray mb-3">🏗️ Industry Heritage</h4>
              <p className="text-brand-gray">Founded by former UK builders merchant managers who specialise in the business from the inside out.</p>
            </div>
            <div>
              <h4 className="font-bold text-dark-gray mb-3">🎯 Exclusive Network</h4>
              <p className="text-brand-gray">We only recruit for builders merchants, creating a focused talent pool that generic agencies can't match.</p>
            </div>
            <div>
              <h4 className="font-bold text-dark-gray mb-3">⚡ Results-Driven</h4>
              <p className="text-brand-gray">96% first-time success rate with average placement times of just 3 weeks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
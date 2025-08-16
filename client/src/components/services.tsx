import { Crown, Users, TrendingUp, Truck, Calculator, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Crown,
      title: "Executive Headhunting",
      description: "Proactive headhunting of senior leadership positions including Managing Directors, Operations Directors, and Regional Managers for established builders merchants.",
      features: ["C-Suite Executives", "Operations Directors", "Regional Managers"],
    },
    {
      icon: Users,
      title: "Management Headhunting",
      description: "Specialist headhunting for middle management positions across branch management, buying, commercial, and operational functions.",
      features: ["Branch Managers", "Buyers & Purchasing", "Commercial Managers"],
    },
    {
      icon: TrendingUp,
      title: "Sales & Business Development",
      description: "Headhunting high-performing sales professionals who understand the builders merchant customer base and market dynamics.",
      features: ["Sales Directors", "Business Development", "Account Managers"],
    },
    {
      icon: Truck,
      title: "Operations & Logistics",
      description: "Headhunting operational excellence through warehouse managers, logistics coordinators, and supply chain specialists across the UK.",
      features: ["Warehouse Managers", "Logistics Coordinators", "Supply Chain Specialists"],
    },
    {
      icon: Calculator,
      title: "Finance & Administration",
      description: "Headhunting financial professionals with builders merchant industry experience, from credit controllers to finance directors.",
      features: ["Finance Directors", "Credit Controllers", "Accountants"],
    },
    {
      icon: Clock,
      title: "Temporary & Contract",
      description: "Flexible staffing solutions for seasonal peaks, cover roles, and project-based requirements across all levels.",
      features: ["Interim Management", "Seasonal Cover", "Project Specialists"],
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Our Specialized Headhunting Services</h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Comprehensive headhunting solutions tailored specifically for the UK builders merchant industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-brand-orange rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark-gray mb-4">{service.title}</h3>
                <p className="text-brand-gray mb-6">{service.description}</p>
                <ul className="text-brand-gray space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

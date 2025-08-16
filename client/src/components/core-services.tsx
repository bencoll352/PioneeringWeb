import { CheckCircle, Users, Target, TrendingUp, Shield, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const coreServices = [
  {
    icon: Target,
    title: "Executive Headhunting & Selection", 
    description: "Proactive headhunting of top leadership talent for managing director, operations director, and senior management positions across UK builders merchants.",
    features: [
      "Board-level headhunting",
      "Regional management search", 
      "Succession planning & headhunting",
      "Executive talent mapping"
    ]
  },
  {
    icon: Users,
    title: "Operational Recruitment",
    description: "Specialist recruitment for branch managers, yard supervisors, trade counter staff, and warehouse operatives who understand the builders merchant environment.",
    features: [
      "Branch management teams",
      "Customer-facing roles",
      "Yard operations staff",
      "Logistics coordinators"
    ]
  },
  {
    icon: TrendingUp,
    title: "Sales & Commercial Headhunting",
    description: "Headhunting high-performing sales professionals who understand the complexities of trade relationships and specification selling in the builders merchant sector.",
    features: [
      "Business development managers",
      "Key account managers",
      "Sales directors",
      "Specification sellers"
    ]
  },
  {
    icon: Shield,
    title: "Technical & Specialist Roles", 
    description: "Recruiting for specialist positions requiring deep product knowledge in timber, plumbing, electrical, and building materials categories.",
    features: [
      "Category managers",
      "Technical advisors",
      "Purchasing specialists",
      "Product managers"
    ]
  },
  {
    icon: Award,
    title: "Temporary & Contract Solutions",
    description: "Flexible staffing solutions for seasonal peaks, maternity cover, and project-based requirements across all levels of builders merchant operations.",
    features: [
      "Seasonal staffing",
      "Interim management",
      "Project specialists",
      "Maternity cover"
    ]
  }
];

export default function CoreServices() {
  return (
    <section id="core-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Core Recruitment Services</h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Comprehensive talent solutions designed exclusively for the UK builders merchant industry
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {coreServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-brand-orange">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-brand-orange mr-3" />
                  <h3 className="text-xl font-bold text-dark-gray">{service.title}</h3>
                </div>
                <p className="text-brand-gray mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-brand-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-dark-gray mb-4">Why Choose Our Core Services?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold brand-orange mb-2">96%</div>
                <p className="text-brand-gray">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold brand-orange mb-2">3 Weeks</div>
                <p className="text-brand-gray">Average Placement Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold brand-orange mb-2">150+</div>
                <p className="text-brand-gray">Active UK Merchant Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
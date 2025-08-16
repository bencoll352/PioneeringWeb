import { GraduationCap, Users, BookOpen, TrendingUp, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const trainingPrograms = [
  {
    icon: Users,
    title: "Leadership Development for Builders Merchants",
    description: "Specialised leadership training for branch managers and senior staff, covering team management, P&L responsibility, and customer relationship skills specific to the trade environment.",
    duration: "6-week program",
    format: "Blended learning"
  },
  {
    icon: Target,
    title: "Sales Excellence for Trade Customers",
    description: "Advanced sales training focusing on relationship building with trade customers, specification selling, and account management in the builders merchant context.",
    duration: "4-week intensive",
    format: "Face-to-face workshops"
  },
  {
    icon: BookOpen,
    title: "Product Knowledge Mastery",
    description: "Comprehensive training on building materials, from timber grading to plumbing systems, ensuring your team can advise customers with confidence and expertise.",
    duration: "Ongoing modules",
    format: "Digital + practical"
  },
  {
    icon: Award,
    title: "Customer Service Excellence",
    description: "Training focused on the unique needs of trade customers, managing difficult situations, and building long-term relationships that drive repeat business.",
    duration: "3-day workshop",
    format: "Interactive sessions"
  }
];

const coachingServices = [
  "One-to-one executive coaching for senior management",
  "Team coaching for branch leadership groups", 
  "Performance coaching for underperforming staff",
  "Career transition coaching for industry professionals",
  "Succession planning and development coaching"
];

export default function TrainingCoaching() {
  return (
    <section id="training" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Training & Professional Development</h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Develop your team with industry-specific training designed by former builders merchant professionals
          </p>
        </div>

        {/* Training Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-dark-gray mb-8 text-center">Specialist Training Programs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <program.icon className="h-8 w-8 text-brand-orange mr-3" />
                    <h4 className="text-xl font-bold text-dark-gray">{program.title}</h4>
                  </div>
                  <p className="text-brand-gray mb-4">{program.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="bg-brand-orange bg-opacity-10 text-brand-orange px-3 py-1 rounded-full">
                      {program.duration}
                    </span>
                    <span className="text-brand-gray">{program.format}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coaching Services */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-dark-gray mb-6">Professional Coaching Services</h3>
            <p className="text-brand-gray mb-6">
              Our coaching services are delivered by experienced professionals who understand the unique challenges of the builders merchant industry. We help individuals and teams reach their full potential.
            </p>
            <ul className="space-y-3 mb-8">
              {coachingServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-brand-orange mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-brand-gray">{service}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-brand-orange hover:bg-orange-600 text-white">
              Discuss Training Needs
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-dark-gray mb-4">Headhunting Excellence Through Training</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-brand-gray">Staff Retention Improvement</span>
                <span className="font-bold brand-orange">+35%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-gray">Customer Satisfaction Increase</span>
                <span className="font-bold brand-orange">+28%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-gray">Sales Performance Boost</span>
                <span className="font-bold brand-orange">+22%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-gray">Leadership Effectiveness</span>
                <span className="font-bold brand-orange">+40%</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-brand-gray italic">
                "The training transformed our branch management approach. Our team is more confident, customers are happier, and our results speak for themselves."
              </p>
              <p className="text-xs text-brand-gray mt-2">- Regional Director, recruited through our headhunting process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
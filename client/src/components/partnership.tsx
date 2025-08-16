import { Handshake, Users, TrendingUp, Shield, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Partnership() {
  const partnershipFeatures = [
    {
      icon: Handshake,
      title: "Strategic Alliance",
      description: "We integrate seamlessly with your existing team, becoming an extension of your HR department with deep understanding of your builders merchant culture and goals."
    },
    {
      icon: Users,
      title: "Continuous Collaboration", 
      description: "Regular strategy sessions, performance reviews, and planning meetings ensure we're always aligned with your evolving business needs in the builders merchant sector."
    },
    {
      icon: TrendingUp,
      title: "Shared Success",
      description: "Our success is measured by your results. We provide transparent reporting and continuously optimise our approach based on your feedback and business outcomes."
    },
    {
      icon: Shield,
      title: "Long-term Commitment",
      description: "We're not just vendors – we're partners committed to your long-term growth, adapting our strategies as your builders merchant business scales across the UK."
    }
  ];

  const partnershipBenefits = [
    "Dedicated account manager with builders merchant expertise",
    "Quarterly business review meetings and strategy sessions", 
    "Access to exclusive industry networks and talent pools",
    "Priority service for urgent recruitment needs",
    "Customised recruitment processes for your company culture",
    "Regular market intelligence reports and salary benchmarking",
    "Training and development support for your internal team",
    "24/7 support for critical hiring situations"
  ];

  return (
    <section id="partnership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">True Partnership with You</h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            We don't just provide services – we become your strategic talent partner, invested in your long-term success in the UK builders merchant industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <img
            src="/attached_assets/OIP (2)_1753124526844.jpeg"
            alt="Builders merchant team collaboration - the type of leadership talent we headhunt for partnership success"
            className="rounded-xl shadow-lg w-full h-auto"
          />
          
          <div>
            <h3 className="text-2xl font-bold text-dark-gray mb-6">Why Partnership Matters</h3>
            <p className="text-brand-gray mb-6">
              In the builders merchant industry, successful headhunting isn't just about filling positions – it's about understanding your business cycles, customer relationships, and the unique skills needed to thrive in your environment.
            </p>
            <p className="text-brand-gray mb-8">
              As former builders merchant professionals ourselves, we know that every headhunted hire impacts your customer service, team dynamics, and bottom line. That's why we work as your strategic headhunting partner, not just a recruitment supplier.
            </p>
            <Button className="bg-brand-orange hover:bg-orange-600 text-white">
              Discuss Partnership Opportunities
            </Button>
          </div>
        </div>

        {/* Partnership Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partnershipFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-brand-orange">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-brand-orange mr-3" />
                  <h3 className="text-xl font-bold text-dark-gray">{feature.title}</h3>
                </div>
                <p className="text-brand-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-dark-gray mb-8 text-center">What Partnership Includes</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-dark-gray mb-4">Partnership Benefits</h4>
              <ul className="space-y-3">
                {partnershipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-brand-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-dark-gray mb-4">Partnership Success Metrics</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-brand-gray">Client Retention Rate</span>
                    <span className="font-bold brand-orange">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-orange h-2 rounded-full" style={{width: '94%'}}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-brand-gray">Average Partnership Duration</span>
                    <span className="font-bold brand-orange">3.8 Years</span>
                  </div>
                  <div className="flex items-center text-sm text-brand-gray">
                    <Clock className="h-4 w-4 mr-1" />
                    Long-term strategic relationships
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-brand-gray">Partner Satisfaction Score</span>
                    <span className="font-bold brand-orange">9.2/10</span>
                  </div>
                  <p className="text-xs text-brand-gray">Based on quarterly partner reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-brand-orange bg-opacity-10 rounded-lg">
            <h4 className="text-lg font-bold text-dark-gray mb-3">Partnership Testimonial</h4>
            <p className="text-brand-gray italic mb-3">
              "Pioneering Recruitment doesn't just find us candidates – they headhunt the best talent for us. They know our seasonal patterns, our customer base, and what makes someone successful in our environment. It's like having expert headhunters that specialise purely in builders merchants."
            </p>
            <p className="text-sm text-brand-gray">
              - Operations Director, Regional Builders Merchant Chain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
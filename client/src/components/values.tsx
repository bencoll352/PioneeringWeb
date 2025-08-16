import { Shield, Heart, Trophy, Handshake, Target, Users2 } from "lucide-react";

export default function Values() {
  const values = [
    {
      icon: Shield,
      title: "Industry Integrity", 
      description: "We're committed to honest, transparent practices that build long-term relationships, not quick wins.",
      highlight: "No false promises, just proven results"
    },
    {
      icon: Heart,
      title: "Genuine Passion",
      description: "This isn't just business for us - we genuinely care about the builders merchant industry and its people.",
      highlight: "Former merchants helping merchants succeed"
    },
    {
      icon: Trophy,
      title: "Excellence Standard",
      description: "We don't accept 'good enough' - every placement must exceed expectations and deliver long-term value.",
      highlight: "96% success rate proves our commitment"
    },
    {
      icon: Handshake,
      title: "Partnership Approach",
      description: "We're not transactional recruiters - we become trusted advisors who understand your business challenges.",
      highlight: "150+ ongoing client partnerships"
    },
    {
      icon: Target,
      title: "Results Focus",
      description: "Every decision we make is driven by one question: 'Will this deliver the best outcome for our clients?'",
      highlight: "3-week average placement time"
    },
    {
      icon: Users2,
      title: "People First",
      description: "Behind every CV is a real person with ambitions, and behind every job is a team that needs the right fit.",
      highlight: "98% candidate satisfaction rating"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Our Core Values
          </div>
          <h2 className="text-4xl font-bold text-dark-gray mb-4">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            These aren't just words on a website - they're the principles that guide every decision we make 
            and every relationship we build in the builders merchant community
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-gray-50 hover:bg-white rounded-2xl shadow-lg hover:shadow-premium-hover transition-all duration-500 transform hover:scale-105 animate-fadeInUp border border-gray-100 hover:border-brand-orange/30"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-orange-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-dark-gray mb-4 group-hover:text-brand-orange transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-brand-gray leading-relaxed mb-4">
                  {value.description}
                </p>
                
                <div className="bg-brand-orange/5 border-l-4 border-brand-orange rounded-r-lg p-3">
                  <p className="text-sm font-semibold text-brand-orange">
                    {value.highlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Values in action section */}
        <div className="bg-gradient-to-r from-dark-gray to-gray-800 rounded-2xl p-12 text-white animate-fadeInUp">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Values in Action</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our values aren't just internal guidelines - they directly impact how we serve you and the results we deliver. 
                Here's what this means for your recruitment experience:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Complete Transparency</h4>
                    <p className="text-gray-300 text-sm">You'll always know where we are in the process, what challenges we're facing, and what the realistic timescales are.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Quality Over Quantity</h4>
                    <p className="text-gray-300 text-sm">We'd rather present 2 perfect candidates than 10 mediocre ones. Your time is valuable.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <Users2 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Long-term Partnership</h4>
                    <p className="text-gray-300 text-sm">We're here for your next hire, and the one after that. Building lasting relationships is our priority.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <Trophy className="w-16 h-16 text-brand-orange mx-auto mb-6" />
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">98%</div>
                    <p className="text-gray-300">Client Satisfaction</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">15+</div>
                    <p className="text-gray-300">Years Industry Focus</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">150+</div>
                    <p className="text-gray-300">Active Partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
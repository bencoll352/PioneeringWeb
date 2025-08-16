import { Award, Target, Users, Clock, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Stats() {
  const stats = [
    { 
      icon: Clock,
      value: "15+", 
      label: "Years Exclusive Builders Merchant Focus",
      description: "The longest-serving specialist recruitment consultancy in the UK builders merchant sector"
    },
    { 
      icon: Users,
      value: "2,500+", 
      label: "Successful Industry Placements",
      description: "From yard operatives to managing directors across every merchant function"
    },
    { 
      icon: Target,
      value: "150+", 
      label: "Active Merchant Partners",
      description: "Independent merchants to national chains trust us with their recruitment needs"
    },
    { 
      icon: Award,
      value: "96%", 
      label: "First-Time Success Rate",
      description: "Industry-leading placement success with candidates who stay and thrive"
    },
  ];

  const achievements = [
    "Placed 5 Managing Directors in 2024 alone",
    "Average 3-week time-to-hire across all levels", 
    "98% client satisfaction rating",
    "Featured in Builders Merchants Journal as 'Recruitment Partner of Choice'"
  ];

  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">
            Why We're The UK's <span className="gradient-text">#1 Choice</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Industry-leading results that demonstrate our commitment to excellence in builders merchant recruitment
          </p>
        </div>

        {/* Main stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center p-8 bg-white rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:scale-105 animate-fadeInUp border-l-4 border-l-brand-orange"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                <div className="text-5xl font-bold brand-orange mb-3 stats-number">{stat.value}</div>
                <h3 className="text-lg font-semibold text-dark-gray mb-3">{stat.label}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Achievements section */}
        <div className="bg-white rounded-2xl p-8 shadow-premium animate-fadeInUp animate-delay-500">
          <div className="text-center mb-8">
            <TrendingUp className="w-12 h-12 text-brand-orange mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-dark-gray mb-2">Recent Achievements</h3>
            <p className="text-brand-gray">Demonstrating our continued excellence in the industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-600 h-5 w-5 flex-shrink-0 mt-1" />
                <span className="text-brand-gray font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center animate-fadeInUp animate-delay-600">
          <div className="bg-dark-gray rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience These Results?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join over 150 merchants who trust us to find their next top performer. Let's discuss your recruitment challenges today.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-premium"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
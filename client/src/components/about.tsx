import { CheckCircle, Users, Building, Target, Award, Heart } from "lucide-react";

export default function About() {
  const founderStory = [
    "Started careers in branch management at leading UK merchants",
    "Managed P&L responsibility for multi-million pound operations", 
    "Built high-performing teams across trade counter, warehouse, and delivery",
    "Experienced the seasonal challenges and customer demands firsthand"
  ];

  const whyWeDoIt = [
    {
      icon: Heart,
      title: "Passion for the Industry",
      description: "We genuinely love the builders merchant sector - it's not just a job market to us, it's our professional home and heritage."
    },
    {
      icon: Users,
      title: "Believing in People",
      description: "Every placement we make transforms two lives - the candidate finding their ideal role and the business gaining exceptional talent."
    },
    {
      icon: Building,
      title: "Strengthening the Industry",
      description: "By connecting the right talent with the right opportunities, we're building a stronger, more professional builders merchant sector."
    },
    {
      icon: Target,
      title: "Exceeding Expectations",
      description: "We're not satisfied with just filling roles - we're committed to creating partnerships that deliver long-term success."
    }
  ];

  const recognitions = [
    "Featured in Builders Merchants Journal as 'Recruitment Partner of Choice' 2024",
    "Testimonials from 95% of clients rating our service as 'Exceptional'",
    "Industry Speaker at BMF Annual Conference on talent acquisition",
    "Trusted advisor to MD's across independent and national merchant groups"
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main about section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fadeInLeft">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-semibold text-sm mb-6">
              <Award className="w-4 h-4 mr-2" />
              Industry Insiders Turned Recruitment Experts
            </div>
            
            <h2 className="text-responsive-lg font-bold text-dark-gray mb-6">
              We're Not Just Recruiters - We're{" "}
              <span className="gradient-text">Builders Merchant Professionals</span>{" "}
              Who Became Headhunting Experts
            </h2>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              <strong>Here's what makes us different:</strong> We didn't start as recruiters who decided to work in construction. 
              We're builders merchant professionals who became recruitment specialists because we saw a gap in the market 
              for recruiters who truly understand your business.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-premium mb-8">
              <h3 className="text-lg font-bold text-dark-gray mb-4">Our Merchant Background:</h3>
              <div className="space-y-3">
                {founderStory.map((story, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 h-5 w-5 flex-shrink-0 mt-1" />
                    <span className="text-brand-gray font-medium">{story}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-brand-gray leading-relaxed">
              This isn't theoretical knowledge - we've lived through the seasonal cash flow challenges, 
              managed difficult customer accounts, dealt with supplier issues, and built teams that deliver results. 
              When we headhunt candidates for you, we know exactly what works in your environment because 
              <strong className="text-dark-gray"> we've been there ourselves.</strong>
            </p>
          </div>

          <div className="animate-fadeInRight">
            <img
              src="/attached_assets/OIP (1)_1753124523579.jpeg"
              alt="Professional builders merchant team - representing the calibre of talent Pioneering Recruitment headhunts for UK merchants"
              className="rounded-2xl shadow-premium w-full h-auto"
            />
          </div>
        </div>

        {/* Why we do it section */}
        <div className="mb-20 animate-fadeInUp">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-dark-gray mb-4">
              Why We Do What We Do
            </h3>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Our mission goes beyond recruitment - we're building a stronger builders merchant industry, one exceptional placement at a time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyWeDoIt.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:scale-105 border-l-4 border-l-brand-orange"
                >
                  <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-white h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold text-dark-gray mb-3">{item.title}</h4>
                  <p className="text-brand-gray leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recognition section */}
        <div className="bg-dark-gray rounded-2xl p-12 text-white animate-fadeInUp">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-brand-orange mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Industry Recognition & Trust</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our commitment to excellence has earned recognition from clients and industry bodies across the UK
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <CheckCircle className="text-brand-orange h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-white font-medium leading-relaxed">{recognition}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 btn-premium"
            >
              Experience Our Expertise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
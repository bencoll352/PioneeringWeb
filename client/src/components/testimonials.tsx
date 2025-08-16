import { Star, Quote, Building2, User, MapPin } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "James Mitchell",
      role: "Managing Director",
      company: "Heritage Building Supplies",
      location: "Birmingham",
      quote: "Pioneering Recruitment found us our new Operations Director in just 2 weeks. They understand our business like no other recruiter - because they've actually worked in merchants themselves. The calibre of candidates was exceptional.",
      rating: 5,
      result: "Operations Director placed in 14 days"
    },
    {
      name: "Sarah Thompson",
      role: "HR Director", 
      company: "Midlands Builders Merchant Group",
      location: "Coventry",
      quote: "We've worked with many recruiters over the years, but Pioneering are in a different league. They don't just send CVs - they provide genuine insights about how candidates will fit our culture and challenges.",
      rating: 5,
      result: "3 successful placements in 6 months"
    },
    {
      name: "Michael Roberts",
      role: "Branch Manager",
      company: "Independent Merchant (Placed Candidate)",
      location: "Leicester",
      quote: "As someone who was headhunted by Pioneering, I can say their approach is refreshingly honest. They took time to understand what I wanted, not just what their client needed. 18 months later, I'm exactly where I need to be.",
      rating: 5,
      result: "Perfect cultural and role fit"
    },
    {
      name: "David Wilson",
      role: "Regional Manager",
      company: "National Merchant Chain",
      location: "Manchester",
      quote: "The difference with Pioneering is they speak our language. When they recommended candidates, they could explain exactly why they'd succeed in our environment. Their industry knowledge is unmatched.",
      rating: 5,
      result: "96% retention rate across all placements"
    },
    {
      name: "Lisa Parker",
      role: "Finance Director",
      company: "Parker Building Supplies",
      location: "Nottingham",
      quote: "Finding a Finance Director who understands merchants is incredibly difficult. Pioneering found us someone who grasped our seasonal cash flow challenges immediately. They saved us months of unsuccessful interviews.",
      rating: 5,
      result: "Finance Director - perfect fit first time"
    },
    {
      name: "Andrew Clarke",
      role: "Owner",
      company: "Clarke Brothers Merchants",
      location: "Derby",
      quote: "We're a family business and culture is everything. Pioneering didn't just find us someone with the right skills - they found someone who genuinely fits our values. That's the difference between good and exceptional recruitment.",
      rating: 5,
      result: "Branch Manager - still with us 3 years later"
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "4.9/5", label: "Average Client Rating" },  
    { value: "95%", label: "Would Recommend Us" },
    { value: "24", label: "Average NPS Score" }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold text-sm mb-6">
            <Star className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-4xl font-bold text-dark-gray mb-4">
            What Our Clients Say About{" "}
            <span className="gradient-text">Our Results</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Don't just take our word for it - hear from the merchants, directors, and candidates who've experienced our industry-leading service
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card p-8 rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="text-brand-orange h-8 w-8 mb-4 opacity-50" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-brand-gray mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Result highlight */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                <p className="text-green-800 font-semibold text-sm">
                  Result: {testimonial.result}
                </p>
              </div>

              {/* Author info */}
              <div className="border-t pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center">
                    <User className="text-white h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-dark-gray">{testimonial.name}</h4>
                    <p className="text-sm text-brand-gray font-medium">{testimonial.role}</p>
                    <div className="flex items-center text-xs text-brand-gray-light mt-1">
                      <Building2 className="h-3 w-3 mr-1" />
                      <span className="mr-2">{testimonial.company}</span>
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-white rounded-2xl p-12 shadow-premium animate-fadeInUp">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark-gray mb-2">
              Client Satisfaction Metrics
            </h3>
            <p className="text-brand-gray">
              Independently verified results from our client feedback surveys
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold brand-orange mb-2 stats-number">{stat.value}</div>
                <p className="text-brand-gray font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center animate-fadeInUp animate-delay-500">
          <div className="bg-dark-gray rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you find your next exceptional team member. 
              Initial consultation is always complimentary.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-premium"
            >
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Shield, CheckCircle, Clock, RefreshCw, Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-orange bg-opacity-10 rounded-full mb-6">
            <Shield className="h-12 w-12 text-brand-orange" />
          </div>
          <h2 className="text-4xl font-bold text-dark-gray mb-4">100% Money Back Guarantee</h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            We're so confident in our builders merchant headhunting expertise that we offer a comprehensive money-back guarantee. If you don't see measurable improvements in your hiring process within 90 days, we'll refund your investment completely.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow border-2 border-green-100">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">90-Day Trial Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-gray mb-4">
                Full 90 days to experience our complete suite of builders merchant headhunting solutions and see real results.
              </p>
              <ul className="text-sm text-brand-gray space-y-2">
                <li>• Complete headhunting process evaluation</li>
                <li>• Multiple placement opportunities</li>
                <li>• Full access to our expertise and networks</li>
                <li>• Regular performance reviews</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-2 border-blue-100">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Measurable Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-gray mb-4">
                If you don't see improved hiring speed, candidate quality, or ROI within the trial period, get your money back.
              </p>
              <ul className="text-sm text-brand-gray space-y-2">
                <li>• Faster time-to-hire metrics</li>
                <li>• Higher quality candidate matches</li>
                <li>• Improved retention rates</li>
                <li>• Better cultural fit assessments</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-2 border-brand-orange border-opacity-30">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange bg-opacity-10 rounded-full mx-auto mb-4">
                <RefreshCw className="h-8 w-8 text-brand-orange" />
              </div>
              <CardTitle className="text-xl">No Questions Asked</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-gray mb-4">
                Simple, straightforward refund process with no complicated terms or conditions. Your satisfaction is guaranteed.
              </p>
              <ul className="text-sm text-brand-gray space-y-2">
                <li>• Hassle-free refund process</li>
                <li>• No hidden terms or conditions</li>
                <li>• Full refund within 14 days of request</li>
                <li>• Maintain professional relationships</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Why We Offer This Guarantee */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-dark-gray mb-6 text-center">Why We Can Offer This Guarantee</h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold text-dark-gray mb-4">Our Track Record Speaks for Itself</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-brand-orange mr-3" />
                  <div>
                    <div className="font-bold text-dark-gray">96% Success Rate</div>
                    <div className="text-sm text-brand-gray">Successful placements that pass probation period</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <div className="font-bold text-dark-gray">3 Week Average</div>
                    <div className="text-sm text-brand-gray">Time from brief to successful placement</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-bold text-dark-gray">98% Client Satisfaction</div>
                    <div className="text-sm text-brand-gray">Based on post-placement surveys</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-dark-gray mb-4">What Makes Us Confident</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-brand-gray">15+ years exclusive builders merchant focus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-brand-gray">Former industry professionals on our team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-brand-gray">Deep understanding of your business challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-brand-gray">Extensive network of pre-qualified candidates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-brand-gray">Rigorous assessment and matching process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-brand-orange bg-opacity-10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-gray mb-4">Ready to Experience Risk-Free Recruitment?</h3>
            <p className="text-brand-gray mb-6">
              Start your partnership with complete confidence. Our 90-day money-back guarantee means you have nothing to lose and everything to gain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-orange hover:bg-orange-600 text-white">
                Start Your Risk-Free Trial
              </Button>
              <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                Learn More About Our Guarantee
              </Button>
            </div>
            <p className="text-xs text-brand-gray mt-4">
              * Full terms and conditions available. Guarantee applies to initial 90-day service period.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
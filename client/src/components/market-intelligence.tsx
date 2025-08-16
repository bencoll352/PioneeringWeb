import { TrendingUp, Eye, BarChart3, MapPin, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MarketIntelligence() {
  return (
    <section id="intelligence" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Market Intelligence & Competition Analysis</h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Stay ahead with comprehensive market insights and competitive intelligence across the UK builders merchant sector
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <img
            src="/attached_assets/OIP_1753124510433.webp"
            alt="Builders merchant professional working in timber warehouse - the type of talent we headhunt"
            className="rounded-xl shadow-lg w-full h-auto"
          />
          
          <div>
            <h3 className="text-2xl font-bold text-dark-gray mb-6">Real-Time Industry Intelligence</h3>
            <p className="text-brand-gray mb-8">
              Our market intelligence services provide you with the data-driven insights needed to make strategic headhunting decisions and stay ahead of competitors in the UK builders merchant market. We know where the best talent is and how to attract them.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-brand-orange">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="h-5 w-5 text-brand-orange mr-2" />
                    Market Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-brand-gray">
                    <li>• Real-time salary benchmarking (£)</li>
                    <li>• Industry trend analysis</li>
                    <li>• Skill demand forecasting</li>
                    <li>• Geographic talent mapping (UK)</li>
                    <li>• Market opportunity identification</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-brand-orange">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Eye className="h-5 w-5 text-brand-orange mr-2" />
                    Competition Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-brand-gray">
                    <li>• Competitor headhunting patterns</li>
                    <li>• Executive search strategies</li>
                    <li>• Compensation benchmarking (£)</li>
                    <li>• Target candidate mapping</li>
                    <li>• Strategic headhunting recommendations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Intelligence Dashboard */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-dark-gray mb-8 text-center">Current UK Builders Merchant Market Intelligence</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-brand-orange mx-auto mb-4" />
              <h4 className="text-xl font-bold text-dark-gray mb-2">Salary Trends</h4>
              <p className="text-3xl font-bold brand-orange mb-2">+8.5%</p>
              <p className="text-brand-gray">Average salary increase across UK builders merchants this year</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-12 w-12 text-brand-orange mx-auto mb-4" />
              <h4 className="text-xl font-bold text-dark-gray mb-2">Talent Hotspots</h4>
              <p className="text-3xl font-bold brand-orange mb-2">12</p>
              <p className="text-brand-gray">Key UK regions with highest builders merchant talent concentration</p>
            </div>
            
            <div className="text-center">
              <Target className="h-12 w-12 text-brand-orange mx-auto mb-4" />
              <h4 className="text-xl font-bold text-dark-gray mb-2">Skills Gap</h4>
              <p className="text-3xl font-bold brand-orange mb-2">67%</p>
              <p className="text-brand-gray">Of UK merchants report difficulty finding qualified branch managers</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Most In-Demand Roles (Q4 2024)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Branch Managers</span>
                    <span className="font-bold text-red-600">Critical Shortage</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Yard Supervisors</span>
                    <span className="font-bold text-orange-600">High Demand</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Trade Counter Staff</span>
                    <span className="font-bold text-orange-600">High Demand</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Category Managers</span>
                    <span className="font-bold text-yellow-600">Moderate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Average Salary Ranges (UK £)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Managing Director</span>
                    <span className="font-bold text-dark-gray">£80k - £120k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Branch Manager</span>
                    <span className="font-bold text-dark-gray">£35k - £55k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Yard Supervisor</span>
                    <span className="font-bold text-dark-gray">£28k - £38k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Trade Counter</span>
                    <span className="font-bold text-dark-gray">£22k - £32k</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-brand-orange hover:bg-orange-600 text-white">
              Request Detailed Market Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
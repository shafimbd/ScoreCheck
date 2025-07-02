import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Database, Shield, Zap, BarChart3, Users, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Machine learning algorithms trained on millions of credit profiles for accurate risk assessment.",
    benefits: ["95% prediction accuracy", "Continuous model improvement", "Bias-free decisions"],
  },
  {
    icon: Database,
    title: "Multi-Source Data Integration",
    description: "Comprehensive data from traditional and alternative sources for complete borrower profiles.",
    benefits: ["Bank statements", "Utility payments", "Social media insights"],
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Instant credit decisions with sub-second API response times for seamless user experience.",
    benefits: ["< 500ms response time", "24/7 availability", "Auto-scaling infrastructure"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance with global standards.",
    benefits: ["SOC 2 Type II certified", "GDPR compliant", "256-bit encryption"],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards and reporting tools for portfolio management and insights.",
    benefits: ["Real-time dashboards", "Custom reports", "Predictive analytics"],
  },
  {
    icon: Users,
    title: "Easy Integration",
    description: "Simple REST API integration with comprehensive documentation and developer support.",
    benefits: ["RESTful API", "SDK libraries", "24/7 developer support"],
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern Lending</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive AI platform provides everything you need to make accurate, fast, and compliant credit
            decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform Performance</h3>
            <p className="text-gray-600">Real metrics from our production environment</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">450ms</div>
              <div className="text-sm text-gray-600">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">10M+</div>
              <div className="text-sm text-gray-600">Assessments Processed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

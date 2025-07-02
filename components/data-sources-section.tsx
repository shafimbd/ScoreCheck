import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Upload, Brain, BarChart3, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Submit Application",
    description: "Upload applicant data through our secure API or dashboard interface",
    details: ["Personal information", "Financial documents", "Business details", "Custom data fields"],
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our advanced AI models analyze 50+ data sources in real-time",
    details: ["Credit bureau data", "Banking transactions", "Alternative data", "Risk pattern recognition"],
  },
  {
    icon: BarChart3,
    title: "Generate Insights",
    description: "Comprehensive risk assessment with detailed analytics and scoring",
    details: ["Credit score calculation", "Risk categorization", "Fraud detection", "Predictive analytics"],
  },
  {
    icon: CheckCircle,
    title: "Instant Decision",
    description: "Receive actionable recommendations within seconds",
    details: ["Approve/Decline recommendation", "Risk level assessment", "Confidence score", "Detailed reporting"],
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How ScoreCheck.AI Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process delivers accurate credit assessments in seconds, not days.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-gray-200 h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center justify-center">
                          <div className="w-1 h-1 bg-emerald-600 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-emerald-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">&lt;30s</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">99.9%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                <div className="text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

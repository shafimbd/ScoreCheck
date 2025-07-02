import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Data Collection",
    description:
      "Securely gather data from multiple verified sources including banks, government agencies, and alternative data providers.",
    details: [
      "Bank statements and transaction history",
      "Government ID verification",
      "Utility and telecom payment records",
      "Employment and income verification",
    ],
  },
  {
    step: "02",
    title: "AI Analysis",
    description:
      "Our advanced machine learning models analyze patterns, behaviors, and risk indicators across all data points.",
    details: [
      "Pattern recognition algorithms",
      "Behavioral analysis models",
      "Risk scoring calculations",
      "Fraud detection systems",
    ],
  },
  {
    step: "03",
    title: "Risk Assessment",
    description:
      "Generate comprehensive credit scores and risk profiles with detailed explanations and confidence levels.",
    details: [
      "Multi-dimensional risk scoring",
      "Probability of default calculation",
      "Recommendation engine",
      "Compliance checking",
    ],
  },
  {
    step: "04",
    title: "Decision Support",
    description:
      "Provide actionable insights and recommendations to support your lending decisions with full audit trails.",
    details: [
      "Automated decision recommendations",
      "Detailed risk explanations",
      "Audit trail documentation",
      "Regulatory compliance reports",
    ],
  },
]

export function DataSourcesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How ScoreCheck.AI Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive 4-step process ensures accurate, fast, and compliant credit assessments for every
            applicant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-lg font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && index % 2 === 0 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-emerald-200 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Integration Partners */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Verified Data Sources</h3>
            <p className="text-gray-600">We integrate with trusted data providers for comprehensive coverage</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">BB</span>
              </div>
              <h4 className="font-semibold text-gray-900">Banking Data</h4>
              <p className="text-sm text-gray-600">Transaction history & account info</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold text-lg">GOV</span>
              </div>
              <h4 className="font-semibold text-gray-900">Government</h4>
              <p className="text-sm text-gray-600">ID verification & tax records</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold text-lg">ALT</span>
              </div>
              <h4 className="font-semibold text-gray-900">Alternative</h4>
              <p className="text-sm text-gray-600">Utility bills & telecom data</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold text-lg">SOC</span>
              </div>
              <h4 className="font-semibold text-gray-900">Social</h4>
              <p className="text-sm text-gray-600">Digital footprint analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

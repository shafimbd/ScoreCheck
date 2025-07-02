import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Database, Cpu, CheckCircle, BarChart } from "lucide-react"

const steps = [
  {
    icon: Database,
    title: "Data Integration",
    description:
      "Connect to 50+ verified data sources including credit bureaus, banks, and alternative data providers.",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description: "Our advanced machine learning models analyze patterns and assess creditworthiness in real-time.",
  },
  {
    icon: CheckCircle,
    title: "Decision Engine",
    description: "Get instant credit decisions with confidence scores and detailed risk assessments.",
  },
  {
    icon: BarChart,
    title: "Insights & Analytics",
    description: "Access comprehensive reporting and analytics to optimize your lending strategies.",
  },
]

export function DataSourcesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How ScoreCheck.AI Works</h2>
          <p className="text-xl text-gray-600">
            Our streamlined process transforms complex credit assessment into simple, accurate decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">{step.description}</CardDescription>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-emerald-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, Shield, Users } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "40% Higher Approval Rates",
    description: "Identify creditworthy customers that traditional scoring methods miss",
    metric: "40%",
  },
  {
    icon: Clock,
    title: "90% Faster Decisions",
    description: "Reduce processing time from days to seconds with automated assessments",
    metric: "90%",
  },
  {
    icon: Shield,
    title: "60% Lower Default Rates",
    description: "Advanced AI models significantly improve risk prediction accuracy",
    metric: "60%",
  },
  {
    icon: Users,
    title: "2M+ Assessments Daily",
    description: "Trusted by leading financial institutions worldwide",
    metric: "2M+",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Measurable Business Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See real results with our AI-powered credit assessment platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

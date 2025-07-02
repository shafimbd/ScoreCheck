import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Clock, Target, DollarSign, Users, Shield } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "40% Faster Decisions",
    description: "Reduce processing time from days to minutes with automated AI-powered assessments.",
    metric: "40%",
    metricLabel: "Faster Processing",
  },
  {
    icon: Target,
    title: "25% Higher Approval Rates",
    description: "Identify creditworthy applicants that traditional models miss with alternative data insights.",
    metric: "25%",
    metricLabel: "More Approvals",
  },
  {
    icon: DollarSign,
    title: "60% Reduction in Defaults",
    description: "Advanced risk modeling significantly reduces default rates and improves portfolio performance.",
    metric: "60%",
    metricLabel: "Fewer Defaults",
  },
  {
    icon: Users,
    title: "Expand Market Reach",
    description: "Serve previously underbanked populations with inclusive credit models and alternative data.",
    metric: "3x",
    metricLabel: "Market Expansion",
  },
  {
    icon: Clock,
    title: "Real-time Processing",
    description: "Get instant credit decisions with our 50ms API response time and 99.9% uptime SLA.",
    metric: "50ms",
    metricLabel: "Response Time",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Built-in compliance features ensure adherence to FCRA, GDPR, and other regulations.",
    metric: "100%",
    metricLabel: "Compliant",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Measurable Business Impact</h2>
          <p className="text-xl text-gray-600">
            See real results with our AI-powered credit assessment platform trusted by 500+ financial institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-bl-full"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">{benefit.metric}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{benefit.metricLabel}</div>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

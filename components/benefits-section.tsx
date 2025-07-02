import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, Shield, Users, DollarSign, Target } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Approval Rates",
    metric: "35%",
    description: "Higher approval rates through comprehensive alternative data analysis",
    details: "Identify creditworthy applicants that traditional scoring might miss",
    color: "emerald",
  },
  {
    icon: Clock,
    title: "Reduce Processing Time",
    metric: "90%",
    description: "Faster decision-making with automated AI-powered assessments",
    details: "From hours to minutes with real-time API responses",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Lower Default Rates",
    metric: "25%",
    description: "More accurate risk prediction reduces portfolio defaults",
    details: "Advanced ML models identify high-risk patterns early",
    color: "purple",
  },
  {
    icon: DollarSign,
    title: "Reduce Operational Costs",
    metric: "60%",
    description: "Automated processes eliminate manual review overhead",
    details: "Streamlined workflows and reduced staffing requirements",
    color: "orange",
  },
  {
    icon: Users,
    title: "Improve Customer Experience",
    metric: "4.8/5",
    description: "Faster approvals and transparent processes delight customers",
    details: "Real-time decisions and clear communication",
    color: "pink",
  },
  {
    icon: Target,
    title: "Enhance Compliance",
    metric: "100%",
    description: "Built-in regulatory compliance and audit trail capabilities",
    details: "Automated compliance checking and documentation",
    color: "indigo",
  },
]

const colorClasses = {
  emerald: "bg-emerald-100 text-emerald-600 border-emerald-200",
  blue: "bg-blue-100 text-blue-600 border-blue-200",
  purple: "bg-purple-100 text-purple-600 border-purple-200",
  orange: "bg-orange-100 text-orange-600 border-orange-200",
  pink: "bg-pink-100 text-pink-600 border-pink-200",
  indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
}

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-emerald-100 text-emerald-800">
            Proven Results
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Measurable Business Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how financial institutions are transforming their lending operations and achieving remarkable results
            with ScoreCheck.AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-lg ${colorClasses[benefit.color]}`}
                  >
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className="text-2xl font-bold px-3 py-1">
                    {benefit.metric}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-3 text-base leading-relaxed">
                  {benefit.description}
                </CardDescription>
                <p className="text-sm text-gray-500 italic">{benefit.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Calculate Your ROI</h3>
            <p className="text-emerald-100">See how much you could save with ScoreCheck.AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">$2.5M</div>
              <div className="text-emerald-100">Average Annual Savings</div>
              <div className="text-sm text-emerald-200 mt-1">For mid-size lenders</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6 Months</div>
              <div className="text-emerald-100">Typical Payback Period</div>
              <div className="text-sm text-emerald-200 mt-1">Full implementation ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">400%</div>
              <div className="text-emerald-100">Average ROI</div>
              <div className="text-sm text-emerald-200 mt-1">Within first year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

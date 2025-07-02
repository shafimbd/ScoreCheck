import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Database, Zap, Shield, BarChart3, Clock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description:
      "Machine learning algorithms trained on millions of credit decisions for superior accuracy and risk assessment.",
  },
  {
    icon: Database,
    title: "50+ Data Sources",
    description:
      "Integrate verified data from credit bureaus, banks, utilities, telecom, and alternative data providers.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Get instant credit decisions with sub-second response times through our optimized infrastructure.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SOC 2 compliance, and comprehensive audit trails for complete data protection.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Advanced risk modeling and predictive insights to optimize your lending portfolio performance.",
  },
  {
    icon: Clock,
    title: "Automated Workflows",
    description: "Streamline your entire credit assessment process with intelligent automation and custom rules.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern Lending</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to make smarter credit decisions faster, backed by cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

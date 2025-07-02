import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, Shield, BarChart3, Globe, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description:
      "Proprietary machine learning algorithms trained on millions of credit decisions for superior accuracy.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Get credit decisions in under 50ms with our high-performance API infrastructure.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 Type II certification and end-to-end encryption.",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Analytics",
    description: "Deep insights into your lending portfolio with customizable dashboards and reporting.",
  },
  {
    icon: Globe,
    title: "50+ Data Sources",
    description: "Access verified data from credit bureaus, banks, utilities, and alternative sources.",
  },
  {
    icon: Users,
    title: "Inclusive Lending",
    description: "Expand access to credit for underserved populations with alternative data insights.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern Lending</h2>
          <p className="text-xl text-gray-600">
            Everything you need to transform your credit assessment process with cutting-edge AI technology.
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

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small lenders and credit unions",
    features: [
      "Up to 1,000 assessments/month",
      "Basic AI scoring models",
      "10 data source integrations",
      "Email support",
      "Standard API access",
      "Basic reporting dashboard",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Ideal for growing financial institutions",
    features: [
      "Up to 10,000 assessments/month",
      "Advanced AI scoring models",
      "25 data source integrations",
      "Priority support",
      "Full API access",
      "Advanced analytics",
      "Custom risk models",
      "White-label options",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale operations",
    features: [
      "Unlimited assessments",
      "Custom AI model training",
      "50+ data source integrations",
      "24/7 dedicated support",
      "Enterprise API",
      "Advanced compliance tools",
      "Custom integrations",
      "On-premise deployment",
      "SLA guarantees",
    ],
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core AI assessment engine and security
              features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-emerald-500 shadow-lg scale-105" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-emerald-600 hover:bg-emerald-700" : "bg-gray-900 hover:bg-gray-800"}`}
                    size="lg"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">All plans include a 30-day free trial. No setup fees.</p>
            <p className="text-sm text-gray-500">
              Need a custom solution?{" "}
              <a href="/contact" className="text-emerald-600 hover:underline">
                Contact our sales team
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

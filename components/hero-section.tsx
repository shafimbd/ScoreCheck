import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Shield, Zap } from "lucide-react"

const trustIndicators = [
  { icon: Users, text: "500+ Financial Institutions" },
  { icon: Shield, text: "SOC 2 Type II Certified" },
  { icon: Zap, text: "99.9% Uptime SLA" },
]

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Announcement Badge */}
          <div className="mb-8">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2">
              <Star className="h-4 w-4 mr-2 fill-current" />
              New: Real-time API with 50ms response time
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Credit Decisions with{" "}
            <span className="text-emerald-600 relative">
              AI Intelligence
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200"
                viewBox="0 0 100 12"
                fill="currentColor"
              >
                <path d="M0 8c30-4 70-4 100 0v4H0z" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access 50+ verified data sources and advanced machine learning to make faster, more accurate, and more
            inclusive lending decisions.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
              <span className="font-medium">40% faster decisions</span>
            </div>
            <div className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
              <span className="font-medium">25% higher approval rates</span>
            </div>
            <div className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
              <span className="font-medium">60% reduction in defaults</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/demo">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                Schedule Free Demo
              </Button>
            </Link>
            <Link href="/api-docs">
              <Button size="lg" variant="outline" className="border-gray-300 px-8 py-4 text-lg bg-transparent">
                View API Docs
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2">
                <indicator.icon className="h-5 w-5 text-emerald-600" />
                <span className="font-medium">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

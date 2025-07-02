import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-emerald-100 text-emerald-800 border-emerald-200">
            AI-Powered Credit Assessment
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionize Credit Decisions with <span className="text-emerald-600">AI Intelligence</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Make faster, more accurate credit assessments by integrating 50+ verified data sources with advanced AI
            algorithms. Reduce risk, increase approvals, and streamline your lending process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
              Schedule Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
              99.9% Uptime SLA
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
              GDPR Ready
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
              Bank-Grade Security
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

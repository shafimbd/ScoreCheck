import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Zap, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-16 pb-20 sm:pt-24 sm:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            🚀 Now Available: Real-time Credit Assessment API
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            AI-Powered Credit Assessment for <span className="text-emerald-600">Financial Institutions</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl max-w-3xl mx-auto">
            Transform your lending decisions with our advanced AI platform that analyzes multiple data sources to
            provide accurate, real-time credit assessments. Reduce risk, increase approvals, and accelerate your lending
            process.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/demo">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                Schedule Free Demo
              </Button>
            </Link>
            <Link href="/api-docs">
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
                View API Docs
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-2">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">99.9% Uptime</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-2">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">Bank-Grade Security</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-2">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">Sub-second Response</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-2">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">95% Accuracy</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">Trusted by leading financial institutions</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <span className="text-lg font-semibold text-gray-400">BRAC Bank</span>
              <span className="text-lg font-semibold text-gray-400">City Bank</span>
              <span className="text-lg font-semibold text-gray-400">Dutch-Bangla Bank</span>
              <span className="text-lg font-semibold text-gray-400">Eastern Bank</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

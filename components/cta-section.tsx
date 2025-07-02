import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Calendar } from "lucide-react"

const ctaFeatures = [
  "Free 30-day trial with full API access",
  "Dedicated implementation support",
  "Custom integration assistance",
  "24/7 technical support included",
]

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Lending Process?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 50+ financial institutions already using ScoreCheck.AI to make smarter, faster, and more accurate
            credit decisions.
          </p>

          {/* CTA Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {ctaFeatures.map((feature, index) => (
              <div key={index} className="flex items-center text-emerald-100">
                <CheckCircle className="w-5 h-5 text-emerald-300 mr-3 flex-shrink-0" />
                <span className="text-left">{feature}</span>
              </div>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk to Sales
              </Button>
            </Link>
          </div>

          {/* Secondary CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">View API Docs</h3>
                <p className="text-emerald-100 text-sm mb-4">
                  Explore our comprehensive API documentation and integration guides.
                </p>
                <Link href="/api-docs">
                  <Button variant="ghost" className="text-white hover:bg-white/20 w-full">
                    Explore API
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">View Pricing</h3>
                <p className="text-emerald-100 text-sm mb-4">
                  Transparent pricing with no hidden fees. Start free, scale as you grow.
                </p>
                <Link href="/pricing">
                  <Button variant="ghost" className="text-white hover:bg-white/20 w-full">
                    See Pricing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Learn More</h3>
                <p className="text-emerald-100 text-sm mb-4">
                  Read our latest insights on AI-powered lending and credit assessment.
                </p>
                <Link href="/blog">
                  <Button variant="ghost" className="text-white hover:bg-white/20 w-full">
                    Read Blog
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-emerald-200 text-sm mb-4">Trusted by leading financial institutions</p>
            <div className="flex items-center justify-center space-x-8 opacity-70">
              <span className="text-white font-semibold">BRAC Bank</span>
              <span className="text-white font-semibold">City Bank</span>
              <span className="text-white font-semibold">Dutch-Bangla Bank</span>
              <span className="text-white font-semibold">Eastern Bank</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

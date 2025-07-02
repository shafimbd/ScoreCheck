import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, MessageCircle, FileText } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Credit Decisions?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join 500+ financial institutions already using ScoreCheck.AI to make faster, more accurate lending
            decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Schedule Demo */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule a Demo</h3>
              <p className="text-gray-600 mb-6">
                See ScoreCheck.AI in action with a personalized demo tailored to your use case.
              </p>
              <Link href="/demo">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Book Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Contact Sales */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Talk to Sales</h3>
              <p className="text-gray-600 mb-6">
                Discuss your specific requirements with our credit assessment experts.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 bg-transparent">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* API Documentation */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Explore API</h3>
              <p className="text-gray-600 mb-6">Review our comprehensive API documentation and integration guides.</p>
              <Link href="/api-docs">
                <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 bg-transparent">
                  View Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-white/80 mb-4">
            Start your free trial today • No credit card required • 30-day money-back guarantee
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

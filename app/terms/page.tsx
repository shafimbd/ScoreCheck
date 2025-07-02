import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-xl text-gray-600">Last updated: January 1, 2024</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using ScoreCheck.AI's services, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                <p className="text-gray-600 mb-4">
                  ScoreCheck.AI provides AI-powered credit assessment services through our platform and API. Our
                  services include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Credit scoring and risk assessment</li>
                  <li>Data integration from multiple verified sources</li>
                  <li>API access for integration</li>
                  <li>Analytics and reporting tools</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the service in compliance with applicable laws</li>
                  <li>Not attempt to reverse engineer or compromise our systems</li>
                  <li>Respect rate limits and usage guidelines</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Usage and Privacy</h2>
                <p className="text-gray-600 mb-4">
                  Your use of our services is also governed by our Privacy Policy. We are committed to protecting your
                  data and maintaining compliance with applicable data protection regulations including GDPR and CCPA.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Availability</h2>
                <p className="text-gray-600 mb-4">
                  We strive to maintain high availability of our services but cannot guarantee uninterrupted access. We
                  provide a 99.9% uptime SLA for our paid plans and will provide service credits for any downtime that
                  exceeds this threshold.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  ScoreCheck.AI shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible
                  losses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-600 mb-4">
                  Either party may terminate this agreement at any time. Upon termination, your access to the service
                  will be discontinued, and any outstanding fees will become immediately due and payable.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes
                  via email or through our platform. Continued use of the service after such modifications constitutes
                  acceptance of the updated terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-600">For questions about these Terms of Service, please contact us at:</p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Email: legal@scorecheck.ai
                    <br />
                    Address: 123 Financial District, New York, NY 10004
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

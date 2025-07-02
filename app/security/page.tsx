import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, FileCheck, Server, Users } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
  },
  {
    icon: Lock,
    title: "Access Controls",
    description: "Multi-factor authentication, role-based access controls, and regular access reviews.",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "24/7 security monitoring with real-time threat detection and incident response.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "SOC 2 Type II, GDPR, CCPA, and PCI DSS compliant infrastructure and processes.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Secure cloud infrastructure with regular penetration testing and vulnerability assessments.",
  },
  {
    icon: Users,
    title: "Privacy by Design",
    description: "Data minimization, purpose limitation, and privacy-preserving AI techniques.",
  },
]

const certifications = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "ISO 27001", status: "In Progress" },
  { name: "PCI DSS", status: "Certified" },
  { name: "GDPR", status: "Compliant" },
  { name: "CCPA", status: "Compliant" },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Security & Compliance</h1>
              <p className="text-xl text-gray-600">
                Your data security is our top priority. Learn about our comprehensive security measures.
              </p>
            </div>

            {/* Security Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {securityFeatures.map((feature, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardHeader>
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications & Compliance</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                      <Badge
                        variant={cert.status === "Certified" || cert.status === "Compliant" ? "default" : "secondary"}
                        className={cert.status === "Certified" || cert.status === "Compliant" ? "bg-emerald-600" : ""}
                      >
                        {cert.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Security Practices */}
            <section className="mb-16">
              <div className="grid lg:grid-cols-2 gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Data Protection</CardTitle>
                    <CardDescription>How we protect your sensitive information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Encryption</h4>
                      <p className="text-gray-600 text-sm">
                        All data is encrypted using industry-standard AES-256 encryption at rest and TLS 1.3 in transit.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Data Segregation</h4>
                      <p className="text-gray-600 text-sm">
                        Customer data is logically separated and isolated using secure multi-tenancy architecture.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Backup & Recovery</h4>
                      <p className="text-gray-600 text-sm">
                        Automated backups with point-in-time recovery and disaster recovery procedures.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Access Security</CardTitle>
                    <CardDescription>Controlling who can access your data</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Authentication</h4>
                      <p className="text-gray-600 text-sm">
                        Multi-factor authentication required for all user accounts and administrative access.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Authorization</h4>
                      <p className="text-gray-600 text-sm">
                        Role-based access controls with principle of least privilege enforcement.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Audit Logging</h4>
                      <p className="text-gray-600 text-sm">
                        Comprehensive audit trails for all system access and data operations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Incident Response */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Incident Response</CardTitle>
                  <CardDescription>Our approach to security incidents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-red-600 font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Detection</h4>
                      <p className="text-gray-600 text-sm">24/7 monitoring detects potential security incidents</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-yellow-600 font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Response</h4>
                      <p className="text-gray-600 text-sm">Immediate containment and assessment of the incident</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                      <p className="text-gray-600 text-sm">Transparent communication with affected customers</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-emerald-600 font-bold">4</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Recovery</h4>
                      <p className="text-gray-600 text-sm">Full system recovery and post-incident analysis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

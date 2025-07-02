import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Heart, Zap, Trophy } from "lucide-react"

const openPositions = [
  {
    title: "Senior Machine Learning Engineer",
    department: "Engineering",
    location: "New York, NY / Remote",
    type: "Full-time",
    description:
      "Build and optimize AI models for credit assessment. Work with large-scale data processing and model deployment.",
  },
  {
    title: "Product Manager - AI/ML",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Drive product strategy for our AI-powered credit assessment platform. Work closely with engineering and data science teams.",
  },
  {
    title: "Data Scientist",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
    description:
      "Develop predictive models and analyze alternative data sources to improve credit assessment accuracy.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "New York, NY / Remote",
    type: "Full-time",
    description: "Manage cloud infrastructure, CI/CD pipelines, and ensure high availability of our platform.",
  },
  {
    title: "Sales Development Representative",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
    description: "Generate and qualify leads for our enterprise sales team. Focus on financial services sector.",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance plus wellness stipend",
  },
  {
    icon: Zap,
    title: "Growth & Learning",
    description: "Annual learning budget, conference attendance, and internal mentorship programs",
  },
  {
    icon: Users,
    title: "Work-Life Balance",
    description: "Flexible working hours, unlimited PTO, and remote work options",
  },
  {
    icon: Trophy,
    title: "Equity & Compensation",
    description: "Competitive salary, equity package, and performance bonuses",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h1>
              <p className="text-xl text-gray-600">Help us transform the future of credit assessment with AI</p>
            </div>

            {/* Company Culture */}
            <section className="mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why ScoreCheck.AI?</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We're building the future of credit assessment, making lending more accessible and fair through
                    cutting-edge AI technology. Join a team of passionate experts who are revolutionizing financial
                    services.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-gray-600">Work on technology that impacts millions of lives</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-gray-600">Collaborate with industry-leading experts</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-gray-600">Shape the future of AI in financial services</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-emerald-50 rounded-lg">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                    <div className="text-gray-600">Team Members</div>
                  </div>
                  <div className="text-center p-6 bg-emerald-50 rounded-lg">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">$50M</div>
                    <div className="text-gray-600">Series B Funding</div>
                  </div>
                  <div className="text-center p-6 bg-emerald-50 rounded-lg">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                    <div className="text-gray-600">Customers</div>
                  </div>
                  <div className="text-center p-6 bg-emerald-50 rounded-lg">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">4.8★</div>
                    <div className="text-gray-600">Glassdoor Rating</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits & Perks</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-gray-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Open Positions */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-xl text-gray-900 mb-2">{position.title}</CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {position.department}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {position.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {position.type}
                            </div>
                          </div>
                        </div>
                        <Button className="bg-emerald-600 hover:bg-emerald-700 mt-4 md:mt-0">Apply Now</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{position.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Don't see a role that fits? We're always looking for talented people.
                </p>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                >
                  Send Us Your Resume
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

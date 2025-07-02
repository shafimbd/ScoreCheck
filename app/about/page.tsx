import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Globe } from "lucide-react"

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Former VP of Risk at Goldman Sachs with 15+ years in financial services and AI.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Dr. Michael Chen",
    role: "CTO & Co-Founder",
    bio: "PhD in Machine Learning from MIT, former Principal Scientist at Google AI.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    bio: "Product leader with experience at Stripe and Square, expert in fintech UX.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "David Kim",
    role: "Head of Data Science",
    bio: "Former quantitative researcher at Two Sigma, specialist in credit risk modeling.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    description:
      "We're committed to providing the most accurate credit assessments through cutting-edge AI technology.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Our customers' success is our success. We build lasting partnerships with financial institutions.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We continuously push the boundaries of what's possible in credit assessment technology.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Making credit more accessible and fair for people and businesses worldwide.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transforming Credit Assessment with AI
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded in 2021, ScoreCheck.AI was born from the vision to make credit decisions faster, more accurate,
                and more inclusive through the power of artificial intelligence and comprehensive data integration.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
                To democratize access to credit by providing financial institutions with AI-powered tools that make more
                accurate, fair, and inclusive lending decisions while reducing risk and operational costs.
              </p>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50M+</div>
                  <div className="text-gray-600">Credit Assessments Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                  <div className="text-gray-600">Financial Institutions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">40%</div>
                  <div className="text-gray-600">Average Approval Rate Increase</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-gray-200">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600">Meet the experts behind ScoreCheck.AI</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-gray-200">
                  <CardContent className="p-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

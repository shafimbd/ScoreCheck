import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Chief Risk Officer",
    company: "BRAC Bank",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "ScoreCheck.AI has revolutionized our lending process. We've seen a 40% increase in approval rates while maintaining our risk standards. The AI insights are incredibly accurate.",
    metrics: "40% ↑ Approvals, 25% ↓ Defaults",
  },
  {
    name: "Mohammad Rahman",
    role: "Head of Digital Banking",
    company: "City Bank Limited",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "The integration was seamless and the results immediate. Our customers love the instant decisions, and we've reduced processing costs by 60%.",
    metrics: "60% ↓ Processing Costs",
  },
  {
    name: "Dr. Fatima Khan",
    role: "VP of Credit Operations",
    company: "Dutch-Bangla Bank",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "The alternative data insights have been game-changing. We're now able to serve previously underbanked customers with confidence.",
    metrics: "35% New Customer Segment",
  },
  {
    name: "Rashid Hassan",
    role: "Senior Credit Manager",
    company: "Eastern Bank",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "ScoreCheck.AI's compliance features give us peace of mind. The audit trails and regulatory reporting have simplified our compliance processes significantly.",
    metrics: "100% Compliance Score",
  },
  {
    name: "Nasreen Sultana",
    role: "Director of Risk Management",
    company: "Mutual Trust Bank",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "The real-time API responses have transformed our customer experience. What used to take days now happens in seconds.",
    metrics: "< 500ms Response Time",
  },
  {
    name: "Ahmed Karim",
    role: "Chief Technology Officer",
    company: "Prime Bank",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    quote:
      "The technical integration was smooth, and the ongoing support has been exceptional. Our development team was up and running in just two weeks.",
    metrics: "2 Week Implementation",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-emerald-100 text-emerald-800">
            Customer Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Financial Institutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their experience with ScoreCheck.AI and the results they've
            achieved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-emerald-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                {/* Metrics */}
                <div className="mb-6">
                  <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">
                    {testimonial.metrics}
                  </Badge>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-emerald-100 text-emerald-600">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm font-medium text-emerald-600">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">Aggregate results from our customer base</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Financial Institutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

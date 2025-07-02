import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Chief Risk Officer",
    company: "Metro Bank",
    image: "/placeholder.svg?height=64&width=64",
    rating: 5,
    quote:
      "ScoreCheck.AI transformed our lending process. We've seen a 40% increase in approval rates while maintaining our risk standards. The alternative data insights are game-changing.",
  },
  {
    name: "Michael Chen",
    role: "VP of Digital Lending",
    company: "First National Credit Union",
    image: "/placeholder.svg?height=64&width=64",
    rating: 5,
    quote:
      "The real-time API integration was seamless. We're now processing loan applications in minutes instead of days, and our customers love the instant decisions.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Underwriting",
    company: "Community Financial Services",
    image: "/placeholder.svg?height=64&width=64",
    rating: 5,
    quote:
      "The inclusive lending capabilities have allowed us to serve previously underbanked communities. We've expanded our market reach by 300% while reducing defaults.",
  },
  {
    name: "David Kim",
    role: "Chief Technology Officer",
    company: "Regional Trust Bank",
    image: "/placeholder.svg?height=64&width=64",
    rating: 5,
    quote:
      "The security and compliance features give us complete confidence. SOC 2 certification and bank-grade encryption ensure our data is always protected.",
  },
  {
    name: "Lisa Thompson",
    role: "Director of Analytics",
    company: "Progressive Lending Corp",
    image: "/placeholder.svg?height=64&width=64",
    rating: 5,
    quote:
      "The analytics dashboard provides incredible insights into our portfolio performance. We can now make data-driven decisions to optimize our lending strategies.",
  },
  {
    name: "James Wilson",
    role: "Senior Vice President",
    company: "Heritage Credit Solutions",
    image: "/placeholder.svg?height=64&width=64",
    rating: 5,
    quote:
      "Implementation was smooth and the support team is exceptional. The 99.9% uptime SLA gives us the reliability we need for our high-volume operations.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Financial Institutions
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers say about transforming their lending operations with ScoreCheck.AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-emerald-200" />
                  <CardDescription className="text-gray-700 leading-relaxed italic pl-6">
                    "{testimonial.quote}"
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-gray-900">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm font-medium text-emerald-600">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of Credit Assessment: How AI is Transforming Lending",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way financial institutions assess creditworthiness and make lending decisions.",
    author: "Sarah Johnson",
    authorRole: "CEO",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Industry Insights",
    slug: "future-of-credit-assessment-ai",
  },
  {
    title: "Alternative Data Sources: Beyond Traditional Credit Scores",
    excerpt:
      "Discover how alternative data sources like utility bills, rental history, and digital footprints are providing new insights into creditworthiness.",
    author: "Dr. Michael Chen",
    authorRole: "CTO",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Technology",
    slug: "alternative-data-sources-credit",
  },
  {
    title: "Regulatory Compliance in AI-Powered Lending",
    excerpt:
      "Understanding the regulatory landscape and ensuring compliance when implementing AI-driven credit assessment solutions.",
    author: "Emily Rodriguez",
    authorRole: "Head of Product",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Compliance",
    slug: "regulatory-compliance-ai-lending",
  },
  {
    title: "Case Study: 40% Increase in Approval Rates with ScoreCheck.AI",
    excerpt:
      "Learn how Metro Bank achieved significant improvements in their lending process while maintaining risk standards.",
    author: "David Kim",
    authorRole: "Head of Data Science",
    date: "2023-12-28",
    readTime: "4 min read",
    category: "Case Study",
    slug: "metro-bank-case-study",
  },
  {
    title: "Building Inclusive Credit Models with AI",
    excerpt:
      "How machine learning can help create more inclusive lending practices and expand access to credit for underserved populations.",
    author: "Sarah Johnson",
    authorRole: "CEO",
    date: "2023-12-20",
    readTime: "8 min read",
    category: "Social Impact",
    slug: "inclusive-credit-models-ai",
  },
  {
    title: "API Integration Best Practices for Credit Assessment",
    excerpt:
      "Technical guide for developers on integrating ScoreCheck.AI's API into existing lending workflows and systems.",
    author: "Dr. Michael Chen",
    authorRole: "CTO",
    date: "2023-12-15",
    readTime: "10 min read",
    category: "Technical",
    slug: "api-integration-best-practices",
  },
]

const categories = ["All", "Industry Insights", "Technology", "Compliance", "Case Study", "Social Impact", "Technical"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ScoreCheck.AI Blog</h1>
              <p className="text-xl text-gray-600">
                Insights, updates, and thought leadership on AI-powered credit assessment
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "secondary"}
                  className={`cursor-pointer ${category === "All" ? "bg-emerald-600" : "hover:bg-gray-200"}`}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight hover:text-emerald-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt={post.author} />
                          <AvatarFallback>
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author}</div>
                          <div className="text-xs text-gray-500">{post.authorRole}</div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-4"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16">
              <Card className="bg-emerald-50 border-emerald-200">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
                  <p className="text-gray-600 mb-6">
                    Subscribe to our newsletter for the latest insights on AI-powered credit assessment
                  </p>
                  <div className="flex max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-r-lg hover:bg-emerald-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

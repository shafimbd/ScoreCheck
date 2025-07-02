import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const benefits = ["30-day free trial", "No setup fees", "24/7 support", "Cancel anytime"]

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Image
                  src="/images/scorecheck-logo.png"
                  alt="ScoreCheck.AI Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-2xl font-bold text-gray-900">ScoreCheck.AI</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Start Your Free Trial</h1>
              <p className="text-gray-600">Get started with ScoreCheck.AI today. No credit card required.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Create Your Account</CardTitle>
                    <CardDescription>Fill out the form below to get started with your free trial</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your Company" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ceo">CEO/President</SelectItem>
                          <SelectItem value="cto">CTO/Technology Leader</SelectItem>
                          <SelectItem value="risk">Risk Manager</SelectItem>
                          <SelectItem value="lending">Lending Officer</SelectItem>
                          <SelectItem value="analyst">Data Analyst</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companySize">Company Size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="rounded" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-emerald-600 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-emerald-600 hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>

                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Free Trial</Button>

                    <Separator />

                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-emerald-600 hover:underline">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">What's included:</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-emerald-600 mr-3" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Need help?</h3>
                    <p className="text-gray-600 text-sm mb-4">Our team is here to help you get started.</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Schedule Demo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

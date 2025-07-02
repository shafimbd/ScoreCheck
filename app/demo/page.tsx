import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Users, Video } from "lucide-react"

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Schedule Your Demo</h1>
              <p className="text-xl text-gray-600">
                See ScoreCheck.AI in action with a personalized demo tailored to your needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Demo Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Demo</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll schedule a personalized demo for you.
                  </CardDescription>
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time.toLowerCase().replace(/[:\s]/g, "")}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">What are you most interested in?</Label>
                    <Textarea
                      id="interests"
                      placeholder="Tell us about your specific needs and what you'd like to see in the demo..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Schedule Demo</Button>
                </CardContent>
              </Card>

              {/* Demo Information */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Video className="h-6 w-6 text-emerald-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">What to Expect</h3>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Live demonstration of ScoreCheck.AI platform</li>
                          <li>• Customized use cases for your industry</li>
                          <li>• Q&A session with our experts</li>
                          <li>• Discussion of integration options</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-emerald-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                        <p className="text-gray-600 text-sm">30-45 minutes including Q&A</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Users className="h-6 w-6 text-emerald-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Who Should Attend</h3>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Risk managers</li>
                          <li>• Lending officers</li>
                          <li>• Technology leaders</li>
                          <li>• Data analysts</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Calendar className="h-6 w-6 text-emerald-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Available Times</h3>
                        <p className="text-gray-600 text-sm">
                          Monday - Friday
                          <br />
                          9:00 AM - 5:00 PM EST
                        </p>
                      </div>
                    </div>
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

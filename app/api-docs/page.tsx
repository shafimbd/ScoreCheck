import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Key, Zap, Shield } from "lucide-react"

const endpoints = [
  {
    method: "POST",
    endpoint: "/v1/assess",
    description: "Submit a credit assessment request",
    parameters: [
      { name: "applicant_id", type: "string", required: true, description: "Unique identifier for the applicant" },
      { name: "data_sources", type: "array", required: false, description: "Specific data sources to include" },
      {
        name: "model_type",
        type: "string",
        required: false,
        description: "AI model to use (standard, advanced, custom)",
      },
    ],
  },
  {
    method: "GET",
    endpoint: "/v1/assess/{id}",
    description: "Retrieve assessment results",
    parameters: [
      { name: "id", type: "string", required: true, description: "Assessment ID returned from POST request" },
    ],
  },
  {
    method: "GET",
    endpoint: "/v1/data-sources",
    description: "List available data sources",
    parameters: [],
  },
]

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">API Documentation</h1>
              <p className="text-xl text-gray-600">
                Integrate ScoreCheck.AI into your applications with our powerful REST API.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">RESTful API</h3>
                  <p className="text-gray-600 text-sm">Simple HTTP requests with JSON responses</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Real-time</h3>
                  <p className="text-gray-600 text-sm">Sub-second response times</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
                  <p className="text-gray-600 text-sm">OAuth 2.0 and API key authentication</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Key className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Rate Limited</h3>
                  <p className="text-gray-600 text-sm">Fair usage policies</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="quickstart" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
                <TabsTrigger value="authentication">Authentication</TabsTrigger>
                <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                <TabsTrigger value="examples">Examples</TabsTrigger>
              </TabsList>

              <TabsContent value="quickstart" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>Follow these steps to start using the ScoreCheck.AI API</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold">Get API Key</h4>
                          <p className="text-gray-600 text-sm">
                            Sign up for an account and generate your API key from the dashboard.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold">Make Your First Request</h4>
                          <p className="text-gray-600 text-sm">
                            Use our REST API to submit your first credit assessment.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold">Integrate</h4>
                          <p className="text-gray-600 text-sm">Integrate the API into your application workflow.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Base URL</h4>
                      <code className="text-sm bg-white px-2 py-1 rounded">https://api.scorecheck.ai</code>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="authentication" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Authentication</CardTitle>
                    <CardDescription>ScoreCheck.AI uses API keys for authentication</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Header Authentication</h4>
                      <pre className="text-sm bg-white p-3 rounded border overflow-x-auto">
                        {`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
                      </pre>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Security Note</h4>
                      <p className="text-yellow-700 text-sm">
                        Keep your API keys secure and never expose them in client-side code.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="endpoints" className="space-y-6">
                {endpoints.map((endpoint, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Badge variant={endpoint.method === "POST" ? "default" : "secondary"}>{endpoint.method}</Badge>
                        <code className="text-lg font-mono">{endpoint.endpoint}</code>
                      </div>
                      <CardDescription>{endpoint.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {endpoint.parameters.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-3">Parameters</h4>
                          <div className="space-y-2">
                            {endpoint.parameters.map((param, paramIndex) => (
                              <div key={paramIndex} className="flex items-start space-x-3 text-sm">
                                <code className="bg-gray-100 px-2 py-1 rounded">{param.name}</code>
                                <Badge variant="outline" className="text-xs">
                                  {param.type}
                                </Badge>
                                {param.required && (
                                  <Badge variant="destructive" className="text-xs">
                                    Required
                                  </Badge>
                                )}
                                <span className="text-gray-600">{param.description}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="examples" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Example Request</CardTitle>
                    <CardDescription>Submit a credit assessment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto">
                      {`curl -X POST https://api.scorecheck.ai/v1/assess \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "applicant_id": "12345",
    "data_sources": ["credit_bureau", "bank_statements", "utility_bills"],
    "model_type": "advanced"
  }'`}
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Example Response</CardTitle>
                    <CardDescription>Assessment result</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto">
                      {`{
  "assessment_id": "assess_abc123",
  "applicant_id": "12345",
  "score": 742,
  "risk_level": "low",
  "recommendation": "approve",
  "confidence": 0.94,
  "data_sources_used": [
    "credit_bureau",
    "bank_statements",
    "utility_bills"
  ],
  "created_at": "2024-01-15T10:30:00Z"
}`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Get API Key</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

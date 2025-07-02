import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus } from "lucide-react"

// This would typically come from a CMS or database
const blogPosts = {
  "future-of-credit-assessment": {
    title: "The Future of Credit Assessment: How AI is Transforming Lending",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the lending industry and what it means for financial institutions.",
    content: `
      <p>The lending industry is undergoing a dramatic transformation, driven by advances in artificial intelligence and machine learning. Traditional credit assessment methods, while reliable, are increasingly being supplemented—and in some cases replaced—by AI-powered solutions that offer greater accuracy, speed, and inclusivity.</p>

      <h2>The Evolution of Credit Assessment</h2>
      <p>For decades, credit assessment has relied primarily on traditional metrics: credit scores, income verification, employment history, and debt-to-income ratios. While these factors remain important, they paint an incomplete picture of a borrower's creditworthiness.</p>

      <p>AI-powered credit assessment platforms like ScoreCheck.AI are changing this paradigm by:</p>
      <ul>
        <li><strong>Analyzing alternative data sources:</strong> Utility payments, rental history, mobile phone usage patterns, and even social media activity can provide insights into financial behavior.</li>
        <li><strong>Processing vast amounts of data:</strong> Machine learning algorithms can analyze thousands of data points simultaneously, identifying patterns that human underwriters might miss.</li>
        <li><strong>Providing real-time decisions:</strong> What once took days or weeks can now be accomplished in seconds or minutes.</li>
        <li><strong>Reducing bias:</strong> AI models, when properly designed, can help eliminate human bias in lending decisions.</li>
      </ul>

      <h2>Benefits for Financial Institutions</h2>
      <p>The adoption of AI in credit assessment offers numerous advantages for lenders:</p>

      <h3>Increased Approval Rates</h3>
      <p>By analyzing alternative data sources, AI can identify creditworthy borrowers who might be rejected by traditional scoring methods. This is particularly beneficial for serving the underbanked population and expanding market reach.</p>

      <h3>Reduced Default Rates</h3>
      <p>Advanced machine learning models can identify subtle patterns and risk indicators that traditional methods miss, leading to more accurate risk assessment and lower default rates.</p>

      <h3>Operational Efficiency</h3>
      <p>Automated decision-making reduces the need for manual review, significantly cutting processing time and operational costs while improving customer experience.</p>

      <h2>The Role of Alternative Data</h2>
      <p>One of the most significant advantages of AI-powered credit assessment is its ability to incorporate alternative data sources:</p>

      <ul>
        <li><strong>Utility and Telecom Payments:</strong> Consistent payment of utility bills and phone services indicates financial responsibility.</li>
        <li><strong>Banking Transaction Data:</strong> Spending patterns, income regularity, and account management behavior provide deep insights into financial health.</li>
        <li><strong>Digital Footprint:</strong> Online behavior, app usage, and digital engagement can reveal lifestyle patterns relevant to creditworthiness.</li>
        <li><strong>Geolocation Data:</strong> Location patterns can indicate employment stability and lifestyle consistency.</li>
      </ul>

      <h2>Challenges and Considerations</h2>
      <p>While AI offers tremendous benefits, financial institutions must navigate several challenges:</p>

      <h3>Regulatory Compliance</h3>
      <p>AI models must comply with fair lending laws and regulations. Institutions need to ensure their models don't discriminate against protected classes and can provide clear explanations for credit decisions.</p>

      <h3>Data Privacy and Security</h3>
      <p>The use of alternative data raises privacy concerns. Institutions must implement robust data protection measures and ensure compliance with data privacy regulations.</p>

      <h3>Model Interpretability</h3>
      <p>Regulators and consumers increasingly demand transparency in AI decision-making. Financial institutions need AI solutions that can provide clear explanations for their decisions.</p>

      <h2>The Future Landscape</h2>
      <p>Looking ahead, we can expect several trends to shape the future of AI-powered credit assessment:</p>

      <ul>
        <li><strong>Real-time Risk Monitoring:</strong> AI will enable continuous monitoring of borrower risk throughout the loan lifecycle, not just at origination.</li>
        <li><strong>Personalized Lending:</strong> AI will enable more personalized loan products and terms based on individual risk profiles and preferences.</li>
        <li><strong>Open Banking Integration:</strong> As open banking initiatives expand globally, AI will have access to even richer financial data for assessment.</li>
        <li><strong>Blockchain Integration:</strong> Blockchain technology may provide secure, verifiable data sources for AI models.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The future of credit assessment is undoubtedly AI-powered. Financial institutions that embrace these technologies now will be better positioned to serve their customers, manage risk, and compete in an increasingly digital marketplace.</p>

      <p>At ScoreCheck.AI, we're committed to helping financial institutions navigate this transformation with cutting-edge AI solutions that are accurate, compliant, and transparent. The future of lending is here, and it's powered by artificial intelligence.</p>
    `,
    author: {
      name: "Dr. Sarah Ahmed",
      role: "Chief Data Scientist",
      avatar: "/placeholder-user.jpg",
    },
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    category: "AI & Technology",
    tags: ["AI", "Credit Assessment", "Machine Learning", "Fintech"],
  },
  "alternative-data-sources": {
    title: "Alternative Data Sources: Beyond Traditional Credit Scores",
    excerpt:
      "Discover how alternative data is revolutionizing credit assessment and enabling financial inclusion for underserved populations.",
    content: `
      <p>Traditional credit scoring has long been the cornerstone of lending decisions, but it's increasingly clear that credit scores alone don't tell the complete story of a borrower's creditworthiness. Alternative data sources are opening new possibilities for more accurate, inclusive, and comprehensive credit assessment.</p>

      <h2>The Limitations of Traditional Credit Scoring</h2>
      <p>Traditional credit scores, while valuable, have several limitations:</p>
      <ul>
        <li><strong>Limited Population Coverage:</strong> Millions of people have thin or no credit files, making them "credit invisible."</li>
        <li><strong>Backward-Looking:</strong> Credit scores reflect past behavior but may not predict future performance accurately.</li>
        <li><strong>Narrow Data Sources:</strong> They rely primarily on credit account information, missing other indicators of financial responsibility.</li>
        <li><strong>Slow to Update:</strong> Credit scores can take time to reflect recent changes in financial behavior.</li>
      </ul>

      <h2>The Power of Alternative Data</h2>
      <p>Alternative data encompasses any information not traditionally used in credit scoring that can provide insights into creditworthiness. This data can be categorized into several types:</p>

      <h3>Financial Alternative Data</h3>
      <ul>
        <li><strong>Bank Account Data:</strong> Transaction history, account balances, and cash flow patterns</li>
        <li><strong>Utility Payments:</strong> Electricity, water, gas, and internet bill payment history</li>
        <li><strong>Telecom Data:</strong> Mobile phone and internet service payment records</li>
        <li><strong>Rent Payments:</strong> Rental payment history and housing stability</li>
      </ul>

      <h3>Behavioral and Digital Data</h3>
      <ul>
        <li><strong>E-commerce Activity:</strong> Online shopping patterns and payment behavior</li>
        <li><strong>Digital Footprint:</strong> Social media activity and online presence</li>
        <li><strong>App Usage:</strong> Financial app usage patterns and engagement</li>
        <li><strong>Device and Location Data:</strong> Smartphone usage patterns and location stability</li>
      </ul>

      <h3>Professional and Educational Data</h3>
      <ul>
        <li><strong>Employment History:</strong> Job stability and career progression</li>
        <li><strong>Education Records:</strong> Educational background and achievements</li>
        <li><strong>Professional Licenses:</strong> Industry certifications and professional standing</li>
      </ul>

      <h2>Benefits of Alternative Data in Credit Assessment</h2>

      <h3>Enhanced Financial Inclusion</h3>
      <p>Alternative data enables lenders to assess borrowers who lack traditional credit history, including:</p>
      <ul>
        <li>Young adults just starting their financial journey</li>
        <li>Immigrants with limited U.S. credit history</li>
        <li>Individuals who primarily use cash or debit cards</li>
        <li>Small business owners with personal and business finances intertwined</li>
      </ul>

      <h3>Improved Risk Assessment</h3>
      <p>By incorporating multiple data sources, lenders can:</p>
      <ul>
        <li>Identify patterns not visible in traditional credit data</li>
        <li>Detect early warning signs of financial distress</li>
        <li>Better predict future payment behavior</li>
        <li>Reduce false positives and negatives in credit decisions</li>
      </ul>

      <h3>Real-Time Insights</h3>
      <p>Many alternative data sources provide real-time or near-real-time information, enabling:</p>
      <ul>
        <li>Faster credit decisions</li>
        <li>Dynamic risk monitoring throughout the loan lifecycle</li>
        <li>Proactive intervention for at-risk borrowers</li>
      </ul>

      <h2>Implementation Challenges and Solutions</h2>

      <h3>Data Quality and Standardization</h3>
      <p><strong>Challenge:</strong> Alternative data sources vary in quality, format, and reliability.</p>
      <p><strong>Solution:</strong> Implement robust data validation, cleansing, and standardization processes. Use multiple data sources to cross-validate information.</p>

      <h3>Privacy and Consent</h3>
      <p><strong>Challenge:</strong> Using personal data raises privacy concerns and requires proper consent mechanisms.</p>
      <p><strong>Solution:</strong> Implement transparent consent processes, provide clear data usage explanations, and ensure compliance with privacy regulations like GDPR and CCPA.</p>

      <h3>Regulatory Compliance</h3>
      <p><strong>Challenge:</strong> Alternative data use must comply with fair lending laws and anti-discrimination regulations.</p>
      <p><strong>Solution:</strong> Regular model testing for bias, documentation of data sources and decision logic, and ongoing compliance monitoring.</p>

      <h2>Case Studies: Alternative Data in Action</h2>

      <h3>Case Study 1: Utility Payment History</h3>
      <p>A regional bank implemented utility payment data in their credit assessment process and found that borrowers with consistent utility payments had 23% lower default rates than predicted by traditional scoring alone.</p>

      <h3>Case Study 2: Bank Transaction Analysis</h3>
      <p>A fintech lender using bank transaction data to assess cash flow patterns increased their approval rates by 35% while maintaining the same risk profile.</p>

      <h3>Case Study 3: Mobile Phone Data</h3>
      <p>A microfinance institution in emerging markets used mobile phone usage patterns to assess creditworthiness, successfully serving previously unbanked populations with a 15% lower default rate than traditional methods.</p>

      <h2>Best Practices for Alternative Data Implementation</h2>

      <h3>Start with High-Quality Data Sources</h3>
      <ul>
        <li>Partner with reputable data providers</li>
        <li>Verify data accuracy and completeness</li>
        <li>Implement data quality monitoring systems</li>
      </ul>

      <h3>Ensure Model Transparency</h3>
      <ul>
        <li>Document all data sources and their impact on decisions</li>
        <li>Provide clear explanations for credit decisions</li>
        <li>Implement model interpretability tools</li>
      </ul>

      <h3>Maintain Ethical Standards</h3>
      <ul>
        <li>Regular bias testing and mitigation</li>
        <li>Transparent communication with borrowers</li>
        <li>Respect for data privacy and security</li>
      </ul>

      <h2>The Future of Alternative Data</h2>
      <p>As technology continues to evolve, we can expect to see:</p>
      <ul>
        <li><strong>IoT Integration:</strong> Smart home devices and wearables providing lifestyle and stability indicators</li>
        <li><strong>Blockchain Verification:</strong> Immutable records of financial behavior and identity</li>
        <li><strong>AI-Generated Insights:</strong> Machine learning models creating new predictive features from raw data</li>
        <li><strong>Real-Time Scoring:</strong> Continuous credit assessment based on live data feeds</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Alternative data represents a paradigm shift in credit assessment, offering the potential for more accurate, inclusive, and fair lending decisions. While implementation challenges exist, the benefits far outweigh the costs for forward-thinking financial institutions.</p>

      <p>At ScoreCheck.AI, we specialize in helping lenders harness the power of alternative data while maintaining the highest standards of compliance, privacy, and ethical lending. The future of credit assessment is data-rich, AI-powered, and more inclusive than ever before.</p>
    `,
    author: {
      name: "Mohammad Rahman",
      role: "Head of Product",
      avatar: "/placeholder-user.jpg",
    },
    publishedAt: "2024-01-10",
    readTime: "7 min read",
    category: "Data & Analytics",
    tags: ["Alternative Data", "Credit Scoring", "Financial Inclusion", "Data Analytics"],
  },
  "regulatory-compliance-ai-lending": {
    title: "Regulatory Compliance in AI-Powered Lending: A Complete Guide",
    excerpt:
      "Navigate the complex regulatory landscape of AI-powered lending with our comprehensive guide to compliance requirements and best practices.",
    content: `
      <p>As artificial intelligence becomes increasingly prevalent in lending decisions, financial institutions must navigate a complex web of regulatory requirements. This comprehensive guide explores the key compliance considerations for AI-powered lending and provides practical strategies for maintaining regulatory compliance while leveraging AI's benefits.</p>

      <h2>The Regulatory Landscape</h2>
      <p>AI-powered lending operates within a framework of existing and emerging regulations designed to ensure fair, transparent, and responsible lending practices.</p>

      <h3>Key U.S. Regulations</h3>
      <ul>
        <li><strong>Fair Credit Reporting Act (FCRA):</strong> Governs the use of consumer credit information</li>
        <li><strong>Equal Credit Opportunity Act (ECOA):</strong> Prohibits discrimination in credit transactions</li>
        <li><strong>Fair Debt Collection Practices Act (FDCPA):</strong> Regulates debt collection practices</li>
        <li><strong>Truth in Lending Act (TILA):</strong> Requires disclosure of credit terms</li>
        <li><strong>Fair Housing Act (FHA):</strong> Prohibits discrimination in housing-related lending</li>
      </ul>

      <h3>International Considerations</h3>
      <ul>
        <li><strong>GDPR (Europe):</strong> Data protection and privacy requirements</li>
        <li><strong>PCI DSS:</strong> Payment card industry security standards</li>
        <li><strong>Basel III:</strong> International banking regulations</li>
        <li><strong>Local Banking Regulations:</strong> Country-specific requirements</li>
      </ul>

      <h2>Key Compliance Challenges in AI Lending</h2>

      <h3>Model Explainability and Transparency</h3>
      <p><strong>Challenge:</strong> AI models, particularly deep learning systems, can be "black boxes" that are difficult to interpret.</p>
      
      <p><strong>Regulatory Requirement:</strong> The ECOA requires lenders to provide specific reasons for adverse credit decisions.</p>
      
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Use interpretable machine learning models when possible</li>
        <li>Implement model explanation tools (LIME, SHAP, etc.)</li>
        <li>Maintain detailed documentation of model logic and decision factors</li>
        <li>Develop standardized adverse action reason codes</li>
      </ul>

      <h3>Bias and Discrimination Prevention</h3>
      <p><strong>Challenge:</strong> AI models can perpetuate or amplify existing biases in historical data.</p>
      
      <p><strong>Regulatory Requirement:</strong> ECOA and FHA prohibit discrimination based on protected characteristics.</p>
      
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Regular bias testing using statistical parity and equalized odds metrics</li>
        <li>Diverse training data that represents all population segments</li>
        <li>Bias mitigation techniques during model development</li>
        <li>Ongoing monitoring for disparate impact</li>
      </ul>

      <h3>Data Privacy and Security</h3>
      <p><strong>Challenge:</strong> AI models often require large amounts of personal and financial data.</p>
      
      <p><strong>Regulatory Requirements:</strong> FCRA, GDPR, and various state privacy laws govern data collection and use.</p>
      
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Implement data minimization principles</li>
        <li>Obtain proper consent for data collection and use</li>
        <li>Ensure secure data storage and transmission</li>
        <li>Provide data subject rights (access, correction, deletion)</li>
      </ul>

      <h2>Compliance Framework for AI Lending</h2>

      <h3>1. Governance and Oversight</h3>
      <p>Establish a comprehensive governance framework:</p>
      <ul>
        <li><strong>AI Ethics Committee:</strong> Cross-functional team overseeing AI initiatives</li>
        <li><strong>Model Risk Management:</strong> Formal processes for model validation and monitoring</li>
        <li><strong>Compliance Integration:</strong> Embed compliance considerations throughout the AI lifecycle</li>
        <li><strong>Regular Audits:</strong> Periodic reviews of AI systems and processes</li>
      </ul>

      <h3>2. Model Development and Validation</h3>
      <p>Implement rigorous model development practices:</p>
      <ul>
        <li><strong>Data Quality Assurance:</strong> Validate data accuracy, completeness, and representativeness</li>
        <li><strong>Feature Engineering:</strong> Ensure features don't proxy for protected characteristics</li>
        <li><strong>Model Testing:</strong> Comprehensive testing for accuracy, stability, and bias</li>
        <li><strong>Documentation:</strong> Detailed model documentation and decision rationale</li>
      </ul>

      <h3>3. Ongoing Monitoring and Maintenance</h3>
      <p>Establish continuous monitoring processes:</p>
      <ul>
        <li><strong>Performance Monitoring:</strong> Track model accuracy and stability over time</li>
        <li><strong>Bias Monitoring:</strong> Regular testing for discriminatory outcomes</li>
        <li><strong>Data Drift Detection:</strong> Monitor for changes in data patterns</li>
        <li><strong>Feedback Loops:</strong> Incorporate new data and retrain models as needed</li>
      </ul>

      <h2>Best Practices for Regulatory Compliance</h2>

      <h3>Documentation and Record Keeping</h3>
      <ul>
        <li>Maintain comprehensive model documentation</li>
        <li>Document all data sources and their validation</li>
        <li>Keep records of model decisions and their rationale</li>
        <li>Maintain audit trails for all system changes</li>
      </ul>

      <h3>Stakeholder Communication</h3>
      <ul>
        <li>Regular reporting to board and senior management</li>
        <li>Clear communication with regulators about AI initiatives</li>
        <li>Transparent disclosure to consumers about AI use</li>
        <li>Training for staff on AI and compliance requirements</li>
      </ul>

      <h3>Technology Implementation</h3>
      <ul>
        <li>Use explainable AI techniques where possible</li>
        <li>Implement robust data security measures</li>
        <li>Ensure system scalability and reliability</li>
        <li>Maintain backup and disaster recovery capabilities</li>
      </ul>

      <h2>Emerging Regulatory Trends</h2>

      <h3>Algorithmic Accountability</h3>
      <p>Regulators are increasingly focusing on algorithmic accountability, requiring:</p>
      <ul>
        <li>Regular algorithmic impact assessments</li>
        <li>Public disclosure of AI use in lending decisions</li>
        <li>Consumer rights to algorithmic decision explanations</li>
      </ul>

      <h3>AI-Specific Regulations</h3>
      <p>New regulations specifically targeting AI are emerging:</p>
      <ul>
        <li>EU AI Act: Comprehensive AI regulation framework</li>
        <li>State-level AI bills: Various U.S. states proposing AI regulations</li>
        <li>Industry-specific guidance: Regulatory agencies issuing AI-specific guidance</li>
      </ul>

      <h2>Practical Implementation Steps</h2>

      <h3>Phase 1: Assessment and Planning</h3>
      <ol>
        <li>Conduct regulatory compliance assessment</li>
        <li>Identify gaps in current processes</li>
        <li>Develop compliance roadmap</li>
        <li>Establish governance structure</li>
      </ol>

      <h3>Phase 2: System Development</h3>
      <ol>
        <li>Implement model development standards</li>
        <li>Build monitoring and reporting systems</li>
        <li>Develop documentation templates</li>
        <li>Create training programs</li>
      </ol>

      <h3>Phase 3: Deployment and Monitoring</h3>
      <ol>
        <li>Deploy AI systems with compliance controls</li>
        <li>Implement ongoing monitoring processes</li>
        <li>Conduct regular compliance reviews</li>
        <li>Maintain continuous improvement processes</li>
      </ol>

      <h2>Working with Regulators</h2>

      <h3>Proactive Engagement</h3>
      <ul>
        <li>Engage with regulators early in AI initiatives</li>
        <li>Participate in industry working groups</li>
        <li>Provide feedback on proposed regulations</li>
        <li>Share best practices with the industry</li>
      </ul>

      <h3>Examination Preparation</h3>
      <ul>
        <li>Maintain examination-ready documentation</li>
        <li>Prepare clear explanations of AI systems</li>
        <li>Demonstrate compliance monitoring processes</li>
        <li>Show evidence of bias testing and mitigation</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Regulatory compliance in AI-powered lending requires a comprehensive, proactive approach that balances innovation with responsible lending practices. By implementing robust governance frameworks, maintaining transparency, and staying ahead of regulatory developments, financial institutions can successfully leverage AI while meeting their compliance obligations.</p>

      <p>At ScoreCheck.AI, we understand the complexity of regulatory compliance in AI lending. Our platform is designed with compliance at its core, providing the transparency, documentation, and monitoring capabilities that financial institutions need to meet their regulatory obligations while benefiting from AI-powered credit assessment.</p>

      <p>The regulatory landscape will continue to evolve as AI becomes more prevalent in financial services. Institutions that invest in compliance infrastructure today will be better positioned to adapt to future regulatory changes and maintain their competitive advantage in the AI-powered lending market.</p>
    `,
    author: {
      name: "Dr. Fatima Khan",
      role: "Chief Compliance Officer",
      avatar: "/placeholder-user.jpg",
    },
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    category: "Compliance & Regulation",
    tags: ["Regulatory Compliance", "AI Ethics", "Fair Lending", "Risk Management"],
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">{post.title}</h1>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900">{post.author.name}</div>
                  <div className="text-sm text-gray-600">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none prose-emerald prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookmarkPlus className="w-4 h-4 mr-2" />
                    Bookmark
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Author Bio */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback>
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{post.author.name}</div>
                      <div className="text-sm text-gray-600">{post.author.role}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Expert in AI-powered financial solutions with over 10 years of experience in credit assessment and
                    risk management.
                  </p>
                </div>

                {/* Related Articles */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {Object.entries(blogPosts)
                      .filter(([slug]) => slug !== params.slug)
                      .slice(0, 3)
                      .map(([slug, relatedPost]) => (
                        <Link key={slug} href={`/blog/${slug}`} className="block group">
                          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <h4 className="font-medium text-gray-900 group-hover:text-emerald-600 mb-2 line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                            <div className="text-xs text-gray-500 mt-2">{relatedPost.readTime}</div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest insights on AI-powered lending delivered to your inbox.
                  </p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Subscribe to Newsletter</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

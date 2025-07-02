import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "ScoreCheck.AI - AI-Powered Credit Assessment Platform",
    template: "%s | ScoreCheck.AI",
  },
  description:
    "Transform your lending decisions with our advanced AI platform that analyzes multiple data sources to provide accurate, real-time credit assessments for financial institutions.",
  keywords: [
    "credit assessment",
    "AI lending",
    "financial technology",
    "credit scoring",
    "risk assessment",
    "Bangladesh banking",
    "fintech",
    "machine learning",
    "alternative data",
    "credit analysis",
  ],
  authors: [{ name: "ScoreCheck.AI Team" }],
  creator: "ScoreCheck.AI",
  publisher: "ScoreCheck.AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://scorecheck.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scorecheck.ai",
    title: "ScoreCheck.AI - AI-Powered Credit Assessment Platform",
    description:
      "Transform your lending decisions with our advanced AI platform that analyzes multiple data sources to provide accurate, real-time credit assessments.",
    siteName: "ScoreCheck.AI",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScoreCheck.AI - AI-Powered Credit Assessment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScoreCheck.AI - AI-Powered Credit Assessment Platform",
    description:
      "Transform your lending decisions with our advanced AI platform that analyzes multiple data sources to provide accurate, real-time credit assessments.",
    images: ["/images/twitter-image.png"],
    creator: "@scorecheckai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

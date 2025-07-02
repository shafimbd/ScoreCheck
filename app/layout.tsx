import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ScoreCheck.AI - AI-Powered Credit Assessment Platform",
  description:
    "Transform your lending decisions with advanced AI. Get faster, more accurate credit assessments using 50+ verified data sources and cutting-edge machine learning.",
  keywords: "credit assessment, AI lending, credit scoring, financial technology, risk assessment, machine learning",
  authors: [{ name: "ScoreCheck.AI" }],
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
    title: "ScoreCheck.AI - AI-Powered Credit Assessment Platform",
    description:
      "Transform your lending decisions with advanced AI. Get faster, more accurate credit assessments using 50+ verified data sources.",
    url: "https://scorecheck.ai",
    siteName: "ScoreCheck.AI",
    images: [
      {
        url: "/images/scorecheck-logo.png",
        width: 1200,
        height: 630,
        alt: "ScoreCheck.AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScoreCheck.AI - AI-Powered Credit Assessment Platform",
    description: "Transform your lending decisions with advanced AI. Get faster, more accurate credit assessments.",
    images: ["/images/scorecheck-logo.png"],
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "ScoreCheck.AI - AI-Powered Credit Assessment Platform",
    template: "%s | ScoreCheck.AI",
  },
  description:
    "Transform credit decisions with AI intelligence. Access 50+ verified data sources and advanced machine learning for faster, more accurate, and more inclusive lending decisions.",
  keywords: [
    "credit assessment",
    "AI lending",
    "machine learning",
    "credit scoring",
    "financial technology",
    "alternative data",
    "risk assessment",
    "lending platform",
  ],
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
    type: "website",
    locale: "en_US",
    url: "https://scorecheck.ai",
    title: "ScoreCheck.AI - AI-Powered Credit Assessment Platform",
    description: "Transform credit decisions with AI intelligence. Trusted by 500+ financial institutions worldwide.",
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
    description: "Transform credit decisions with AI intelligence. Trusted by 500+ financial institutions worldwide.",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#059669" />
        <meta name="msapplication-TileColor" content="#059669" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

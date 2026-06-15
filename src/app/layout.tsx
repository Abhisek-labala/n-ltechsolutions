import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "N&L Tech Solutions | Transforming Ideas Into Technology",
    template: "%s | N&L Tech Solutions",
  },
  description:
    "Enterprise software, healthcare IT, and digital transformation. We build websites, mobile apps, CRM, HRMS, HMIS, ABHA & NHCX integration solutions.",
  keywords: [
    "Website Development", "Mobile App Development", "CRM Development",
    "HRMS Development", "HMIS Development", "ABHA Integration",
    "NHCX Integration", "Healthcare IT Solutions", "Software Company India",
    "Digital Transformation", "Enterprise Software", "N&L Tech Solutions",
  ],
  authors: [{ name: "N&L Tech Solutions" }],
  creator: "N&L Tech Solutions",
  publisher: "N&L Tech Solutions",
  metadataBase: new URL("https://nltechsolutions.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nltechsolutions.in",
    siteName: "N&L Tech Solutions",
    title: "N&L Tech Solutions | Transforming Ideas Into Technology",
    description:
      "Enterprise software, healthcare IT, and digital transformation. We build websites, mobile apps, CRM, HRMS, HMIS, ABHA & NHCX integration.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "N&L Tech Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "N&L Tech Solutions | Transforming Ideas Into Technology",
    description:
      "Enterprise software, healthcare IT, and digital transformation. We build websites, mobile apps, CRM, HRMS, HMIS, ABHA & NHCX integration.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "N&L Tech Solutions",
              url: "https://nltechsolutions.in",
              description:
                "Enterprise software, healthcare IT, and digital transformation services.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-83288-26667",
                contactType: "customer service",
                email: "contact@nltechsolutions.in",
              },
              address: { "@type": "PostalAddress", addressCountry: "IN" },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

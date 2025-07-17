import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap' // Meningkatkan performa dengan font-display: swap
})

export const metadata: Metadata = {
  title: "BARGEMCU - Barcode Gempa dan Cuaca Kelurahan Beringin",
  description: "Portal informasi gempa dan cuaca terkini untuk Kelurahan Beringin, Kecamatan Medan Selayang. Dapatkan update cuaca, gempa bumi, dan peringatan dini dari BMKG.",
  keywords: "gempa, cuaca, BMKG, STMKG, Medan Selayang, Kelurahan Beringin, informasi gempa, prakiraan cuaca, peringatan dini, seismisitas, Sumatera Utara",
  authors: [{ name: "KKN STMKG Unit 1", url: "https://www.instagram.com/kknstmkg.unit1/" }],
  creator: "KKN STMKG Unit 1",
  publisher: "STMKG - Sekolah Tinggi Meteorologi Klimatologi dan Geofisika",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bargemcu.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BARGEMCU - Barcode Gempa dan Cuaca Kelurahan Beringin",
    description: "Portal informasi gempa dan cuaca terkini untuk Kelurahan Beringin, Kecamatan Medan Selayang.",
    url: "https://bargemcu.netlify.app",
    siteName: "BARGEMCU",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BARGEMCU - Barcode Gempa dan Cuaca Kelurahan Beringin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BARGEMCU - Barcode Gempa dan Cuaca Kelurahan Beringin",
    description: "Portal informasi gempa dan cuaca terkini untuk Kelurahan Beringin, Kecamatan Medan Selayang.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "weather, earthquake, information",
  verification: {
    google: "google-site-verification-code", // Perlu diganti dengan kode verifikasi Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Meta tags untuk OG Image */}
        <meta property="og:image" content="https://bargemcu.netlify.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="BARGEMCU - Barcode Gempa dan Cuaca Kelurahan Beringin" />
        <meta property="og:image:type" content="image/png" />
        
        {/* Meta tags untuk WhatsApp */}
        <meta property="og:image" content="https://bargemcu.netlify.app/og-image.png" />
        <meta property="og:image:secure_url" content="https://bargemcu.netlify.app/og-image.png" />
        
        {/* Meta tags untuk Twitter */}
        <meta name="twitter:image" content="https://bargemcu.netlify.app/og-image.png" />
        
        {/* Structured Data (JSON-LD) untuk SEO */}
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BARGEMCU - Barcode Gempa dan Cuaca",
              "url": "https://bargemcu.netlify.app/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://bargemcu.netlify.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "description": "Portal informasi gempa dan cuaca terkini untuk Kelurahan Beringin, Kecamatan Medan Selayang.",
              "publisher": {
                "@type": "Organization",
                "name": "STMKG - Sekolah Tinggi Meteorologi Klimatologi dan Geofisika",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://bargemcu.netlify.app/Logo-STMKG.png"
                }
              }
            })
          }}
        />
        
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BARGEMCU",
              "url": "https://bargemcu.netlify.app/",
              "logo": "https://bargemcu.netlify.app/og-image.png",
              "sameAs": [
                "https://www.instagram.com/kknstmkg.unit1/",
                "https://www.instagram.com/kelurahan_beringin/"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Medan Selayang",
                "addressRegion": "Sumatera Utara",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://bargemcu.netlify.app/"
              }
            })
          }}
        />
        
        <Script
          id="json-ld-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Beranda",
                  "item": "https://bargemcu.netlify.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Peta Seismisitas",
                  "item": "https://bargemcu.netlify.app/peta-seismisitas"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

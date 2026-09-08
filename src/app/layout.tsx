import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ClientHeader from "@/components/ClientHeader";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import InstagramSection from "@/components/InstagramSection";
import ErrorBoundaryWrapper from "@/components/ErrorBoundary";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";
import { Suspense } from "react";
import VisitNotifier from "@/components/VisitNotifier";
import OptionalAnalytics from "@/components/OptionalAnalytics";
import { AdminRouteCheck, PublicRouteOnly, AdminRouteOnly, CheckoutRouteOnly } from "@/components/AdminRouteCheck";
import GlobalErrorReporter from "@/components/GlobalErrorReporter";
import LiveChatWidget from "@/components/LiveChatWidget";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RoxanneJoiner - Kayaks & Paddling Gear",
  description: "Discover RoxanneJoiner, a kayak brand for life on the water. Explore kayaks and paddling gear for your next adventure.",
  keywords: "RoxanneJoiner, kayaks, kayaking, paddling, kayak accessories, paddles",
  authors: [{ name: "RoxanneJoiner" }],
  creator: "RoxanneJoiner",
  publisher: "RoxanneJoiner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://roxannejoiner.com"),
  openGraph: {
    title: "RoxanneJoiner - Kayaks & Paddling Gear",
    description: "Explore RoxanneJoiner kayaks and paddling accessories.",
    url: "https://roxannejoiner.com",
    siteName: "RoxanneJoiner",
    images: [
      {
        url: "/roxannejoiner-wave-hero.webp",
        width: 1200,
        height: 900,
        alt: "RoxanneJoiner - Kayaks for Your Next Adventure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoxanneJoiner - Kayaks & Paddling Gear",
    description: "Explore RoxanneJoiner kayaks and paddling accessories.",
    images: ["/roxannejoiner-wave-hero.webp"],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preload" href="/mainlogo.svg" as="image" type="image/svg+xml" />









      </head>
      <body suppressHydrationWarning className={`${dmSans.variable} font-sans antialiased text-[#123E52] bg-[#F7F3E8]`}>
        <GlobalErrorReporter />
        <PublicRouteOnly>
          <VisitNotifier />
        </PublicRouteOnly>
        {/* Organization Schema */}
        <AdminRouteCheck>
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "RoxanneJoiner",
                "url": "https://roxannejoiner.com",
                "logo": "https://roxannejoiner.com/mainlogo.svg",
                "description": "RoxanneJoiner - Kayaks & Paddling Gear. Discover kayaks and paddling essentials.",
                "telephone": "+18555292501",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+18555292501",
                  "contactType": "customer service",
                  "areaServed": "US"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "141 Elm St #01",
                  "addressLocality": "Marlborough",
                  "addressRegion": "MA",
                  "postalCode": "01752",
                  "addressCountry": "US"
                }
              })
            }}
          />
        </AdminRouteCheck>

        {/* WebSite Schema */}
        <AdminRouteCheck>
          <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "RoxanneJoiner",
                "url": "https://roxannejoiner.com",
                "description": "RoxanneJoiner - Kayaks & Paddling Gear.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://roxannejoiner.com/api/products/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              })
            }}
          />
        </AdminRouteCheck>

        <ErrorBoundaryWrapper>
          {/* Public website with header, footer, etc. */}
          <PublicRouteOnly>
            <div className="min-h-screen flex flex-col bg-white">
              <Suspense fallback={null}>
                <ClientHeader />
              </Suspense>
              <main className="flex-grow">
                {children}
              </main>
              <Suspense fallback={null}>
                <InstagramSection />
              </Suspense>
              <NewsletterSection />
              <div className="h-4 bg-white md:h-6" aria-hidden="true" />
              <Footer />
            </div>
            <CookieConsent />
          </PublicRouteOnly>

          {/* Checkout page - navbar only, no distractions */}
          <CheckoutRouteOnly>
            <div className="min-h-screen flex flex-col bg-[#F7F3E8]">
              <Suspense fallback={null}>
                <ClientHeader />
              </Suspense>
              <main className="flex-grow">
                {children}
              </main>
              <nav aria-label="Checkout policies" className="border-t border-[#123E52]/10 bg-white px-4 py-5 text-center text-sm text-[#123E52]">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                  <a href="/shipping-policy" className="underline underline-offset-4">Shipping</a>
                  <a href="/return-policy" className="underline underline-offset-4">Returns</a>
                  <a href="/terms" className="underline underline-offset-4">Terms</a>
                  <a href="/contact" className="underline underline-offset-4">Contact</a>
                </div>
              </nav>
            </div>
          </CheckoutRouteOnly>

          {/* Admin dashboard - clean, no public UI */}
          <AdminRouteOnly>
            {children}
          </AdminRouteOnly>
        </ErrorBoundaryWrapper>

        <AdminRouteCheck><OptionalAnalytics /></AdminRouteCheck>
        <LiveChatWidget />
      </body>
    </html>
  );
}

import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-mono" });
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import "@clerk/ui/themes/shadcn.css";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";
import Navbar from "@/components/layout/Navbar";
import { getNotifications } from "@/lib/notifications";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "FinRisk Insights",
    template: "%s | FinRisk Insights",
  },
  description: "FinRisk Insights is Mauritius's leading financial platform — live markets, FX rates, regulatory updates, research, compliance news, and finance jobs. All in one place.",
  keywords: ["Mauritius finance", "SEMDEX", "Bank of Mauritius", "FSC Mauritius", "financial intelligence", "AML", "compliance", "MUR exchange rate"],
  authors: [{ name: "FinRisk Insights" }],
  creator: "FinRisk Insights",
  metadataBase: new URL("https://finriskinsight.com"),
  verification: {
    google: "gaV2yYf5x2JY-Mmj0WEZb3QQsY1uNMgdfRJ3s8IuYqE",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://finriskinsight.com",
    siteName: "FinRisk Insights",
    title: "FinRisk Insights — The Financial Platform of Mauritius",
    description: "FinRisk Insights is Mauritius's leading financial platform — live markets, FX rates, regulatory updates, research, compliance news, and finance jobs. All in one place.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FinRisk Insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinRisk Insights — The Financial Platform of Mauritius",
    description: "FinRisk Insights is Mauritius's leading financial platform — live markets, FX rates, regulatory updates, research, compliance news, and finance jobs. All in one place.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const notifications = await getNotifications();
  return (
    <ClerkProvider appearance={{ theme: shadcn }}>
      <html lang="en">
        <body className={`bg-white text-neutral-900 ${ibmPlexMono.variable}`}>
          <Navbar notifications={notifications} />
          <main>
            {children}
          </main>
          <Footer />
          <GoogleAnalytics />
      <JsonLd />
      </body>
      </html>
    </ClerkProvider>
  );
}

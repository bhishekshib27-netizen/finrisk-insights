import "./globals.css";
import "@clerk/ui/themes/shadcn.css";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "FinRisk Insights",
    template: "%s | FinRisk Insights",
  },
  description: "The Financial Platform of Mauritius. Live markets, regulatory updates, research, and analysis.",
  keywords: ["Mauritius finance", "SEMDEX", "Bank of Mauritius", "FSC Mauritius", "financial intelligence", "AML", "compliance", "MUR exchange rate"],
  authors: [{ name: "FinRisk Insights" }],
  creator: "FinRisk Insights",
  metadataBase: new URL("https://finriskinsight.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://finriskinsight.com",
    siteName: "FinRisk Insights",
    title: "FinRisk Insights — The Financial Platform of Mauritius",
    description: "Live markets, regulatory updates, research, and financial intelligence for Mauritius.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FinRisk Insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinRisk Insights — The Financial Platform of Mauritius",
    description: "Live markets, regulatory updates, research, and financial intelligence for Mauritius.",
    images: ["/og-image.png"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{ theme: shadcn }}>
      <html lang="en">
        <body className="bg-white text-neutral-900">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

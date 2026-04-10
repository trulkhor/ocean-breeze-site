import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { localBusinessSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oceanbreezerecoveryhousing.com"),
  title: {
    default: "Ocean Breeze Recovery Housing | Men's Sober Living West Palm Beach FL",
    template: "%s | Ocean Breeze Recovery Housing",
  },
  description:
    "Men's sober living home in West Palm Beach, FL. Safe, structured, affordable recovery housing at $275/week. Live-in manager Kevin Smith, fully furnished, utilities included. Call (561) 646-7097.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ocean Breeze Recovery Housing",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ backgroundColor: "#fdf6ec", color: "#1a2e2b" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
      <GoogleAnalytics gaId="G-84D2J77CYN" />
    </html>
  );
}

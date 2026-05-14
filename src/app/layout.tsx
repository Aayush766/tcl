import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Agency & Web Development Company | The Cyber Loom",
  description:
    "The Cyber Loom is a global AI-powered growth partner helping startups and enterprises scale with high-performance technology, automation systems, premium digital experiences, and conversion-focused engineering.",
  metadataBase: new URL("https://thecyberloom.com"),
  openGraph: {
    title: "The Cyber Loom",
    description:
      "AI automation, SaaS development, SEO optimization, and enterprise software systems.",
    url: "https://thecyberloom.com",
    siteName: "The Cyber Loom",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
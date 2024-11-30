import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import "@/styles/tailwind.css";

import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { siteConfig } from "./siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tofupilot.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Manufacturing", "Tests", "Analytics"],
  authors: [
    {
      name: "TofuPilot",
      url: "https://tofupilot.com",
    },
  ],
  creator: "tofupilot",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@tofupilot",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen scroll-auto antialiased selection:bg-zinc-100 selection:text-lime-700 dark:bg-zinc-950`}
      >
        <ThemeProvider defaultTheme="dark" attribute="class">
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

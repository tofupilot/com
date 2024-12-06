import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import "@/styles/tailwind.css";

import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { defaultMetadata } from "../metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = defaultMetadata;

export default function Layout({
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

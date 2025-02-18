import "@/styles/tailwind.css";

import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { defaultMetadata } from "./(home)/metadata";
import { CSPostHogProvider } from "./components/monitoring/posthog";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = defaultMetadata;

// Empty layout for landing page + Sanity studio
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} scroll-auto antialiased`}
      suppressHydrationWarning
    >
      <CSPostHogProvider>
        <body className="min-h-screen selection:bg-zinc-100 selection:text-lime-700 dark:bg-zinc-950">
          <ThemeProvider defaultTheme="dark" attribute="class">
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </CSPostHogProvider>
    </html>
  );
}

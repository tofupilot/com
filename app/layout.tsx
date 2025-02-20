import "@/styles/tailwind.css";

import { Inter } from "next/font/google";
import { defaultMetadata } from "./(home)/metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = defaultMetadata;

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
      {children}
    </html>
  );
}

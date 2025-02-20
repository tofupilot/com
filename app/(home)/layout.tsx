import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import { CSPostHogProvider } from "../components/monitoring/posthog";
import { Navigation } from "../components/Navigation";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </ThemeProvider>
      <Toaster />
    </>
  );
}

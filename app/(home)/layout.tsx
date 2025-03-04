import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Footer from "../components/Footer";
import { Navigation } from "../components/Navigation";

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

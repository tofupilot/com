import Footer from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Analytics } from '@vercel/analytics/next';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <Analytics />
    </>
  );
}

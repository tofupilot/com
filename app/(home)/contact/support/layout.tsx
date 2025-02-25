import { defaultKeywords } from "../../metadata";

export const metadata = {
  title: "Contact Support",
  description:
    "Need help? Reach out to TofuPilot Support for assistance with troubleshooting, integration issues, or general inquiries about test system optimization.",
  keywords: [
    ...defaultKeywords,
    "support",
    "help",
    "troubleshooting",
    "technical support",
    "TofuPilot assistance",
    "test system debugging",
    "integration help",
    "manufacturing test issues",
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // same as container landing without the title and px-5
    <main
      role="main"
      className="mx-auto mt-28 animate-slide-up-fade max-w-5xl"
      style={{
        animationDuration: "600ms",
        animationFillMode: "backwards",
      }}
    >
      {children}
    </main>
  );
}

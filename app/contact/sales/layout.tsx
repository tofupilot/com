import { defaultKeywords } from "../../metadata";

export const metadata = {
  title: "Contact TofuPilot",
  description:
    "Get in touch with TofuPilot to learn more about our plans, request a demo, or explore how we can help power your factory with high-performance production test systems.",
  keywords: [
    ...defaultKeywords,
    "contact",
    "demo",
    "enterprise trial",
    "TofuPilot support",
    "factory optimization",
    "hardware quality assurance",
    "production test systems",
    "traceability",
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

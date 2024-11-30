import { defaultKeywords } from "../../metadata";

// TODO:
export const metadata = {
  title: "Pricing",
  description:
    "Find a plan to power your factory. From early-stage startups to growing enterprises, TofuPilot has you covered.",
  keywords: [
    ...defaultKeywords,
    "pricing",
    "cost",
    "business model",
    "economics",
    "free",
    "plans",
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
      className="mx-auto mt-36 animate-slide-up-fade max-w-5xl"
      style={{
        animationDuration: "600ms",
        animationFillMode: "backwards",
      }}
    >
      {children}
    </main>
  );
}

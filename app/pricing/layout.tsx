import { defaultKeywords } from "../metadata";

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
    <main className="mx-auto mt-36 max-w-6xl flex flex-col overflow-hidden">
      {children}
    </main>
  );
}

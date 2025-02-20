import { defaultKeywords, defaultOpenGraph } from "../metadata";

export const metadata = {
  title: "Pricing",
  description:
    "Find a plan to power your factory. From early-stage startups to growing enterprises, TofuPilot has you covered.",
  keywords: [
    ...defaultKeywords,
    "Pricing",
    "TofuPilot Plans",
    "Subscription Costs",
    "Business Model",
    "Manufacturing Software Pricing",
    "Free Trial",
  ],
  openGraph: {
    ...defaultOpenGraph,
    title: "Pricing - Find the Right Plan for Your Factory | TofuPilot",
    description:
      "Find a plan to power your factory. From early-stage startups to growing enterprises, TofuPilot has you covered.",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto mt-36 max-w-6xl flex flex-col">{children}</main>
  );
}

import { defaultKeywords, defaultOpenGraph } from "../metadata";

export const metadata = {
  title: "Roadmap",
  description:
    "See what’s next for TofuPilot. Track upcoming features and improvements.",
  keywords: [
    ...defaultKeywords,
    "tofupilot roadmap",
    "upcoming features",
    "product updates",
    "product roadmap",
  ],
  openGraph: {
    ...defaultOpenGraph,
    title: "TofuPilot Roadmap",
    description: "Track upcoming features and improvements for TofuPilot.",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main role="main" className="">
      {children}
    </main>
  );
}

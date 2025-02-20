import { defaultKeywords, defaultOpenGraph } from "../metadata";

export const metadata = {
  title: "Blog",
  description:
    "Thoughts on the future of hardware testing, from the people and teams creating it.",
  keywords: [
    ...defaultKeywords,
    "TofuPilot Blog",
    "Hardware Testing Insights",
    "Manufacturing Analytics",
    "Engineering Best Practices",
    "Company News",
    "Tech Updates",
  ],
  openGraph: {
    ...defaultOpenGraph,
    title: "Blog - Thoughts on the Future of Hardware Testing | TofuPilot",
    description:
      "Thoughts on the future of hardware testing, from the people and teams creating it.",
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

import { defaultKeywords, defaultOpenGraph } from "../metadata";

export const metadata = {
  title: "Newsletter",
  description:
    "Subscribe to the TofuPilot newsletter and stay updated with the latest insights, updates, and industry trends.",
  keywords: [
    ...defaultKeywords,
    "TofuPilot Newsletter",
    "Hardware Testing Insights",
    "Manufacturing Updates",
    "Industry Trends",
    "Testing Best Practices",
    "Product Updates",
  ],
  openGraph: {
    ...defaultOpenGraph,
    title: "Newsletter - Subscribe & Stay Updated | TofuPilot",
    description:
      "Subscribe to the TofuPilot newsletter and never miss an update. Get the latest industry insights, testing best practices, and product announcements.",
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

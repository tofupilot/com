import { defaultKeywords, defaultOpenGraph } from "../metadata";

export const metadata = {
  title: "Changelog",
  description:
    "Stay up to date with the latest TofuPilot features, improvements, and bug fixes. Read the changelog to see what's new.",
  keywords: [
    ...defaultKeywords,
    "TofuPilot Updates",
    "Changelog",
    "New Features",
    "Software Releases",
    "Bug Fixes",
    "Product Improvements",
  ],
  openGraph: {
    ...defaultOpenGraph,
    title: "Changelog - TofuPilot Updates & New Features",
    description:
      "Stay up to date with the latest TofuPilot features, improvements, and bug fixes. Read the changelog to see what's new.",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main role="main">{children}</main>;
}

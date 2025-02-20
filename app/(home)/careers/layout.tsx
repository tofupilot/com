import { defaultKeywords, defaultOpenGraph } from "../metadata";

export const metadata = {
  title: "Careers",
  description:
    "Join TofuPilot and help build the future of manufacturing. Explore our job openings and career opportunities.",
  keywords: [
    ...defaultKeywords,
    "TofuPilot Careers",
    "Job Openings",
    "Manufacturing Jobs",
    "Engineering Roles",
    "Software Jobs",
    "Startup Careers",
  ],
  openGraph: {
    ...defaultOpenGraph,
    title: "Careers - Join TofuPilot & Build the Future",
    description:
      "Join TofuPilot and be part of a team shaping the future of manufacturing. Check out our open roles and career opportunities.",
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

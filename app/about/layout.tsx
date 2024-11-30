import { defaultKeywords } from "../metadata";

export const metadata = {
  title: "About",
  description:
    "TofuPilot is a Swiss-based startup founded by robotics test engineers. Our mission is to help engineers build high-performance hardware test systems faster.",
  keywords: [
    ...defaultKeywords,
    "about tofupilot",
    "swiss startup",
    "tofupilot founders",
    "tofupilot team",
    "tofupilot job",
    "venture kick",
    "fondation pour l'innovation technologique",
    "innosuisse",
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main role="main" className="mx-auto mt-36 max-w-6xl">
      {children}
    </main>
  );
}

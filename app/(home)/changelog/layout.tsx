import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "A rundown of the latest TofuPilot feature releases, product enhancements, design updates, and important bug fixes.",
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
